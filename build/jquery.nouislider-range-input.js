!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("jquery"),require("nouislider"),require("wnumb"));else if("function"==typeof define&&define.amd)define(["jquery","nouislider","wnumb"],t);else{var r="object"==typeof exports?t(require("jquery"),require("nouislider"),require("wnumb")):t(e.jQuery,e.nouislider,e.wnumb);for(var n in r)("object"==typeof exports?exports:e)[n]=r[n]}}(window,function(e,t,r){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){const n=r(1),o=r(2),i=r(3);n.fn.enableNoUISlider=function(){this.filter("input[type=range]:not(.js-nouislider-initialized)").each(function(){const e=n(this);e.css({display:"none"}).addClass("js-nouislider-initialized");const t=n('<div class="nouislider-range-wrapper"><div></div></div>').insertAfter(e),r=e.attr("min")?Number(e.attr("min")):0,u=e.attr("max")?Number(e.attr("max")):100,a=e.attr("step")?Number(e.attr("step")):1,f=e.attr("value")?Number(e.attr("value")):1,l=e.data("wnumb-format")?e.data("wnumb-format"):null,s={start:f,step:a,range:{min:r,max:u},tooltips:[!0]};null!==l&&(s.format=i(l));const c=o.create(t.find("div").get(0),s);e.on("change",function(){c.set(this.value)}),c.on("change",(t,r,n)=>{e.val(n[0]).trigger("change"),c.set(n[0])})})}},function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r}])});