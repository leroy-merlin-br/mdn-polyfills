Array.prototype.some||(Array.prototype.some=function(r,o){if(null==this)throw new TypeError("Array.prototype.some called on null or undefined");if("function"!=typeof r)throw new TypeError(r+" is not a function");for(var t=Object(this),e=t.length>>>0,n=(o=2<=arguments.length?o:void 0,0);n<e;n++)if(n in t&&r.call(o,t[n],n,t))return!0;return!1});
