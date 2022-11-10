import{d as s,c as u,a,o as d}from"./vue.ab23af3b.js";const e={class:"markdown-body"},o=a(`<h1>Skeleton \u9AA8\u67B6\u5C4F</h1><h3>\u4ECB\u7ECD</h3><p>\u7528\u4E8E\u5728\u5185\u5BB9\u52A0\u8F7D\u8FC7\u7A0B\u4E2D\u5C55\u793A\u4E00\u7EC4\u5360\u4F4D\u56FE\u5F62\u3002</p><h3>\u5B89\u88C5\u4F7F\u7528</h3><pre><code class="language-jsx"><span class="hljs-keyword">import</span> { Skeleton } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;
</code></pre><h3>\u57FA\u7840\u7528\u6CD5</h3><pre><code class="language-tsx">&lt;Skeleton row=<span class="hljs-string">&quot;2&quot;</span> /&gt;
</code></pre><h3>\u663E\u793A\u5934\u50CF</h3><pre><code class="language-tsx">&lt;Skeleton titel avatar row=<span class="hljs-string">&quot;2&quot;</span> /&gt;
</code></pre><h3>\u663E\u793A\u5B50\u7EC4\u4EF6</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { useState } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;react&quot;</span>;
<span class="hljs-keyword">import</span> { Skeleton } <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@quarkd/quark-react&quot;</span>;

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> [hide, setHide] = useState(<span class="hljs-literal">false</span>);

  <span class="hljs-keyword">return</span> (
    <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">Skeleton</span> <span class="hljs-attr">avatar</span> <span class="hljs-attr">row</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">hide</span>=<span class="hljs-string">{hide}</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>\u6B63\u5F0F\u5185\u5BB9<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Skeleton</span>&gt;</span></span>
  );
};
</code></pre><h3>\u8BBE\u7F6E\u6BB5\u843D\u5BBD\u5EA6</h3><p>\u6BB5\u843D\u5BBD\u5EA6\u4F7F\u7528 <code class="">rowwidths</code> \u5C5E\u6027\uFF0C\u91C7\u7528\u9017\u53F7\u8FDB\u884C\u5206\u5272\uFF1A\u6BD4\u5982 <code class="">row</code> \u8BBE\u4E3A <code class="">3</code>\uFF0C\u5219\u53EF\u8BBE\u7F6E <code class="">rowwidths</code> \u4E3A <code class="">100%,100%,60%</code></p><pre><code class="language-tsx">&lt;Skeleton titel avatar row=<span class="hljs-string">&quot;3&quot;</span> rowwidths=<span class="hljs-string">&quot;100%,100%,60%&quot;</span> /&gt;
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>avatar</td><td>\u662F\u5426\u663E\u793A\u5934\u50CF\u5360\u4F4D\u56FE</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>avatarshape</td><td>\u5934\u50CF\u5360\u4F4D\u56FE\u5F62\u72B6</td><td><code class="">round</code> \u6216 <code class="">square</code></td><td><code class="">round</code></td></tr><tr><td>titel</td><td>\u662F\u5426\u663E\u793A\u6807\u9898\u5360\u4F4D\u56FE</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr><tr><td>row</td><td>\u6BB5\u843D\u5360\u4F4D\u56FE\u884C\u6570</td><td><code class="">number</code></td><td>-</td></tr><tr><td>rowwidths</td><td>\u6BB5\u843D\u6BCF\u884C\u5BBD\u5EA6</td><td><code class="">string</code></td><td>-</td></tr><tr><td>hide</td><td>\u5173\u95ED\u9AA8\u67B6\u5C4F</td><td><code class="">boolean</code></td><td><code class="">false</code></td></tr></tbody></table><h2>\u6837\u5F0F\u53D8\u91CF</h2><p>\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4EE5\u4E0B<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS \u53D8\u91CF</a>\uFF0C\u53EF\u7528\u4E8E\u81EA\u5B9A\u4E49\u6837\u5F0F\uFF0C\u4F7F\u7528\u65B9\u6CD5\u8BF7\u53C2\u8003<a href="#/zh-CN/guide/theme">\u4E3B\u9898\u5B9A\u5236</a>\u3002</p><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td><code class="">--skeleton-avatar-size</code></td><td>\u5934\u50CF\u5360\u4F4D\u7B26\u5C3A\u5BF8</td><td><code class="">32px</code></td></tr><tr><td><code class="">--skeleton-avatar-margin-right</code></td><td>\u5934\u50CF\u5360\u4F4D\u7B26\u8DDD\u53F3\u4FA7\u95F4\u8DDD</td><td><code class="">16px</code></td></tr><tr><td><code class="">--skeleton-avatar-background-color</code></td><td>\u5934\u50CF\u5360\u4F4D\u7B26\u80CC\u666F\u8272</td><td><code class="">#f2f3f5</code></td></tr><tr><td><code class="">--skeleton-title-width</code></td><td>\u6807\u9898\u5360\u4F4D\u56FE\u5BBD\u5EA6</td><td><code class="">40%</code></td></tr><tr><td><code class="">--skeleton-row-height</code></td><td>\u6BB5\u843D\u5360\u4F4D\u56FE\u9AD8\u5EA6</td><td><code class="">16px</code></td></tr><tr><td><code class="">--skeleton-row-background-color</code></td><td>\u6BB5\u843D\u5360\u4F4D\u56FE\u80CC\u666F</td><td><code class="">#f2f3f5</code></td></tr><tr><td><code class="">--skeleton-row-border-radius</code></td><td>\u6BB5\u843D\u5360\u4F4D\u56FE\u5706\u89D2</td><td><code class="">0</code></td></tr><tr><td><code class="">--skeleton-row-margin-top</code></td><td>\u6BB5\u843D\u5360\u4F4D\u56FE\u884C\u95F4\u8DDD</td><td><code class="">12px</code></td></tr></tbody></table>`,20),c=[o],h={},F="",B=s({__name:"doc-react.zh-CN",setup(l,{expose:t}){return t({frontmatter:{},excerpt:void 0}),(n,r)=>(d(),u("div",e,c))}});export{B as default,F as excerpt,h as frontmatter};