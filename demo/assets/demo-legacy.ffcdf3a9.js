;(function(){var __vite_style__=document.createElement('style');__vite_style__.innerHTML=".scope-market img {\n  width: 288px;\n  height: auto;\n  border-radius: 12px;\n  -webkit-border-radius: 12px;\n  -moz-border-radius: 12px;\n  -ms-border-radius: 12px;\n  -o-border-radius: 12px;\n}\n.scope-market .one {\n  width: 100%;\n  width: 325px;\n  height: 200px;\n  background-color: #66c6f2;\n}\n.scope-market .two {\n  width: 100%;\n  width: 325px;\n  height: 200px;\n  background-color: #39a9ed;\n}";document.head.appendChild(__vite_style__);System.register(['./component-legacy.8ed3b614.js','./mobile-legacy.15628a63.js','./vue-router-legacy.4fab4067.js'],function(exports){'use strict';var createComponent,_export_sfc,ref,onMounted,onBeforeMount,useTranslate,createElementBlock,createBaseVNode,toDisplayString,createCommentVNode,MarketDialog,openBlock,onBeforeRouteLeave;return{setters:[function(module){createComponent=module.c;},function(module){_export_sfc=module._;ref=module.r;onMounted=module.f;onBeforeMount=module.o;useTranslate=module.u;createElementBlock=module.c;createBaseVNode=module.a;toDisplayString=module.t;createCommentVNode=module.B;MarketDialog=module.C;openBlock=module.b;},function(module){onBeforeRouteLeave=module.o;}],execute:function(){var demo_scss_vue_type_style_index_0_src_lang='';const{createDemo,translate}=createComponent("marketdialog");const _sfc_main=createDemo({setup(){const open=ref(false);let value=0;onMounted(()=>{let t=setInterval(()=>{if(value>=100)clearInterval(t);else value+=10;},1000);});const showDialog=()=>{MarketDialog({url:"https://m.hellobike.com/resource/helloyun/15697/95WGX_i-hb-zyj220904-2-2.jpeg?x-oss-process=image/quality,q_80"});};const showDialog2=()=>{MarketDialog({url:"https://m.hellobike.com/resource/helloyun/15697/qxlI2_no_network.png"});};const showDialog3=()=>{open.value=true;};const close=()=>{open.value=false;};onBeforeMount(()=>{useTranslate({"zh-CN":{basic:"基础用法",tab:"标签式调用",type:{basic:"基础弹窗",irregular:"不规则弹窗",custom:"自定义内容"}},"en-US":{basic:"Basic Usage",tab:"Tab Call",type:{basic:"Basic Dialog",irregular:"Irregular Dialog",custom:"Custom Content"}}});});onBeforeRouteLeave(()=>{const nodes=document.querySelectorAll("quark-market-dialog");nodes.forEach(i=>i.open=false);});return{open,showDialog,showDialog2,showDialog3,close,translate};}});const _hoisted_1={class:"scope-market demo"};const _hoisted_2=["title"];const _hoisted_3=["title"];const _hoisted_4=["title"];const _hoisted_5=["open"];const _hoisted_6={key:0,controls:"",width:"320",slot:"market"};const _hoisted_7=/*#__PURE__*/createBaseVNode("source",{src:"https://m.hellobike.com/resource/helloyun/15697/B_TtZ_big_buck_bunny.mp4",type:"video/mp4"},null,-1);const _hoisted_8=[_hoisted_7];function _sfc_render(_ctx,_cache,$props,$setup,$data,$options){return openBlock(),createElementBlock("div",_hoisted_1,[createBaseVNode("h2",null,toDisplayString(_ctx.translate("basic")),1),createBaseVNode("quark-cell-group",null,[createBaseVNode("quark-cell",{islink:"",type:"primary",onClick:_cache[0]||(_cache[0]=$event=>_ctx.showDialog()),title:_ctx.translate('type.basic')},null,8,_hoisted_2),createBaseVNode("quark-cell",{islink:"",type:"primary",onClick:_cache[1]||(_cache[1]=$event=>_ctx.showDialog2()),title:_ctx.translate('type.irregular')},null,8,_hoisted_3)]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("tab")),1),createBaseVNode("quark-cell-group",null,[createBaseVNode("quark-cell",{islink:"",type:"primary",onClick:_cache[2]||(_cache[2]=$event=>_ctx.showDialog3()),title:_ctx.translate('type.custom')},null,8,_hoisted_4)]),createBaseVNode("quark-market-dialog",{open:_ctx.open,onClose:_cache[3]||(_cache[3]=(...args)=>_ctx.close&&_ctx.close(...args))},[_ctx.open?(openBlock(),createElementBlock("video",_hoisted_6,_hoisted_8)):createCommentVNode("",true)],40,_hoisted_5)]);}var demo=exports('default',/*#__PURE__*/_export_sfc(_sfc_main,[['render',_sfc_render]]));}};});})();