import Parser from 'rss-parser'
import { Feed } from 'feed'
import Handlebars from 'handlebars/runtime'
import template from './templates/list_posts.precompiled'

addEventListener('scheduled', event => {
  event.waitUntil(handleScheduled(event))
})

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

/**
 * Deliver aggregated content according to the formats requested
 * @param {Request} request
 */
async function handleRequest(request) {
  const cacheUrl = new URL(request.url)
  const cacheKey = new Request(cacheUrl.toString(), request)
  const cache = caches.default
  let response = await cache.match(cacheKey)
  if (response) return response

  const path = new URL(request.url).pathname

  if (path === '/') {
    let content = await WORKER_PLANET_STORE.get('html')
    response = new Response(content, {
      headers: { 'content-type': 'text/html;charset=UTF-8' },
    })
  } else if (path === '/rss') {
    let content = await WORKER_PLANET_STORE.get('rss')
    response = new Response(content, {
      headers: { 'content-type': 'application/rss+xml' }
    })
  // } else if (path === '/atom') {
  //   let content = await WORKER_PLANET_STORE.get('atom')
  //   response = new Response(content)
  } else {
    return new Response('', { status: 404 })
  }
  await cache.put(cacheKey, response.clone())
  return response
}

/**
 * Fetch all source feeds and generate the aggregated content
 *
 * TODO implement a faster way to fetch several sources
 *
 * @param {*} event
 */
async function handleScheduled(event) {
  let feeds = FEEDS.split(',')
  let content = []
  let items
  for (let url of feeds) {
    try {
      items = await fetchAndHydrate(url)
    } catch (error) {
      console.log(`Failed to fetch ${url}`)
      console.log(error)
    }
    content.push(...items)
  }

  //sort all the elements chronologically (recent first)
  content.sort((a, b) => {
    let aDate = new Date(a.isoDate)
    let bDate = new Date(b.isoDate)
    if (aDate < bDate) {
      return 1
    } else if (aDate === bDate) {
      return 0
    } else {
      return -1
    }
  })

  if (content.length > MAX_SIZE) {
    content = content.slice(0, MAX_SIZE)
  }

  // Generate feed
  let feed = createFeed(content)
  let html = createHTML(content)
  // Store
  await WORKER_PLANET_STORE.put('rss', feed.rss2())
  //await WORKER_PLANET_STORE.put('atom', feed.atom1())
  await WORKER_PLANET_STORE.put('html', html)
}

/**
 * Take a feed URL, fetch all items and attach source information
 * @param {Array} feeds
 */
async function fetchAndHydrate(feed) {
  console.log(`[fetchAndHydrate] start to fetch feed: ${feed}`)
  let resp = await fetch(feed)
  console.log(`[fetchAndHydrate] response: ${resp.status}`)
  let parser = new Parser()
  let content = await resp.text()
  let contentFeed = await parser.parseString(content)

  for (let item of contentFeed.items) {
    item.source_title = feed.source_title
    item.source_link = feed.link
  }
  console.log(
    `[fetchAndHydrate] Finished fetch feed: ${feed}. ${contentFeed.items.length} items gathered`,
  )
  return contentFeed.items
}

/**
 * Builds a feed object from the provided items
 * @param {Array} items
 */
function createFeed(items) {
  const feed = new Feed({
    title: TITLE,
    description: DESCRIPTION,
    id: 'http://example.com/', // TODO
    link: 'http://example.com/', // TODO
  })

  for (let item of items) {
    feed.addItem({
      title: item.title,
      id: item.guid,
      link: item.link,
      description: item.contentSnippet,
      content: item.content,
      author: [
        {
          name: item.creator,
          email: '',
          link: item.source_link,
        },
      ],
      contributor: [],
      date: new Date(item.isoDate),
    })
  }
  return feed
}
/**
 * Generete the HTML page with the aggregated contents
 * @param {*} items
 * @returns
 */
function createHTML(items) {
  let template = Handlebars.templates['list_posts']
  return template({ items: items, page_title: TITLE })
}
