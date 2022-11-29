;(function(){var __vite_style__=document.createElement('style');__vite_style__.innerHTML=".radio-demo .radio-container {\n  background: #fff;\n  padding: 10px;\n  border-radius: 4px;\n}\n.radio-demo .radio-container quark-radio {\n  margin-right: 20px;\n}\n.radio-demo .my-color {\n  --radio-background: linear-gradient(225deg, #ff918d 0%, #f54640 100%);\n}\n.radio-demo .first-radio {\n  margin-right: 8px;\n}";document.head.appendChild(__vite_style__);System.register(['./component-legacy.065754ae.js','./mobile-legacy.f41e4190.js'],function(exports){'use strict';var createComponent,_export_sfc,ref,onBeforeMount,useTranslate,createElementBlock,createBaseVNode,toDisplayString,openBlock;return{setters:[function(module){createComponent=module.c;},function(module){_export_sfc=module._;ref=module.r;onBeforeMount=module.o;useTranslate=module.u;createElementBlock=module.c;createBaseVNode=module.a;toDisplayString=module.t;openBlock=module.b;}],execute:function(){var demo_scss_vue_type_style_index_0_src_lang='';const{createDemo,translate}=createComponent("radio");const _sfc_main=createDemo({setup(){const data=ref({value1:"apple",value2:"apple",value3:"apple",value4:"apple",flag:true});onBeforeMount(()=>{useTranslate({"zh-CN":{title:{basic:"单选框基础用法",type:"单选框形状",size:"单选框大小",disabled:"单选框禁用状态",selectedColor:"单选框选中颜色自定义"},type:{round:"圆形(默认)",square:"方形"},size:{round:"圆形(大)",square:"方形(大)"},disabled:{checked:"已选-禁用",unchecked:"未选-禁用",squareChecekd:"方形-已选-禁用",squareUnchecked:"方形-未选-禁用"},group:{apple:"苹果",banana:"香蕉"}},"en-US":{title:{basic:"Basic Usage",type:"Checkbox Type",size:"Checkbox Size",disabled:"Disabled Checkbox",selectedColor:"Custom Selected Color"},type:{round:"Round(Default)",square:"Square"},size:{round:"Round(Big)",square:"Square(Big)"},disabled:{checked:"Checked - Disabled",unchecked:"Unchecked - Disabled",squareChecekd:"Square - Checked -Disabled",squareUnchecked:"Square - Unchecked -Disabled"},group:{apple:"Apple",banana:"Banana"}}});});const onChange1=({detail})=>{data.value.value1=detail.value;};const onChange2=({detail})=>{data.value.value2=detail.value;};const onChange3=({detail})=>{data.value.value3=detail.value;};const onChange4=({detail})=>{data.value.value4=detail.value;};const changeDisable=()=>{data.value.flag=!data.value.flag;};return{data,onChange1,onChange2,onChange3,onChange4,changeDisable,translate};}});const _hoisted_1={class:"demo radio-demo"};const _hoisted_2={class:"radio-container"};const _hoisted_3=["value"];const _hoisted_4={name:"apple",class:"first-radio"};const _hoisted_5={name:"banana"};const _hoisted_6={class:"radio-container"};const _hoisted_7=["value"];const _hoisted_8={name:"apple",class:"first-radio"};const _hoisted_9={name:"banana",shape:"square"};const _hoisted_10={class:"radio-container"};const _hoisted_11=["value"];const _hoisted_12={name:"apple",shape:"square",size:"big",class:"first-radio"};const _hoisted_13={name:"banana",size:"big"};const _hoisted_14={class:"radio-container"};const _hoisted_15=["value"];const _hoisted_16=["disabled"];const _hoisted_17=["disabled"];const _hoisted_18={class:"radio-container"};const _hoisted_19={checked:true,shape:"square",disabled:"",class:"first-radio"};const _hoisted_20={checked:false,shape:"square",disabled:""};const _hoisted_21={class:"radio-container my-color"};const _hoisted_22={checked:true};function _sfc_render(_ctx,_cache,$props,$setup,$data,$options){return openBlock(),createElementBlock("div",_hoisted_1,[createBaseVNode("h2",null,toDisplayString(_ctx.translate("title.basic")),1),createBaseVNode("div",_hoisted_2,[createBaseVNode("quark-radio-group",{value:_ctx.data.value1,onChange:_cache[0]||(_cache[0]=(...args)=>_ctx.onChange1&&_ctx.onChange1(...args))},[createBaseVNode("quark-radio",_hoisted_4,toDisplayString(_ctx.translate("group.apple")),1),createBaseVNode("quark-radio",_hoisted_5,toDisplayString(_ctx.translate("group.banana")),1)],40,_hoisted_3)]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("title.type")),1),createBaseVNode("div",_hoisted_6,[createBaseVNode("quark-radio-group",{value:_ctx.data.value2,onChange:_cache[1]||(_cache[1]=(...args)=>_ctx.onChange2&&_ctx.onChange2(...args))},[createBaseVNode("quark-radio",_hoisted_8,toDisplayString(_ctx.translate("type.round")),1),createBaseVNode("quark-radio",_hoisted_9,toDisplayString(_ctx.translate("type.square")),1)],40,_hoisted_7)]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("title.size")),1),createBaseVNode("div",_hoisted_10,[createBaseVNode("quark-radio-group",{value:_ctx.data.value3,onChange:_cache[2]||(_cache[2]=(...args)=>_ctx.onChange3&&_ctx.onChange3(...args))},[createBaseVNode("quark-radio",_hoisted_12,toDisplayString(_ctx.translate("size.square")),1),createBaseVNode("quark-radio",_hoisted_13,toDisplayString(_ctx.translate("size.round")),1)],40,_hoisted_11)]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("title.disabled")),1),createBaseVNode("div",_hoisted_14,[createBaseVNode("quark-radio-group",{value:_ctx.data.value4,onChange:_cache[3]||(_cache[3]=(...args)=>_ctx.onChange4&&_ctx.onChange4(...args))},[createBaseVNode("quark-radio",{name:"apple",disabled:_ctx.data.flag,class:"first-radio"},toDisplayString(_ctx.translate("disabled.checked")),9,_hoisted_16),createBaseVNode("quark-radio",{name:"banana",disabled:_ctx.data.flag},toDisplayString(_ctx.translate("disabled.unchecked")),9,_hoisted_17)],40,_hoisted_15)]),createBaseVNode("div",_hoisted_18,[createBaseVNode("quark-radio",_hoisted_19,toDisplayString(_ctx.translate("disabled.squareChecekd")),1),createBaseVNode("quark-radio",_hoisted_20,toDisplayString(_ctx.translate("disabled.squareUnchecked")),1)]),createBaseVNode("h2",null,toDisplayString(_ctx.translate("title.selectedColor")),1),createBaseVNode("div",_hoisted_21,[createBaseVNode("quark-radio",_hoisted_22,toDisplayString(_ctx.translate("title.selectedColor")),1)])]);}var demo=exports('default',/*#__PURE__*/_export_sfc(_sfc_main,[['render',_sfc_render]]));}};});})();
