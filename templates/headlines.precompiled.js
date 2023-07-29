var Handlebars = require("handlebars/runtime");  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['headlines'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"isRowElemN")||(depth0 && lookupProperty(depth0,"isRowElemN"))||alias2).call(alias1,(data && lookupProperty(data,"index")),4,0,{"name":"isRowElemN","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":35,"column":8},"end":{"line":37,"column":23}}})) != null ? stack1 : "")
    + "          <article>\n            <hgroup>\n              <h3>"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":40,"column":18},"end":{"line":40,"column":27}}}) : helper)))
    + "</h2>\n              <small>"
    + alias4(((helper = (helper = lookupProperty(helpers,"formattedDate") || (depth0 != null ? lookupProperty(depth0,"formattedDate") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"formattedDate","hash":{},"data":data,"loc":{"start":{"line":41,"column":21},"end":{"line":41,"column":38}}}) : helper)))
    + "</small>\n            </hgroup>\n            <p>\n              "
    + ((stack1 = ((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":44,"column":14},"end":{"line":44,"column":31}}}) : helper))) != null ? stack1 : "")
    + "\n            </p>\n            <p>\n              <a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"link") || (depth0 != null ? lookupProperty(depth0,"link") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data,"loc":{"start":{"line":47,"column":23},"end":{"line":47,"column":31}}}) : helper)))
    + "\">More</a>\n            </p>\n          </article>\n"
    + ((stack1 = (lookupProperty(helpers,"isRowElemN")||(depth0 && lookupProperty(depth0,"isRowElemN"))||alias2).call(alias1,(data && lookupProperty(data,"index")),4,3,{"name":"isRowElemN","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":50,"column":8},"end":{"line":52,"column":23}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data) {
    return "        <div class=\"grid\">\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "        </div>\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "              <li><a href=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"link") || (depth0 != null ? lookupProperty(depth0,"link") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"link","hash":{},"data":data,"loc":{"start":{"line":72,"column":27},"end":{"line":72,"column":35}}}) : helper)))
    + "\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":72,"column":37},"end":{"line":72,"column":45}}}) : helper)))
    + "</a></li>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>"
    + alias4(((helper = (helper = lookupProperty(helpers,"page_title") || (depth0 != null ? lookupProperty(depth0,"page_title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"page_title","hash":{},"data":data,"loc":{"start":{"line":7,"column":11},"end":{"line":7,"column":25}}}) : helper)))
    + "</title>\n    <meta property=\"og:title\" content=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"page_title") || (depth0 != null ? lookupProperty(depth0,"page_title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"page_title","hash":{},"data":data,"loc":{"start":{"line":8,"column":39},"end":{"line":8,"column":53}}}) : helper)))
    + "\" />\n    <meta property=\"og:description\" content=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"page_description") || (depth0 != null ? lookupProperty(depth0,"page_description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"page_description","hash":{},"data":data,"loc":{"start":{"line":9,"column":45},"end":{"line":9,"column":65}}}) : helper)))
    + "\" />\n    <meta http-equiv=\"Content-Security-Policy\" content=\"script-src 'self' 'unsafe-hashes' 'sha256-2drSom6Fplo+OFvNUVKnb+wZyrq6v1lOEkVaexi/Fw4=' 'sha256-JeTyInHTbNelTT9AfPH8MBCkB4sU4yMQjoaIQNeLIZ8='; style-src https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css;\" />\n    <link rel=\"alternate\" type=\"application/rss+xml\" title=\"Planet RSS feed\" href=\"/rss\" />\n    <link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/@picocss/pico@1/css/pico.min.css\">\n  </head>\n  <body>\n    <nav class=\"container\">\n      <ul>\n        <li></li>\n      </ul>\n      <ul>\n        <li><a href=\"/rss\">RSS</a></li>\n        <li><a href=\"https://github.com/dethos/worker-planet\">Code</a></li>\n        <li><a href=\"#open\" onclick=\"document.getElementById('sources').setAttribute('open', '');\">Sources</a></li>\n      </ul>\n    </nav>\n    <main class=\"container-fluid\">\n      <div class=\"grid\">\n        <div class=\"container\">\n          <hgroup>\n            <h1>"
    + alias4(((helper = (helper = lookupProperty(helpers,"page_title") || (depth0 != null ? lookupProperty(depth0,"page_title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"page_title","hash":{},"data":data,"loc":{"start":{"line":29,"column":16},"end":{"line":29,"column":30}}}) : helper)))
    + "</h1>\n            <h3>"
    + alias4(((helper = (helper = lookupProperty(helpers,"page_description") || (depth0 != null ? lookupProperty(depth0,"page_description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"page_description","hash":{},"data":data,"loc":{"start":{"line":30,"column":16},"end":{"line":30,"column":36}}}) : helper)))
    + "</h3>\n          </hgroup>\n        </div>\n      </div>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"items") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":34,"column":6},"end":{"line":53,"column":15}}})) != null ? stack1 : "")
    + "    </main>\n    <footer>\n      <div class=\"container\">\n        <p>\n          All rights belong to the original authors. Powered by <a href=\"https://github.com/dethos/worker-planet\">worker-planet</a>.\n        </p>\n      </div>\n    </footer>\n    <dialog id=\"sources\">\n      <article>\n        <header>\n          <a href=\"#close\" aria-label=\"Close\" class=\"close\" onclick=\"document.getElementById('sources').removeAttribute('open');\"></a>\n          Sources\n        </header>\n        <p>The content of this page is fetched from the following sources:</p>\n        <p>\n          <ul>\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"sources") : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":71,"column":12},"end":{"line":73,"column":21}}})) != null ? stack1 : "")
    + "          </ul>\n        </p>\n      </article>\n    </dialog>\n  </body>\n</html>";
},"useData":true});
