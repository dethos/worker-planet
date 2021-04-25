# Worker-planet

This project is meant to be an easy way to aggregate in a single page content from multiple sources.
It takes a list of existing RSS feeds, aggregates their contents and displays them in chronological order.

It was inspired by other software packages such as [Planet](<https://en.wikipedia.org/wiki/Planet_(software)>) and [MoonMoon](https://moonmoon.org/) but runs on top of Cloudflare Workers instead of being deployed on your own server.

This ends up being specially useful for communities, in order to follow the work being done and published by its members. Some examples of existing "planets" (but using different software):

- https://planet.debian.org/
- https://planet.kde.org/
- https://planet.gnome.org/

**Note:** This project is still in its early days, so expect some rough edges. Any contributions are welcome.

# How to deploy

First you need to have [wrangler](https://github.com/cloudflare/wrangler) correctly setup on your machine. Then:

1. Clone this repository
2. Create a `wrangler.toml` file based on the existing `wrangler.toml.example`
3. Create KV namespaces and their ids to the `kv_namespaces` setting on `wrangler.toml`
4. Add your `account_id` and customize all the `vars` in `wrangler.toml`. `FEEDS` should be
   a string of coma separated urls, to each of the RSS/ATOM sources that will be part of your planet.
5. Run `wrangler publish`

## Customize the generated HTML

Each community has its own identity, so you should be able to easily customize the look and feel
of the generated page. To do so, before publishing you can edit the `templates/list_posts.handlebars` file.

After you should "precompile" that file using the following command:

> \$ handlebars templates/list_posts.handlebars -f templates/list_posts.precompiled.js -c handlebars/runtime

**Note:** You need to have handlebars installed "globally" for this step.
