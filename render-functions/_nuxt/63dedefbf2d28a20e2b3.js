(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{308:function(e,t,r){var content=r(429);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(12).default)("dfed09f6",content,!0,{sourceMap:!1})},330:function(e,t,r){"use strict";var n=r(0),o=(r(77),r(5),r(4),r(8),r(181),r(43),r(23)),l=r(337),c={cache:{},extendtoken:"$extend",reftoken:"$ref",pathtoken:"#",debug:!1,clone:function(e){var t,r;if(null===e||"object"!==Object(o.a)(e)||"function"==typeof e)return e;for(t in r=e.constructor(),e)r[t]=c.clone(e[t]);return r},findIds:function(e,t){var r,n,l,h;for(n in r=!1,l={},e)h=e[n],null!=e.id&&(r=e.id),r&&"id"!==n&&(l[n]=h),"object"===Object(o.a)(h)&&c.findIds(h,t);if(r)return t[r]=l,l},get_json_pointer:function(e,t){var r,n;"."===(r=(r=e.replace(/\\\//,"#SLASH#").replace(/\//g,".").replace(/#SLASH#/,"/")).replace(new RegExp("^"+c.pathtoken),""))[0]&&(r=r.substr(1,r.length-1));try{c.debug&&console.log("evaluating '"+r+"'"),n=l.getter(r)(t)}catch(e){console.error(e),n=""}return n},replace:function(e,t,r){var n,l,h,m,f,d;for(n in f=[],e)d=e[n],c.debug&&"string"==typeof l&&console.log("checking "+n),null!=d&&null!=d[c.reftoken]?(l=d[c.reftoken],c.debug&&"string"==typeof l&&console.log("checking "+n+" -> "+l),Object.keys(d).length>1&&console.error("json-ref-lite error: object '"+n+"' contains reference as well as other properties..ignoring properties"),Array.isArray(l)?l=c.replace(l,t,r):null!=t[l]?e[n]=t[l]:String(l).match(new RegExp("^"+c.pathtoken))&&(c.debug&&console.log("checking "+l+" pathtoken"),e[n]=c.get_json_pointer(l,r)),null!=(null!=(h=e[n])?h.length:void 0)&&0===(null!=(m=e[n])?m.length:void 0)&&c.debug?f.push(console.log(l+" reference not found")):f.push(void 0)):"object"===Object(o.a)(d)?f.push(c.replace(d,t,r)):f.push(void 0);return f},extend:function(e){var t,r,n,l,h,m;if("object"===Object(o.a)(e)){for(t in n=[],e){if(m=e[t],t===c.extendtoken&&null!=m[c.reftoken]){for(l in r=c.get_json_pointer(m[c.reftoken],e),m)h=m[l],l!==c.reftoken&&(r[l]=h);delete e[t]}"object"===Object(o.a)(m)?n.push(m=c.extend(m)):n.push(void 0)}return n}},resolve:function(e){var t;return t={},c.findIds(e,t),c.debug&&Object.keys(t).length&&console.dir(t),c.replace(e,t,e),e},evaluate:function(e,data,t){var r,n,l;for(r in null==t&&(t=c.evaluateStr),n=c.clone(e))"string"==typeof(l=n[r])&&(e[r]=t(l,data)),"object"===Object(o.a)(l)&&(e[r]=c.evaluate(l,data));return e},evaluateStr:function(e,data){if("string"!=typeof e)return e;if("{"!==e[0]||"}"!==e[e.length-1])return e.replace(/(\{)(.*?)(\})/g,(function(e,t,r){var n;if(n="",null==data||null==r)return n;if(null!=data[r]&&"function"==typeof data[r])n=data[r]();else if(null!=data[r])n=data[r];else{try{r=r.replace(new RegExp("^"+c.pathtoken+"/"),"").replace(/\//g,"."),n=l.getter(r)(data)}catch(e){err=e,n=""}null==n&&(n="")}return c.evaluateStr(n,data),n}));try{return l.getter(e.replace(/^{/,"").replace(/}$/,""))(data)}catch(e){return null}}},h=c,m={swatches:["#F44336","#E91E63","#9C27B0","#673AB7","#3F51B5","#2196F3","#03A9F4","#00BCD4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548","#9E9E9E","#607D8B","#000000"],rowLength:5,swatchSize:36,spacingSize:6},f=(r(9),r(53),r(6),r(21),r(41),r(42),r(61),r(1)),d=(r(74),r(332)),v=r(331),y=r(461),O=r(456),S={props:["htmlDescription","options"],data:function(){return{show:!1,maxWidth:200}},mounted:function(){this.htmlDescription&&(this.maxWidth=this.$el.getBoundingClientRect().left-80)}},x=r(52),j=r(118),k=r.n(j),w=r(111),_=r(449),component=Object(x.a)(S,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-tooltip",{attrs:{left:"","open-on-hover":!1,"open-on-click":!1,"content-class":"vjsf-tooltip"},scopedSlots:e._u([{key:"activator",fn:function(t){t.on;return[r("v-icon",{on:{click:function(t){e.show=!e.show}}},[e._v("\n      "+e._s(e.options.icons.info)+"\n    ")])]}}]),model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[e._v(" "),r("div",{style:"max-width: "+e.maxWidth+"px",domProps:{innerHTML:e._s(e.htmlDescription)}})])}),[],!1,null,"c1a91dda",null),P=component.exports;function $(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}k()(component,{VIcon:w.a,VTooltip:_.a});var C={props:{context:{type:Object,default:null},value:{}},components:{Tooltip:P},render:function(e){var t,r=this,n=this.context.fullSchema,o=function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?$(Object(source),!0).forEach((function(t){Object(f.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):$(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},this.context,{value:this.value}),l={},c=[e("tooltip",{slot:"append-outer",props:this.context})],h={input:function(e){return r.$emit("input",e)},change:function(e){return r.$emit("change",e)}},m={};return"string"===n.type&&(t="v-text-field","password"===n["x-display"]&&(o.type="password"),("textarea"===n["x-display"]||n.maxLength&&n.maxLength>1e3&&"single-line"!==n["x-display"])&&(t="v-textarea",o.filled=!0,l.class="v-text-field--box v-text-field--enclosed")),["number","integer"].includes(n.type)&&(t="v-text-field","slider"===n["x-display"]&&(t="v-slider"),o.type="number",void 0!==n.minimum&&(o.min=n.minimum),void 0!==n.maximum&&(o.max=n.maximum),o.step=n["x-step"]||("integer"===n.type?1:.01),h.input=function(e){return r.$emit("input",Number(e))}),"boolean"===n.type&&(t="v-checkbox",h.change=function(e){r.$emit("input",e),r.$emit("change",e)}),"array"===n.type&&"string"===n.items.type&&(t="v-combobox",o.chips=!0,o.multiple=!0,o.appendIcon="",m.selection=function(t){var n=function(){r.value.splice(t.index,1),r.$emit("input",r.value),r.$emit("change",r.value)};return e("v-chip",{props:{close:!0},on:{"click:close":n,input:n}},t.item)}),e(t,{props:o,domProps:l,on:h,scopedSlots:m},c)}},K={props:["value"]},I=r(114),E=Object(x.a)(K,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-avatar",{staticClass:"mr-2",attrs:{tile:"",size:"26"}},[e.value.startsWith("http://")||e.value.startsWith("https://")?r("img",{staticStyle:{height:"100%",width:"100%"},attrs:{src:e.value}}):e.value.startsWith("<?xml")||e.value.startsWith("<svg")?r("div",{domProps:{innerHTML:e._s(e.value)}}):r("v-icon",[e._v("\n    "+e._s(e.value)+"\n  ")])],1)}),[],!1,null,"0ad0f7a6",null),V=E.exports;k()(E,{VAvatar:I.a,VIcon:w.a});var W={props:["title","options"]},D=r(62),T=Object(x.a)(W,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[1===this.options.vuetifyVersion?t("v-list-tile-content",[t("v-list-tile-title",[this._v(this._s(this.title))])],1):t("v-list-item-content",[t("v-list-item-title",[this._v(this._s(this.title))])],1)],1)}),[],!1,null,"754d3f48",null),N=T.exports;k()(T,{VListItemContent:D.a,VListItemTitle:D.b});r(44);function M(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}var F={},J=F,L=function(e){return Object.keys(e||{}).map((function(t){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?M(Object(source),!0).forEach((function(t){Object(f.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):M(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({},e[t],{key:t})}))};F.prepareFullSchema=function(e,t,r){var n=JSON.parse(JSON.stringify(e));return"object"!==n.type?n:(n.properties=JSON.parse(JSON.stringify(L(n.properties))),n.required=n.required||[],n.dependencies=n.dependencies||{},n.dependencies&&Object.keys(n.dependencies).forEach((function(e){var l=n.dependencies[e];if(t[r]){var c=function(e,t){for(var r=t.split("."),i=0;i<r.length&&![null,void 0].includes(e);i++)e=e[r[i]];return e}(t[r],e);[null,void 0,!1].includes(c)||Array.isArray(c)&&0===c.length||"object"===Object(o.a)(c)&&0===Object.keys(c).length||(n.required=n.required.concat(l.required||[]),n.properties=n.properties.concat(L(l.properties)),l.oneOf&&(n.oneOf=(n.oneOf||[]).concat(l.oneOf)),l.allOf&&(n.allOf=(n.allOf||[]).concat(l.allOf)))}})),n)},F.getRules=function(e,t,r){var n=[];t&&n.push((function(e){return null!=e&&""!==e||r.requiredMessage})),"array"===e.type&&void 0!==e.minItems&&n.push((function(t){return!t||t.length>=e.minItems||""})),"array"===e.type&&void 0!==e.maxItems&&n.push((function(t){return!t||t.length<=e.maxItems||""})),"string"===e.type&&void 0!==e.minLength&&n.push((function(t){return null==t||t.length>=e.minLength||""})),"string"===e.type&&void 0!==e.maxLength&&n.push((function(t){return null==t||t.length<=e.maxLength||""})),["number","integer"].includes(e.type)&&void 0!==e.maximum&&n.push((function(t){return null==t||t<=e.maximum||""})),["number","integer"].includes(e.type)&&void 0!==e.minimum&&n.push((function(t){return null==t||t>=e.minimum||""})),e.enum&&n.push((function(t){return null==t||!!e.enum.find((function(e){return JSON.stringify(e)===JSON.stringify(t)}))||""})),"array"===e.type&&e.items.enum&&n.push((function(t){return null==t||!t.find((function(t){return!e.items.enum.find((function(e){return JSON.stringify(e)===JSON.stringify(t)}))}))||""}));var o=F.isOneOfSelect(e);return o&&"array"!==e.type&&n.push((function(t){return null==t||!!e.oneOf.find((function(e){return e.const===t}))||""})),o&&"array"===e.type&&n.push((function(t){return null==t||!t.find((function(t){return!e.items.oneOf.find((function(e){return e.const===t}))}))||""})),n},F.isOneOfSelect=function(e){return"array"===e.type&&["string","integer","number"].includes(e.items.type)&&e.items.oneOf||["string","integer","number"].includes(e.type)&&e.oneOf};var U={},A=U;U.getSelectItems=function(e,t,r,n,o){var l=[];if(e)if("object"===t.type&&t.properties&&Object.keys(t.properties).length||"array"===t.type&&t.items&&"object"===t.items.type&&t.items.properties&&Object.keys(t.items.properties).length){var c=t.properties?t.properties.map((function(p){return p.key})):Object.keys(t.items.properties);e.forEach((function(e){var t={};c.forEach((function(r){void 0!==e[r]&&(t[r]=e[r])})),l.push(t)}))}else e.forEach((function(e){return l.push(e)}));else;return l};var R=function(e,t,r){return![null,void 0].includes(e)&&(![null,void 0].includes(t)&&JSON.stringify("object"===Object(o.a)(e)?e[r]:e)===JSON.stringify("object"===Object(o.a)(t)?t[r]:t))};function B(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function H(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?B(Object(source),!0).forEach((function(t){Object(f.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):B(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}U.fillSelectItems=function(e,t,r,n,o){var l=t[r];l&&("array"===e.type?l.map((function(e){return e})).reverse().forEach((function(e){n.find((function(t){return R(t,e,o)}))||n.push(e)})):n.find((function(e){return R(e,l,o)}))||n.push(l))},U.fillList=function(e,t,r,n,o){var l=t[r];l&&n.length&&(n.forEach((function(e){l.find((function(t){return R(e,t,o)}))||l.push(e)})),l.forEach((function(e,i){n.find((function(t){return R(t,e,o)}))||(l[i]=null)})),t[r]=t[r].filter((function(e){return!!e})))};var z=r(340),Q=r(313)(),G={name:"VJsonschemaForm",components:{Property:{name:"Property",components:{SelectIcon:V,SelectItem:N,Tooltip:P,SimpleField:C,VBtn:d.a,VTextField:v.a,VCheckbox:y.a,VCombobox:O.a},props:["schema","modelWrapper","modelRoot","modelKey","parentKey","required","options"],data:function(){return{ready:!1,menu:!1,rawSelectItems:null,selectItems:null,q:"",currentOneOf:null,showCurrentOneOf:!0,fromUrlParams:{},loading:!1,folded:!0,showColorPicker:!1,subModels:{},oldFlat:"\n        background-color: none !important;\n        border-color: none !important;\n        "}},computed:{fullSchema:function(){return J.prepareFullSchema(this.schema,this.modelWrapper,this.modelKey)},htmlDescription:function(){return this.fullSchema&&this.fullSchema.description?Q.render(this.fullSchema.description):null},fullKey:function(){return(this.parentKey+this.modelKey).replace("root.","")},label:function(){return this.fullSchema.title||("string"==typeof this.modelKey?this.modelKey:"")},rules:function(){return J.getRules(this.fullSchema,this.required,this.options)},fromUrl:function(){return!(!this.fullSchema["x-fromUrl"]||-1!==this.fullSchema["x-fromUrl"].indexOf("{q}"))},fromUrlWithQuery:function(){return!(!this.fullSchema["x-fromUrl"]||-1===this.fullSchema["x-fromUrl"].indexOf("{q}"))},fromUrlKeys:function(){return this.fullSchema["x-fromUrl"]?z(this.fullSchema["x-fromUrl"],/\{(.*?)\}/g).toArray().filter((function(e){return"q"!==e})):null},itemKey:function(){return this.fullSchema["x-itemKey"]||"key"},itemTitle:function(){return this.fullSchema["x-itemTitle"]||"title"},itemIcon:function(){return this.fullSchema["x-itemIcon"]||("icon"===this.fullSchema["x-display"]?this.itemKey:null)},disabled:function(){return this.options.disableAll},foldable:function(){return this.options.autoFoldObjects&&this.parentKey&&this.fullSchema.title},oneOfConstProp:function(){if(this.fullSchema.oneOf){var e=this.fullSchema.oneOf[0].properties,t=Object.keys(e).find((function(p){return!!e[p].const}));if(t)return H({},e[t],{key:t,htmlDescription:Q.render(e[t].description||"")})}},oneOfRequired:function(){var e=this;return!!(this.oneOfConstProp&&this.fullSchema&&this.fullSchema.required&&this.fullSchema.required.find((function(t){return t===e.oneOfConstProp.key})))},oneOfRules:function(){var e=this,t=[];return this.oneOfRequired&&t.push((function(t){return null!=t&&""!==t||e.options.requiredMessage})),t},oneOfSelect:function(){return J.isOneOfSelect(this.fullSchema)},slotName:function(){return this.fullSchema["x-display"]&&this.fullSchema["x-display"].startsWith("custom-")?this.fullSchema["x-display"]:this.fullKey},slotParams:function(){return{plots:{fullSchema:this.fullSchema,fullKey:this.fullKey,label:this.label,disabled:this.disabled,required:this.required,rules:this.rules,options:this.options,htmlDescription:this.htmlDescription}}},propertyClass:function(){var e=this.fullKey.replace(/\./g,"-").replace(/[0-9]/g,"");return"vjsf-property vjsf-property-".concat(e," xs12 ").concat(this.fullSchema["x-class"]||"")}},watch:{q:function(){this.modelWrapper[this.modelKey]&&this.modelWrapper[this.modelKey][this.itemTitle]===this.q||this.fetchSelectItems()},fullSchema:{handler:function(){this.fullSchema&&JSON.stringify(this.fullSchema)!==this.lastFullSchema&&(this.lastFullSchema=JSON.stringify(this.fullSchema),this.initFromSchema(),this.cleanUpExtraProperties(),this.applySubModels(),this.ready=!0)},immediate:!0},currentOneOf:function(e,t){var r=this;this.showCurrentOneOf=!1,this.$nextTick((function(){r.showCurrentOneOf=!0,r.currentOneOf||r.$set(r.subModels,"currentOneOf",{}),r.cleanUpExtraProperties()}))},subModels:{handler:function(){this.cleanUpExtraProperties(),this.applySubModels()},deep:!0},rawSelectItems:{handler:function(){this.updateSelectItems()},immediate:!0}},render:function(e){if(this.fullSchema&&void 0===this.fullSchema.const&&"hidden"!==this.fullSchema["x-display"]){var t=this.renderSimpleField(e)||this.renderObjectContainer(e),r=this.$scopedSlots["before-".concat(this.slotName)],n=this.$scopedSlots[this.slotName],o=this.$scopedSlots["after-".concat(this.slotName)];return e("v-flex",{class:this.propertyClass,style:this.fullSchema["x-style"]||""},[r&&r(this.slotParams),n?n(this.slotParams):t,o&&o(this.slotParams)])}},methods:{renderObjectContainer:function(e){var t=this,r=this.fullSchema;if("object"===r.type){var n=[];r.title&&n.push(e("v-subheader",{style:this.foldable?"cursor:pointer;":"",class:"mt-2",on:{click:function(){t.folded=!t.folded}}},["".concat(r.title," "),this.foldable&&this.folded&&e("v-icon",this.options.icons.dropdown),this.foldable&&!this.folded&&e("v-icon",this.options.icons.dropup)]));var o={error:function(e){return t.$emit("error",e)},input:function(e){return t.$emit("input",e)},change:function(e){return t.$emit("change",e)}};return n.push(e("v-slide-y-transition",[e("v-layout",{attrs:{row:!0,wrap:!0},class:"ma-0",style:this.foldable&&this.folded&&"display: none;"},[r.description&&e("p",{domProps:{innerHTML:this.htmlDescription}})].concat(r.properties.map((function(n){return e("property",{props:{schema:n,modelWrapper:t.modelWrapper[t.modelKey],modelRoot:t.modelRoot,modelKey:n.key,parentKey:"".concat(t.fullKey,"."),required:!(!r.required||!r.required.includes(n.key)),options:t.options},on:o})}))))])),e("div",n)}},renderSimpleField:function(e){var t,r=this,n=this.fullSchema,o={value:this.modelWrapper[this.modelKey],label:this.label,disabled:this.disabled,rules:this.rules,required:this.required},l={},c=[],h={input:function(e){return r.input(e)},change:function(e){return r.change(e)}},m={};return this.htmlDescription&&c.push(e("tooltip",{slot:"append-outer",props:{htmlDescription:this.htmlDescription,options:this.options}})),"string"===n.type&&(t="v-text-field","password"===n["x-display"]&&(o.type="password"),("textarea"===n["x-display"]||n.maxLength&&n.maxLength>1e3&&"single-line"!==n["x-display"])&&(t="v-textarea",o.filled=!0,l.class="v-text-field--box v-text-field--enclosed")),["number","integer"].includes(n.type)&&(t="v-text-field","slider"===n["x-display"]&&(t="v-slider"),o.type="number",void 0!==n.minimum&&(o.min=n.minimum),void 0!==n.maximum&&(o.max=n.maximum),o.step=n["x-step"]||("integer"===n.type?1:.01),h.input=function(e){return r.input(Number(e))}),"boolean"===n.type&&(t="v-checkbox",h.change=function(e){r.input(e),r.change(e)}),"array"===n.type&&"string"===n.items.type&&(t="v-combobox",o.chips=!0,o.multiple=!0,o.appendIcon="",m.selection=function(t){var n=function(){r.value.splice(t.index,1),r.input(r.value),r.change(r.value)};return e("v-chip",{props:{close:!0},on:{"click:close":n,input:n}},t.item)}),t?e(t,{props:o,domProps:l,on:h,scopedSlots:m},c):null},updateSelectItems:function(){var e=A.getSelectItems(this.rawSelectItems,this.fullSchema,this.modelWrapper,this.modelKey,this.itemKey);"list"===this.fullSchema["x-display"]?A.fillList(this.fullSchema,this.modelWrapper,this.modelKey,e,this.itemKey):A.fillSelectItems(this.fullSchema,this.modelWrapper,this.modelKey,e,this.itemKey),JSON.stringify(e)!==JSON.stringify(this.selectItems)&&(this.selectItems=e)},change:function(){this.updateSelectItems(),this.$emit("change",{key:this.fullKey.replace(/allOf-([0-9]+)\./g,""),model:this.modelWrapper[this.modelKey]})},input:function(e){this.modelWrapper[this.modelKey]=e,this.$emit("input",{key:this.fullKey.replace(/allOf-([0-9]+)\./g,""),model:this.modelWrapper[this.modelKey]})},defaultValue:function(e){return"object"!==e.type||e["x-fromUrl"]||e["x-fromData"]||e.enum?"array"===e.type?[]:null:{}},fetchSelectItems:function(){var e=this;if(!this.options.httpLib)return this.$emit("error","No http lib found to perform ajax request");var t=this.fullSchema["x-fromUrl"].replace("{q}",this.q||""),r=!0,n=!1,o=void 0;try{for(var l,c=this.fromUrlKeys[Symbol.iterator]();!(r=(l=c.next()).done);r=!0){var h=l.value;if(void 0===this.fromUrlParams[h])return;t=t.replace("{".concat(h,"}"),this.fromUrlParams[h])}}catch(e){n=!0,o=e}finally{try{r||null==c.return||c.return()}finally{if(n)throw o}}this.loading=!0,this.options.httpLib.get(t).then((function(r){var body=r.data||r.body,n=e.fullSchema["x-itemsProp"]?body[e.fullSchema["x-itemsProp"]]:body;if(!Array.isArray(n))throw new Error("Result of http fetch ".concat(t," is not an array"));e.rawSelectItems=n,e.loading=!1})).catch((function(t){e.$emit("error",t.message),e.loading=!1}))},cleanUpExtraProperties:function(){var e=this;"object"===this.fullSchema.type&&(this.options.removeAdditionalProperties||!1===this.fullSchema.additionalProperties)&&this.fullSchema.properties&&Object.keys(this.fullSchema.properties).length&&this.modelWrapper[this.modelKey]&&Object.keys(this.modelWrapper[this.modelKey]).forEach((function(t){e.fullSchema.properties.find((function(p){return p.key===t}))||delete e.modelWrapper[e.modelKey][t]}))},applySubModels:function(){var e=this;Object.keys(this.subModels).forEach((function(t){Object.keys(e.subModels[t]).forEach((function(r){e.modelWrapper[e.modelKey][r]!==e.subModels[t][r]&&e.$set(e.modelWrapper[e.modelKey],r,e.subModels[t][r])}))}))},initFromSchema:function(){var e=this,t=this.modelWrapper[this.modelKey];void 0===t&&(t=this.defaultValue(this.fullSchema),void 0!==this.fullSchema.default&&(t=JSON.parse(JSON.stringify(this.fullSchema.default)))),void 0!==this.fullSchema.const&&(t=this.fullSchema.const),"string"===this.fullSchema.type&&"hexcolor"===this.fullSchema.format&&(t=t||""),this.fromUrl&&this.fetchSelectItems(),("array"===this.fullSchema.type&&this.fullSchema.items.enum||this.fullSchema.enum)&&(this.rawSelectItems="array"===this.fullSchema.type?this.fullSchema.items.enum:this.fullSchema.enum),this.oneOfSelect&&(this.rawSelectItems=("array"===this.fullSchema.type?this.fullSchema.items:this.fullSchema).oneOf.map((function(t){var r;return H({},t,(r={},Object(f.a)(r,e.itemKey,t.const||t.enum&&t.enum[0]),Object(f.a)(r,e.itemTitle,t.title),r))}))),this.fromUrlWithQuery&&t&&void 0!==t[this.itemTitle]&&(this.q=t[this.itemTitle]),this.fullSchema["x-fromData"]&&this.$watch("modelRoot."+this.fullSchema["x-fromData"],(function(t){e.rawSelectItems=t}),{immediate:!0}),this.fromUrlKeys&&this.fromUrlKeys.forEach((function(t){t.startsWith("context.")?e.$watch("options."+t,(function(r){e.fromUrlParams[t]=r,e.fetchSelectItems()}),{immediate:!0}):e.$watch("modelRoot."+t,(function(r){e.fromUrlParams[t]=r,e.fetchSelectItems()}),{immediate:!0})})),"object"===this.fullSchema.type&&this.fullSchema.allOf&&this.fullSchema.allOf.forEach((function(r,i){e.$set(e.subModels,"allOf-"+i,JSON.parse(JSON.stringify(t)))})),this.currentOneOf=null,"object"===this.fullSchema.type&&this.fullSchema.oneOf&&!this.currentOneOf&&this.oneOfConstProp&&(t&&t[this.oneOfConstProp.key]?this.currentOneOf=this.fullSchema.oneOf.find((function(r){return r.properties[e.oneOfConstProp.key].const===t[e.oneOfConstProp.key]})):this.fullSchema.default&&(this.currentOneOf=this.fullSchema.oneOf.find((function(t){return t.properties[e.oneOfConstProp.key].const===e.fullSchema.default[e.oneOfConstProp.key]})))),this.currentOneOf?this.$set(this.subModels,"currentOneOf",JSON.parse(JSON.stringify(t))):this.$set(this.subModels,"currentOneOf",{}),"array"===this.fullSchema.type&&(t=t.filter((function(e){return![void 0,null].includes(e)}))),this.$set(this.modelWrapper,this.modelKey,t)}}}},props:["schema","model","options"],data:function(){return{modelWrapper:{root:this.model}}},computed:{resolvedSchema:function(){return h.resolve(this.schema)},fullOptions:function(){var e=this.axios||this.$http||this.$axios,t=this.$vuetify.theme.themes?2:1,r={md:{calendar:"event",clock:"clock",info:"info",dropdown:"arrow_drop_down",dropup:"arrow_drop_up",add:"add",reorder:"reorder",delete:"delete"},mdi:{calendar:"mdi-calendar",clock:"mdi-clock",info:"mdi-information",dropdown:"mdi-menu-down",dropup:"mdi-menu-up",add:"mdi-plus",reorder:"mdi-reorder-horizontal",delete:"mdi-delete"}}[1===t?"md":this.$vuetify.icons&&this.$vuetify.icons.iconfont||"mdi"],n={debug:!1,httpLib:e,disableAll:!1,colors:m,autoFoldObjects:!1,allOfTabs:!1,requiredMessage:"This information is required",noDataMessage:"No matching value found",searchMessage:"Search...",vuetifyVersion:t,tabsMode:"grow",locale:"en",removeAdditionalProperties:!0},o=Object.assign({},n,this.resolvedSchema["x-options"]||{},this.options||{});return o.icons=Object.assign(r,o.icons||{}),o}}},X=(r(428),{components:{VJsf:Object(x.a)(G,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.resolvedSchema?r("property",{attrs:{schema:e.resolvedSchema,"model-root":e.modelWrapper.root,"model-wrapper":e.modelWrapper,options:e.fullOptions,"model-key":"root","parent-key":""},on:{error:function(t){return e.$emit("error",t)},change:function(t){return e.$emit("change",t)},input:function(t){return e.$emit("input",t)}},scopedSlots:e._u([e._l(e.$scopedSlots,(function(t,r){return{key:r,fn:function(t){return[e._t(r,null,null,t)]}}}))],null,!0)},[e._l(e.$slots,(function(t,r){return e._t(r,null,{slot:r})}))],2):e._e()}),[],!1,null,null,null).exports},props:{template:{type:String,default:'<v-jsf :model="model" :schema="schema" :options="options" />'},model:{type:Object,required:!0},schema:{type:Object,required:!0},options:{type:Object,required:!0}},render:function(e){return this.compiledTemplate=this.compiledTemplate||n.a.compile(this.template),this.compiledTemplate.render.call(this,e)}}),Y=r(313)(),Z=r(430),ee={components:{Example:X},props:{params:{type:Object,required:!0,default:null}},data:function(){return{showCode:0,valid:null,validated:!1,dark:!1}},computed:{prettySchema:function(){return this.$hljs&&this.params.schema?this.$hljs.highlight("json",JSON.stringify(this.params.schema,null,2)).value:null},prettyModel:function(){return this.$hljs&&this.params.model?this.$hljs.highlight("json",JSON.stringify(this.params.model,null,2)).value:null},prettyDescription:function(){return Y.render(this.params.description||"")},prettyTemplate:function(){return this.$hljs&&this.params.template?this.$hljs.highlight("html",this.params.template).value:null},validationColor:function(){return this.valid?"success":this.validated?"error":"light"},codepenParams:function(){var template=this.params.template||'<v-jsf :model="model" :options="options" :schema="schema" />';return{title:"vjsf - ".concat(this.params.title),description:this.params.description,editors:"101",html:"<v-app>\n  ".concat(template,"\n</v-app>"),js:"\nconst model = ".concat(Z(this.params.model||{}),"\n\nconst options =  ").concat(Z(this.params.options)||{},"\n\nconst schema = ").concat(Z(this.params.schema),"\n\nnew Vue({\n  el: 'v-app',\n  data: {\n    model,\n    options,\n    schema\n  }\n});"),css_external:"https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900;https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css;https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.min.css;https://cdn.jsdelivr.net/npm/@koumoul/vuetify-jsonschema-form@0.26/dist/main.css",js_external:"https://cdn.jsdelivr.net/npm/vue@2.x/dist/vue.js;https://cdn.jsdelivr.net/npm/vuetify@2.x/dist/vuetify.js;https://cdn.jsdelivr.net/npm/@koumoul/vuetify-jsonschema-form@0.26/dist/main.js"}}},methods:{toggleValidate:function(){this.validated?this.$refs.form.resetValidation():this.$refs.form.validate(),this.validated=!this.validated}}},te=r(327),re=r(328),ne=r(450),ie=r(451),oe=r(452),se=r(49),le=r(296),ae=r(453),ce=r(454),ue=r(460),pe=r(442),he=r(455),me=r(439),fe=r(434),de=Object(x.a)(ee,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",[r("v-col",{attrs:{xs:"12",sm:"12",md:"6"}},[e.params.title?r("h2",{staticClass:"headline mb-2",attrs:{id:e.params.id}},[r("v-btn",{staticClass:"mr-1",attrs:{color:"primary",icon:"",text:"",to:{name:"examples",hash:"#"+e.params.id}}},[r("v-icon",[e._v("\n          mdi-link\n        ")])],1),e._v(e._s(e.params.title)+"\n    ")],1):e._e(),e._v(" "),e.prettyDescription?r("p",{domProps:{innerHTML:e._s(e.prettyDescription)}}):e._e()]),e._v(" "),r("v-col",{attrs:{xs:"12",sm:"12",md:"6"}},[r("v-card",{attrs:{dark:e.dark}},[r("v-toolbar",{attrs:{color:"primary",dark:"",dense:"",flat:""}},[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{icon:"",title:"show parameters"},on:{click:function(t){e.dark=!e.dark}}},[r("v-icon",[e._v("mdi-invert-colors")])],1),e._v(" "),r("v-btn",{attrs:{icon:"",title:"show parameters"},on:{click:function(t){e.showCode=e.showCode?0:1}}},[r("v-icon",[e._v("mdi-code-braces")])],1),e._v(" "),r("form",{attrs:{action:"https://codepen.io/pen/define",method:"POST",target:"_blank"}},[r("input",{attrs:{type:"hidden",name:"data"},domProps:{value:JSON.stringify(e.codepenParams)}}),e._v(" "),r("v-btn",{attrs:{icon:"",title:"open example in codepen",type:"submit"}},[r("v-icon",[e._v("mdi-codepen")])],1)],1)],1),e._v(" "),r("client-only",[r("v-card-text",{staticClass:"pb-10"},[r("v-form",{ref:"form",model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("example",{attrs:{model:e.params.model,schema:e.params.schema,options:e.params.options||{},template:e.params.template}})],1),e._v(" "),r("div",{staticStyle:{position:"absolute",bottom:"10px",right:"10px"}},[r("v-btn",{attrs:{color:e.validationColor,small:"",fab:"",title:e.validated?"Reset validation":"Validate form"},on:{click:e.toggleValidate}},[r("v-icon",[e._v(e._s(e.valid?"mdi-checkbox-marked-outline":"mdi-checkbox-blank-outline"))])],1)],1)],1),e._v(" "),r("v-window",{attrs:{vertical:""},model:{value:e.showCode,callback:function(t){e.showCode=t},expression:"showCode"}},[r("v-window-item"),e._v(" "),r("v-window-item",[r("v-card",{staticClass:"pa-0",staticStyle:{"overflow-y":"auto"},attrs:{dark:"",tile:"",flat:"","max-height":"350"}},[r("v-tabs",[r("v-tabs-slider"),e._v(" "),e.params.template?r("v-tab",{attrs:{href:"#tab-"+e.params.id+"-template"}},[e._v("\n                  Template\n                ")]):e._e(),e._v(" "),r("v-tab-item",{attrs:{value:"tab-"+e.params.id+"-template"}},[r("v-sheet",{staticClass:"pa-2",attrs:{dark:"",tile:""}},[r("pre",{domProps:{innerHTML:e._s(e.prettyTemplate)}})])],1),e._v(" "),r("v-tab",{attrs:{href:"#tab-"+e.params.id+"-schema"}},[e._v("\n                  Schema\n                ")]),e._v(" "),r("v-tab-item",{attrs:{value:"tab-"+e.params.id+"-schema"}},[r("v-sheet",{staticClass:"pa-2",attrs:{dark:"",tile:""}},[r("pre",{domProps:{innerHTML:e._s(e.prettySchema)}})])],1),e._v(" "),r("v-tab",{attrs:{href:"#tab-"+e.params.id+"-model"}},[e._v("\n                  Model\n                ")]),e._v(" "),r("v-tab-item",{attrs:{value:"tab-"+e.params.id+"-model"}},[r("v-sheet",{staticClass:"pa-2",attrs:{dark:"",tile:""}},[r("pre",{domProps:{innerHTML:e._s(e.prettyModel)}})])],1)],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,"c75fd68c",null);t.a=de.exports;k()(de,{VBtn:d.a,VCard:te.a,VCardText:re.a,VCol:ne.a,VForm:ie.a,VIcon:w.a,VRow:oe.a,VSheet:se.a,VSpacer:le.a,VTab:ae.a,VTabItem:ce.a,VTabs:ue.a,VTabsSlider:pe.a,VToolbar:he.a,VWindow:me.a,VWindowItem:fe.a})},428:function(e,t,r){"use strict";var n=r(308);r.n(n).a},429:function(e,t,r){(t=r(11)(!1)).push([e.i,".vjsf-property .array-card .v-card__text{padding:6px 16px 0}.vjsf-property .array-card .v-card__actions{padding:0 16px 6px}.vjsf-property .v-input--selection-controls{margin-top:0}.vjsf-tooltip p:last-child{margin-bottom:0}.vjsf-property .color-picker-trigger{width:36px;height:36px;border-radius:50%;cursor:pointer;display:inline-block;border:2px solid #ccc}.vjsf-property .color-picker-trigger-empty{background:linear-gradient(to top right,transparent 0,transparent calc(50% - 2.4px),#de080a 50%,transparent calc(50% + 2.4px),transparent)}",""]),e.exports=t}}]);