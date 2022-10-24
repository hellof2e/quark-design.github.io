import{c as s,o as a,a as e}from"./vue.a14da11e.js";const d={class:"markdown-body"},n=e(`<h1>Empty \u7A7A\u72B6\u6001</h1><h3>\u4ECB\u7ECD</h3><p>\u7A7A\u72B6\u6001\u3002</p><h3>\u5B89\u88C5\u4F7F\u7528</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&#39;quarkd/lib/empty&#39;</span>;
</code></pre><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-empty</span> /&gt;</span>
</code></pre><h3>\u63CF\u8FF0\u6587\u5B57</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-empty</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6682\u65E0\u6570\u636E&quot;</span> <span class="hljs-attr">desc</span>=<span class="hljs-string">&quot;\u5FEB\u53BB\u6DFB\u52A0\u6570\u636E\u5427~&quot;</span> /&gt;</span>
</code></pre><h3>\u81EA\u5B9A\u4E49\u56FE\u7247\u5927\u5C0F</h3><p>\u901A\u8FC7 <code>image-size</code> \u5C5E\u6027\u56FE\u7247\u7684\u5927\u5C0F\u3002</p><pre><code class="language-html"><span class="hljs-comment">&lt;!-- \u4E0D\u6307\u5B9A\u5355\u4F4D\uFF0C\u9ED8\u8BA4\u4E3A px --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-empty</span> <span class="hljs-attr">desc</span>=<span class="hljs-string">&quot;\u63CF\u8FF0\u6587\u5B57&quot;</span> <span class="hljs-attr">imagesize</span>=<span class="hljs-string">&quot;100&quot;</span>/&gt;</span>

<span class="hljs-comment">&lt;!-- \u6307\u5B9A\u5355\u4F4D\uFF0C\u652F\u6301 rem, vh, vw --&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">quark-empty</span> <span class="hljs-attr">desc</span>=<span class="hljs-string">&quot;\u63CF\u8FF0\u6587\u5B57&quot;</span> <span class="hljs-attr">imagesize</span>=<span class="hljs-string">&quot;100rem&quot;</span>/&gt;</span>
</code></pre><h3>\u81EA\u5B9A\u4E49\u56FE\u7247</h3><p>\u901A\u8FC7 <code>image</code> \u5C5E\u6027\u4E2D\u4F20\u5165\u4EFB\u610F\u56FE\u7247 URL\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-empty</span> <span class="hljs-attr">image</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/13459/fkntv_custom-empty-image.png&quot;</span> /&gt;</span>
</code></pre><h3>\u81EA\u5B9A\u4E49\u5E95\u90E8</h3><p>\u901A\u8FC7 <code>slot=&quot;footer&quot;</code> \u6765\u81EA\u5B9A\u4E49\u5E95\u90E8\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-empty</span> <span class="hljs-attr">desc</span>=<span class="hljs-string">&quot;\u5FEB\u53BB\u4E0B\u4E00\u5355\u5427&quot;</span> <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6CA1\u6709\u5386\u53F2\u8BA2\u5355&quot;</span> &gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;footer&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\u81EA\u5B9A\u4E49\u5E95\u90E8<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-empty</span>&gt;</span>
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u6807\u9898\u6587\u5B57</td><td><code>string</code></td><td></td></tr><tr><td>desc</td><td>\u63CF\u8FF0\u6587\u5B57</td><td><code>string </code></td><td></td></tr><tr><td>image</td><td>\u56FE\u7247 url</td><td><code> string</code></td><td></td></tr><tr><td>imagesize</td><td>\u56FE\u7247\u5927\u5C0F</td><td><code>string </code></td><td></td></tr></tbody></table><h2>\u6837\u5F0F\u53D8\u91CF</h2><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4EE5\u4E0B<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS\u53D8\u91CF</a>\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003<a href="#/zh-CN/guide/theme">\u4E3B\u9898\u5B9A\u5236</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--empty-title-font-size</code></td><td>\u6807\u9898\u5B57\u4F53\u5927\u5C0F</td><td><code>16px</code></td></tr><tr><td><code>--empty-title-color</code></td><td>\u6807\u9898\u5B57\u4F53\u989C\u8272</td><td><code>#242729</code></td></tr><tr><td><code>--empty-title-line-height</code></td><td>\u6807\u9898\u5B57\u4F53\u884C\u9AD8</td><td><code>22px</code></td></tr><tr><td><code>--empty-title-width</code></td><td>\u6807\u9898\u5B57\u4F53\u6700\u5927\u5BBD\u5EA6</td><td></td></tr><tr><td><code>--empty-title-white-space</code></td><td>\u6807\u9898\u662F\u5426\u6362\u884C</td><td><code>pre-wrap</code></td></tr><tr><td><code>--empty-desc-font-size</code></td><td>\u63CF\u8FF0\u5B57\u4F53\u5927\u5C0F</td><td></td></tr><tr><td><code>--empty-desc-color</code></td><td>\u63CF\u8FF0\u5B57\u4F53\u989C\u8272</td><td><code>#969799</code></td></tr><tr><td><code>--empty-desc-line-height</code></td><td>\u63CF\u8FF0\u5B57\u4F53\u884C\u9AD8</td><td><code>20px</code></td></tr><tr><td><code>--empty-desc-width</code></td><td>\u63CF\u8FF0\u5B57\u4F53\u6700\u5927\u5BBD\u5EA6</td><td></td></tr><tr><td><code>--empty-desc-white-space</code></td><td>\u63CF\u8FF0\u662F\u5426\u6362\u884C</td><td><code>pre-wrap</code></td></tr></tbody></table>`,24),p=[n],g={__name:"doc.zh-CN",setup(l,{expose:t}){return t({frontmatter:{}}),(o,h)=>(a(),s("div",d,p))}};export{g as default};
