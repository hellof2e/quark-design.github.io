;(function(){var __vite_style__=document.createElement('style');__vite_style__.innerHTML=".textarea-demo quark-button {\n  margin-right: 6px;\n  margin-top: 6px;\n}\n.textarea-demo .quark-cell__title {\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  flex-direction: column;\n  flex: 1;\n}\n.textarea-demo .custom-style {\n  --textarea-border-color: red;\n  --textarea-color: red;\n  --textarea-count-color: red;\n  --textarea-placeholder-color: red;\n  --textarea-text-count-align: \"left\";\n  margin-bottom: 40px;\n}";document.head.appendChild(__vite_style__);System.register(['./component-legacy.0a1dfc9f.js','./mobile-legacy.bae60c14.js'],function(exports){'use strict';var createComponent,_export_sfc,ref,onBeforeMount,useTranslate,createElementBlock,createBaseVNode,toDisplayString,withDirectives,vModelText,Toast,openBlock;return{setters:[function(module){createComponent=module.c;},function(module){_export_sfc=module._;ref=module.r;onBeforeMount=module.o;useTranslate=module.u;createElementBlock=module.c;createBaseVNode=module.a;toDisplayString=module.t;withDirectives=module.H;vModelText=module.I;Toast=module.T;openBlock=module.b;}],execute:function(){var demo_scss_vue_type_style_index_0_src_lang='';const{createDemo,translate}=createComponent("textarea");const _sfc_main=createDemo({setup(){const textAreaInput=ref("");const handleEvent=(event,type)=>{Toast.text(`${event.target.value}${type}`);};onBeforeMount(()=>{useTranslate({"zh-CN":{basic:"基础用法",count:"字数统计",limit:"字数限制",rows:"指定行数",height:"根据内容自动调整高度",disabled:"禁用状态",event:"触发事件",custom:"自定义样式"},"en-US":{basic:"Basic Usage",count:"Show Count",limit:"Count Limit",rows:"Rows Setting",height:"Autosize",disabled:"Disabled",event:"Event Trigger",custom:"Custom Style"}});});return{textAreaInput,handleEvent,translate};}});const _hoisted_1={class:"demo textarea-demo no-padding"};const _hoisted_2=/*#__PURE__*/createBaseVNode("quark-textarea",{showcount:""},null,-1);const _hoisted_3=/*#__PURE__*/createBaseVNode("quark-textarea",{showcount:"",maxlength:"50"},null,-1);const _hoisted_4=/*#__PURE__*/createBaseVNode("quark-textarea",{rows:"6"},null,-1);const _hoisted_5=/*#__PURE__*/createBaseVNode("quark-textarea",{autosize:""},null,-1);const _hoisted_6=/*#__PURE__*/createBaseVNode("quark-textarea",{disabled:""},null,-1);const _hoisted_7=/*#__PURE__*/createBaseVNode("quark-textarea",{showcount:"",class:"custom-style"},null,-1);function _sfc_render(_ctx,_cache,$props,$setup,$data,$options){return openBlock(),createElementBlock("div",_hoisted_1,[createBaseVNode("h2",null,toDisplayString(_ctx.translate("basic")),1),withDirectives(createBaseVNode("quark-textarea",{"onUpdate:modelValue":_cache[0]||(_cache[0]=$event=>_ctx.textAreaInput=$event)},null,512),[[vModelText,_ctx.textAreaInput]]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("count")),1),_hoisted_2,createBaseVNode("h2",null,toDisplayString(_ctx.translate("limit")),1),_hoisted_3,createBaseVNode("h2",null,toDisplayString(_ctx.translate("rows")),1),_hoisted_4,createBaseVNode("h2",null,toDisplayString(_ctx.translate("height")),1),_hoisted_5,createBaseVNode("h2",null,toDisplayString(_ctx.translate("disabled")),1),_hoisted_6,createBaseVNode("h2",null,toDisplayString(_ctx.translate("event")),1),createBaseVNode("quark-textarea",{onInput:_cache[1]||(_cache[1]=$event=>_ctx.handleEvent($event,'input')),onBlur:_cache[2]||(_cache[2]=$event=>_ctx.handleEvent($event,'blur')),onFocus:_cache[3]||(_cache[3]=$event=>_ctx.handleEvent($event,'focus')),onCompositionstart:_cache[4]||(_cache[4]=$event=>_ctx.handleEvent($event,'compositionstart'))},null,32),createBaseVNode("h2",null,toDisplayString(_ctx.translate("custom")),1),_hoisted_7]);}var demo=exports('default',/*#__PURE__*/_export_sfc(_sfc_main,[['render',_sfc_render]]));}};});})();
