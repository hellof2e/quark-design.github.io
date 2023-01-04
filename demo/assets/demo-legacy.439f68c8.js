;(function(){var __vite_style__=document.createElement('style');__vite_style__.innerHTML=".field-demo .demo-inputs {\n  margin-bottom: 24px;\n}\n.field-demo .sapce {\n  margin-bottom: 10px;\n}\n.field-demo h2 {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  font-size: 14px;\n  color: #909ca4;\n  padding: 0 10px;\n  font-weight: normal;\n}\n.field-demo .type {\n  background: #fff;\n}\n.field-demo .demo-inputs .line {\n  height: 1px;\n  width: calc(100% - 32px);\n  background: #ebedf0;\n  margin: auto;\n}\n.field-demo .theme {\n  --field-label-width: 100px;\n  --field-label-text-color: green;\n  --field-label-font-size: 18px;\n  --field-label-margin-right: 10px;\n  --field-input-text-color: #999;\n  --field-input-font-size: 20px;\n  --field-placeholder-text-color: red;\n  --field-placeholder-font-size: 12px;\n  --field-disabled-text-color: #eee;\n}\n.field-demo .oneLine {\n  --field-input-align: center;\n}\n.field-demo .label {\n  font-size: 16px;\n  min-width: 119px;\n  margin-right: 12px;\n  font-weight: 500;\n  color: #242729;\n}\n.field-demo .label span {\n  margin: 0;\n  display: block;\n  font-size: 13px;\n  font-weight: 400;\n  color: #879099;\n}";document.head.appendChild(__vite_style__);System.register(['./component-legacy.be9293a9.js','./mobile-legacy.9ab92068.js'],function(exports){'use strict';var createComponent,_export_sfc,ref,onBeforeMount,useTranslate,onMounted,createElementBlock,createBaseVNode,toDisplayString,Toast,openBlock;return{setters:[function(module){createComponent=module.c;},function(module){_export_sfc=module._;ref=module.r;onBeforeMount=module.o;useTranslate=module.u;onMounted=module.f;createElementBlock=module.c;createBaseVNode=module.a;toDisplayString=module.t;Toast=module.T;openBlock=module.b;}],execute:function(){var demo_scss_vue_type_style_index_0_src_lang='';const{createDemo,translate}=createComponent("field");const _sfc_main=createDemo({setup(){const value=ref(1);const disabled=ref(true);const css=ref({labelWidth:"100px",labelColor:"#ccc",labelSize:"16px",labelMarginRight:"10px",inputColor:"#999",inputSize:"12px",placeholderColor:"red"});onBeforeMount(()=>{useTranslate({"zh-CN":{title:{basic:"基础用法",head:"自定义标题/无标题",disabled:"禁用与只读",css:"css 属性",event:"事件",required:"设置必填字段"},basic:{placeholder:"请输入文本",label1:"文本",label2:"密码",label3:"数字",label4:"最多5位数",value:"一二三四五"},head:{value:"自定义标题",main:"主标题",subtitle:"这是一行副标题"},nohead:{placeholder:"禁用label",value:"无标题"},disabled:{value:"我禁用了",label:"禁用"},readonly:{value:"我是只读的",label:"只读"},requiredText:{placeholder:"请输入文本",label:"文本",error:"文本内容不能为空"},requiredPhone:{placeholder:"请输入手机号",label:"手机号",error:"请输入正确的手机号"}},"en-US":{title:{basic:"Basic Usage",head:"Custom Title",disabled:"Disabled & Readonly",css:"CSS Style",event:"Event",required:"Requied Content Setting"},basic:{placeholder:"Please enter text",label1:"Text",label2:"Password",label3:"Number",label4:"Up to 5 digits",value:"One Two Tree Four Five"},head:{value:"Custom Title",main:"Main Title",subtitle:"Subtitle"},nohead:{placeholder:"Disable Label",value:"No Title"},disabled:{value:"Disabled",label:"Disabled"},readonly:{value:"Readonly",label:"Readonly"},requiredText:{placeholder:"Please enter text",label:"Text",error:"Text content cannot be empty"},requiredPhone:{placeholder:"Please enter phone number",label:"Phone number",error:"Please enter the correct number"}}});});onMounted(()=>{const field=document.getElementById("custom-rule");field.setRules([{validator:validatorPhone,message:`${translate("requiredPhone.error")}`}]);});const validatorPhone=value=>{if(!/^1[3456789]\d{9}$/.test(value)){return false;}return true;};const change=e=>{value.data=e.detail.value;Toast.text(e.detail.value);};const blur=()=>{Toast.text("blur");};const focus=()=>{Toast.text("focus");};return{value,disabled,css,change,blur,focus,translate};}});const _hoisted_1={class:"demo field-demo"};const _hoisted_2={class:"demo-inputs"};const _hoisted_3={class:"type"};const _hoisted_4=["placeholder","label"];const _hoisted_5=/*#__PURE__*/createBaseVNode("div",{class:"line"},null,-1);const _hoisted_6=["label"];const _hoisted_7=/*#__PURE__*/createBaseVNode("div",{class:"line"},null,-1);const _hoisted_8=["label"];const _hoisted_9=/*#__PURE__*/createBaseVNode("div",{class:"line"},null,-1);const _hoisted_10=["value","label"];const _hoisted_11={class:"type"};const _hoisted_12=["value"];const _hoisted_13={slot:"label",class:"label"};const _hoisted_14=/*#__PURE__*/createBaseVNode("div",{class:"line"},null,-1);const _hoisted_15=["placeholder","value"];const _hoisted_16=/*#__PURE__*/createBaseVNode("div",{class:"line"},null,-1);const _hoisted_17={class:"type"};const _hoisted_18=["value","label"];const _hoisted_19=/*#__PURE__*/createBaseVNode("div",{class:"line"},null,-1);const _hoisted_20=["value","label"];const _hoisted_21={class:"type"};const _hoisted_22=["value"];const _hoisted_23=["label","value"];const _hoisted_24=["placeholder","label","errormsg"];const _hoisted_25=["placeholder","label"];function _sfc_render(_ctx,_cache,$props,$setup,$data,$options){return openBlock(),createElementBlock("div",_hoisted_1,[createBaseVNode("div",_hoisted_2,[createBaseVNode("h2",null,toDisplayString(_ctx.translate("title.basic")),1),createBaseVNode("div",_hoisted_3,[createBaseVNode("quark-field",{placeholder:_ctx.translate('basic.placeholder'),label:_ctx.translate('basic.label1')},null,8,_hoisted_4),_hoisted_5,createBaseVNode("quark-field",{type:"password",value:"123456",label:_ctx.translate('basic.label2')},null,8,_hoisted_6),_hoisted_7,createBaseVNode("quark-field",{type:"number",value:"12345678901",max:"11",label:_ctx.translate('basic.label3')},null,8,_hoisted_8),_hoisted_9,createBaseVNode("quark-field",{value:_ctx.translate('basic.value'),maxlength:"5",label:_ctx.translate('basic.label4')},null,8,_hoisted_10)]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("title.head")),1),createBaseVNode("div",_hoisted_11,[createBaseVNode("quark-field",{value:_ctx.translate('head.value')},[createBaseVNode("div",_hoisted_13,[createBaseVNode("p",null,toDisplayString(_ctx.translate("head.main")),1),createBaseVNode("span",null,toDisplayString(_ctx.translate("head.subtitle")),1)])],8,_hoisted_12),_hoisted_14,createBaseVNode("quark-field",{placeholder:_ctx.translate('nohead.placeholder'),value:_ctx.translate('nohead.value'),class:"oneLine"},null,8,_hoisted_15),_hoisted_16]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("title.disabled")),1),createBaseVNode("div",_hoisted_17,[createBaseVNode("quark-field",{value:_ctx.translate('disabled.value'),label:_ctx.translate('disabled.label'),disabled:""},null,8,_hoisted_18),_hoisted_19,createBaseVNode("quark-field",{value:_ctx.translate('readonly.value'),label:_ctx.translate('readonly.label'),readonly:""},null,8,_hoisted_20)]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("title.css")),1),createBaseVNode("div",_hoisted_21,[createBaseVNode("quark-field",{class:"theme",value:_ctx.translate('title.css'),label:"css"},null,8,_hoisted_22)]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("title.event")),1),createBaseVNode("quark-field",{label:_ctx.translate('title.event'),value:_ctx.value,onChange:_cache[0]||(_cache[0]=(...args)=>_ctx.change&&_ctx.change(...args)),onBlur:_cache[1]||(_cache[1]=(...args)=>_ctx.blur&&_ctx.blur(...args)),onFocus:_cache[2]||(_cache[2]=(...args)=>_ctx.focus&&_ctx.focus(...args))},null,40,_hoisted_23),createBaseVNode("h2",null,toDisplayString(_ctx.translate("title.required")),1),createBaseVNode("quark-field",{placeholder:_ctx.translate('requiredText.placeholder'),label:_ctx.translate('requiredText.label'),required:"",errormsg:_ctx.translate('requiredText.error')},null,8,_hoisted_24),createBaseVNode("quark-field",{placeholder:_ctx.translate('requiredPhone.placeholder'),label:_ctx.translate('requiredPhone.label'),id:"custom-rule",required:""},null,8,_hoisted_25)])]);}var demo=exports('default',/*#__PURE__*/_export_sfc(_sfc_main,[['render',_sfc_render]]));}};});})();
