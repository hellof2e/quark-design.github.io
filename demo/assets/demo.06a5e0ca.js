import { c as createComponent } from "./component.2c611dda.js";
import { _ as _export_sfc, r as ref, o as onBeforeMount, u as useTranslate, f as onMounted, c as createElementBlock, a as createBaseVNode, t as toDisplayString, C as createTextVNode, b as openBlock } from "./mobile.e5299952.js";
var demo_scss_vue_type_style_index_0_src_lang = "";
const { createDemo, translate } = createComponent("popupextra");
const _sfc_main = createDemo({
  setup() {
    const open = ref("false");
    const open2 = ref("false");
    const open3 = ref("false");
    onBeforeMount(() => {
      useTranslate({
        "zh-CN": {
          basic: "\u57FA\u672C\u7528\u6CD5",
          customTitle: "\u81EA\u5B9A\u4E49\u5934\u90E8",
          custom: "\u81EA\u5B9A\u4E49",
          popupTitle: "\u4E3B\u6807\u9898",
          popupTitle2: "\u526F\u6807\u9898",
          content1: "1.\u6B63\u6B63\u6B63\u6B63\u6B63\u6B63\u6B63\u6B63\u6B63\u6B63\u6B63",
          content1: `\u5B6B\u5B50\u66F0\uFF1A\u5175\u8005\uFF0C\u570B\u4E4B\u5927\u4E8B\uFF0C\u6B7B\u751F\u4E4B\u5730\uFF0C\u5B58\u4EA1\u4E4B\u9053\uFF0C\u4E0D\u53EF\u4E0D\u5BDF\u4E5F\u3002
						\u6545\u7D93\u4E4B\u4EE5\u4E94\uFF0C\u6821\u4E4B\u4EE5\u8A08\uFF0C\u800C\u7D22\u5176\u60C5\uFF1A\u4E00\u66F0\u9053\uFF0C\u4E8C\u66F0\u5929\uFF0C\u4E09\u66F0\u5730\uFF0C\u56DB\u66F0\u5C07\uFF0C\u4E94\u66F0\u6CD5
						\u3002\u9053\u8005\uFF0C\u4EE4\u6C11\u4E8E\u4E0A\u540C\u610F\u8005\u4E5F\uFF0C\u53EF\u8207\u4E4B\u6B7B\uFF0C\u53EF\u8207\u4E4B\u751F\uFF0C\u6C11\u4E0D\u8A6D\u4E5F\u3002\u5929\u8005\uFF0C\u9670\u967D\u3001\u5BD2
						\u6691\u3001\u6642\u5236\u4E5F\u3002\u5730\u8005\uFF0C\u9AD8\u4E0B\u3001\u9060\u8FD1\u3001\u96AA\u6613\u3001\u5EE3\u72F9\u3001\u6B7B\u751F\u4E5F\u3002\u5C07\u8005\uFF0C\u667A\u3001\u4FE1\u3001\u4EC1\u3001\u52C7
						\u3001\u56B4\u4E5F\u3002\u6CD5\u8005\uFF0C\u66F2\u5236\u3001\u5B98\u9053\u3001\u4E3B\u7528\u4E5F\u3002\u51E1\u6B64\u4E94\u8005\uFF0C\u5C07\u83AB\u4E0D\u805E\uFF0C\u77E5\u4E4B\u8005\u52DD\uFF0C\u4E0D\u77E5\u4E4B
						\u8005\u4E0D\u52DD\u3002\u6545\u6821\u4E4B\u4EE5\u8A08\uFF0C\u800C\u7D22\u5176\u60C5\u3002\u66F0\uFF1A\u4E3B\u5B70\u6709\u9053\uFF1F\u5C07\u5B70\u6709\u80FD\uFF1F\u5929\u5730\u5B70\u5F97\uFF1F\u6CD5\u4EE4\u5B70
						\u884C\uFF1F\u5175\u773E\u5B70\u5F37\uFF1F\u58EB\u5352\u5B70\u7DF4\uFF1F\u8CDE\u7F70\u5B70\u660E\uFF1F\u543E\u4EE5\u6B64\u77E5\u52DD\u8CA0\u77E3\u3002

						\u5C07\u807D\u543E\u8A08\uFF0C\u7528\u4E4B\u5FC5\u52DD\uFF0C\u7559\u4E4B\uFE54\u5C07\u4E0D\u807D\u543E\u8A08\uFF0C\u7528\u4E4B\u5FC5\u6557\uFF0C\u53BB\u4E4B\u3002

						\u8A08\u5229\u4EE5\u807D\uFF0C\u4E43\u70BA\u4E4B\u52E2\uFF0C\u4EE5\u4F50\u5176\u5916\u3002\u52E2\u8005\uFF0C\u56E0\u5229\u800C\u5236\u6B0A\u4E5F\u3002

						\u5175\u8005\uFF0C\u8A6D\u9053\u4E5F\u3002\u6545\u80FD\u800C\u793A\u4E4B\u4E0D\u80FD\uFF0C\u7528\u800C\u793A\u4E4B\u4E0D\u7528\uFF0C\u8FD1\u800C\u793A\u4E4B\u9060\uFF0C\u9060\u800C\u793A\u4E4B\u8FD1\u3002\u5229
						\u800C\u8A98\u4E4B\uFF0C\u4E82\u800C\u53D6\u4E4B\uFF0C\u5BE6\u800C\u5099\u4E4B\uFF0C\u5F37\u800C\u907F\u4E4B\uFF0C\u6012\u800C\u6493\u4E4B\uFF0C\u5351\u800C\u9A55\u4E4B\uFF0C\u4F5A\u800C\u52DE\u4E4B\uFF0C\u89AA
						\u800C\u96E2\u4E4B\uFF0C\u653B\u5176\u4E0D\u5099\uFF0C\u51FA\u5176\u4E0D\u610F\u3002\u6B64\u5175\u5BB6\u4E4B\u52DD\uFF0C\u4E0D\u53EF\u5148\u50B3\u4E5F\u3002

						\u592B\u672A\u6230\u800C\u5EDF\u7B97\u52DD\u8005\uFF0C\u5F97\u7B97\u591A\u4E5F\uFE54\u672A\u6230\u800C\u5EDF\u7B97\u4E0D\u52DD\u8005\uFF0C\u5F97\u7B97\u5C11\u4E5F\u3002\u591A\u7B97\u52DD\uFF0C\u5C11\u7B97\u4E0D
						\u52DD\uFF0C\u800C\u6CC1\u7121\u7B97\u4E4E\uFF01\u543E\u4EE5\u6B64\u89C0\u4E4B\uFF0C\u52DD\u8CA0\u898B\u77E3\u3002`
        },
        "en-US": {
          basic: "Basic Usage",
          custom: "Custom",
          customTitle: "Custom title",
          popupTitle: "Main title",
          popupTitle2: "Subtitle",
          content1: "Why We Love Dunhuang",
          content2: "Dunhuang is a place born in legends. Its unique charm has attracted people around the globe to come and worship. In this podcast series, we bring you to Dunhuang, and walk you through the reasons why we love Dunhuang."
        }
      });
    });
    onMounted(() => {
    });
    return {
      open,
      open2,
      open3,
      translate
    };
  }
});
const _hoisted_1 = { class: "demo no-padding popup-demo" };
const _hoisted_2 = ["title"];
const _hoisted_3 = ["title"];
const _hoisted_4 = ["title"];
const _hoisted_5 = ["title", "open"];
const _hoisted_6 = { class: "popup-body" };
const _hoisted_7 = ["title", "subtitle", "open"];
const _hoisted_8 = { class: "popup-body" };
const _hoisted_9 = ["subtitle", "open"];
const _hoisted_10 = { slot: "title" };
const _hoisted_11 = { style: { "color": "red" } };
const _hoisted_12 = { class: "popup-body" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("basic")), 1),
    createBaseVNode("quark-cell-group", null, [
      createBaseVNode("quark-cell", {
        islink: "",
        type: "primary",
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.open = true),
        title: _ctx.translate("popupTitle")
      }, null, 8, _hoisted_2),
      createBaseVNode("quark-cell", {
        islink: "",
        type: "primary",
        onClick: _cache[1] || (_cache[1] = ($event) => _ctx.open2 = true),
        title: _ctx.translate("popupTitle2")
      }, null, 8, _hoisted_3)
    ]),
    createBaseVNode("h2", null, toDisplayString(_ctx.translate("customTitle")), 1),
    createBaseVNode("quark-cell", {
      islink: "",
      type: "primary",
      onClick: _cache[2] || (_cache[2] = ($event) => _ctx.open3 = true),
      title: _ctx.translate("customTitle")
    }, null, 8, _hoisted_4),
    createBaseVNode("quark-popupextra", {
      title: _ctx.translate("popupTitle"),
      open: _ctx.open,
      onClosed: _cache[3] || (_cache[3] = ($event) => _ctx.open = false)
    }, [
      createBaseVNode("div", _hoisted_6, [
        createBaseVNode("h4", null, toDisplayString(_ctx.translate("content1")), 1),
        createBaseVNode("p", null, toDisplayString(_ctx.translate("content2")), 1)
      ])
    ], 40, _hoisted_5),
    createBaseVNode("quark-popupextra", {
      title: _ctx.translate("customTitle"),
      subtitle: _ctx.translate("popupTitle2"),
      open: _ctx.open2,
      onClosed: _cache[4] || (_cache[4] = ($event) => _ctx.open2 = false)
    }, [
      createBaseVNode("div", _hoisted_8, [
        createBaseVNode("h4", null, toDisplayString(_ctx.translate("content1")), 1),
        createBaseVNode("p", null, toDisplayString(_ctx.translate("content2")), 1)
      ])
    ], 40, _hoisted_7),
    createBaseVNode("quark-popupextra", {
      subtitle: _ctx.translate("popupTitle2"),
      open: _ctx.open3,
      onClosed: _cache[5] || (_cache[5] = ($event) => _ctx.open3 = false)
    }, [
      createBaseVNode("div", _hoisted_10, [
        createBaseVNode("span", _hoisted_11, toDisplayString(_ctx.translate("custom")), 1),
        createTextVNode(" " + toDisplayString(_ctx.translate("popupTitle")), 1)
      ]),
      createBaseVNode("div", _hoisted_12, [
        createBaseVNode("h4", null, toDisplayString(_ctx.translate("content1")), 1),
        createBaseVNode("p", null, toDisplayString(_ctx.translate("content2")), 1)
      ])
    ], 40, _hoisted_9)
  ]);
}
var demo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export { demo as default };
