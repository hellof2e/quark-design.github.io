;(function(){var __vite_style__=document.createElement('style');__vite_style__.innerHTML="\n.tag-container[data-v-295b8f66] {\n  padding: 5px;\n  margin-bottom: 30px;\n}\n.progress-wrap[data-v-295b8f66] {\n  background: #fff;\n  padding-right: 32px;\n}\nquark-progress[data-v-295b8f66] {\n  width: 100%;\n  margin: 16px;\n  margin-right: 0;\n}\n.green[data-v-295b8f66] {\n  --progress-box-background: yellowgreen;\n  --progress-margin-left: 6px;\n}\n.auto[data-v-295b8f66] {\n  width: 95%;\n  height: 6px;\n}\n.wrap[data-v-295b8f66] {\n  display: flex;\n  align-items: center;\n}\n.percent[data-v-295b8f66] {\n  color: yellowgreen;\n}\n";document.head.appendChild(__vite_style__);System.register(['./component-legacy.5cd9e268.js','./mobile-legacy.e7b7a733.js'],function(exports){'use strict';var createComponent,_export_sfc,ref,onBeforeMount,useTranslate,onMounted,createElementBlock,createBaseVNode,toDisplayString,openBlock,pushScopeId,popScopeId;return{setters:[function(module){createComponent=module.c;},function(module){_export_sfc=module._;ref=module.r;onBeforeMount=module.o;useTranslate=module.u;onMounted=module.f;createElementBlock=module.c;createBaseVNode=module.a;toDisplayString=module.t;openBlock=module.b;pushScopeId=module.p;popScopeId=module.l;}],execute:function(){var demo_vue_vue_type_style_index_0_scoped_true_lang='';const{createDemo,translate}=createComponent("progress");const _sfc_main=createDemo({setup(){const value=ref(10);onBeforeMount(()=>{useTranslate({"zh-CN":{basic:"基础用法",showText:"显示字体进度",customColor:"自定义颜色/背景色",customStyle:"自定义宽度/高度/圆角/显示百分比"},"en-US":{basic:"Basic Usage",showText:"Show Progress",customColor:"Custom Color/Background Color",customStyle:"Custom Width/Height/Round/Percentage"}});});onMounted(()=>{let t=setInterval(()=>{if(value.value>=100)clearInterval(t);else value.value+=10;},1000);});return{value,translate};}});const _withScopeId=n=>(pushScopeId("data-v-295b8f66"),n=n(),popScopeId(),n);const _hoisted_1={class:"demo"};const _hoisted_2=/*#__PURE__*/_withScopeId(()=>/*#__PURE__*/createBaseVNode("div",{class:"tag-container progress-wrap"},[/*#__PURE__*/createBaseVNode("div",{class:"wrap"},[/*#__PURE__*/createBaseVNode("quark-progress",{value:"0"})])],-1));const _hoisted_3=/*#__PURE__*/_withScopeId(()=>/*#__PURE__*/createBaseVNode("div",{class:"tag-container progress-wrap space"},[/*#__PURE__*/createBaseVNode("quark-progress",{value:"100",showtext:""})],-1));const _hoisted_4={class:"tag-container progress-wrap"};const _hoisted_5=["value"];const _hoisted_6=/*#__PURE__*/_withScopeId(()=>/*#__PURE__*/createBaseVNode("quark-progress",{value:"20",color:"green",showtext:""},null,-1));const _hoisted_7=/*#__PURE__*/_withScopeId(()=>/*#__PURE__*/createBaseVNode("quark-progress",{value:"30",color:"green",class:"green",showtext:""},null,-1));const _hoisted_8=/*#__PURE__*/_withScopeId(()=>/*#__PURE__*/createBaseVNode("div",{class:"tag-container progress-wrap"},[/*#__PURE__*/createBaseVNode("quark-progress",{value:"90",class:"auto",color:"linear-gradient(\n        268deg,#fa2c19 0%,#fa3f19 44.59259259%,#fa5919 83.40740741%,#fa6419 100%)"},[/*#__PURE__*/createBaseVNode("span",{slot:"percent",class:"percent"},"0.9")])],-1));function _sfc_render(_ctx,_cache,$props,$setup,$data,$options){return openBlock(),createElementBlock("div",_hoisted_1,[createBaseVNode("h2",null,toDisplayString(_ctx.translate("basic")),1),_hoisted_2,createBaseVNode("h2",null,toDisplayString(_ctx.translate("showText")),1),_hoisted_3,createBaseVNode("h2",null,toDisplayString(_ctx.translate("customColor")),1),createBaseVNode("div",_hoisted_4,[createBaseVNode("quark-progress",{value:_ctx.value,color:"yellowgreen",showtext:""},null,8,_hoisted_5),_hoisted_6,_hoisted_7]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("customStyle")),1),_hoisted_8]);}var demo=exports('default',/*#__PURE__*/_export_sfc(_sfc_main,[['render',_sfc_render],['__scopeId',"data-v-295b8f66"]]));}};});})();
