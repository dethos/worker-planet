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
      '      <article>\n        <h2><a href="' +
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
                start: { line: 24, column: 21 },
                end: { line: 24, column: 29 },
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
                start: { line: 24, column: 31 },
                end: { line: 24, column: 40 },
              },
            })
          : helper),
      ) +
      '</a></h2>\n        <p>\n          <small>Date: ' +
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
                start: { line: 26, column: 23 },
                end: { line: 26, column: 34 },
              },
            })
          : helper),
      ) +
      '</small><br>\n          <small>Source: <a href="' +
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
                start: { line: 27, column: 34 },
                end: { line: 27, column: 49 },
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
                start: { line: 27, column: 51 },
                end: { line: 27, column: 67 },
              },
            })
          : helper),
      ) +
      '</a></small>\n        </p>\n\n        ' +
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
                start: { line: 30, column: 8 },
                end: { line: 30, column: 21 },
              },
            })
          : helper)) != null
        ? stack1
        : '') +
      '\n      </article>\n'
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
      '</title>\n  <link rel="alternate" type="application/rss+xml" title="Planet RSS feed" href="/rss" />\n  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet"\n    integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">\n</head>\n\n<body>\n  <nav class="navbar navbar-expand-lg navbar-light bg-light">\n    <div class="container">\n      <a class="navbar-brand" href="#">' +
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
                start: { line: 17, column: 39 },
                end: { line: 17, column: 53 },
              },
            })
          : helper),
      ) +
      '</a>\n    </div>\n  </nav>\n  <main class="container">\n    <div class="row">\n' +
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
            start: { line: 22, column: 6 },
            end: { line: 32, column: 15 },
          },
        },
      )) != null
        ? stack1
        : '') +
      '    </div>\n  </main>\n  <footer class="container">\n    <p>All rights belong to the respective authors.</p>\n    <p>\n      <a href="#">Back to top</a>\n    </p>\n  </footer>\n</body>\n\n</html>\n'
    )
  },
  useData: true,
})
