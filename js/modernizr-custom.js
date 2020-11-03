/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-backdropfilter-backgroundsize-bgrepeatspace_bgrepeatround-bgsizecover-borderimage-borderradius-boxshadow-boxsizing-checked-cssanimations-cssfilters-cssgradients-cssgrid_cssgridlegacy-csspositionsticky-cssremunit-csstransitions-es5-es5array-es5function-es5string-es5syntax-flexbox-flexboxlegacy-flexboxtweener-flexwrap-fontface-formvalidation-htmlimports-inputtypes-lastchild-mediaqueries-nthchild-pointerevents-queryselector-rgba-search-shapes-strictmode-supports-svg-textshadow-unicode-userselect-prefixed-prefixedcss-prefixedcssvalue-prefixes-setclasses !*/
!function(window,document,undefined){function is(e,t){return typeof e===t}function testRunner(){var e,t,r,n,o,i,s;for(var d in tests)if(tests.hasOwnProperty(d)){if(e=[],t=tests[d],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(r=0;r<t.options.aliases.length;r++)e.push(t.options.aliases[r].toLowerCase());for(n=is(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)i=e[o],s=i.split("."),1===s.length?Modernizr[s[0]]=n:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=n),classes.push((n?"":"no-")+s.join("-"))}}function setClasses(e){var t=docElement.className,r=Modernizr._config.classPrefix||"";if(isSVG&&(t=t.baseVal),Modernizr._config.enableJSClass){var n=new RegExp("(^|\\s)"+r+"no-js(\\s|$)");t=t.replace(n,"$1"+r+"js$2")}Modernizr._config.enableClasses&&(t+=" "+r+e.join(" "+r),isSVG?docElement.className.baseVal=t:docElement.className=t)}function createElement(){return"function"!=typeof document.createElement?document.createElement(arguments[0]):isSVG?document.createElementNS.call(document,"http://www.w3.org/2000/svg",arguments[0]):document.createElement.apply(document,arguments)}function cssToDOM(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,r){return t+r.toUpperCase()}).replace(/^-/,"")}function domToCSS(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function getBody(){var e=document.body;return e||(e=createElement(isSVG?"svg":"body"),e.fake=!0),e}function injectElementWithStyles(e,t,r,n){var o,i,s,d,a="modernizr",l=createElement("div"),u=getBody();if(parseInt(r,10))for(;r--;)s=createElement("div"),s.id=n?n[r]:a+(r+1),l.appendChild(s);return o=createElement("style"),o.type="text/css",o.id="s"+a,(u.fake?u:l).appendChild(o),u.appendChild(l),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e)),l.id=a,u.fake&&(u.style.background="",u.style.overflow="hidden",d=docElement.style.overflow,docElement.style.overflow="hidden",docElement.appendChild(u)),i=t(l,e),u.fake?(u.parentNode.removeChild(u),docElement.style.overflow=d,docElement.offsetHeight):l.parentNode.removeChild(l),!!i}function addTest(e,t){if("object"==typeof e)for(var r in e)hasOwnProp(e,r)&&addTest(r,e[r]);else{e=e.toLowerCase();var n=e.split("."),o=Modernizr[n[0]];if(2==n.length&&(o=o[n[1]]),"undefined"!=typeof o)return Modernizr;t="function"==typeof t?t():t,1==n.length?Modernizr[n[0]]=t:(!Modernizr[n[0]]||Modernizr[n[0]]instanceof Boolean||(Modernizr[n[0]]=new Boolean(Modernizr[n[0]])),Modernizr[n[0]][n[1]]=t),setClasses([(t&&0!=t?"":"no-")+n.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function contains(e,t){return!!~(""+e).indexOf(t)}function fnBind(e,t){return function(){return e.apply(t,arguments)}}function testDOMProps(e,t,r){var n;for(var o in e)if(e[o]in t)return r===!1?e[o]:(n=t[e[o]],is(n,"function")?fnBind(n,r||t):n);return!1}function computedStyle(e,t,r){var n;if("getComputedStyle"in window){n=getComputedStyle.call(window,e,t);var o=window.console;if(null!==n)r&&(n=n.getPropertyValue(r));else if(o){var i=o.error?"error":"log";o[i].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else n=!t&&e.currentStyle&&e.currentStyle[r];return n}function nativeTestProps(e,t){var r=e.length;if("CSS"in window&&"supports"in window.CSS){for(;r--;)if(window.CSS.supports(domToCSS(e[r]),t))return!0;return!1}if("CSSSupportsRule"in window){for(var n=[];r--;)n.push("("+domToCSS(e[r])+":"+t+")");return n=n.join(" or "),injectElementWithStyles("@supports ("+n+") { #modernizr { position: absolute; } }",function(e){return"absolute"==computedStyle(e,null,"position")})}return undefined}function testProps(e,t,r,n){function o(){s&&(delete mStyle.style,delete mStyle.modElem)}if(n=is(n,"undefined")?!1:n,!is(r,"undefined")){var i=nativeTestProps(e,r);if(!is(i,"undefined"))return i}for(var s,d,a,l,u,c=["modernizr","tspan","samp"];!mStyle.style&&c.length;)s=!0,mStyle.modElem=createElement(c.shift()),mStyle.style=mStyle.modElem.style;for(a=e.length,d=0;a>d;d++)if(l=e[d],u=mStyle.style[l],contains(l,"-")&&(l=cssToDOM(l)),mStyle.style[l]!==undefined){if(n||is(r,"undefined"))return o(),"pfx"==t?l:!0;try{mStyle.style[l]=r}catch(p){}if(mStyle.style[l]!=u)return o(),"pfx"==t?l:!0}return o(),!1}function testPropsAll(e,t,r,n,o){var i=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+cssomPrefixes.join(i+" ")+i).split(" ");return is(t,"string")||is(t,"undefined")?testProps(s,t,n,o):(s=(e+" "+domPrefixes.join(i+" ")+i).split(" "),testDOMProps(s,t,r))}function testAllProps(e,t,r){return testPropsAll(e,undefined,undefined,t,r)}var classes=[],tests=[],ModernizrProto={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var r=this;setTimeout(function(){t(r[e])},0)},addTest:function(e,t,r){tests.push({name:e,fn:t,options:r})},addAsyncTest:function(e){tests.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=ModernizrProto,Modernizr=new Modernizr,Modernizr.addTest("svg",!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var newSyntax="CSS"in window&&"supports"in window.CSS,oldSyntax="supportsCSS"in window;Modernizr.addTest("supports",newSyntax||oldSyntax),Modernizr.addTest("es5array",function(){return!!(Array.prototype&&Array.prototype.every&&Array.prototype.filter&&Array.prototype.forEach&&Array.prototype.indexOf&&Array.prototype.lastIndexOf&&Array.prototype.map&&Array.prototype.some&&Array.prototype.reduce&&Array.prototype.reduceRight&&Array.isArray)}),Modernizr.addTest("es5function",function(){return!(!Function.prototype||!Function.prototype.bind)}),Modernizr.addTest("strictmode",function(){"use strict";return!this}()),Modernizr.addTest("es5string",function(){return!(!String.prototype||!String.prototype.trim)}),Modernizr.addTest("es5syntax",function(){var value,obj,stringAccess,getter,setter,reservedWords,zeroWidthChars;try{return stringAccess=eval('"foobar"[3] === "b"'),getter=eval("({ get x(){ return 1 } }).x === 1"),eval("({ set x(v){ value = v; } }).x = 1"),setter=1===value,eval("obj = ({ if: 1 })"),reservedWords=1===obj["if"],zeroWidthChars=eval("_‌‍ = true"),stringAccess&&getter&&setter&&reservedWords&&zeroWidthChars}catch(ignore){return!1}}),Modernizr.addTest("queryselector","querySelector"in document&&"querySelectorAll"in document);var prefixes=ModernizrProto._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];ModernizrProto._prefixes=prefixes;var docElement=document.documentElement,isSVG="svg"===docElement.nodeName.toLowerCase();Modernizr.addTest("cssgradients",function(){for(var e,t="background-image:",r="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="",o=0,i=prefixes.length-1;i>o;o++)e=0===o?"to ":"",n+=t+prefixes[o]+"linear-gradient("+e+"left top, #9f9, white);";Modernizr._config.usePrefixes&&(n+=t+"-webkit-"+r);var s=createElement("a"),d=s.style;return d.cssText=n,(""+d.backgroundImage).indexOf("gradient")>-1}),Modernizr.addTest("csspositionsticky",function(){var e="position:",t="sticky",r=createElement("a"),n=r.style;return n.cssText=e+prefixes.join(t+";"+e).slice(0,-e.length),-1!==n.position.indexOf(t)}),Modernizr.addTest("cssremunit",function(){var e=createElement("a").style;try{e.fontSize="3rem"}catch(t){}return/rem/.test(e.fontSize)}),Modernizr.addTest("rgba",function(){var e=createElement("a").style;return e.cssText="background-color:rgba(150,255,150,.5)",(""+e.backgroundColor).indexOf("rgba")>-1}),Modernizr.addTest("es5date",function(){var e="2013-04-12T06:06:37.307Z",t=!1;try{t=!!Date.parse(e)}catch(r){}return!!(Date.now&&Date.prototype&&Date.prototype.toISOString&&Date.prototype.toJSON&&t)}),Modernizr.addTest("es5object",function(){return!!(Object.keys&&Object.create&&Object.getPrototypeOf&&Object.getOwnPropertyNames&&Object.isSealed&&Object.isFrozen&&Object.isExtensible&&Object.getOwnPropertyDescriptor&&Object.defineProperty&&Object.defineProperties&&Object.seal&&Object.freeze&&Object.preventExtensions)}),Modernizr.addTest("json","JSON"in window&&"parse"in JSON&&"stringify"in JSON),Modernizr.addTest("es5undefined",function(){var e,t;try{t=window.undefined,window.undefined=12345,e="undefined"==typeof window.undefined,window.undefined=t}catch(r){return!1}return e}),Modernizr.addTest("es5",function(){return!!(Modernizr.es5array&&Modernizr.es5date&&Modernizr.es5function&&Modernizr.es5object&&Modernizr.strictmode&&Modernizr.es5string&&Modernizr.json&&Modernizr.es5syntax&&Modernizr.es5undefined)});var hasEvent=function(){function e(e,r){var n;return e?(r&&"string"!=typeof r||(r=createElement(r||"div")),e="on"+e,n=e in r,!n&&t&&(r.setAttribute||(r=createElement("div")),r.setAttribute(e,""),n="function"==typeof r[e],r[e]!==undefined&&(r[e]=undefined),r.removeAttribute(e)),n):!1}var t=!("onblur"in document.documentElement);return e}();ModernizrProto.hasEvent=hasEvent,Modernizr.addTest("inputsearchevent",hasEvent("search"));var inputElem=createElement("input"),inputtypes="search tel url email datetime date month week time datetime-local number range color".split(" "),inputs={};Modernizr.inputtypes=function(e){for(var t,r,n,o=e.length,i="1)",s=0;o>s;s++)inputElem.setAttribute("type",t=e[s]),n="text"!==inputElem.type&&"style"in inputElem,n&&(inputElem.value=i,inputElem.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(t)&&inputElem.style.WebkitAppearance!==undefined?(docElement.appendChild(inputElem),r=document.defaultView,n=r.getComputedStyle&&"textfield"!==r.getComputedStyle(inputElem,null).WebkitAppearance&&0!==inputElem.offsetHeight,docElement.removeChild(inputElem)):/^(search|tel)$/.test(t)||(n=/^(url|email)$/.test(t)?inputElem.checkValidity&&inputElem.checkValidity()===!1:inputElem.value!=i)),inputs[e[s]]=!!n;return inputs}(inputtypes);var testStyles=ModernizrProto.testStyles=injectElementWithStyles;Modernizr.addTest("unicode",function(){var e,t=createElement("span"),r=createElement("span");return testStyles("#modernizr{font-family:Arial,sans;font-size:300em;}",function(n){t.innerHTML=isSVG?"妇":"&#5987;",r.innerHTML=isSVG?"☆":"&#9734;",n.appendChild(t),n.appendChild(r),e="offsetWidth"in t&&t.offsetWidth!==r.offsetWidth}),e}),Modernizr.addTest("checked",function(){return testStyles("#modernizr {position:absolute} #modernizr input {margin-left:10px} #modernizr :checked {margin-left:20px;display:block}",function(e){var t=createElement("input");return t.setAttribute("type","checkbox"),t.setAttribute("checked","checked"),e.appendChild(t),20===t.offsetLeft})});var blacklist=function(){var e=navigator.userAgent,t=e.match(/w(eb)?osbrowser/gi),r=e.match(/windows phone/gi)&&e.match(/iemobile\/([0-9])+/gi)&&parseFloat(RegExp.$1)>=9;return t||r}();blacklist?Modernizr.addTest("fontface",!1):testStyles('@font-face {font-family:"font";src:url("https://")}',function(e,t){var r=document.getElementById("smodernizr"),n=r.sheet||r.styleSheet,o=n?n.cssRules&&n.cssRules[0]?n.cssRules[0].cssText:n.cssText||"":"",i=/src/i.test(o)&&0===o.indexOf(t.split(" ")[0]);Modernizr.addTest("fontface",i)}),testStyles("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}",function(e){Modernizr.addTest("lastchild",e.lastChild.offsetWidth>e.firstChild.offsetWidth)},2),testStyles("#modernizr div {width:1px} #modernizr div:nth-child(2n) {width:2px;}",function(e){for(var t=e.getElementsByTagName("div"),r=!0,n=0;5>n;n++)r=r&&t[n].offsetWidth===n%2+1;Modernizr.addTest("nthchild",r)},5),Modernizr.addTest("formvalidation",function(){var e=createElement("form");if(!("checkValidity"in e&&"addEventListener"in e))return!1;if("reportValidity"in e)return!0;var t,r=!1;return Modernizr.formvalidationapi=!0,e.addEventListener("submit",function(e){(!window.opera||window.operamini)&&e.preventDefault(),e.stopPropagation()},!1),e.innerHTML='<input name="modTest" required="required" /><button></button>',testStyles("#modernizr form{position:absolute;top:-99999em}",function(n){n.appendChild(e),t=e.getElementsByTagName("input")[0],t.addEventListener("invalid",function(e){r=!0,e.preventDefault(),e.stopPropagation()},!1),Modernizr.formvalidationmessage=!!t.validationMessage,e.getElementsByTagName("button")[0].click()}),r});var mq=function(){var e=window.matchMedia||window.msMatchMedia;return e?function(t){var r=e(t);return r&&r.matches||!1}:function(e){var t=!1;return injectElementWithStyles("@media "+e+" { #modernizr { position: absolute; } }",function(e){t="absolute"==(window.getComputedStyle?window.getComputedStyle(e,null):e.currentStyle).position}),t}}();ModernizrProto.mq=mq,Modernizr.addTest("mediaqueries",mq("only all"));var omPrefixes="Moz O ms Webkit",domPrefixes=ModernizrProto._config.usePrefixes?omPrefixes.toLowerCase().split(" "):[];ModernizrProto._domPrefixes=domPrefixes;var prefixedCSSValue=function(e,t){var r=!1,n=createElement("div"),o=n.style;if(e in o){var i=domPrefixes.length;for(o[e]=t,r=o[e];i--&&!r;)o[e]="-"+domPrefixes[i]+"-"+t,r=o[e]}return""===r&&(r=!1),r};ModernizrProto.prefixedCSSValue=prefixedCSSValue,Modernizr.addTest("pointerevents",function(){var e=!1,t=domPrefixes.length;for(e=Modernizr.hasEvent("pointerdown");t--&&!e;)hasEvent(domPrefixes[t]+"pointerdown")&&(e=!0);return e});var cssomPrefixes=ModernizrProto._config.usePrefixes?omPrefixes.split(" "):[];ModernizrProto._cssomPrefixes=cssomPrefixes;var atRule=function(e){var t,r=prefixes.length,n=window.CSSRule;if("undefined"==typeof n)return undefined;if(!e)return!1;if(e=e.replace(/^@/,""),t=e.replace(/-/g,"_").toUpperCase()+"_RULE",t in n)return"@"+e;for(var o=0;r>o;o++){var i=prefixes[o],s=i.toUpperCase()+"_"+t;if(s in n)return"@-"+i.toLowerCase()+"-"+e}return!1};ModernizrProto.atRule=atRule;var hasOwnProp;!function(){var e={}.hasOwnProperty;hasOwnProp=is(e,"undefined")||is(e.call,"undefined")?function(e,t){return t in e&&is(e.constructor.prototype[t],"undefined")}:function(t,r){return e.call(t,r)}}(),ModernizrProto._l={},ModernizrProto.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},ModernizrProto._trigger=function(e,t){if(this._l[e]){var r=this._l[e];setTimeout(function(){var e,n;for(e=0;e<r.length;e++)(n=r[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){ModernizrProto.addTest=addTest}),addTest("htmlimports","import"in createElement("link"));var modElem={elem:createElement("modernizr")};Modernizr._q.push(function(){delete modElem.elem});var mStyle={style:modElem.elem.style};Modernizr._q.unshift(function(){delete mStyle.style});var testProp=ModernizrProto.testProp=function(e,t,r){return testProps([e],undefined,t,r)};Modernizr.addTest("textshadow",testProp("textShadow","1px 1px")),ModernizrProto.testAllProps=testPropsAll;var prefixed=ModernizrProto.prefixed=function(e,t,r){return 0===e.indexOf("@")?atRule(e):(-1!=e.indexOf("-")&&(e=cssToDOM(e)),t?testPropsAll(e,t,r):testPropsAll(e,"pfx"))},prefixedCSS=ModernizrProto.prefixedCSS=function(e){var t=prefixed(e);return t&&domToCSS(t)};ModernizrProto.testAllProps=testAllProps,Modernizr.addTest("cssanimations",testAllProps("animationName","a",!0)),Modernizr.addTest("backdropfilter",testAllProps("backdropFilter")),Modernizr.addTest("bgrepeatround",testAllProps("backgroundRepeat","round")),Modernizr.addTest("bgrepeatspace",testAllProps("backgroundRepeat","space")),Modernizr.addTest("backgroundsize",testAllProps("backgroundSize","100%",!0)),Modernizr.addTest("bgsizecover",testAllProps("backgroundSize","cover")),Modernizr.addTest("borderimage",testAllProps("borderImage","url() 1",!0)),Modernizr.addTest("borderradius",testAllProps("borderRadius","0px",!0)),Modernizr.addTest("boxshadow",testAllProps("boxShadow","1px 1px",!0)),Modernizr.addTest("boxsizing",testAllProps("boxSizing","border-box",!0)&&(document.documentMode===undefined||document.documentMode>7)),Modernizr.addTest("cssgridlegacy",testAllProps("grid-columns","10px",!0)),Modernizr.addTest("cssgrid",testAllProps("grid-template-rows","none",!0)),Modernizr.addTest("cssfilters",function(){if(Modernizr.supports)return testAllProps("filter","blur(2px)");var e=createElement("a");return e.style.cssText=prefixes.join("filter:blur(2px); "),!!e.style.length&&(document.documentMode===undefined||document.documentMode>9)}),Modernizr.addTest("flexbox",testAllProps("flexBasis","1px",!0)),Modernizr.addTest("flexboxlegacy",testAllProps("boxDirection","reverse",!0)),Modernizr.addTest("flexboxtweener",testAllProps("flexAlign","end",!0)),Modernizr.addTest("flexwrap",testAllProps("flexWrap","wrap",!0)),Modernizr.addTest("shapes",testAllProps("shapeOutside","content-box",!0)),Modernizr.addTest("csstransitions",testAllProps("transition","all",!0)),Modernizr.addTest("userselect",testAllProps("userSelect","none",!0)),testRunner(),setClasses(classes),delete ModernizrProto.addTest,delete ModernizrProto.addAsyncTest;for(var i=0;i<Modernizr._q.length;i++)Modernizr._q[i]();window.Modernizr=Modernizr}(window,document);