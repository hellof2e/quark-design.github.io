import{c as d,o as s,a}from"./vue.b5dcbfe4.js";const e={class:"markdown-body"},o=a(`<h1>Image \u56FE\u7247</h1><h3>\u4ECB\u7ECD</h3><p>\u589E\u5F3A\u7248\u7684 img \u6807\u7B7E\uFF0C\u63D0\u4F9B\u591A\u79CD\u56FE\u7247\u586B\u5145\u6A21\u5F0F\uFF0C\u652F\u6301\u56FE\u7247\u61D2\u52A0\u8F7D\u3001\u52A0\u8F7D\u4E2D\u63D0\u793A\u3001\u52A0\u8F7D\u5931\u8D25\u63D0\u793A\u3002</p><h3>\u5B89\u88C5\u4F7F\u7528</h3><pre><code class="language-jsx"><span class="hljs-keyword">import</span> { Image } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@quarkd/quark-react&#39;</span>;
</code></pre><h3>\u57FA\u7840\u7528\u6CD5</h3><p>\u57FA\u7840\u7528\u6CD5\u4E0E\u539F\u751F img \u6807\u7B7E\u4E00\u81F4\uFF0C\u53EF\u4EE5\u8BBE\u7F6E src\u3001width\u3001height\u3001alt \u7B49\u539F\u751F\u5C5E\u6027\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Image</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/13459/_zZAz_2546.jpg_wh300.jpg&quot;</span> /&gt;</span>
</code></pre><h3>\u5706\u5F62\u56FE\u7247</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Image</span>
    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/13459/_zZAz_2546.jpg_wh300.jpg&quot;</span>
    <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;100&quot;</span>
    <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;100&quot;</span>
    <span class="hljs-attr">round</span>
/&gt;</span>
</code></pre><h3>\u61D2\u52A0\u8F7D</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Image</span>
    <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/13459/_zZAz_2546.jpg_wh300.jpg&quot;</span>
    <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;100&quot;</span>
    <span class="hljs-attr">height</span>=<span class="hljs-string">&quot;100&quot;</span>
    <span class="hljs-attr">lazy</span>
/&gt;</span>
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>width</td><td>\u5BBD\u5EA6\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3Apx</td><td><code>number</code>\u6216<code>string</code></td><td>-</td></tr><tr><td>height</td><td>\u9AD8\u5EA6\uFF0C\u9ED8\u8BA4\u5355\u4F4D\u4E3Apx</td><td><code>number</code> \u6216 <code>string</code></td><td>-</td></tr><tr><td>fit</td><td>\u56FE\u7247\u586B\u5145\u6A21\u5F0F\uFF0C\u7B49\u540C\u4E8E\u539F\u751F\u7684<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/object-fit">object-fit</a> \u5C5E\u6027</td><td><code>string</code></td><td><code>fill</code></td></tr><tr><td>lazy</td><td>\u61D2\u52A0\u8F7D</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>round</td><td>\u662F\u5426\u663E\u793A\u4E3A\u5706\u5F62</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>radius</td><td>\u5916\u8FB9\u6846\u5706\u89D2</td><td><code>number</code> \u6216 <code>string</code></td><td>-</td></tr><tr><td>alt</td><td>\u5B9A\u4E49\u4E86\u56FE\u50CF\u7684\u5907\u7528\u6587\u672C\u63CF\u8FF0</td><td><code>string</code></td><td>-</td></tr><tr><td>onClick</td><td>\u70B9\u51FB\u56FE\u7247\u65F6\u89E6\u53D1</td><td><code>() =&gt; void</code></td><td>-</td></tr><tr><td>onLoad</td><td>\u56FE\u7247\u52A0\u8F7D\u5B8C\u6BD5\u65F6\u89E6\u53D1</td><td><code>() =&gt; void</code></td><td>-</td></tr><tr><td>onError</td><td>\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\u65F6\u89E6\u53D1</td><td><code>(error) =&gt; void</code></td><td>-</td></tr></tbody></table><h3>fit\u586B\u5145\u6A21\u5F0F</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u542B\u4E49</th></tr></thead><tbody><tr><td>contain</td><td>\u4FDD\u6301\u5BBD\u9AD8\u7F29\u653E\u56FE\u7247\uFF0C\u4F7F\u56FE\u7247\u7684\u957F\u8FB9\u80FD\u5B8C\u5168\u663E\u793A\u51FA\u6765</td></tr><tr><td>cover</td><td>\u4FDD\u6301\u5BBD\u9AD8\u7F29\u653E\u56FE\u7247\uFF0C\u4F7F\u56FE\u7247\u7684\u77ED\u8FB9\u80FD\u5B8C\u5168\u663E\u793A\u51FA\u6765\uFF0C\u88C1\u526A\u957F\u8FB9</td></tr><tr><td>fill</td><td>\u62C9\u4F38\u56FE\u7247\uFF0C\u4F7F\u56FE\u7247\u586B\u6EE1\u5143\u7D20</td></tr><tr><td>none</td><td>\u4FDD\u6301\u56FE\u7247\u539F\u6709\u5C3A\u5BF8</td></tr><tr><td>scale-down</td><td>\u53D6 <code>none</code> \u6216 <code>contain</code> \u4E2D\u8F83\u5C0F\u7684\u4E00\u4E2A</td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>loading</td><td>\u81EA\u5B9A\u4E49\u52A0\u8F7D\u4E2D\u7684\u63D0\u793A\u5185\u5BB9</td></tr><tr><td>error</td><td>\u81EA\u5B9A\u4E49\u52A0\u8F7D\u5931\u8D25\u65F6\u7684\u63D0\u793A\u5185\u5BB9</td></tr></tbody></table><h2>\u6837\u5F0F\u53D8\u91CF</h2><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4EE5\u4E0B<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS\u53D8\u91CF</a>\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003<a href="#/zh-CN/guide/theme">\u4E3B\u9898\u5B9A\u5236</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--image-height</code></td><td>\u56FE\u7247\u9AD8\u5EA6</td><td>100%</td></tr><tr><td><code>--image-width</code></td><td>\u56FE\u7247\u5BBD\u5EA6</td><td>100%</td></tr></tbody></table>`,22),r=[o],i={__name:"doc-react.zh-CN",setup(n,{expose:t}){return t({frontmatter:{}}),(c,l)=>(s(),d("div",e,r))}};export{i as default};
