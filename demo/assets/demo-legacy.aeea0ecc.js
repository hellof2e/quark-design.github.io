;(function(){var __vite_style__=document.createElement('style');__vite_style__.innerHTML=".navbar-demo quark-navbar {\n  margin-bottom: 20px;\n  background: #fff;\n}\n.navbar-demo .bg {\n  background: linear-gradient(to right, #7ec1ff, #2197ff);\n  color: #fff;\n  --navbar-right-color: #fff;\n}\n.navbar-demo .bg2 {\n  background: purple;\n  color: #fff;\n  font-size: 14px;\n  --navbar-right-color: #fff;\n  --navbar-right-font-size: 14px;\n  --navbar-right-font-weight: 200;\n}\n.navbar-demo span {\n  margin: 0;\n}\n.navbar-demo .left {\n  text-align: left;\n  padding-left: 50px;\n}";document.head.appendChild(__vite_style__);System.register(['./mobile-legacy.279ecda3.js','./component-legacy.17e4b094.js','./index-legacy.d12329ed.js'],function(exports){'use strict';var _export_sfc,onBeforeMount,useTranslate,createElementBlock,createBaseVNode,toDisplayString,Toast,openBlock,createComponent;return{setters:[function(module){_export_sfc=module._;onBeforeMount=module.o;useTranslate=module.u;createElementBlock=module.c;createBaseVNode=module.a;toDisplayString=module.t;Toast=module.T;openBlock=module.b;},function(module){createComponent=module.c;},function(){}],execute:function(){var demo_scss_vue_type_style_index_0_src_lang='';const{createDemo,translate}=createComponent("navbar");const _sfc_main=createDemo({setup(){const onLeftClick=()=>{Toast.text(`${translate("clicked")}`);};const onRightClick=()=>{Toast.text(`${translate("clicked")}`);};const close=()=>{Toast.text(`${translate("closed")}`);};onBeforeMount(()=>{useTranslate({"zh-CN":{basic:"基础用法",background:"文字/背景颜色设置",left:"左侧按钮自定义",right:"右侧按钮自定义",title:"页面标题",leftTitle:"左标题",rightTitle:"分享",iconTitle:"小号图标",event:"事件绑定",close:"点击左右侧和关闭",return:"返回",clicked:"点击",closed:"关闭"},"en-US":{basic:"Basic Usage",background:"Background Color",left:"Custom Left Button",right:"Csutom Right Button",title:"Page Title",leftTitle:"Left Title",rightTitle:"Share",iconTitle:"Small Icon",event:"Event Binding",close:"Click event and close",return:"Return",clicked:"Clicked",closed:"Close"}});});return{onLeftClick,onRightClick,close,translate};}});const _hoisted_1={class:"demo no-padding navbar-demo"};const _hoisted_2=["title"];const _hoisted_3=["title"];const _hoisted_4=["title","right"];const _hoisted_5=["title","right"];const _hoisted_6=["title"];const _hoisted_7=/*#__PURE__*/createBaseVNode("span",{slot:"left",class:"left-wrap"},[/*#__PURE__*/createBaseVNode("quark-icon-user",{size:"24",name:"user"})],-1);const _hoisted_8=[_hoisted_7];const _hoisted_9=["title"];const _hoisted_10={slot:"left"};const _hoisted_11=["title"];const _hoisted_12=/*#__PURE__*/createBaseVNode("quark-icon-arrow-right",{size:"20",name:"user",slot:"right"},null,-1);const _hoisted_13=[_hoisted_12];const _hoisted_14=["right","title"];const _hoisted_15=["right","title"];function _sfc_render(_ctx,_cache,$props,$setup,$data,$options){return openBlock(),createElementBlock("div",_hoisted_1,[createBaseVNode("h2",null,toDisplayString(_ctx.translate("basic")),1),createBaseVNode("quark-navbar",{title:_ctx.translate('title')},null,8,_hoisted_2),createBaseVNode("quark-navbar",{title:_ctx.translate('leftTitle'),closehide:"true",class:"left"},null,8,_hoisted_3),createBaseVNode("h2",null,toDisplayString(_ctx.translate("background")),1),createBaseVNode("quark-navbar",{class:"bg",title:_ctx.translate('title'),right:_ctx.translate('rightTitle'),safearea:"true"},null,8,_hoisted_4),createBaseVNode("quark-navbar",{class:"bg2",title:_ctx.translate('iconTitle'),right:_ctx.translate('rightTitle'),iconsize:"18"},null,8,_hoisted_5),createBaseVNode("h2",null,toDisplayString(_ctx.translate("left")),1),createBaseVNode("quark-navbar",{title:_ctx.translate('title')},_hoisted_8,8,_hoisted_6),createBaseVNode("quark-navbar",{title:_ctx.translate('title')},[createBaseVNode("span",_hoisted_10,toDisplayString(_ctx.translate("return")),1)],8,_hoisted_9),createBaseVNode("h2",null,toDisplayString(_ctx.translate("right")),1),createBaseVNode("quark-navbar",{title:_ctx.translate('title')},_hoisted_13,8,_hoisted_11),createBaseVNode("quark-navbar",{right:_ctx.translate('rightTitle'),title:_ctx.translate('title')},null,8,_hoisted_14),createBaseVNode("h2",null,toDisplayString(_ctx.translate("event")),1),createBaseVNode("quark-navbar",{right:_ctx.translate('rightTitle'),title:_ctx.translate('close'),onLeftclick:_cache[0]||(_cache[0]=(...args)=>_ctx.onLeftClick&&_ctx.onLeftClick(...args)),onRightclick:_cache[1]||(_cache[1]=(...args)=>_ctx.onRightClick&&_ctx.onRightClick(...args)),onClose:_cache[2]||(_cache[2]=(...args)=>_ctx.close&&_ctx.close(...args))},null,40,_hoisted_15)]);}var demo=exports('default',/*#__PURE__*/_export_sfc(_sfc_main,[['render',_sfc_render]]));}};});})();
