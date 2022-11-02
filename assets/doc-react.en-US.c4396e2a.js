import{c as a,o as t,a as e}from"./vue.73a18cf8.js";const n={class:"markdown-body"},l=e(`<h1>MarketDialog</h1><h3>Intro</h3><p>Pure picture popup</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> { MarketDialog } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@quarkd/quark-react&#39;</span>;
</code></pre><h3>Basic Usage</h3><pre><code class="language-tsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> [open, setOpen] = useState(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">const</span> close = <span class="hljs-function">() =&gt;</span> {
    setOpen(<span class="hljs-literal">false</span>)
  }
  <span class="hljs-keyword">return</span> (<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">MarketDialog</span> <span class="hljs-attr">open</span>=<span class="hljs-string">{open}</span> <span class="hljs-attr">onClose</span>=<span class="hljs-string">{close}</span> <span class="hljs-attr">url</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/15697/iWS-0QI6QV.png&quot;</span> /&gt;</span></span>)
}
</code></pre><h3>Tabbed Call</h3><p>For example, we need to customize the image rounded corners</p><pre><code class="language-tsx"><span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> () =&gt; {
  <span class="hljs-keyword">const</span> [open, setOpen] = useState(<span class="hljs-literal">false</span>);
  <span class="hljs-keyword">const</span> close = <span class="hljs-function">() =&gt;</span> {
    setOpen(<span class="hljs-literal">false</span>)
  }
  <span class="hljs-keyword">return</span> (<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">MarketDialog</span> <span class="hljs-attr">open</span>=<span class="hljs-string">{open}</span> <span class="hljs-attr">onClose</span>=<span class="hljs-string">{close}</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;market&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://m.hellobike.com/resource/helloyun/15697/iWS-0QI6QV.png&quot;</span> /&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">MarketDialog</span>&gt;</span></span>)
}
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>open</td><td>Control popup window show and hide</td><td><code>boolean</code></td><td><code>require</code></td></tr><tr><td>url</td><td>popup image url</td><td><code>string</code></td><td></td></tr><tr><td>size</td><td>The size of close button</td><td><code>string</code></td><td><code>32</code></td></tr><tr><td>onClose</td><td>Click the close icon callback function</td><td><code>() =&gt; void</code></td><td></td></tr></tbody></table><h2>CSS Variables</h2><p>The component provides the following <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>,which can be used to customize styles. Please refer to <a href="#/zh-CN/guide/theme">Theme customization</a>\u3002</p><table><thead><tr><th>Name</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code>--market-dialog-width</code></td><td>Image width</td><td><code>288px</code></td></tr><tr><td><code>--market-dialog-radius</code></td><td>Image Radius</td><td><code>12px</code></td></tr></tbody></table>`,16),o=[l],i={__name:"doc-react.en-US",setup(p,{expose:s}){return s({frontmatter:{}}),(r,d)=>(t(),a("div",n,o))}};export{i as default};
