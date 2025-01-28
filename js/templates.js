(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['albumDetails'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<div id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":8,"column":11},"end":{"line":8,"column":21}}}) : helper)))
    + "\" style=\"background-image: url('/pictures/"
    + alias4(container.lambda((depths[1] != null ? lookupProperty(depths[1],"title") : depths[1]), depth0))
    + "/"
    + alias4(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":8,"column":76},"end":{"line":8,"column":85}}}) : helper)))
    + "')\"></div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"albumDescription\">\n	<h1 style=\"text-align: center; width: 100%\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"friendlyTitle") || (depth0 != null ? lookupProperty(depth0,"friendlyTitle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"friendlyTitle","hash":{},"data":data,"loc":{"start":{"line":2,"column":45},"end":{"line":2,"column":62}}}) : helper)))
    + "</h1>\n	"
    + alias4(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":3,"column":1},"end":{"line":3,"column":16}}}) : helper)))
    + "\n</div>\n\n<div class=\"photoList\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"pictures") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":1},"end":{"line":9,"column":10}}})) != null ? stack1 : "")
    + "</div>";
},"useData":true,"useDepths":true});
templates['albums'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<div id=\""
    + alias4(((helper = (helper = lookupProperty(helpers,"index") || (data && lookupProperty(data,"index"))) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":3,"column":11},"end":{"line":3,"column":21}}}) : helper)))
    + "\" class=\"albumBlock\">\n			<div class=\"title\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"friendlyTitle") || (depth0 != null ? lookupProperty(depth0,"friendlyTitle") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"friendlyTitle","hash":{},"data":data,"loc":{"start":{"line":4,"column":22},"end":{"line":4,"column":39}}}) : helper)))
    + "</div>\n			<div class=\"description\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"description") || (depth0 != null ? lookupProperty(depth0,"description") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data,"loc":{"start":{"line":5,"column":28},"end":{"line":5,"column":43}}}) : helper)))
    + "</div>\n			<div class=\"albumDate\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"date") || (depth0 != null ? lookupProperty(depth0,"date") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data,"loc":{"start":{"line":6,"column":26},"end":{"line":6,"column":34}}}) : helper)))
    + "</div>\n			<div class=\"pictures\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(alias1,(depth0 != null ? lookupProperty(depth0,"pictures") : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":8,"column":4},"end":{"line":12,"column":13}}})) != null ? stack1 : "")
    + "			</div>\n		</div>\n";
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : (container.nullContext || {}), alias4=container.hooks.helperMissing, alias5="function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "					<a href=\"/pictures/"
    + alias2(alias1((depths[1] != null ? lookupProperty(depths[1],"title") : depths[1]), depth0))
    + "/"
    + alias2(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":9,"column":37},"end":{"line":9,"column":46}}}) : helper)))
    + "\" target=\"_blank\">\n						<img src=\"/pictures/"
    + alias2(alias1((depths[1] != null ? lookupProperty(depths[1],"title") : depths[1]), depth0))
    + "/"
    + alias2(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":10,"column":39},"end":{"line":10,"column":48}}}) : helper)))
    + "\"/>\n					</a>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"albumList\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":1},"end":{"line":15,"column":10}}})) != null ? stack1 : "")
    + "</div>\n";
},"useData":true,"useDepths":true});
templates['contact'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"contact\">\n	e-mail: <a href=\"mailto:sterre_rooijakers@hotmail.com\">sterre_rooijakkers@hotmail.com</a>\n</div>\n\n<div class=\"lastPhotoContact\" style=\"background-image: url('"
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"currentImage") || (depth0 != null ? lookupProperty(depth0,"currentImage") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"currentImage","hash":{},"data":data,"loc":{"start":{"line":5,"column":60},"end":{"line":5,"column":76}}}) : helper)))
    + "');\">\n\n</div>";
},"useData":true});
templates['index'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true});
templates['photos'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "		<div><img data-lazy=\"/pictures/"
    + alias1(container.lambda((depths[1] != null ? lookupProperty(depths[1],"title") : depths[1]), depth0))
    + "/"
    + alias1(((helper = (helper = lookupProperty(helpers,"title") || (depth0 != null ? lookupProperty(depth0,"title") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"title","hash":{},"data":data,"loc":{"start":{"line":3,"column":46},"end":{"line":3,"column":55}}}) : helper)))
    + "\"/></div>\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div class=\"photoSlider\">\n"
    + ((stack1 = lookupProperty(helpers,"each").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"pictures") : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":2,"column":1},"end":{"line":4,"column":10}}})) != null ? stack1 : "")
    + "</div>";
},"useData":true,"useDepths":true});
})();