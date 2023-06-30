var Handlebars = require("handlebars/runtime");  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['default'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "    <div class=\"row p-2\">\n      <article>\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <h2 class=\"card-title\"><a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"link") || (depth0 != null ? lookupProperty(depth0,"link") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data,"loc":{"start":{"line":64,"column":44},"end":{"line":64,"column":52}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":64,"column":54},"end":{"line":64,"column":63}}}) : helper)))
    + "</a></h2>\n            <p class=\"card-subtitle mb-2 text-muted\">\n              <small>Date: "
    + alias4(((helper = (helper = lookupProperty(helpers,"pubDate") || (depth0 != null ? lookupProperty(depth0,"pubDate") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"pubDate","hash":{},"data":data,"loc":{"start":{"line":66,"column":27},"end":{"line":66,"column":38}}}) : helper)))
    + "</small><br>\n              <small>Source: <a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"source_link") || (depth0 != null ? lookupProperty(depth0,"source_link") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"source_link","hash":{},"data":data,"loc":{"start":{"line":67,"column":38},"end":{"line":67,"column":53}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"source_title") || (depth0 != null ? lookupProperty(depth0,"source_title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"source_title","hash":{},"data":data,"loc":{"start":{"line":67,"column":55},"end":{"line":67,"column":71}}}) : helper)))
    + "</a></small>\n            </p>\n\n            "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"content") || (depth0 != null ? lookupProperty(depth0,"content") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"content","hash":{},"data":data,"loc":{"start":{"line":70,"column":12},"end":{"line":70,"column":25}}}) : helper))) != null ? stack1 : "")
    + "\n          </div>\n        </div>\n      </article>\n    </div>\n";
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "          <li><a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"link") || (depth0 != null ? lookupProperty(depth0,"link") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data,"loc":{"start":{"line":96,"column":23},"end":{"line":96,"column":31}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":96,"column":33},"end":{"line":96,"column":41}}}) : helper)))
    + "</a></li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>"
    + alias4(((helper = (helper = lookupProperty(helpers,"page_title") || (depth0 != null ? lookupProperty(depth0,"page_title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"page_title","hash":{},"data":data,"loc":{"start":{"line":8,"column":9},"end":{"line":8,"column":23}}}) : helper)))
    + "</title>\n  <meta property=\"og:title\" content=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"page_title") || (depth0 != null ? lookupProperty(depth0,"page_title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"page_title","hash":{},"data":data,"loc":{"start":{"line":9,"column":37},"end":{"line":9,"column":51}}}) : helper)))
    + "\" />\n  <meta property=\"og:description\" content=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"page_description") || (depth0 != null ? lookupProperty(depth0,"page_description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"page_description","hash":{},"data":data,"loc":{"start":{"line":10,"column":43},"end":{"line":10,"column":63}}}) : helper)))
    + "\" />\n  <meta http-equiv=\"Content-Security-Policy\" content=\"script-src https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js; style-src https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css 'sha256-G3Hryz5a3r//doprn3mQdVn71SMV/Wb1C6hMehrBGnk=';\" />\n  <link rel=\"alternate\" type=\"application/rss+xml\" title=\"Planet RSS feed\" href=\"/rss\" />\n  <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css\" rel=\"stylesheet\"\n    integrity=\"sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x\" crossorigin=\"anonymous\" />\n  <link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css\"\n    integrity=\"sha256-PDJQdTN7dolQWDASIoBVrjkuOEaI137FI15sqI3Oxu8=\" crossorigin=\"anonymous\" />\n  <style>\n    img {\n      width: 100% !important;\n      max-width:100% !important;\n      height: auto;\n    }\n    code {\n      display: block;\n      white-space: pre-wrap;\n      overflow-wrap: break-word;\n    }\n    video {\n      max-width: 100%;\n    }\n  </style>\n</head>\n\n<body>\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    <div class=\"container-fluid\">\n      <a class=\"navbar-brand\" href=\"#\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"page_title") || (depth0 != null ? lookupProperty(depth0,"page_title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"page_title","hash":{},"data":data,"loc":{"start":{"line":37,"column":39},"end":{"line":37,"column":53}}}) : helper)))
    + "</a>\n      <ul class=\"navbar-nav ms-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\" aria-current=\"page\" href=\"/rss\">\n            <i class=\"bi bi-rss\" role=\"img\" aria-label=\"RSS\"></i> RSS Feed\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\" aria-current=\"page\" href=\"https://github.com/dethos/worker-planet\">\n            <i class=\"bi bi-github\" role=\"img\" aria-label=\"GitHub\"></i> Source Code\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\" aria-current=\"page\" data-bs-toggle=\"offcanvas\" data-bs-target=\"#aboutPanel\" aria-controls=\"offcanvasRight\" href=\"#\">\n            <i class=\"bi bi-patch-question\" role=\"img\" aria-label=\"About\"></i> About\n          </a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n\n  <main class=\"container d-grid\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"items") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":59,"column":4},"end":{"line":75,"column":13}}})) != null ? stack1 : "")
    + "  </main>\n  <footer class=\"footer mt-auto py-3 bg-light\">\n    <div class=\"container-fluid\">\n      <p class=\"text-muted\">\n        <span>All rights belong to the original authors. Powered by <a href=\"https://github.com/dethos/worker-planet\">worker-planet</a>.</span>\n        <span class=\"float-end\"><a href=\"#\">Back to top</a></span>\n      </p>\n    </div>\n  </footer>\n  <div class=\"offcanvas offcanvas-end\" tabindex=\"-1\" id=\"aboutPanel\" aria-labelledby=\"aboutLabel\">\n    <div class=\"offcanvas-header\">\n      <h4 id=\"aboutLabel\">About</h4>\n      <button type=\"button\" class=\"btn-close text-reset\" data-bs-dismiss=\"offcanvas\" aria-label=\"Close\"></button>\n    </div>\n    <div class=\"offcanvas-body\">\n      <p>"
    + alias4(((helper = (helper = lookupProperty(helpers,"page_description") || (depth0 != null ? lookupProperty(depth0,"page_description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"page_description","hash":{},"data":data,"loc":{"start":{"line":91,"column":9},"end":{"line":91,"column":29}}}) : helper)))
    + "</p>\n\n      <h5>Sources</h5>\n      <ul>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"sources") : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":95,"column":8},"end":{"line":97,"column":17}}})) != null ? stack1 : "")
    + "      </ul>\n    </div>\n  </div>\n  <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js\"\n    integrity=\"sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4\" crossorigin=\"anonymous\"></script>\n</body>\n\n</html>\n";
},"useData":true});
