;(function(){var __vite_style__=document.createElement('style');__vite_style__.innerHTML=".button-demo .demo-buttons {\n  margin: 8px;\n}\n.button-demo .mgr-10 {\n  margin-right: 10px;\n}\n.button-demo .css {\n  font-size: 20px;\n  color: #333;\n  letter-spacing: 2px;\n  --countdown-num-min-width: 20px;\n  --countdown-num-background: #fff;\n  --countdown-num-padding: 0 10px;\n  --countdown-num-border-radius: 6px;\n  --countdown-dot-color: #333;\n  --countdown-dot-margin: 6px;\n}";document.head.appendChild(__vite_style__);System.register(['./component-legacy.29e4927c.js','./mobile-legacy.06daf598.js'],function(exports){'use strict';var createComponent,_export_sfc,ref,onBeforeMount,useTranslate,createElementBlock,createBaseVNode,toDisplayString,Toast,openBlock;return{setters:[function(module){createComponent=module.c;},function(module){_export_sfc=module._;ref=module.r;onBeforeMount=module.o;useTranslate=module.u;createElementBlock=module.c;createBaseVNode=module.a;toDisplayString=module.t;Toast=module.T;openBlock=module.b;}],execute:function(){var demo_scss_vue_type_style_index_0_src_lang='';const{createDemo,translate}=createComponent("button");const _sfc_main=createDemo({setup(){const time1=ref(7200000);const time2=ref(360000);const time3=ref(5000);onBeforeMount(()=>{useTranslate({"zh-CN":{base:'基本使用',format:'格式化',callback:'结束回调',style:'样式自定义',slot:'自定义间隔符'},"en-US":{}});});const onEnd=()=>{Toast.text('开始秒杀');};return{translate,time1,time2,time3,onEnd};}});const _hoisted_1={class:"demo button-demo"};const _hoisted_2={class:"demo-buttons"};const _hoisted_3=["time"];const _hoisted_4={class:"demo-buttons"};const _hoisted_5=["time"];const _hoisted_6=["time"];const _hoisted_7=["time"];const _hoisted_8={class:"demo-buttons"};const _hoisted_9=["time"];const _hoisted_10={class:"demo-buttons"};const _hoisted_11=["time"];function _sfc_render(_ctx,_cache,$props,$setup,$data,$options){return openBlock(),createElementBlock("div",_hoisted_1,[createBaseVNode("h2",null,toDisplayString(_ctx.translate("base")),1),createBaseVNode("div",_hoisted_2,[createBaseVNode("quark-countdown",{time:_ctx.time1},null,8,_hoisted_3)]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("format")),1),createBaseVNode("div",_hoisted_4,[createBaseVNode("quark-countdown",{format:"MM:SS",time:_ctx.time2,class:"mgr-10"},null,8,_hoisted_5),createBaseVNode("quark-countdown",{format:"MM-SS",time:_ctx.time2,class:"mgr-10"},null,8,_hoisted_6),createBaseVNode("quark-countdown",{format:"MM SS",time:_ctx.time2},null,8,_hoisted_7)]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("callback")),1),createBaseVNode("div",_hoisted_8,[createBaseVNode("quark-countdown",{time:_ctx.time3,onEnd:_cache[0]||(_cache[0]=(...args)=>_ctx.onEnd&&_ctx.onEnd(...args))},null,40,_hoisted_9)]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("style")),1),createBaseVNode("div",_hoisted_10,[createBaseVNode("quark-countdown",{class:"css",time:_ctx.time1},null,8,_hoisted_11)])]);}var demo=exports('default',/*#__PURE__*/_export_sfc(_sfc_main,[['render',_sfc_render]]));}};});})();
