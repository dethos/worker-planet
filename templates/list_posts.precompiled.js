var Handlebars = require('handlebars/runtime')
var template = Handlebars.template,
  templates = (Handlebars.templates = Handlebars.templates || {})
templates['list_posts'] = template({
  '1': function(container, depth0, helpers, partials, data) {
    var stack1,
      helper,
      alias1 = depth0 != null ? depth0 : container.nullContext || {},
      alias2 = container.hooks.helperMissing,
      alias3 = 'function',
      alias4 = container.escapeExpression,
      lookupProperty =
        container.lookupProperty ||
        function(parent, propertyName) {
          if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
            return parent[propertyName]
          }
          return undefined
        }

    return (
      '    <div class="row p-2">\n      <article>\n        <div class="card">\n          <div class="card-body">\n            <h2 class="card-title"><a href="' +
      alias4(
        ((helper =
          (helper =
            lookupProperty(helpers, 'link') ||
            (depth0 != null ? lookupProperty(depth0, 'link') : depth0)) != null
            ? helper
            : alias2),
        typeof helper === alias3
          ? helper.call(alias1, {
              name: 'link',
              hash: {},
              data: data,
              loc: {
                start: { line: 35, column: 44 },
                end: { line: 35, column: 52 },
              },
            })
          : helper),
      ) +
      '">' +
      alias4(
        ((helper =
          (helper =
            lookupProperty(helpers, 'title') ||
            (depth0 != null ? lookupProperty(depth0, 'title') : depth0)) != null
            ? helper
            : alias2),
        typeof helper === alias3
          ? helper.call(alias1, {
              name: 'title',
              hash: {},
              data: data,
              loc: {
                start: { line: 35, column: 54 },
                end: { line: 35, column: 63 },
              },
            })
          : helper),
      ) +
      '</a></h2>\n            <p class="card-subtitle mb-2 text-muted">\n              <small>Date: ' +
      alias4(
        ((helper =
          (helper =
            lookupProperty(helpers, 'pubDate') ||
            (depth0 != null ? lookupProperty(depth0, 'pubDate') : depth0)) !=
          null
            ? helper
            : alias2),
        typeof helper === alias3
          ? helper.call(alias1, {
              name: 'pubDate',
              hash: {},
              data: data,
              loc: {
                start: { line: 37, column: 27 },
                end: { line: 37, column: 38 },
              },
            })
          : helper),
      ) +
      '</small><br>\n              <small>Source: <a href="' +
      alias4(
        ((helper =
          (helper =
            lookupProperty(helpers, 'source_link') ||
            (depth0 != null
              ? lookupProperty(depth0, 'source_link')
              : depth0)) != null
            ? helper
            : alias2),
        typeof helper === alias3
          ? helper.call(alias1, {
              name: 'source_link',
              hash: {},
              data: data,
              loc: {
                start: { line: 38, column: 38 },
                end: { line: 38, column: 53 },
              },
            })
          : helper),
      ) +
      '">' +
      alias4(
        ((helper =
          (helper =
            lookupProperty(helpers, 'source_title') ||
            (depth0 != null
              ? lookupProperty(depth0, 'source_title')
              : depth0)) != null
            ? helper
            : alias2),
        typeof helper === alias3
          ? helper.call(alias1, {
              name: 'source_title',
              hash: {},
              data: data,
              loc: {
                start: { line: 38, column: 55 },
                end: { line: 38, column: 71 },
              },
            })
          : helper),
      ) +
      '</a></small>\n            </p>\n\n            ' +
      ((stack1 =
        ((helper =
          (helper =
            lookupProperty(helpers, 'content') ||
            (depth0 != null ? lookupProperty(depth0, 'content') : depth0)) !=
          null
            ? helper
            : alias2),
        typeof helper === alias3
          ? helper.call(alias1, {
              name: 'content',
              hash: {},
              data: data,
              loc: {
                start: { line: 41, column: 12 },
                end: { line: 41, column: 25 },
              },
            })
          : helper)) != null
        ? stack1
        : '') +
      '\n          </div>\n        </div>\n      </article>\n    </div>\n'
    )
  },
  compiler: [8, '>= 4.3.0'],
  main: function(container, depth0, helpers, partials, data) {
    var stack1,
      helper,
      alias1 = depth0 != null ? depth0 : container.nullContext || {},
      alias2 = container.hooks.helperMissing,
      alias3 = 'function',
      alias4 = container.escapeExpression,
      lookupProperty =
        container.lookupProperty ||
        function(parent, propertyName) {
          if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
            return parent[propertyName]
          }
          return undefined
        }

    return (
      '<!DOCTYPE html>\n<html lang="en">\n\n<head>\n  <meta charset="UTF-8">\n  <meta http-equiv="X-UA-Compatible" content="IE=edge">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>' +
      alias4(
        ((helper =
          (helper =
            lookupProperty(helpers, 'page_title') ||
            (depth0 != null ? lookupProperty(depth0, 'page_title') : depth0)) !=
          null
            ? helper
            : alias2),
        typeof helper === alias3
          ? helper.call(alias1, {
              name: 'page_title',
              hash: {},
              data: data,
              loc: {
                start: { line: 8, column: 9 },
                end: { line: 8, column: 23 },
              },
            })
          : helper),
      ) +
      '</title>\n  <meta property="og:title" content="' +
      alias4(
        ((helper =
          (helper =
            lookupProperty(helpers, 'page_title') ||
            (depth0 != null ? lookupProperty(depth0, 'page_title') : depth0)) !=
          null
            ? helper
            : alias2),
        typeof helper === alias3
          ? helper.call(alias1, {
              name: 'page_title',
              hash: {},
              data: data,
              loc: {
                start: { line: 9, column: 37 },
                end: { line: 9, column: 51 },
              },
            })
          : helper),
      ) +
      '" />\n  <meta property="og:description" content="' +
      alias4(
        ((helper =
          (helper =
            lookupProperty(helpers, 'page_description') ||
            (depth0 != null
              ? lookupProperty(depth0, 'page_description')
              : depth0)) != null
            ? helper
            : alias2),
        typeof helper === alias3
          ? helper.call(alias1, {
              name: 'page_description',
              hash: {},
              data: data,
              loc: {
                start: { line: 10, column: 43 },
                end: { line: 10, column: 63 },
              },
            })
          : helper),
      ) +
      '" />\n  <link rel="alternate" type="application/rss+xml" title="Planet RSS feed" href="/rss" />\n  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"\n    integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">\n</head>\n\n<body>\n  <nav class="navbar navbar-expand-lg navbar-light bg-light">\n    <div class="container-fluid">\n      <a class="navbar-brand" href="#">' +
      alias4(
        ((helper =
          (helper =
            lookupProperty(helpers, 'page_title') ||
            (depth0 != null ? lookupProperty(depth0, 'page_title') : depth0)) !=
          null
            ? helper
            : alias2),
        typeof helper === alias3
          ? helper.call(alias1, {
              name: 'page_title',
              hash: {},
              data: data,
              loc: {
                start: { line: 19, column: 39 },
                end: { line: 19, column: 53 },
              },
            })
          : helper),
      ) +
      '</a>\n      <ul class="navbar-nav ms-auto">\n        <li class="nav-item">\n          <a class="nav-link active" aria-current="page" href="https://github.com/dethos/worker-planet">\n            Source Code\n          </a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n  <main class="container d-grid">\n' +
      ((stack1 = lookupProperty(helpers, 'each').call(
        alias1,
        depth0 != null ? lookupProperty(depth0, 'items') : depth0,
        {
          name: 'each',
          hash: {},
          fn: container.program(1, data, 0),
          inverse: container.noop,
          data: data,
          loc: {
            start: { line: 30, column: 4 },
            end: { line: 46, column: 13 },
          },
        },
      )) != null
        ? stack1
        : '') +
      '  </main>\n  <footer class="footer mt-auto py-3 bg-light">\n    <div class="container-fluid">\n      <p class="text-muted">\n        All rights belong to the original authors.\n        <a class="float-end" href="#">Back to top</a>\n      </p>\n    </div>\n  </footer>\n</body>\n\n</html>\n'
    )
  },
  useData: true,
})
