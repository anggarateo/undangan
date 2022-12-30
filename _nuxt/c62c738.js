(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{321:function(t,e,n){t.exports=function(){"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}var script={props:{images:{type:Array,required:!0},index:{type:Number,required:!1,default:null}},data:function(){return{imgIndex:this.index,image:null,galleryXPos:0,thumbnailWidth:120}},computed:{imageUrl:function(){var img=this.images[this.imgIndex];return"string"==typeof img?img:img.url},alt:function(){var img=this.images[this.imgIndex];return"object"===t(img)?img.alt:""},isMultiple:function(){return this.images.length>1}},watch:{index:function(t,e){var n=this;this.imgIndex=t,null==e&&null!=t&&this.$nextTick((function(){n.updateThumbails()}))}},mounted:function(){var t=this;window.addEventListener("keydown",(function(e){37===e.keyCode?t.onPrev():39===e.keyCode?t.onNext():27===e.keyCode&&t.close()}))},methods:{close:function(){var t={imgIndex:this.imgIndex};this.imgIndex=null,this.$emit("close",t)},onPrev:function(){null!==this.imgIndex&&(this.imgIndex>0?this.imgIndex--:this.imgIndex=this.images.length-1,this.updateThumbails())},onNext:function(){null!==this.imgIndex&&(this.imgIndex<this.images.length-1?this.imgIndex++:this.imgIndex=0,this.updateThumbails())},onClickThumb:function(image,t){this.imgIndex=t,this.updateThumbails()},updateThumbails:function(){if(this.$refs.gallery){var t=this.$refs.gallery.clientWidth,e=this.imgIndex*this.thumbnailWidth,n=this.images.length*this.thumbnailWidth,o=Math.floor(t/(2*this.thumbnailWidth))*this.thumbnailWidth;n<t||(e<o?this.galleryXPos=0:e>this.images.length*this.thumbnailWidth-t+o?this.galleryXPos=-(this.images.length*this.thumbnailWidth-t-20):this.galleryXPos=-this.imgIndex*this.thumbnailWidth+o)}}}};function e(template,style,script,t,e,n,o,r,l,c){"boolean"!=typeof o&&(l=r,r=o,o=!1);const d="function"==typeof script?script.options:script;let h;if(template&&template.render&&(d.render=template.render,d.staticRenderFns=template.staticRenderFns,d._compiled=!0,e&&(d.functional=!0)),t&&(d._scopeId=t),n?(h=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),style&&style.call(this,l(t)),t&&t._registeredComponents&&t._registeredComponents.add(n)},d._ssrRegister=h):style&&(h=o?function(t){style.call(this,c(t,this.$root.$options.shadowRoot))}:function(t){style.call(this,r(t))}),h)if(d.functional){const t=d.render;d.render=function(e,n){return h.call(n),t(e,n)}}else{const t=d.beforeCreate;d.beforeCreate=t?[].concat(t,h):[h]}return script}const n="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function o(t){return(t,style)=>c(t,style)}let r;const l={};function c(t,e){const o=n?e.media||"default":t,style=l[o]||(l[o]={ids:new Set,styles:[]});if(!style.ids.has(t)){style.ids.add(t);let code=e.source;if(e.map&&(code+="\n/*# sourceURL="+e.map.sources[0]+" */",code+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e.map))))+" */"),style.element||(style.element=document.createElement("style"),style.element.type="text/css",e.media&&style.element.setAttribute("media",e.media),void 0===r&&(r=document.head||document.getElementsByTagName("head")[0]),r.appendChild(style.element)),"styleSheet"in style.element)style.styles.push(code),style.element.styleSheet.cssText=style.styles.filter(Boolean).join("\n");else{const t=style.ids.size-1,e=document.createTextNode(code),n=style.element.childNodes;n[t]&&style.element.removeChild(n[t]),n.length?style.element.insertBefore(e,n[t]):style.element.appendChild(e)}}}const d=void 0,h=void 0;return e({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"modal"}},[null!==t.imgIndex?n("div",{staticClass:"vgs",on:{click:t.close}},[n("button",{staticClass:"vgs__close",attrs:{type:"button"},on:{click:t.close}},[t._v("\n      ×\n    ")]),t._v(" "),t.isMultiple?n("button",{staticClass:"vgs__prev",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),t.onPrev(e)}}},[t._v("\n      ‹\n    ")]):t._e(),t._v(" "),t.images?n("div",{staticClass:"vgs__container",on:{click:function(e){return e.stopPropagation(),t.onNext(e)}}},[n("img",{staticClass:"vgs__container__img",attrs:{src:t.imageUrl,alt:t.alt},on:{click:function(e){return e.stopPropagation(),t.onNext(e)}}}),t._v(" "),t._t("default")],2):t._e(),t._v(" "),t.isMultiple?n("button",{staticClass:"vgs__next",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),t.onNext(e)}}},[t._v("\n      ›\n    ")]):t._e(),t._v(" "),t.isMultiple?n("div",{ref:"gallery",staticClass:"vgs__gallery"},[t.images?n("div",{staticClass:"vgs__gallery__title"},[t._v("\n        "+t._s(t.imgIndex+1)+" / "+t._s(t.images.length)+"\n      ")]):t._e(),t._v(" "),t.images?n("div",{staticClass:"vgs__gallery__container",style:{transform:"translate("+t.galleryXPos+"px, 0)"}},t._l(t.images,(function(img,i){return n("img",{key:i,staticClass:"vgs__gallery__container__img",class:{"vgs__gallery__container__img--active":i===t.imgIndex},attrs:{src:"string"==typeof img?img:img.url,alt:"string"==typeof img?"":img.alt},on:{click:function(e){return e.stopPropagation(),t.onClickThumb(img,i)}}})})),0):t._e()]):t._e()]):t._e()])},staticRenderFns:[]},(function(t){t&&t("data-v-e9cc33d2_0",{source:".vgs{transition:opacity .2s ease;position:fixed;z-index:9998;top:0;left:0;width:100%;min-height:100%;height:100vh;background-color:rgba(0,0,0,.8);display:table}.vgs__close{color:#fff;position:absolute;top:0;right:0;background-color:transparent;border:none;font-size:25px;width:50px;height:50px;cursor:pointer;z-index:999}.vgs__close:focus{outline:0}.vgs__next,.vgs__prev{position:absolute;top:50%;margin-top:-25px;width:50px;height:50px;z-index:999;cursor:pointer;font-size:40px;color:#fff;background-color:transparent;border:none}.vgs__next:focus,.vgs__prev:focus{outline:0}.vgs__prev{left:0}.vgs__next{right:0}.vgs__container{position:absolute;overflow:hidden;cursor:pointer;overflow:hidden;max-width:100vh;margin:.5rem auto 0;left:.5rem;right:.5rem;height:60vh;border-radius:12px;background-color:#000}@media (max-width:767px){.vgs__container{width:100%;max-width:100%;top:50%;margin-top:-140px;left:0;right:0;border-radius:0;height:280px}}.vgs__container__img{width:100%;height:100%;object-fit:contain}.vgs__gallery{overflow-x:hidden;overflow-y:hidden;position:absolute;bottom:10px;margin:auto;max-width:100vh;white-space:nowrap;left:.5rem;right:.5rem}@media (max-width:767px){.vgs__gallery{display:none}}.vgs__gallery__title{color:#fff;margin-bottom:.5rem}.vgs__gallery__container{overflow:visible;display:block;height:100px;white-space:nowrap;transition:all .2s ease-in-out;width:100%}.vgs__gallery__container__img{width:100px;height:100px;object-fit:cover;display:inline-block;float:none;margin-right:20px;cursor:pointer;opacity:.6;border-radius:8px}.vgs__gallery__container__img--active{width:100px;display:inline-block;float:none;opacity:1}.modal-enter{opacity:0}.modal-leave-active{opacity:0}",map:void 0,media:void 0})}),script,d,!1,h,!1,o,void 0,void 0)}()},325:function(t,e,n){"use strict";n.r(e);var o=n(10),r=(n(40),n(321)),l={components:{vgs:n.n(r).a},data:function(){return{images:null,index:null}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.images=t.$store.state.bgUndangan.webp;case 1:case"end":return e.stop()}}),e)})))()}},c=n(39),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"w-full h-full"},[e("ClientOnly",[e("carousel",{attrs:{"per-page":1,autoplay:!0,loop:!0,speed:3e3,"autoplay-timeout":6e3,"pagination-active-color":"#334155","mouse-drag":!1,"touch-drag":!1}},t._l(t.images,(function(image,i){return e("slide",{key:i},[e("div",{staticClass:"flex justify-center"},[e("nuxt-img",{staticClass:"cursor-pointer",attrs:{src:image,sizes:"sm:100vw md:25vw",loading:"lazy"},on:{click:function(e){t.index=i}}})],1)])})),1),t._v(" "),e("vgs",{attrs:{images:t.images,index:t.index},on:{close:function(e){t.index=null}}})],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);