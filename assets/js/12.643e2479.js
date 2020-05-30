(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{460:function(e,t,r){"use strict";r.r(t);var a=r(55),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"api"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[e._v("#")]),e._v(" API")]),e._v(" "),r("p",[e._v("This section is going to describe the low-level API of the generator and the parser. You will only need it if you\nimplement your own macros, or if you want to access parts of the result and keep processing them.")]),e._v(" "),r("h2",{attrs:{id:"parser"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#parser"}},[e._v("#")]),e._v(" Parser")]),e._v(" "),r("h3",{attrs:{id:"parser-parse-latex-generator-htmlgenerator"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#parser-parse-latex-generator-htmlgenerator"}},[e._v("#")]),e._v(" "),r("code",[e._v("parser.parse(latex, { generator: HtmlGenerator })")])]),e._v(" "),r("p",[e._v("This function parses the given input "),r("latex"),e._v(" document and returns a generator that creates the output document.")],1),e._v(" "),r("p",[e._v("Arguments:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("latex")]),e._v(" is the "),r("latex"),e._v(" source document")],1),e._v(" "),r("li",[e._v("options object: must contain a "),r("code",[e._v("generator")]),e._v(" property with an instance of "),r("code",[e._v("HtmlGenerator")])])]),e._v(" "),r("p",[e._v("Returns the "),r("code",[e._v("HtmlGenerator")]),e._v(" instance.")]),e._v(" "),r("h2",{attrs:{id:"ast"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ast"}},[e._v("#")]),e._v(" AST")]),e._v(" "),r("p",[e._v("TODO")]),e._v(" "),r("h2",{attrs:{id:"class-generator"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#class-generator"}},[e._v("#")]),e._v(" class: Generator")]),e._v(" "),r("p",[e._v("TODO")]),e._v(" "),r("h2",{attrs:{id:"class-htmlgenerator"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#class-htmlgenerator"}},[e._v("#")]),e._v(" class: HtmlGenerator")]),e._v(" "),r("h3",{attrs:{id:"ctor-new-htmlgenerator-options"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ctor-new-htmlgenerator-options"}},[e._v("#")]),e._v(" CTOR: "),r("code",[e._v("new HtmlGenerator(options)")])]),e._v(" "),r("p",[e._v("Create a new HTML generator. "),r("code",[e._v("options")]),e._v(" is an <"),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object",target:"_blank",rel:"noopener noreferrer"}},[e._v("Object"),r("OutboundLink")],1),e._v("> that can have the following properties:")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("documentClass")]),e._v(": <"),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"String",target:"_blank",rel:"noopener noreferrer"}},[e._v("string"),r("OutboundLink")],1),e._v("> the default document class if a document without preamble is parsed")]),e._v(" "),r("li",[r("code",[e._v("CustomMacros")]),e._v(": a <"),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor",title:"Class",target:"_blank",rel:"noopener noreferrer"}},[e._v("constructor"),r("OutboundLink")],1),e._v(">/<"),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function",target:"_blank",rel:"noopener noreferrer"}},[e._v("function"),r("OutboundLink")],1),e._v("> with additional custom macros")]),e._v(" "),r("li",[r("code",[e._v("hyphenate")]),e._v(": <"),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean",target:"_blank",rel:"noopener noreferrer"}},[e._v("boolean"),r("OutboundLink")],1),e._v("> enable or disable automatic hyphenation")]),e._v(" "),r("li",[r("code",[e._v("languagePatterns")]),e._v(": language patterns object to use for hyphenation if it is enabled")]),e._v(" "),r("li",[r("code",[e._v("styles")]),e._v(": <"),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array",target:"_blank",rel:"noopener noreferrer"}},[e._v("Array"),r("OutboundLink")],1),e._v("<"),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"String",target:"_blank",rel:"noopener noreferrer"}},[e._v("string"),r("OutboundLink")],1),e._v(">> additional CSS stylesheets")])]),e._v(" "),r("h3",{attrs:{id:"htmlgenerator-reset"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#htmlgenerator-reset"}},[e._v("#")]),e._v(" "),r("code",[e._v("htmlGenerator.reset()")])]),e._v(" "),r("p",[e._v("Reset the generator. Needs to be called before the generator is used for creating a second document.")]),e._v(" "),r("h3",{attrs:{id:"htmlgenerator-htmldocument-baseurl"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#htmlgenerator-htmldocument-baseurl"}},[e._v("#")]),e._v(" "),r("code",[e._v("htmlGenerator.htmlDocument(baseURL)")])]),e._v(" "),r("p",[e._v("Returns the full DOM "),r("code",[e._v("HTMLDocument")]),e._v(" representation of the "),r("latex"),e._v(" source, including "),r("code",[e._v("<head>")]),e._v(" and "),r("code",[e._v("<body")]),e._v(">. This is meant\nto be used as its own standalone webpage or in an "),r("code",[e._v("<iframe>")]),e._v(".")],1),e._v(" "),r("p",[r("code",[e._v("baseURL")]),e._v(" will be used as base for the scripts and stylesheets; if omitted, the base will be "),r("code",[e._v("window.location.href")]),e._v(" or,\nif not available, scripts and stylesheets will have relative URLs.")]),e._v(" "),r("p",[e._v("To serialize it, use "),r("code",[e._v("htmlGenerator.htmlDocument().outerHTML")]),e._v(".")]),e._v(" "),r("h3",{attrs:{id:"htmlgenerator-stylesandscripts-baseurl"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#htmlgenerator-stylesandscripts-baseurl"}},[e._v("#")]),e._v(" "),r("code",[e._v("htmlGenerator.stylesAndScripts(baseURL)")])]),e._v(" "),r("p",[e._v("Returns a "),r("code",[e._v("DocumentFragment")]),e._v(" with "),r("code",[e._v("<link>")]),e._v(" and "),r("code",[e._v("<script>")]),e._v(" elements. This usually is part of the "),r("code",[e._v("<head>")]),e._v(" element.")]),e._v(" "),r("p",[e._v("If "),r("code",[e._v("baseURL")]),e._v(" is given, the files will be referenced with absolute URLs, otherwise with relative URLs.")]),e._v(" "),r("h3",{attrs:{id:"htmlgenerator-domfragment"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#htmlgenerator-domfragment"}},[e._v("#")]),e._v(" "),r("code",[e._v("htmlGenerator.domFragment()")])]),e._v(" "),r("p",[e._v("Returns the DOM "),r("code",[e._v("DocumentFragment")]),e._v(". This does not include the scripts and stylesheets and is meant for testing and\nlow-level embedding.")]),e._v(" "),r("h3",{attrs:{id:"htmlgenerator-documenttitle"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#htmlgenerator-documenttitle"}},[e._v("#")]),e._v(" "),r("code",[e._v("htmlGenerator.documentTitle()")])]),e._v(" "),r("p",[e._v("The title of the document.")])])}),[],!1,null,null,null);t.default=o.exports}}]);