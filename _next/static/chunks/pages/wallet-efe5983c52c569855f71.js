(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[789],{23646:function(e,t,n){var a=n(67228);e.exports=function(e){if(Array.isArray(e))return a(e)}},59713:function(e){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},46860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},98206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:function(e,t,n){var a=n(23646),s=n(46860),r=n(60379),i=n(98206);e.exports=function(e){return a(e)||s(e)||r(e)||i()}},93367:function(e,t,n){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var s=((a=n(67294))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=s},7845:function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(s.default.useContext(r.AmpStateContext))};var a,s=(a=n(67294))&&a.__esModule?a:{default:a},r=n(93367);function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,a=e.hybrid,s=void 0!==a&&a,r=e.hasQuery,i=void 0!==r&&r;return n||s&&i}},57947:function(e,t,n){"use strict";var a=n(59713);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}t.__esModule=!0,t.defaultHead=f,t.default=void 0;var r,i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=h();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if(Object.prototype.hasOwnProperty.call(e,s)){var r=a?Object.getOwnPropertyDescriptor(e,s):null;r&&(r.get||r.set)?Object.defineProperty(n,s,r):n[s]=e[s]}n.default=e,t&&t.set(e,n);return n}(n(67294)),l=(r=n(60617))&&r.__esModule?r:{default:r},c=n(93367),o=n(74287),d=n(7845);function h(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return h=function(){return e},e}function f(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function u(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var m=["name","httpEquiv","charSet","itemProp"];function x(e,t){return e.reduce((function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(u,[]).reverse().concat(f(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,a={};return function(s){var r=!0,i=!1;if(s.key&&"number"!==typeof s.key&&s.key.indexOf("$")>0){i=!0;var l=s.key.slice(s.key.indexOf("$")+1);e.has(l)?r=!1:e.add(l)}switch(s.type){case"title":case"base":t.has(s.type)?r=!1:t.add(s.type);break;case"meta":for(var c=0,o=m.length;c<o;c++){var d=m[c];if(s.props.hasOwnProperty(d))if("charSet"===d)n.has(d)?r=!1:n.add(d);else{var h=s.props[d],f=a[d]||new Set;"name"===d&&i||!f.has(h)?(f.add(h),a[d]=f):r=!1}}}return r}}()).reverse().map((function(e,n){var r=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some((function(t){return e.props.href.startsWith(t)}))){var l=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return l["data-href"]=l.href,l.href=void 0,l["data-optimized-fonts"]=!0,i.default.cloneElement(e,l)}return i.default.cloneElement(e,{key:r})}))}function p(e){var t=e.children,n=(0,i.useContext)(c.AmpStateContext),a=(0,i.useContext)(o.HeadManagerContext);return i.default.createElement(l.default,{reduceComponentsToState:x,headManager:a,inAmpMode:(0,d.isInAmpMode)(n)},t)}p.rewind=function(){};var j=p;t.default=j},60617:function(e,t,n){"use strict";var a=n(319),s=n(34575),r=n(93913),i=(n(81506),n(2205)),l=n(78585),c=n(29754);function o(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=c(e);if(t){var s=c(this).constructor;n=Reflect.construct(a,arguments,s)}else n=a.apply(this,arguments);return l(this,n)}}t.__esModule=!0,t.default=void 0;var d=n(67294),h=function(e){i(n,e);var t=o(n);function n(e){var r;return s(this,n),(r=t.call(this,e))._hasHeadManager=void 0,r.emitChange=function(){r._hasHeadManager&&r.props.headManager.updateHead(r.props.reduceComponentsToState(a(r.props.headManager.mountedInstances),r.props))},r._hasHeadManager=r.props.headManager&&r.props.headManager.mountedInstances,r}return r(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(d.Component);t.default=h},73039:function(e,t,n){"use strict";n.r(t),n.d(t,{Container:function(){return r}});var a=n(85893),s=n(67294),r=function(e){var t=e.children;return(0,a.jsx)("div",{className:"container",children:t})};t.default=s.memo(r)},19590:function(e,t,n){"use strict";n.r(t);var a=n(85893),s=n(6610),r=n(5991),i=n(65255),l=n(86089),c=n(77608),o=n(67294);function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,c.Z)(e);if(t){var s=(0,c.Z)(this).constructor;n=Reflect.construct(a,arguments,s)}else n=a.apply(this,arguments);return(0,l.Z)(this,n)}}var h=function(e){(0,i.Z)(n,e);var t=d(n);function n(){return(0,s.Z)(this,n),t.apply(this,arguments)}return(0,r.Z)(n,[{key:"render",value:function(){return(0,a.jsx)(o.Fragment,{children:(0,a.jsx)("div",{className:"footer",id:"footer",children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsxs)("div",{className:"row py-4 align-items-center",children:[(0,a.jsxs)("div",{className:"col-12 col-lg-6",children:[(0,a.jsx)("h1",{className:"text-white",children:"Safemoon Protocol"}),(0,a.jsx)("p",{children:"The SafeMoon Protocol is a community driven, fair launched DeFi Token. Three simple functions occur during each trade: Reflection, LP Acquisition, & Burn."})]}),(0,a.jsxs)("div",{className:"col-4 col-lg-2",children:[(0,a.jsx)("h3",{className:"text-white",children:"Community"}),(0,a.jsxs)("ul",{className:"list-unstyled",children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"text-light",href:"https://forums.safemoon.net",target:"_blank",children:"Forums"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"text-light",href:"https://discord.gg/safemoon",target:"_blank",children:"Discord"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"text-light",href:"https://www.reddit.com/r/SafeMoon/",target:"_blank",children:"Reddit"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"text-light",href:"https://t.me/safemoonv2",target:"_blank",children:"Telegram"})})]})]}),(0,a.jsxs)("div",{className:"col-4 col-lg-2",children:[(0,a.jsx)("h3",{className:"text-white",children:"Social"}),(0,a.jsxs)("ul",{className:"list-unstyled",children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"text-light",href:"https://facebook.com/safemoonprotocol",children:"Facebook"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"text-light",href:"https://twitter.com/safemoon",children:"Twitter"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"text-light",href:"https://www.instagram.com/safemoonhq/",children:"Instagram"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"text-light",href:"https://www.linkedin.com/company/safemoon/",children:"LinkedIn"})})]})]}),(0,a.jsxs)("div",{className:"col-4 col-lg-2",children:[(0,a.jsx)("h3",{className:"text-white",children:"Resources"}),(0,a.jsxs)("ul",{className:"list-unstyled",children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"text-light",href:"/branding",children:"Branding"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"text-light",href:"/wallet",children:"Wallet Tracker"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"text-light",href:"https://github.com/safemoonprotocol/Safemoon.sol",target:"_blank",children:"Contract"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:"text-light",href:"/whitepaper",children:"White paper"})})]})]})]}),(0,a.jsx)("hr",{}),(0,a.jsxs)("div",{className:"row align-items-center",children:[(0,a.jsx)("div",{className:"col",children:(0,a.jsx)("h3",{className:"mb-0 text-white",children:"Copyright \xa9 2021 Safemoon LLC. | All Rights Reserved"})}),(0,a.jsxs)("div",{className:"col text-end",children:[(0,a.jsx)("a",{href:"/terms",className:"btn btn-link btn-sm px-0 text-light",children:"Terms of Service"}),(0,a.jsx)("a",{href:"/privacy",className:"btn btn-link btn-sm px-0 text-light",children:"Privacy Policy"}),(0,a.jsx)("a",{href:"/privacy",className:"btn btn-link btn-sm px-0 text-light",children:"Cookie Policy"})]})]})]})})})}}]),n}(o.Component);t.default=o.memo(h)},32480:function(e,t,n){"use strict";n.r(t),n.d(t,{PageHead:function(){return i}});var a=n(85893),s=n(67294),r=n(9008),i=function(e){var t=e.title,n=e.desc;return"undefined"==typeof n&&(n="The official home of SafeMoon. The SafeMoon Protocol is a community driven, fair launched DeFi Token. Three simple functions occur during each trade: Reflection, LP Acquisition, and Burn."),(0,a.jsxs)(r.default,{children:[(0,a.jsxs)("title",{children:[t," | Safemoon"]}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=0.87, shrink-to-fit=no"}),(0,a.jsx)("meta",{name:"description",content:n}),(0,a.jsx)("link",{rel:"shortcut icon",type:"image/png",href:"../img/favicon.png"}),(0,a.jsx)("meta",{name:"keywords",content:"safemoon,safemars,safegalaxy,shib,shiba,kucoin,xrp,bonfire,diamondhold,gmr,vechain,elon,elongate,bitcoin,dogecoin,doge,defi,coinbase,coinmarketcap,coinmarket,bscscan,whitebit,coingecko,cryptocurrency,crypto,pancakeswap,dex,etherium,eth,btc"}),(0,a.jsx)("meta",{property:"og:image",content:"https://safemoon.net/img/social_thumb.png"}),(0,a.jsx)("meta",{property:"og:image:type",content:"image/png"}),(0,a.jsx)("meta",{property:"og:image:width",content:"1280"}),(0,a.jsx)("meta",{property:"og:image:height",content:"640"}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("meta",{name:"twitter:description",content:n}),(0,a.jsx)("meta",{name:"twitter:title",content:t+" | SafeMoon Protocol"}),(0,a.jsx)("meta",{name:"twitter:site",content:"@safemoon"}),(0,a.jsx)("script",{src:"../js/jquery-3.6.0.min.js"}),(0,a.jsx)("script",{src:"https://cdn.jsdelivr.net/npm/chart.js@3.1.0/dist/chart.min.js"}),(0,a.jsx)("script",{src:"../js/bootstrap.bundle.min.js"}),(0,a.jsx)("script",{src:"https://www.googletagmanager.com/gtag/js?id=UA-195728045-1"}),(0,a.jsx)("script",{dangerouslySetInnerHTML:{__html:"\n              window.dataLayer = window.dataLayer || [];\n              function gtag(){dataLayer.push(arguments);}\n              gtag('js', new Date());\n              gtag('config', 'UA-195728045-1', { page_path: window.location.pathname });\n            "}})]})};t.default=s.memo(i)},44264:function(e,t,n){"use strict";n.r(t);var a=n(85893),s=n(6610),r=n(5991),i=n(65255),l=n(86089),c=n(77608),o=n(67294),d=(n(73039),n(19755)),h=n.n(d);function f(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,c.Z)(e);if(t){var s=(0,c.Z)(this).constructor;n=Reflect.construct(a,arguments,s)}else n=a.apply(this,arguments);return(0,l.Z)(this,n)}}var u=function(e){(0,i.Z)(n,e);var t=f(n);function n(){return(0,s.Z)(this,n),t.apply(this,arguments)}return(0,r.Z)(n,[{key:"componentDidMount",value:function(){h()(".menu-btn").on("click",(function(e){e.preventDefault(),h()(".custom-navbar").toggleClass("open")})),h()("#closemenu").on("click",(function(e){e.preventDefault(),h()(".custom-navbar").removeClass("open")}))}},{key:"render",value:function(){return(0,a.jsx)(o.Fragment,{children:(0,a.jsx)("div",{className:"custom-nav text-center sticky-top",children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsxs)("div",{className:"d-flex align-items-center custom-navbar justify-content-lg-between flex-column flex-lg-row",children:[(0,a.jsx)("a",{href:"/",className:"navbrand d-none d-lg-inline-block",rel:"nofollow",children:(0,a.jsx)("img",{src:"../img/174x174.png",height:50,className:"mr-3"})}),(0,a.jsxs)("a",{href:"/",className:"navbrand d-lg-none text-white mb-5",rel:"nofollow",id:"closemenu",children:[(0,a.jsx)("i",{className:"fal fa-times"})," Close"]}),(0,a.jsxs)("div",{className:"d-flex flex-column flex-lg-row text-center",children:[(0,a.jsx)("div",{className:"flex-fill",children:(0,a.jsx)("a",{href:"/",className:"px-3",children:"Home"})}),(0,a.jsx)("div",{className:"flex-fill",children:(0,a.jsx)("a",{href:"https://mc.safemoon.net",className:"px-3",target:"_blank",children:"Mooncraft"})}),(0,a.jsx)("div",{className:"flex-fill",children:(0,a.jsx)("a",{href:"https://shop.safemoon.net",className:"px-3",target:"_blank",children:"Shop"})}),(0,a.jsx)("div",{className:"flex-fill",children:(0,a.jsxs)("a",{href:"/products",className:"px-3",children:["Products",(0,a.jsx)("div",{className:"new"})]})}),(0,a.jsx)("div",{className:"flex-fill",children:(0,a.jsx)("a",{href:"/markets",className:"px-3",children:"Markets"})}),(0,a.jsx)("div",{className:"flex-fill",children:(0,a.jsx)("a",{href:"/buy",className:"px-3",children:"Buy Now"})})]})]}),(0,a.jsxs)("div",{className:"d-flex d-lg-none justify-content-between align-items-center mobile-menu",children:[(0,a.jsx)("a",{href:"/",className:"navbrand text-white",children:"SafeMoon"}),(0,a.jsx)("div",{children:(0,a.jsxs)("a",{href:"",className:"btn btn-link text-white btn-lg px-3 menu-btn",children:[(0,a.jsx)("i",{className:"fal fa-bars fa-fw"})," Menu"]})})]})]})})})}}]),n}(o.Component);t.default=u},43853:function(e,t,n){"use strict";n.r(t);var a=n(85893),s=n(6610),r=n(5991),i=n(65255),l=n(86089),c=n(77608),o=n(67294),d=n(69322),h=n(48134),f=n.n(h),u=n(40368),m=n.n(u),x=n(44264);function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,c.Z)(e);if(t){var s=(0,c.Z)(this).constructor;n=Reflect.construct(a,arguments,s)}else n=a.apply(this,arguments);return(0,l.Z)(this,n)}}var j=function(e){(0,i.Z)(n,e);var t=p(n);function n(){return(0,s.Z)(this,n),t.apply(this,arguments)}return(0,r.Z)(n,[{key:"render",value:function(){return(0,a.jsx)(o.Fragment,{children:(0,a.jsxs)("header",{className:"small-header",children:[(0,a.jsx)(f(),{className:"particlesjs",params:m()}),(0,a.jsx)(d.default,{}),(0,a.jsx)(x.default,{}),(0,a.jsx)("div",{className:"container",children:(0,a.jsx)("div",{className:"d-flex align-items-center header-row",children:(0,a.jsxs)("div",{className:"flex-fill w-100",children:[(0,a.jsx)("h1",{className:"largenumbers mb-0",children:"Safemoon"}),(0,a.jsx)("p",{className:"text-white mb-5",children:this.props.title})]})})})]})})}}]),n}(o.Component);t.default=j},69322:function(e,t,n){"use strict";n.r(t);var a=n(85893),s=n(6610),r=n(5991),i=n(65255),l=n(86089),c=n(77608),o=n(67294);function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,c.Z)(e);if(t){var s=(0,c.Z)(this).constructor;n=Reflect.construct(a,arguments,s)}else n=a.apply(this,arguments);return(0,l.Z)(this,n)}}var h=function(e){(0,i.Z)(n,e);var t=d(n);function n(){return(0,s.Z)(this,n),t.apply(this,arguments)}return(0,r.Z)(n,[{key:"render",value:function(){return(0,a.jsx)(o.Fragment,{children:(0,a.jsx)("div",{className:"top-bar",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,a.jsx)("div",{className:"d-none d-lg-block w-100",children:(0,a.jsx)("ul",{className:"topnav",children:(0,a.jsx)("li",{className:"text-white-50",children:"The official home of Safemoon"})})}),(0,a.jsxs)("div",{className:"text-center text-lg-right w-100 icon-menu",children:[(0,a.jsx)("a",{href:"https://facebook.com/safemoonofficial",className:"mr-2 text-info",target:"_blank","data-toggle":"tooltip",title:"facebook",children:(0,a.jsx)("i",{className:"fab fa-facebook fa-fw"})}),(0,a.jsx)("a",{href:"https://twitter.com/safemoon",className:"mx-2 text-info",target:"_blank","data-toggle":"tooltip",title:"Twitter",children:(0,a.jsx)("i",{className:"fab fa-twitter fa-fw"})}),(0,a.jsx)("a",{href:"https://www.instagram.com/safemoonhq/",className:"mx-2 text-info",target:"_blank","data-toggle":"tooltip",title:"Instagram",children:(0,a.jsx)("i",{className:"fab fa-instagram fa-fw"})}),(0,a.jsx)("a",{href:"https://github.com/Safemoon-Protocol",className:"mx-2 text-info",target:"_blank","data-toggle":"tooltip",title:"Github",children:(0,a.jsx)("i",{className:"fab fa-github fa-fw"})}),(0,a.jsx)("a",{href:"https://www.reddit.com/r/SafeMoon/",className:"mx-2 text-info",target:"_blank","data-toggle":"tooltip",title:"Reddit",children:(0,a.jsx)("i",{className:"fab fa-reddit fa-fw"})}),(0,a.jsx)("a",{href:"https://t.me/safemoonv2",className:"mx-2 text-info",target:"_blank","data-toggle":"tooltip",title:"Telegram",children:(0,a.jsx)("i",{className:"fab fa-telegram fa-fw"})}),(0,a.jsx)("a",{href:"https://discord.gg/safemoon",className:"mx-2 text-info",target:"_blank","data-toggle":"tooltip",title:"Discord",children:(0,a.jsx)("i",{className:"fab fa-discord fa-fw"})}),(0,a.jsx)("a",{href:"https://www.youtube.com/channel/UCbfKS3AEsY9QMYK7nxJjKqw",className:"ml-2 text-info",target:"_blank","data-toggle":"tooltip",title:"Youtube",children:(0,a.jsx)("i",{className:"fab fa-youtube fa-fw"})}),(0,a.jsx)("a",{href:"https://twitch.tv/safemoonprotocol",className:"ml-2 text-info",target:"_blank","data-toggle":"tooltip",title:"Twitch",children:(0,a.jsx)("i",{className:"fab fa-twitch fa-fw"})})]})]})})})})}}]),n}(o.Component);t.default=h},25737:function(e,t,n){"use strict";n.r(t);var a=n(85893),s=n(87757),r=n.n(s),i=n(92137),l=n(6610),c=n(5991),o=n(63349),d=n(65255),h=n(86089),f=n(77608),u=n(96156),m=n(67294),x=n(43853),p=n(19590),j=n(32480),g=n(42374),v=n(19755),b=n.n(v);function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,f.Z)(e);if(t){var s=(0,f.Z)(this).constructor;n=Reflect.construct(a,arguments,s)}else n=a.apply(this,arguments);return(0,h.Z)(this,n)}}var N=function(e){(0,d.Z)(n,e);var t=y(n);function n(){var e;(0,l.Z)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return e=t.call.apply(t,[this].concat(s)),(0,u.Z)((0,o.Z)(e),"start_value",0),e}return(0,c.Z)(n,[{key:"componentDidMount",value:function(){var e=this;b()("#track").on("click",(function(t){t.preventDefault();var n=b()("#wallet_address").val();2!=n.split("x").length||!1===/^([A-Za-z0-9]{42})$/.test(n)?b()("#error").html("Invalid wallet address format."):(b()("#error").html("&nbsp;"),e.startTracking(n))})),b()("#toggleRanks").on("click",(function(e){e.preventDefault(),b()("#rankings").stop().slideToggle()}))}},{key:"componentWillUnmount",value:function(){this.interval&&(clearInterval(this.interval),this.interval=null)}},{key:"startTracking",value:function(){var e=(0,i.Z)(r().mark((function e(t){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.interval&&(clearInterval(this.interval),this.total_earned=0,this.setState({})),n=this;try{this.getData(t),setInterval((function(){try{n.getData(t)}catch(e){console.log(e)}}),1e4)}catch(a){console.log(a)}case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getData",value:function(){var e=(0,i.Z)(r().mark((function e(t){var n,a,s,i,l;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"0x8076c74c5e3f5852037f31ff0093eeb8c8add8d3",e.next=3,g.sb("0x8076c74c5e3f5852037f31ff0093eeb8c8add8d3",t);case 3:return n=e.sent,e.next=6,g.aS();case 6:a=e.sent,s=n.balance.toFixed(4).split("."),i=g.Nm(s[0]),l=s[1],0==this.start_value&&(this.start_value=n.balance),this.setState({balance:n.balance,status:n.status,formatted:i+"."+l,value:g.Nm((n.balance*a).toFixed(2)),gained:n.balance-this.start_value,price:a});case 12:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=(0,a.jsx)(j.default,{title:"Wallet Tracker"}),t=this.state?this.state.formatted:0,n=this.state?this.state.value:0,s=this.state?this.state.gained:0,r=this.state?this.state.price:0;this.state&&this.state.status;return(0,a.jsxs)(m.Fragment,{children:[e,(0,a.jsx)(x.default,{title:"Wallet Tracker"}),(0,a.jsx)("div",{className:"container my-5",children:(0,a.jsx)("div",{className:"row",children:(0,a.jsx)("div",{className:"col-12 col-lg-12",children:(0,a.jsxs)("div",{className:"card shadow bg-default",children:[(0,a.jsx)("div",{className:"card-header bg-transparent text-white",children:(0,a.jsxs)("div",{className:"d-flex align-items-center",children:[(0,a.jsx)("div",{className:"flex-fill",children:(0,a.jsx)("h3",{className:"mb-0",children:"Tracker"})}),(0,a.jsx)("div",{className:"flex-fill text-end",children:(0,a.jsx)("a",{href:"",id:"toggleRanks",className:"btn btn-info",children:"View Ranks"})})]})}),(0,a.jsx)("div",{style:{backgroundColor:"rgba(0,0,0,0.1)"},children:this.state?(0,a.jsx)("div",{children:(0,a.jsxs)("div",{className:"d-flex flex-column flex-lg-row text-center align-items-lg-center py-5 py-lg-0",style:{minHeight:"100px"},children:[(0,a.jsxs)("div",{className:"flex-fill py-2 py-lg-0",children:[(0,a.jsx)("h4",{className:"mb-0",children:t}),(0,a.jsx)("p",{className:"small mb-0",children:"Balance"})]}),(0,a.jsxs)("div",{className:"flex-fill py-2 py-lg-0",children:[(0,a.jsx)("h4",{className:"mb-0",children:g.Nm(s.toFixed(3))}),(0,a.jsx)("p",{className:"small mb-0",children:"Liquidity"})]}),(0,a.jsxs)("div",{className:"flex-fill py-2 py-lg-0",children:[(0,a.jsxs)("h4",{className:"mb-0 text-success",children:["$",n]}),(0,a.jsx)("p",{className:"small mb-0",children:"Value (USD)"})]}),(0,a.jsxs)("div",{className:"flex-fill py-2 py-lg-0",children:[(0,a.jsx)("h4",{className:"mb-0",children:r}),(0,a.jsx)("p",{className:"small mb-0",children:"Price"})]})]})}):(0,a.jsx)("div",{className:"text-white-50 text-center pl-3",style:{height:"100px",lineHeight:"1em",paddingTop:42},children:"Enter your safemoon wallet address below to get started."})}),(0,a.jsxs)("div",{className:"card-body",children:[(0,a.jsxs)("div",{className:"input-group shadow-none card-input mb-3",style:{maxWidth:"700px"},children:[(0,a.jsx)("input",{type:"text",id:"wallet_address",autoComplete:"off",placeholder:"",className:"form-control border-0",style:{fontFamily:"monospace",fontSize:"14px"}}),(0,a.jsx)("div",{className:"input-group-append",children:(0,a.jsx)("button",{id:"track",className:"btn btn-info",children:"Start Tracking"})})]}),(0,a.jsx)("p",{className:"small mb-0",children:"The data above will refresh automatically every 10 seconds. Refreshing the page will cause it lose your stats. This data is not stored on our server, it is fetched directly from the network. Withdrawing from your balance may also mess this number up."})]}),(0,a.jsx)("div",{id:"rankings",style:{display:"none"},children:(0,a.jsxs)("table",{className:" table-borderless table-striped text-light table-flush w-100",children:[(0,a.jsx)("thead",{className:"border-0 text-muted",children:(0,a.jsxs)("tr",{children:[(0,a.jsx)("th",{className:"border-0",style:{width:"75px"}}),(0,a.jsx)("th",{className:"border-0",children:"Title"}),(0,a.jsx)("th",{className:"border-0",children:"Min"}),(0,a.jsx)("th",{className:"border-0",children:"Max"})]})}),(0,a.jsxs)("tbody",{children:[(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"text-center",children:(0,a.jsx)("img",{src:"../img/ranks/KRAKEN.png",height:50})}),(0,a.jsx)("td",{children:"Kraken"}),(0,a.jsx)("td",{colSpan:2,children:"1 Trillion+"})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"text-center",children:(0,a.jsx)("img",{src:"../img/ranks/WHALE.png",height:50})}),(0,a.jsx)("td",{children:"Whale"}),(0,a.jsxs)("td",{children:["500.0",(0,a.jsx)("small",{className:"text-muted",children:"B"})]}),(0,a.jsxs)("td",{children:["999.99",(0,a.jsx)("small",{className:"text-muted",children:"B"})]})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"text-center",children:(0,a.jsx)("img",{src:"../img/ranks/SHARK.png",height:50})}),(0,a.jsx)("td",{children:"Shark"}),(0,a.jsxs)("td",{children:["100.00 ",(0,a.jsx)("small",{className:"text-muted",children:"B"})]}),(0,a.jsxs)("td",{children:["499.99 ",(0,a.jsx)("small",{className:"text-muted",children:"B"})]})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"text-center",children:(0,a.jsx)("img",{src:"../img/ranks/Dolphin.png",height:50})}),(0,a.jsx)("td",{children:"Dolphin"}),(0,a.jsxs)("td",{children:["10.00 ",(0,a.jsx)("small",{className:"text-muted",children:"B"})]}),(0,a.jsxs)("td",{children:["99.99 ",(0,a.jsx)("small",{className:"text-muted",children:"B"})]})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"text-center",children:(0,a.jsx)("img",{src:"../img/ranks/turtle.png",height:50})}),(0,a.jsx)("td",{children:"Sea Turtle"}),(0,a.jsxs)("td",{children:["1.00 ",(0,a.jsx)("small",{className:"text-muted",children:"B"})]}),(0,a.jsxs)("td",{children:["9.99 ",(0,a.jsx)("small",{className:"text-muted",children:"B"})]})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"text-center",children:(0,a.jsx)("img",{src:"../img/ranks/fish.png",height:50})}),(0,a.jsx)("td",{children:"Fish"}),(0,a.jsxs)("td",{children:["500.00 ",(0,a.jsx)("small",{className:"text-muted",children:"M"})]}),(0,a.jsxs)("td",{children:["999.99 ",(0,a.jsx)("small",{className:"text-muted",children:"M"})]})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"text-center",children:(0,a.jsx)("img",{src:"../img/ranks/crab.png",height:50})}),(0,a.jsx)("td",{children:"Crab"}),(0,a.jsxs)("td",{children:["100.00 ",(0,a.jsx)("small",{className:"text-muted",children:"M"})]}),(0,a.jsxs)("td",{children:["499.99 ",(0,a.jsx)("small",{className:"text-muted",children:"M"})]})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"text-center",children:(0,a.jsx)("img",{src:"../img/ranks/hermit.png",height:50})}),(0,a.jsx)("td",{children:"Hermit Crab"}),(0,a.jsxs)("td",{children:["1.00 ",(0,a.jsx)("small",{className:"text-muted",children:"M"})]}),(0,a.jsxs)("td",{children:["99.99 ",(0,a.jsx)("small",{className:"text-muted",children:"M"})]})]}),(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"text-center",children:(0,a.jsx)("img",{src:"../img/ranks/plankton.png",height:50})}),(0,a.jsx)("td",{children:"Plankton"}),(0,a.jsx)("td",{colSpan:2,children:"< 999,999"})]})]})]})})]})})})}),(0,a.jsx)(p.default,{})]})}}]),n}(m.Component);t.default=N},40368:function(e){e.exports={particles:{number:{value:200,density:{enable:!0,value_area:789.1476416322727}},color:{value:"#AAAAAA"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5,move:{radius:0}},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:1,random:!0,anim:{enable:!0,speed:.2,opacity_min:0,sync:!1}},size:{value:2,random:!0,anim:{enable:!0,speed:2,size_min:0,sync:!1}},line_linked:{enable:!1,distance:30,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:.2,direction:"bottom",random:!1,straight:!0,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"window",events:{onhover:{enable:!0,mode:"bubble"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:100,line_linked:{opacity:1}},bubble:{distance:120,size:3,duration:1,opacity:1,color:"#FFFFFF",speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0}},56259:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/wallet",function(){return n(25737)}])},9008:function(e,t,n){e.exports=n(57947)}},function(e){e.O(0,[571,618,962,223,774,888,179],(function(){return t=56259,e(e.s=t);var t}));var t=e.O();_N_E=t}]);