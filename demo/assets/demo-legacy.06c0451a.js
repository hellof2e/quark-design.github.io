;(function(){var __vite_style__=document.createElement('style');__vite_style__.innerHTML=".scoped-form[data-v-5d848ad9] {\n  padding-top: 48px !important;\n}\n.scoped-form h2[data-v-5d848ad9] {\n  margin-top: 30px;\n  margin-bottom: 10px;\n  font-size: 14px;\n  color: #909ca4;\n  padding: 0 10px;\n  font-weight: norma;\n}\n.scoped-form quark-form[data-v-5d848ad9] {\n  background: #fff;\n}\n.scoped-form .sapce[data-v-5d848ad9] {\n  margin-bottom: 10px;\n}\n.scoped-form .submit-wrap[data-v-5d848ad9] {\n  display: flex;\n  justify-content: center;\n}\n.scoped-form .submit[data-v-5d848ad9] {\n  width: 100%;\n  height: 40px;\n  margin-top: 8px;\n}\n.scoped-form .type[data-v-5d848ad9] {\n  background: #fff;\n}\n.scoped-form .line[data-v-5d848ad9] {\n  height: 1px;\n  width: calc(100% - 32px);\n  margin: auto;\n}\n.scoped-form .theme[data-v-5d848ad9] {\n  --field-label-width: 100px;\n  --field-label-text-color: green;\n  --field-label-font-size: 18px;\n  --field-label-margin-right: 10px;\n  --field-input-text-color: #999;\n  --field-input-font-size: 20px;\n  --field-placeholder-text-color: red;\n  --field-placeholder-font-size: 12px;\n  --field-disabled-text-color: #eee;\n}\n.scoped-form .oneLine[data-v-5d848ad9] {\n  --field-input-align: center;\n}\n.scoped-form .label[data-v-5d848ad9] {\n  font-size: 16px;\n  min-width: 119px;\n  margin-right: 12px;\n  font-weight: 500;\n  color: #242729;\n}\n.scoped-form .label span[data-v-5d848ad9] {\n  margin: 0;\n  display: block;\n  font-size: 13px;\n  font-weight: 400;\n  color: #879099;\n}\n.scoped-form .form-item[data-v-5d848ad9] {\n  display: flex;\n  align-items: center;\n  background: #fff;\n  padding: 8px 16px;\n  --uploader-width: 60px;\n  --uploader-height: 60px;\n}\n.scoped-form .form-item .right[data-v-5d848ad9] {\n  flex: 1;\n}\n.scoped-form .form-item span[data-v-5d848ad9] {\n  font-size: 15px;\n  text-align: left;\n  margin-right: 12px;\n  color: #242729;\n  display: inline-block;\n  width: 119px;\n}\n.scoped-form .form-item quark-checkbox[data-v-5d848ad9] {\n  font-size: 12px;\n  margin-right: 8px;\n}\n.scoped-form .form-item quark-radio[data-v-5d848ad9] {\n  margin-right: 8px;\n}\n.scoped-form .form-item quark-cell[data-v-5d848ad9] {\n  width: 200px;\n  flex: 1;\n}\n.scoped-form .form-item quark-picker[data-v-5d848ad9] {\n  width: auto;\n}";document.head.appendChild(__vite_style__);System.register(['./component-legacy.d872b596.js','./mobile-legacy.ff2c0f99.js'],function(exports){'use strict';var createComponent,_export_sfc,ref,onMounted,onBeforeUnmount,onBeforeMount,useTranslate,createElementBlock,createBaseVNode,toDisplayString,Toast,openBlock,pushScopeId,popScopeId;return{setters:[function(module){createComponent=module.c;},function(module){_export_sfc=module._;ref=module.r;onMounted=module.f;onBeforeUnmount=module.k;onBeforeMount=module.o;useTranslate=module.u;createElementBlock=module.c;createBaseVNode=module.a;toDisplayString=module.t;Toast=module.T;openBlock=module.b;pushScopeId=module.p;popScopeId=module.l;}],execute:function(){var demo_scss_vue_type_style_index_0_src_scoped_true_lang='';const{createDemo,translate}=createComponent("form");const _sfc_main=createDemo({setup(){const data=ref({value:10,open:false,datepicker:`${translate("error.timePicker")}`,// 异步
field:"",textarea:"",checkbox1:true,checkbox2:false,radio:"",t:""});const form1=ref(null);const form2=ref(null);const form3=ref(null);const pickerRef=ref(null);onMounted(()=>{form1.value.setRules([{name:"name",required:true},{name:"password",required:true,type:"password"}]);form2.value.setRules([{name:"field",required:true},{name:"textarea",required:true}]);const picker=pickerRef.value;picker.setColumns([{defaultIndex:0,values:translate("calendaritem.weekdays")},{defaultIndex:1,values:translate("time")}]);form2.value.setRules([{name:"age",required:true,message:`${translate("error.age")}`,validator:value=>value>=18},{name:"phone",required:true,message:`${translate("error.formItem")}`,validator:value=>/^1[3456789]\d{9}$/g.test(value)}]);form3.value.setRules([{name:"field",required:true},{name:"textarea",required:true}]);});onBeforeUnmount(()=>{clearTimeout(data.value.t);});onBeforeMount(()=>{useTranslate({"zh-CN":{title:{basic:"基础用法",rule:"自定义校验规则",items:"表单项大全"},labels:["姓名","密码","年龄","手机号"],vegetable:"蔬菜:",vegetables:["黄瓜","生姜"],fruit:"水果:",fruits:["苹果","香蕉"],items:["开灯:","打分:","步进器:","上传:","picker 选择器:"],placeholder:"请输入文本",submit:"提交",error:{timePicker:"请选择时间",age:"不能小于18岁",name:"请输入姓名",phone:"请输入正确的手机号",formItem:"请检查表单项",items:"当前表单所有的值",console:"请在控制台查看表单值"},time:["上午","下午"]},"en-US":{title:{basic:"Basic Usage",rule:"Custom Rules",items:"Form Items"},labels:["Name","Password","Age","Phone"],vegetable:"Vegetables:",vegetables:["Cucumber","Ginger"],fruit:"Fruit:",fruits:["Apple","Banana"],items:["Switch:","Rate:","Stepper:","Upload:","Picker:"],placeholder:"Please enter text",submit:"Submit",error:{timePicker:"Please select time",age:"Must not be younger than 18",phone:"please enter a valid phone number",formItem:"Please check the form item",items:"All values of the current form",console:"Please check the form value in the console",name:"Please input name"},time:["a.m.","p.m."]}});});const submit1=()=>{form1.value.getValues().then(value=>{}).catch(err=>{Toast.text(err.message||`${translate("error.name")}`);});};const submit2=()=>{form2.value.getValues().then(value=>{console.log(value,`${translate("error.items")}`);}).catch(err=>{// Toast.text(err.message || '请检查表单项');
});};const submit3=()=>{form3.value.getValues().then(value=>{Toast.text(`${translate("error.console")}`);console.log(value,"22");}).catch(err=>{console.log(err,"e");Toast.text(err.message||`${translate("error.formItem")}`);});};const onRadioChange=({detail})=>{data.value.radio=detail.value;};const click=()=>{data.value.open=true;};const close=()=>{data.value.open=false;};const confirm=({detail})=>{data.value.datepicker=detail.value.map(i=>i.value).join(" ");data.value.open=false;};return{data,form1,form2,form3,pickerRef,translate,submit1,submit2,submit3,click,close,confirm,onRadioChange};}});const _withScopeId=n=>(pushScopeId("data-v-5d848ad9"),n=n(),popScopeId(),n);const _hoisted_1={class:"demo scoped-form"};const _hoisted_2={ref:"form1"};const _hoisted_3=["label"];const _hoisted_4=/*#__PURE__*/_withScopeId(()=>/*#__PURE__*/createBaseVNode("div",{class:"line"},null,-1));const _hoisted_5=["label"];const _hoisted_6={class:"submit-wrap"};const _hoisted_7={ref:"form2"};const _hoisted_8=["placeholder","label"];const _hoisted_9=/*#__PURE__*/_withScopeId(()=>/*#__PURE__*/createBaseVNode("div",{class:"line"},null,-1));const _hoisted_10=["label"];const _hoisted_11={class:"submit-wrap"};const _hoisted_12={ref:"form3"};const _hoisted_13=["placeholder","label","value"];const _hoisted_14=/*#__PURE__*/_withScopeId(()=>/*#__PURE__*/createBaseVNode("div",{class:"line"},null,-1));const _hoisted_15={class:"form-item"};const _hoisted_16=["value"];const _hoisted_17=/*#__PURE__*/_withScopeId(()=>/*#__PURE__*/createBaseVNode("div",{class:"line"},null,-1));const _hoisted_18={class:"form-item"};const _hoisted_19=["checked"];const _hoisted_20=["checked"];const _hoisted_21=/*#__PURE__*/_withScopeId(()=>/*#__PURE__*/createBaseVNode("div",{class:"line"},null,-1));const _hoisted_22=/*#__PURE__*/_withScopeId(()=>/*#__PURE__*/createBaseVNode("div",{class:"line"},null,-1));const _hoisted_23={class:"form-item"};const _hoisted_24=/*#__PURE__*/_withScopeId(()=>/*#__PURE__*/createBaseVNode("quark-switch",{name:"switch"},null,-1));const _hoisted_25=/*#__PURE__*/_withScopeId(()=>/*#__PURE__*/createBaseVNode("div",{class:"line"},null,-1));const _hoisted_26={class:"form-item"};const _hoisted_27=/*#__PURE__*/_withScopeId(()=>/*#__PURE__*/createBaseVNode("quark-rate",{name:"rate"},null,-1));const _hoisted_28=/*#__PURE__*/_withScopeId(()=>/*#__PURE__*/createBaseVNode("div",{class:"line"},null,-1));const _hoisted_29={class:"form-item"};const _hoisted_30=/*#__PURE__*/_withScopeId(()=>/*#__PURE__*/createBaseVNode("quark-stepper",{name:"step"},null,-1));const _hoisted_31=/*#__PURE__*/_withScopeId(()=>/*#__PURE__*/createBaseVNode("div",{class:"line"},null,-1));const _hoisted_32={class:"form-item"};const _hoisted_33=/*#__PURE__*/_withScopeId(()=>/*#__PURE__*/createBaseVNode("quark-uploader",{name:"uploader",iconcolor:"#ccc",preview:""},null,-1));const _hoisted_34=/*#__PURE__*/_withScopeId(()=>/*#__PURE__*/createBaseVNode("div",{class:"line"},null,-1));const _hoisted_35={class:"form-item"};const _hoisted_36=["title"];const _hoisted_37=["title","open"];const _hoisted_38=/*#__PURE__*/_withScopeId(()=>/*#__PURE__*/createBaseVNode("div",{class:"line"},null,-1));const _hoisted_39={class:"submit-wrap"};function _sfc_render(_ctx,_cache,$props,$setup,$data,$options){return openBlock(),createElementBlock("div",_hoisted_1,[createBaseVNode("h2",null,toDisplayString(_ctx.translate("title.basic")),1),createBaseVNode("quark-form",_hoisted_2,[createBaseVNode("quark-field",{name:"name",label:_ctx.translate('labels')[0]},null,8,_hoisted_3),_hoisted_4,createBaseVNode("quark-field",{type:"password",name:"password",label:_ctx.translate('labels')[1]},null,8,_hoisted_5),createBaseVNode("div",_hoisted_6,[createBaseVNode("quark-button",{type:"primary",onClick:_cache[0]||(_cache[0]=(...args)=>_ctx.submit1&&_ctx.submit1(...args)),class:"submit"},toDisplayString(_ctx.translate("submit")),1)])],512),createBaseVNode("h2",null,toDisplayString(_ctx.translate("title.rule")),1),createBaseVNode("quark-form",_hoisted_7,[createBaseVNode("quark-field",{placeholder:_ctx.translate('placeholder'),name:"age",label:_ctx.translate('labels')[2]},null,8,_hoisted_8),_hoisted_9,createBaseVNode("quark-field",{type:"number",value:"123",max:"11",name:"phone",label:_ctx.translate('labels')[3]},null,8,_hoisted_10),createBaseVNode("div",_hoisted_11,[createBaseVNode("quark-button",{type:"primary",onClick:_cache[1]||(_cache[1]=(...args)=>_ctx.submit2&&_ctx.submit2(...args)),class:"submit"},toDisplayString(_ctx.translate("submit")),1)])],512),createBaseVNode("h2",null,toDisplayString(_ctx.translate("title.items")),1),createBaseVNode("quark-form",_hoisted_12,[createBaseVNode("quark-field",{placeholder:_ctx.translate('placeholder'),name:"field",label:_ctx.translate('labels')[2],value:_ctx.data.field},null,8,_hoisted_13),_hoisted_14,createBaseVNode("div",_hoisted_15,[createBaseVNode("quark-textarea",{name:"textarea",value:_ctx.data.textarea},null,8,_hoisted_16)]),_hoisted_17,createBaseVNode("div",_hoisted_18,[createBaseVNode("span",null,toDisplayString(_ctx.translate("vegetable")),1),createBaseVNode("quark-checkbox",{name:"checkbox1",shape:"square",checked:_ctx.data.checkbox1},toDisplayString(_ctx.translate("vegetables")[0]),9,_hoisted_19),createBaseVNode("quark-checkbox",{name:"checkbox2",shape:"square",checked:_ctx.data.checkbox2},toDisplayString(_ctx.translate("vegetables")[1]),9,_hoisted_20)]),_hoisted_21,_hoisted_22,createBaseVNode("div",_hoisted_23,[createBaseVNode("span",null,toDisplayString(_ctx.translate("items")[0]),1),_hoisted_24]),_hoisted_25,createBaseVNode("div",_hoisted_26,[createBaseVNode("span",null,toDisplayString(_ctx.translate("items")[1]),1),_hoisted_27]),_hoisted_28,createBaseVNode("div",_hoisted_29,[createBaseVNode("span",null,toDisplayString(_ctx.translate("items")[2]),1),_hoisted_30]),_hoisted_31,createBaseVNode("div",_hoisted_32,[createBaseVNode("span",null,toDisplayString(_ctx.translate("items")[3]),1),_hoisted_33]),_hoisted_34,createBaseVNode("div",_hoisted_35,[createBaseVNode("span",null,toDisplayString(_ctx.translate("items")[4]),1),createBaseVNode("quark-cell",{type:"primary",title:_ctx.data.datepicker,isLink:"",onClick:_cache[2]||(_cache[2]=(...args)=>_ctx.click&&_ctx.click(...args))},null,8,_hoisted_36),createBaseVNode("quark-picker",{title:_ctx.translate('error.timePicker'),ref:"pickerRef",open:_ctx.data.open,onClose:_cache[3]||(_cache[3]=(...args)=>_ctx.close&&_ctx.close(...args)),onConfirm:_cache[4]||(_cache[4]=(...args)=>_ctx.confirm&&_ctx.confirm(...args)),onChange:_cache[5]||(_cache[5]=(...args)=>_ctx.change&&_ctx.change(...args)),name:"picker"},null,40,_hoisted_37)]),_hoisted_38,createBaseVNode("div",_hoisted_39,[createBaseVNode("quark-button",{type:"primary",class:"submit",onClick:_cache[6]||(_cache[6]=(...args)=>_ctx.submit3&&_ctx.submit3(...args))},toDisplayString(_ctx.translate("submit")),1)])],512)]);}var demo=exports('default',/*#__PURE__*/_export_sfc(_sfc_main,[['render',_sfc_render],['__scopeId',"data-v-5d848ad9"]]));}};});})();