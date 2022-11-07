;(function(){var __vite_style__=document.createElement('style');__vite_style__.innerHTML=".toast-demo quark-button {\n  margin-right: 6px;\n  margin-top: 6px;\n}\n.toast-demo .quark-cell {\n  padding: 13px 16px;\n  background: #fff;\n  border-radius: 6px;\n  box-shadow: 0 1px 7px #edeef1;\n  font-size: 14px;\n  color: #666;\n  margin: 10px 0;\n  box-sizing: border-box;\n  cursor: pointer;\n  display: grid;\n  justify-content: space-between;\n  grid-template-columns: 1fr 20px;\n}\n.toast-demo .quark-cell__title {\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  flex-direction: column;\n  flex: 1;\n}\n.toast-demo .flex {\n  display: flex;\n  align-items: center;\n}";document.head.appendChild(__vite_style__);System.register(['./component-legacy.e1633049.js','./mobile-legacy.b9411751.js'],function(exports){'use strict';var createComponent,_export_sfc,ref,onBeforeMount,useTranslate,createElementBlock,createBaseVNode,toDisplayString,Toast,openBlock;return{setters:[function(module){createComponent=module.c;},function(module){_export_sfc=module._;ref=module.r;onBeforeMount=module.o;useTranslate=module.u;createElementBlock=module.c;createBaseVNode=module.a;toDisplayString=module.t;Toast=module.T;openBlock=module.b;}],execute:function(){var demo_scss_vue_type_style_index_0_src_lang='';const{createDemo,translate}=createComponent("toast");const _sfc_main=createDemo({setup(){const tag=ref(null);onBeforeMount(()=>{useTranslate({"zh-CN":{functionCall:"函数式调用",closeCallback:"关闭后回调函数",textTip:"文字提示",successTip:"成功提示",errorTip:"失败提示",warningTip:"警告提示",loadingTip:"加载提示",networkTip:"网络失败，请稍后再试～",executeCallback:"回调函数执行",close:"一秒后关闭"},"en-US":{functionCall:"Function Call",closeCallback:"Close Callback",textTip:"Text Tip",successTip:"Success Tip",errorTip:"Error Tip",warningTip:"Warning Tip",loadingTip:"Loading Tip",networkTip:"Network failed, please try again later~",executeCallback:"Execute Callback",close:"Close after a second"}});});// QuarkToast.allowMultiple()
const cbClick=()=>{Toast.text(`${translate("networkTip")}`,{close:()=>Toast.text(`${translate("executeCallback")}`)});};const handleTextClick=()=>{Toast.text(`${translate("networkTip")}`);};const handleSuccessClick=()=>{Toast.success(`${translate("successTip")}`);};const handleErrorClick=()=>{Toast.error(`${translate("errorTip")}`);};const handleWarningClick=()=>{Toast.warning(`${translate("warningTip")}`);};const handleLoadingClick=()=>{const toast=Toast.loading(`${translate("close")}`,{duration:0,size:40});setTimeout(()=>{toast.hide();},3000);};return{tag,cbClick,handleTextClick,handleSuccessClick,handleErrorClick,handleWarningClick,handleLoadingClick,translate};}});const _hoisted_1={class:"demo toast-demo"};const _hoisted_2=/*#__PURE__*/createBaseVNode("quark-icon-arrow-right",{size:"20",name:"right"},null,-1);const _hoisted_3=/*#__PURE__*/createBaseVNode("quark-icon-arrow-right",{size:"20",name:"right"},null,-1);const _hoisted_4=/*#__PURE__*/createBaseVNode("quark-icon-arrow-right",{size:"20",name:"right"},null,-1);const _hoisted_5=/*#__PURE__*/createBaseVNode("quark-icon-arrow-right",{size:"20",name:"right"},null,-1);const _hoisted_6=/*#__PURE__*/createBaseVNode("quark-icon-arrow-right",{size:"20",name:"right"},null,-1);const _hoisted_7=/*#__PURE__*/createBaseVNode("quark-icon-arrow-right",{size:"20",name:"right"},null,-1);function _sfc_render(_ctx,_cache,$props,$setup,$data,$options){return openBlock(),createElementBlock("div",_hoisted_1,[createBaseVNode("h2",null,toDisplayString(_ctx.translate("functionCall")),1),createBaseVNode("div",{class:"quark-cell",onClick:_cache[0]||(_cache[0]=(...args)=>_ctx.handleTextClick&&_ctx.handleTextClick(...args))},[createBaseVNode("div",null,"Text "+toDisplayString(_ctx.translate("textTip")),1),_hoisted_2]),createBaseVNode("div",{class:"quark-cell",onClick:_cache[1]||(_cache[1]=(...args)=>_ctx.handleSuccessClick&&_ctx.handleSuccessClick(...args))},[createBaseVNode("div",null,"Success "+toDisplayString(_ctx.translate("successTip")),1),_hoisted_3]),createBaseVNode("div",{class:"quark-cell",onClick:_cache[2]||(_cache[2]=(...args)=>_ctx.handleErrorClick&&_ctx.handleErrorClick(...args))},[createBaseVNode("div",null,"Error "+toDisplayString(_ctx.translate("errorTip")),1),_hoisted_4]),createBaseVNode("div",{class:"quark-cell",onClick:_cache[3]||(_cache[3]=(...args)=>_ctx.handleWarningClick&&_ctx.handleWarningClick(...args))},[createBaseVNode("div",null,"Warning "+toDisplayString(_ctx.translate("warningTip")),1),_hoisted_5]),createBaseVNode("div",{class:"quark-cell",onClick:_cache[4]||(_cache[4]=(...args)=>_ctx.handleLoadingClick&&_ctx.handleLoadingClick(...args))},[createBaseVNode("div",null,"Loading "+toDisplayString(_ctx.translate("loadingTip")),1),_hoisted_6]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("closeCallback")),1),createBaseVNode("div",{class:"quark-cell",onClick:_cache[5]||(_cache[5]=(...args)=>_ctx.cbClick&&_ctx.cbClick(...args))},[createBaseVNode("div",null,toDisplayString(_ctx.translate("closeCallback")),1),_hoisted_7])]);}var demo=exports('default',/*#__PURE__*/_export_sfc(_sfc_main,[['render',_sfc_render]]));}};});})();
