import{c as a,o as t,a as n}from"./vue.cc948b88.js";const e={class:"markdown-body"},l=n(`<h1>Sticky</h1><h3>Intro</h3><p>When the component rolls out of screen range, it will always be fixed at the top of the screen.</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { Sticky } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@quarkd/quark-react&#39;</span>;
</code></pre><h3>Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Sticky</span> <span class="hljs-attr">offsettop</span>=<span class="hljs-string">&quot;17vw&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;basic usage&quot;</span>&gt;</span>Basic Usage<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Sticky</span>&gt;</span>
</code></pre><h3>Offset Top</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">Sticky</span> <span class="hljs-attr">offsettop</span>=<span class="hljs-string">&quot;45vw&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">value</span>=<span class="hljs-string">&quot;offset top&quot;</span>&gt;</span>Offset Top<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">Sticky</span>&gt;</span>
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Unit</th><th>Default</th></tr></thead><tbody><tr><td>offsettop</td><td>Offset top</td><td><code>vw </code></td><td><code>0vw</code></td></tr><tr><td>zindex</td><td>z-index when sticky</td><td><code>number </code></td><td><code>99</code></td></tr></tbody></table>`,12),p=[l],i={__name:"doc-react.en-US",setup(c,{expose:s}){return s({frontmatter:{}}),(h,d)=>(t(),a("div",e,p))}};export{i as default};
