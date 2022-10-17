;(function(){var __vite_style__=document.createElement('style');__vite_style__.innerHTML="quark-noticebar {\n  margin-bottom: 10px;\n}\nquark-marquee {\n  color: inherit;\n}\n.noticebar-left-style-setting {\n  background: #f0fcf6;\n  color: #242729;\n}\n.noticebar-left-style-setting div {\n  font-weight: 600;\n  color: #f72626;\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n}\n.noticebar-right-style-setting {\n  background: #fff2f2;\n  color: #242729;\n}\n.noticebar-right-style-setting span {\n  font-size: 14px;\n  font-weight: 600;\n  color: #f72626;\n  display: flex;\n  align-items: center;\n}\n.bg2 {\n  background: rgba(255, 255, 255, 0.1);\n  color: #fff;\n  margin-bottom: 0;\n}\n.noticebar {\n  padding: 20px;\n  font-size: 12px;\n  border-radius: 20px;\n}";document.head.appendChild(__vite_style__);System.register(['./component-legacy.d9567cf3.js','./mobile-legacy.55241dd8.js'],function(exports){'use strict';var createComponent,_export_sfc,ref,onBeforeMount,useTranslate,createElementBlock,createBaseVNode,toDisplayString,createTextVNode,Toast,openBlock;return{setters:[function(module){createComponent=module.c;},function(module){_export_sfc=module._;ref=module.r;onBeforeMount=module.o;useTranslate=module.u;createElementBlock=module.c;createBaseVNode=module.a;toDisplayString=module.t;createTextVNode=module.C;Toast=module.T;openBlock=module.b;}],execute:function(){var demo_scss_vue_type_style_index_0_src_lang='';const{createDemo,translate}=createComponent("noticebar");const _sfc_main=createDemo({setup(){const data=ref([]);const onRightClick=()=>{Toast.text(`${translate("text.clickToast")}`);};onBeforeMount(()=>{useTranslate({"zh-CN":{title:{basic:"基础用法",multiple:"文字行数设置",style:"样式设置",marquee:"文字超长滚动",icon:"图标隐藏",custom:"两端自定义",right:"右侧事件绑定"},text:{content:"大学之道，在明明德，在亲民，在止于至善。",left:"左侧内容",right:"右侧内容",error:"当前网络不可用，请检查网络设置",set:"去设置",rightClick:"试着电击一下右箭头",multiple:"大学的目的，在于显明高尚的品德，在于使人们革除旧习，在于达到善的最高境界。大学的目的，在于显明高尚的品德，在于使人们革除旧习，在于达到善的最高境界。",clickToast:"点击测试"}},"en-US":{title:{basic:"Basic Usage",multiple:"Multiple Text",style:"Style",marquee:"Marquee",icon:"Hide Icon",custom:"Custom Ends",right:"Right Event"},text:{content:"The way of the university is to be bright and virtuous.",left:"Left Content",right:"Right Content",error:"Current network is unavailable, please check the network settings",set:"Go to Settings",rightClick:"Try to click the right arrow",multiple:"The purpose of a university is to demonstrate noble character, to get rid of old habits, and to reach the highest state of goodness. The purpose of a university is to demonstrate noble character, to get rid of old habits, and to reach the highest state of goodness.",clickToast:"Click to test"}}});data.value={lefttext:false,right:"",text:`${translate("text.content")}`,multipleText:`${translate("text.multiple")}`};});return{data,onRightClick,translate};}});const _hoisted_1={class:"demo no-padding"};const _hoisted_2=["text"];const _hoisted_3=["text"];const _hoisted_4=["text"];const _hoisted_5=["title"];const _hoisted_6=["text"];const _hoisted_7=["text"];const _hoisted_8=["text"];const _hoisted_9={slot:"left"};const _hoisted_10={slot:"right"};const _hoisted_11=["text"];const _hoisted_12={slot:"right"};const _hoisted_13=/*#__PURE__*/createBaseVNode("quark-icon-arrow-right",{size:"15",name:"right"},null,-1);const _hoisted_14=["text"];function _sfc_render(_ctx,_cache,$props,$setup,$data,$options){return openBlock(),createElementBlock("div",_hoisted_1,[createBaseVNode("h2",null,toDisplayString(_ctx.translate("title.basic")),1),createBaseVNode("quark-noticebar",{text:_ctx.data.text},null,8,_hoisted_2),createBaseVNode("h2",null,toDisplayString(_ctx.translate("title.multiple")),1),createBaseVNode("quark-noticeBar",{text:_ctx.data.multipleText,multiple:2},null,8,_hoisted_3),createBaseVNode("h2",null,toDisplayString(_ctx.translate("title.style")),1),createBaseVNode("quark-noticebar",{text:_ctx.data.text,color:"#1989fa",bgcolor:"#ecf9ff"},null,8,_hoisted_4),createBaseVNode("h2",null,toDisplayString(_ctx.translate("title.marquee")),1),createBaseVNode("quark-noticebar",null,[createBaseVNode("quark-marquee",{slot:"text",title:_ctx.data.multipleText},null,8,_hoisted_5)]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("title.icon")),1),createBaseVNode("quark-noticebar",{text:_ctx.translate('text.content'),righthide:"",style:{"margin-bottom":"10px"}},null,8,_hoisted_6),createBaseVNode("quark-noticebar",{text:_ctx.translate('text.content'),lefthide:""},null,8,_hoisted_7),createBaseVNode("h2",null,toDisplayString(_ctx.translate("title.custom")),1),createBaseVNode("quark-noticebar",{class:"noticebar-left-style-setting",text:_ctx.translate('text.content')},[createBaseVNode("div",_hoisted_9,toDisplayString(_ctx.translate("text.left")),1),createBaseVNode("div",_hoisted_10,toDisplayString(_ctx.translate("text.right")),1)],8,_hoisted_8),createBaseVNode("quark-noticebar",{class:"noticebar-right-style-setting",lefthide:"",text:_ctx.translate('text.error')},[createBaseVNode("span",_hoisted_12,[createTextVNode(toDisplayString(_ctx.translate("text.set")),1),_hoisted_13])],8,_hoisted_11),createBaseVNode("h2",null,toDisplayString(_ctx.translate("title.right")),1),createBaseVNode("quark-noticebar",{text:_ctx.translate('text.rightClick'),onRightclick:_cache[0]||(_cache[0]=(...args)=>_ctx.onRightClick&&_ctx.onRightClick(...args))},null,40,_hoisted_14)]);}var demo=exports('default',/*#__PURE__*/_export_sfc(_sfc_main,[['render',_sfc_render]]));}};});})();
