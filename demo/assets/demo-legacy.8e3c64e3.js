;(function(){var __vite_style__=document.createElement('style');__vite_style__.innerHTML=".popup-demo .demo-buttons quark-button {\n  margin-right: 6px;\n  margin-top: 6px;\n}\n.popup-demo .demo-buttons {\n  margin-bottom: 24px;\n}";document.head.appendChild(__vite_style__);System.register(['./component-legacy.20090aa3.js','./mobile-legacy.b9c28ad1.js'],function(exports){'use strict';var createComponent,_export_sfc,ref,onBeforeMount,useTranslate,onMounted,Toast,createElementBlock,createBaseVNode,toDisplayString,openBlock;return{setters:[function(module){createComponent=module.c;},function(module){_export_sfc=module._;ref=module.r;onBeforeMount=module.o;useTranslate=module.u;onMounted=module.f;Toast=module.T;createElementBlock=module.c;createBaseVNode=module.a;toDisplayString=module.t;openBlock=module.b;}],execute:function(){var demo_scss_vue_type_style_index_0_src_lang='';const{createDemo,translate}=createComponent("popup");const _sfc_main=createDemo({setup(){const open=ref("false");onBeforeMount(()=>{useTranslate({"zh-CN":{position:"不同位置",topPopup:"顶部弹框",bottomPopup:"底部弹窗",leftPopup:"左侧弹框",rightPopup:"右侧弹窗",centerPopup:"居中显示",firstLine:"第一行",secondLine:"第二行",thirdLine:"第三行",forthLine:"第四行",fifthLine:"第五行",sixthLine:"第六行",style:"样式",roundStyle:"圆角样式",showCloseTitle:"显示关闭按钮",closePopup:"点我关闭弹框",tip:"弹层消失回调"},"en-US":{position:"Different Position",topPopup:"Top Popup",bottomPopup:"Bottom Popup",leftPopup:"Left Popup",rightPopup:"Right Popup",centerPopup:"Center Popup",firstLine:"First Line",secondLine:"Second Line",thirdLine:"Third Line",forthLine:"Forth Line",fifthLine:"Fifth Line",sixthLine:"Six Line",style:"Style",roundStyle:"Rounded Style",showCloseTitle:"Show Close Title",closePopup:"Close Popup",tip:"Popup layer disappears callback"}});});onMounted(()=>{document.getElementById("popup-top").addEventListener("closed",()=>{open.value=false;Toast.text(`${translate("tip")}`);});});const showTopPopup=()=>{open.value=true;};const closed=()=>{Toast.text(`${translate("tip")}`);};const contentClick=()=>{document.getElementById("popup-round").open=false;};const showPopup=position=>{if(~["bottom","left","right","center","round","closeable","max-content"].indexOf(position)){document.getElementById(`popup-${position}`).open=true;}};return{open,showTopPopup,closed,contentClick,showPopup,translate};}});const _hoisted_1={class:"demo no-padding popup-demo"};const _hoisted_2=["title"];const _hoisted_3=["title"];const _hoisted_4=["title"];const _hoisted_5=["title"];const _hoisted_6=["title"];const _hoisted_7=["open"];const _hoisted_8={id:"popup-left",position:"left"};const _hoisted_9={id:"popup-bottom",position:"bottom"};const _hoisted_10={id:"popup-right",position:"right"};const _hoisted_11={id:"popup-center",position:"center"};const _hoisted_12=["title"];const _hoisted_13=["title"];const _hoisted_14={id:"popup-round",position:"bottom",round:""};const _hoisted_15={id:"popup-closeable",position:"bottom",closeable:""};function _sfc_render(_ctx,_cache,$props,$setup,$data,$options){return openBlock(),createElementBlock("div",_hoisted_1,[createBaseVNode("h2",null,toDisplayString(_ctx.translate("position")),1),createBaseVNode("quark-cell-group",null,[createBaseVNode("quark-cell",{islink:"",type:"primary",onClick:_cache[0]||(_cache[0]=(...args)=>_ctx.showTopPopup&&_ctx.showTopPopup(...args)),title:_ctx.translate('topPopup')},null,8,_hoisted_2),createBaseVNode("quark-cell",{islink:"",type:"primary",onClick:_cache[1]||(_cache[1]=$event=>_ctx.showPopup('bottom')),title:_ctx.translate('bottomPopup')},null,8,_hoisted_3),createBaseVNode("quark-cell",{islink:"",type:"primary",onClick:_cache[2]||(_cache[2]=$event=>_ctx.showPopup('left')),title:_ctx.translate('leftPopup')},null,8,_hoisted_4),createBaseVNode("quark-cell",{islink:"",type:"primary",onClick:_cache[3]||(_cache[3]=$event=>_ctx.showPopup('right')),title:_ctx.translate('rightPopup')},null,8,_hoisted_5),createBaseVNode("quark-cell",{islink:"",type:"primary",onClick:_cache[4]||(_cache[4]=$event=>_ctx.showPopup('center')),title:_ctx.translate('centerPopup')},null,8,_hoisted_6)]),createBaseVNode("quark-popup",{id:"popup-top",position:"top",open:_ctx.open},[createBaseVNode("div",null,toDisplayString(_ctx.translate("firstLine")),1),createBaseVNode("div",null,toDisplayString(_ctx.translate("secondLine")),1),createBaseVNode("div",null,toDisplayString(_ctx.translate("thirdLine")),1),createBaseVNode("div",null,toDisplayString(_ctx.translate("forthLine")),1),createBaseVNode("div",null,toDisplayString(_ctx.translate("fifthLine")),1),createBaseVNode("div",null,toDisplayString(_ctx.translate("sixthLine")),1)],8,_hoisted_7),createBaseVNode("quark-popup",_hoisted_8,[createBaseVNode("div",null,toDisplayString(_ctx.translate("firstLine")),1),createBaseVNode("div",null,toDisplayString(_ctx.translate("secondLine")),1),createBaseVNode("div",null,toDisplayString(_ctx.translate("thirdLine")),1),createBaseVNode("div",null,toDisplayString(_ctx.translate("forthLine")),1),createBaseVNode("div",null,toDisplayString(_ctx.translate("fifthLine")),1),createBaseVNode("div",null,toDisplayString(_ctx.translate("sixthLine")),1)]),createBaseVNode("quark-popup",_hoisted_9,[createBaseVNode("div",null,toDisplayString(_ctx.translate("firstLine")),1),createBaseVNode("div",null,toDisplayString(_ctx.translate("secondLine")),1),createBaseVNode("div",null,toDisplayString(_ctx.translate("thirdLine")),1),createBaseVNode("div",null,toDisplayString(_ctx.translate("forthLine")),1),createBaseVNode("div",null,toDisplayString(_ctx.translate("fifthLine")),1),createBaseVNode("div",null,toDisplayString(_ctx.translate("sixthLine")),1)]),createBaseVNode("quark-popup",_hoisted_10,[createBaseVNode("div",null,toDisplayString(_ctx.translate("firstLine")),1),createBaseVNode("div",null,toDisplayString(_ctx.translate("secondLine")),1),createBaseVNode("div",null,toDisplayString(_ctx.translate("thirdLine")),1),createBaseVNode("div",null,toDisplayString(_ctx.translate("forthLine")),1),createBaseVNode("div",null,toDisplayString(_ctx.translate("fifthLine")),1),createBaseVNode("div",null,toDisplayString(_ctx.translate("sixthLine")),1)]),createBaseVNode("quark-popup",_hoisted_11,[createBaseVNode("div",null,toDisplayString(_ctx.translate("firstLine")),1),createBaseVNode("div",null,toDisplayString(_ctx.translate("secondLine")),1),createBaseVNode("div",null,toDisplayString(_ctx.translate("thirdLine")),1)]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("style")),1),createBaseVNode("quark-cell-group",null,[createBaseVNode("quark-cell",{islink:"",type:"primary",onClick:_cache[5]||(_cache[5]=$event=>_ctx.showPopup('round')),title:_ctx.translate('roundStyle')},null,8,_hoisted_12),createBaseVNode("quark-cell",{islink:"",onClick:_cache[6]||(_cache[6]=$event=>_ctx.showPopup('closeable')),title:_ctx.translate('showCloseTitle')},null,8,_hoisted_13)]),createBaseVNode("quark-popup",_hoisted_14,[createBaseVNode("div",{style:{"margin-top":"20px"},onClick:_cache[7]||(_cache[7]=(...args)=>_ctx.contentClick&&_ctx.contentClick(...args))},toDisplayString(_ctx.translate("closePopup")),1),createBaseVNode("div",null,toDisplayString(_ctx.translate("firstLine")),1),createBaseVNode("div",null,toDisplayString(_ctx.translate("secondLine")),1),createBaseVNode("div",null,toDisplayString(_ctx.translate("thirdLine")),1),createBaseVNode("div",null,toDisplayString(_ctx.translate("forthLine")),1),createBaseVNode("div",null,toDisplayString(_ctx.translate("fifthLine")),1),createBaseVNode("div",null,toDisplayString(_ctx.translate("sixthLine")),1)]),createBaseVNode("quark-popup",_hoisted_15,[createBaseVNode("div",null,toDisplayString(_ctx.translate("firstLine")),1),createBaseVNode("div",null,toDisplayString(_ctx.translate("secondLine")),1),createBaseVNode("div",null,toDisplayString(_ctx.translate("thirdLine")),1),createBaseVNode("div",null,toDisplayString(_ctx.translate("forthLine")),1),createBaseVNode("div",null,toDisplayString(_ctx.translate("fifthLine")),1),createBaseVNode("div",null,toDisplayString(_ctx.translate("sixthLine")),1)])]);}var demo=exports('default',/*#__PURE__*/_export_sfc(_sfc_main,[['render',_sfc_render]]));}};});})();
