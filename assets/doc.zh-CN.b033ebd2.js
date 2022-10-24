import{c as s,o as a,a as n}from"./vue.a14da11e.js";const l={class:"markdown-body"},d=n(`<h1>Dialog \u5F39\u7A97</h1><h3>\u4ECB\u7ECD</h3><p>\u6A21\u6001\u5BF9\u8BDD\u6846\u3002</p><h3>\u5B89\u88C5\u4F7F\u7528</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&#39;quarkd/lib/dialog&#39;</span>;
</code></pre><h3>\u63D0\u793A\u5F39\u7A97</h3><p>\u901A\u8FC7\u8BBE\u7F6E <code>type=&quot;confirm&quot;</code> \u4E3A\u63D0\u793A\u5F39\u7A97</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;open = true&quot;</span>&gt;</span>Open Dialog<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">quark-dialog</span>
    <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;confirm&quot;</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u9898&quot;</span>
    <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;open&quot;</span>
    @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;open = false&quot;</span> // \u786E\u8BA4\u6309\u94AE\u56DE\u8C03\u51FD\u6570
    @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;open = false&quot;</span> // \u5173\u95ED\u6309\u94AE\u56DE\u8C03\u51FD\u6570
&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-dialog</span>&gt;</span>
</code></pre><h3>\u63D0\u793A\u5F39\u7A97\uFF08\u6CA1\u6709\u5185\u5BB9\uFF09</h3><p>\u4E0D\u4F20\u5165 <code>content</code> \u5373\u53EF\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;open = true&quot;</span>&gt;</span>Open Dialog<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">quark-dialog</span>
  <span class="hljs-attr">type</span>=<span class="hljs-string">&quot;confirm&quot;</span>
  <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u8FD9\u662F\u4E00\u53E5\u8BDD\u5C31\u80FD\u8BF4\u6E05\u695A\u7684\u786E\u8BA4\u5F39\u7A97\uFF0C\u6240\u4EE5\u53EA\u6709\u6807\u9898&quot;</span>
  <span class="hljs-attr">oktext</span>=<span class="hljs-string">&quot;\u77E5\u9053\u4E86&quot;</span>
  @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;open = false&quot;</span> // \u786E\u8BA4\u6309\u94AE\u56DE\u8C03\u51FD\u6570
  @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;open = false&quot;</span> // \u5173\u95ED\u6309\u94AE\u56DE\u8C03\u51FD\u6570
&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-dialog</span>&gt;</span>
</code></pre><h3>\u786E\u8BA4\u5F39\u7A97</h3><p><code>type</code> \u9ED8\u8BA4\u4E0D\u4F20\u5373\u4E3A\u786E\u8BA4\u5F39\u7A97\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;open = true&quot;</span>&gt;</span>Open Dialog<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">quark-dialog</span>
    <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;open&quot;</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u9898&quot;</span>
    <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;\u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C&quot;</span>
    @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;open = false&quot;</span>
    @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;open = false&quot;</span>
    @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;open = false&quot;</span>
&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-dialog</span>&gt;</span>
</code></pre><h3>\u786E\u8BA4\u5F39\u7A97\uFF08\u6309\u94AE\u5782\u76F4\u6392\u5217\uFF09</h3><p>\u901A\u8FC7\u8BBE\u7F6E\u5C5E\u6027 <code>btnvertical</code>\uFF0C\u6309\u94AE\u53EF\u5782\u76F4\u6392\u5217\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;open = true&quot;</span>&gt;</span>Open Dialog<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">quark-dialog</span>
    <span class="hljs-attr">btnvertical</span>
    <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;open&quot;</span>
    <span class="hljs-attr">title</span>=<span class="hljs-string">&quot;\u6807\u9898&quot;</span>
    <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;\u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C&quot;</span>
    @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;open = false&quot;</span>
    @<span class="hljs-attr">confirm</span>=<span class="hljs-string">&quot;open = false&quot;</span>
    @<span class="hljs-attr">cancel</span>=<span class="hljs-string">&quot;open = false&quot;</span>
&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-dialog</span>&gt;</span>
</code></pre><h3>\u81EA\u5B9A\u4E49\u6807\u9898/footer</h3><p>\u901A\u8FC7 <code>slot=&#39;title&#39;</code> \u3001<code>slot=&#39;footer&#39;</code> \u8BBE\u7F6E\u81EA\u5B9A\u4E49title/footer\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;open = true&quot;</span>&gt;</span>Open Dialog<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">quark-dialog</span>
    <span class="hljs-attr">:content</span>=<span class="hljs-string">&quot;translate(&#39;content&#39;)&quot;</span>
    <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;open&quot;</span>
    @<span class="hljs-attr">close</span>=<span class="hljs-string">&quot;open = false&quot;</span>&gt;</span>

    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;title&quot;</span>&gt;</span>\u81EA\u5B9A\u4E49\u6807\u9898<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;footer&quot;</span>&gt;</span>\u81EA\u5B9A\u4E49footer<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;/<span class="hljs-name">quark-dialog</span>&gt;</span>
</code></pre><h3>\u9690\u85CF title/footer</h3><p>\u901A\u8FC7\u4F20\u5165 <code>notitle</code>\u3001 <code>nofooter</code> \u5C5E\u6027\u9690\u85CF title/footer\u3002</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> @<span class="hljs-attr">click</span>=<span class="hljs-string">&quot;open = true&quot;</span>&gt;</span>Open Dialog<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">quark-dialog</span>
    <span class="hljs-attr">notitle</span>
    <span class="hljs-attr">nofooter</span>
    <span class="hljs-attr">:open</span>=<span class="hljs-string">&quot;open&quot;</span>&gt;</span>
    \u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-dialog</span>&gt;</span>
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>title</td><td>\u6807\u9898</td><td><code>string</code></td><td></td></tr><tr><td>content</td><td>\u5185\u5BB9</td><td><code>string</code></td><td></td></tr><tr><td>oktext</td><td>\u786E\u5B9A\u6309\u94AE</td><td><code>string </code></td><td><code>\u786E\u5B9A</code></td></tr><tr><td>canceltext</td><td>\u53D6\u6D88\u6309\u94AE</td><td><code>string</code></td><td><code>\u53D6\u6D88</code></td></tr><tr><td>open</td><td>\u5F39\u7A97\u72B6\u6001</td><td><code>boolean </code></td><td><code>require</code></td></tr><tr><td>zindex</td><td>\u5F39\u7A97\u5C42\u7EA7</td><td><code>number</code></td><td><code>999</code></td></tr><tr><td>type</td><td>\u7C7B\u578B</td><td><code>modal</code>\u3001<code>confirm</code></td><td><code>modal</code></td></tr><tr><td>btnvertical</td><td>\u6309\u94AE\u662F\u5426\u5782\u76F4\uFF0C\u9ED8\u8BA4\u6C34\u5E73</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>nofooter</td><td>\u662F\u5426\u663E\u793A\u5E95\u90E8</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>hideclose</td><td>\u662F\u5426\u9690\u85CF\u53F3\u4E0A\u89D2\u5173\u95ED\u6309\u94AE</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>autoclose</td><td>\u70B9\u51FB\u4E8B\u4EF6\u662F\u5426\u9ED8\u8BA4\u5173\u95ED</td><td><code>boolean</code></td><td><code>true</code></td></tr><tr><td>hide</td><td>autoclose \u4E3A false \u65F6\u5019\u51FD\u6570\u5F0F\u8C03\u7528\u624B\u52A8\u8BA9\u5F39\u7A97\u6D88\u5931, \u6EE1\u8DB3\u7075\u6D3B\u5F02\u6B65\u9700\u6C42 dialog.hide()</td><td><code>() =&gt; void</code></td><td></td></tr></tbody></table><h3>Slots</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>slot</td><td>\u81EA\u5B9A\u4E49\u5F39\u7A97 body</td></tr><tr><td>slot name=title</td><td>\u81EA\u5B9A\u4E49\u6807\u9898</td></tr><tr><td>slot name=close</td><td>\u81EA\u5B9A\u4E49\u5173\u95ED\u56FE\u6807\u5305\u62EC\u4F4D\u7F6E\u3001\u5927\u5C0F\u3001\u4EE5\u53CA\u7C7B\u578B</td></tr><tr><td>slot name=footer</td><td>\u81EA\u5B9A\u4E49\u811A\u90E8</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td>confirm</td><td>\u786E\u5B9A\u56DE\u8C03\u51FD\u6570</td><td><code>() =&gt; void</code></td></tr><tr><td>cancel</td><td>\u53D6\u6D88\u56DE\u8C03\u51FD\u6570</td><td><code>() =&gt; void</code></td></tr><tr><td>close</td><td>\u70B9\u51FB\u5173\u95ED\u56FE\u6807\u56DE\u8C03\u51FD\u6570</td><td><code>() =&gt; void</code></td></tr></tbody></table><h2>\u6837\u5F0F\u53D8\u91CF</h2><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4EE5\u4E0B<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS\u53D8\u91CF</a>\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003<a href="#/zh-CN/guide/theme">\u4E3B\u9898\u5B9A\u5236</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code>--dialog-width</code></td><td>\u5F39\u6846\u5BBD\u5EA6</td><td><code>320px</code></td></tr><tr><td><code>--dialog-title-font-size</code></td><td>\u6807\u9898\u5B57\u4F53\u5927\u5C0F</td><td></td></tr><tr><td><code>--dialog-title-color</code></td><td>\u6807\u9898\u5B57\u4F53\u989C\u8272</td><td><code>#242729</code></td></tr><tr><td><code>--dialog-title-font-family</code></td><td>\u6807\u9898\u5B57\u4F53</td><td></td></tr><tr><td><code>--dialog-title-line-height</code></td><td>\u6807\u9898\u884C\u9AD8</td><td></td></tr><tr><td><code>--dialog-title-font-weight</code></td><td>\u6807\u9898\u5B57\u91CD</td><td><code>700</code></td></tr><tr><td><code>--dialog-content-font-size</code></td><td>\u5185\u5BB9\u5B57\u4F53\u5927\u5C0F</td><td><code>14px</code></td></tr><tr><td><code>--dialog-content-color</code></td><td>\u5185\u5BB9\u5B57\u4F53\u989C\u8272</td><td><code>#5A6066</code></td></tr><tr><td><code>--dialog-content-font-weight</code></td><td>\u5185\u5BB9\u5B57\u91CD</td><td><code>400</code></td></tr><tr><td><code>--dialog-content-font-family</code></td><td>\u5185\u5BB9\u5B57\u4F53</td><td><code>14px</code></td></tr><tr><td><code>--dialog-content-line-height</code></td><td>\u5185\u5BB9\u884C\u9AD8</td><td><code>20px</code></td></tr><tr><td><code>--dialog-btn-border-radius</code></td><td>\u5E95\u90E8\u6309\u94AE\u5706\u89D2</td><td><code>8px</code></td></tr><tr><td><code>--dialog-btn-font-size</code></td><td>\u5E95\u90E8\u6309\u94AE\u5B57\u4F53\u5927\u5C0F</td><td><code>16px</code></td></tr><tr><td><code>--dialog-btn-height</code></td><td>\u5E95\u90E8\u6309\u94AE\u9AD8\u5EA6</td><td><code>40px</code></td></tr></tbody></table>`,33),o=[d],i={__name:"doc.zh-CN",setup(e,{expose:t}){return t({frontmatter:{}}),(c,r)=>(a(),s("div",l,o))}};export{i as default};
