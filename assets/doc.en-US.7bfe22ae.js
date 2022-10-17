import{c as s,o as e,a}from"./vue.2e2af450.js";const d={class:"markdown-body"},l=a(`<h1>Uploader</h1><h3>Intro</h3><p>Provide upload function</p><h3>Install</h3><pre><code class="language-tsx"><span class="hljs-keyword">import</span> <span class="hljs-string">&quot;quarkd/lib/uploader&quot;</span>;
</code></pre><h3>Basic Usage</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-uploader</span> <span class="hljs-attr">:preview</span>=<span class="hljs-string">&quot;false&quot;</span> @<span class="hljs-attr">afterread</span>=<span class="hljs-string">&quot;afterRead&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-uploader</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">afterread</span> (<span class="hljs-params">file</span>) </span>{
  <span class="hljs-built_in">console</span>.log(file.file.name)
}
</code></pre><h3>Preview File</h3><p>Preview is enabled by default</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-uploader</span> <span class="hljs-attr">preview</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">&#39;preview&#39;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-uploader</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-function"><span class="hljs-title">mounted</span>(<span class="hljs-params"></span>)</span> {
  <span class="hljs-built_in">this</span>.$refs.preview.
  setPreview([<span class="hljs-string">&#39;https://img.yzcdn.cn/vant/leaf.jpg&#39;</span>, <span class="hljs-string">&#39;https://img.yzcdn.cn/vant/leaf.jpg&#39;</span>);
}
</code></pre><h3>Max Count</h3><p>Hide redundant and upload button when the number of uploaded files is more than max count.</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-uploader</span> <span class="hljs-attr">maxcount</span>=<span class="hljs-string">&quot;2&quot;</span> <span class="hljs-attr">preview</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-uploader</span>&gt;</span>
</code></pre><h3>Max Size</h3><p>Max size(B), 1M can be set to 1024 * 1024</p><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-uploader</span> <span class="hljs-attr">maxsize</span>=<span class="hljs-string">&quot;1024&quot;</span> @<span class="hljs-attr">oversize</span>=<span class="hljs-string">&quot;oversize&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-uploader</span>&gt;</span>
</code></pre><pre><code class="language-js"><span class="hljs-function"><span class="hljs-title">oversize</span>(<span class="hljs-params"></span>)</span> {
  <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;File size cannot exceed 1kB&#39;</span>)
}
</code></pre><h3>Custom Upload Area</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-uploader</span> <span class="hljs-attr">preview</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">slot</span>=<span class="hljs-string">&quot;uploader&quot;</span>&gt;</span>Upload files<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">quark-uploader</span>&gt;</span>
</code></pre><h3>Before Upload</h3><p>By passing in the setBeforeUpload function, get boolean arguments. Returning false means upload is prevented. Supports returning Promise.</p><pre><code class="language-js"><span class="hljs-function"><span class="hljs-title">mounted</span>(<span class="hljs-params"></span>)</span> {
  <span class="hljs-built_in">this</span>.$refs.before.setBeforeUpload(<span class="hljs-built_in">this</span>.beforeUpload)
},
<span class="hljs-function"><span class="hljs-title">beforeUpload</span>(<span class="hljs-params">files</span>)</span> {
  <span class="hljs-keyword">const</span> r = files.every(<span class="hljs-function"><span class="hljs-params">file</span> =&gt;</span> file.type === <span class="hljs-string">&#39;image/jpg&#39;</span>);
  <span class="hljs-keyword">if</span>(!r) {
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">&#39;Please upload jpg format image&#39;</span>);
    <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>
  };
  <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
},
</code></pre><h3>Disable Uploader</h3><pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">quark-uploader</span> <span class="hljs-attr">preview</span> <span class="hljs-attr">disabled</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">quark-uploader</span>&gt;</span>
</code></pre><h2>API</h2><h3>Props</h3><table><thead><tr><th>Attribute</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>accept</td><td>Accepted file type</td><td><code>string</code></td><td><code>image/*</code></td></tr><tr><td>multiple</td><td>Whether to enable multiple selection pictures</td><td><code>boolean </code></td><td><code>true</code></td></tr><tr><td>preview</td><td>Whether to show preview</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>capture</td><td>Capture, can be set to boolean (call camera directly)</td><td><code>false </code></td><td></td></tr><tr><td>maxcount</td><td>Max count of image</td><td><code>string</code></td><td></td></tr><tr><td>maxsize</td><td>Max size of file</td><td><code>string </code></td><td><code>26214400 \uFF0825M\uFF09</code></td></tr><tr><td>disabled</td><td>Whether to disabled the upload</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>hidedelete</td><td>Hide delete icon</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>readonly</td><td>ReadOnly</td><td><code>boolean</code></td><td><code>false</code></td></tr><tr><td>afterread</td><td>Emitted when upload files.</td><td><code>\uFF08file: file or file[]\uFF09=&gt;void</code></td><td></td></tr><tr><td>oversize</td><td>Emitted when file size over limit, use with maxsize</td><td><code>(items: fiel[], maxsize: string)=&gt;void</code></td><td></td></tr><tr><td>onremove</td><td>Emitted when remove files</td><td></td><td></td></tr></tbody></table><h3>slot</h3><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td>name=loader</td><td>Custom upload Component</td></tr></tbody></table><h3>Methods</h3><table><thead><tr><th>methods</th><th>Description</th><th>Type</th></tr></thead><tbody><tr><td>beforeUpload</td><td>Before upload, can be used as uploader.beforeUpload.(fn)</td><td><code>(fn: () =&gt; boolean) =&gt; void</code></td></tr><tr><td>setPreview</td><td>Initialize preview data, can be used as uploader.setPreview.(data)</td><td><code>(url: string[]) =&gt; void</code></td></tr><tr><td>beforeDelete</td><td>Before delete uploader.beforeDelete(fn)</td><td><code>(file, {index: number}) =&gt; void</code></td></tr></tbody></table><h2>CSS Variables</h2><p>The component provides the following <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties">CSS variables</a>, which can be used to customize styles. Please refer to <a href="#/zh-CN/guide/theme">ConfigProvider component</a>.</p><table><thead><tr><th>Name</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code>--uploader-width</code></td><td>Width of upload and preview components</td><td><code>93px</code></td></tr><tr><td><code>--uploader-height</code></td><td>Height of upload and preview components</td><td><code>93px</code></td></tr><tr><td><code>--uploader-border-width</code></td><td>Border width of upload component</td><td><code>1px</code></td></tr><tr><td><code>--uploader-border-color</code></td><td>Border color of upload component</td><td><code>#E1E6EB</code></td></tr><tr><td><code>--uploader-border-style</code></td><td>Style of upload component</td><td><code>dashed</code></td></tr><tr><td><code>--uploader-radius</code></td><td>Border radius of upload component</td><td><code>4px</code></td></tr><tr><td><code>--uploader-margin</code></td><td>Bottom right margin of upload component</td><td><code>6px</code></td></tr><tr><td><code>--uploader-delete-wrap-width</code></td><td>Preview delete button width</td><td><code>14px</code></td></tr><tr><td><code>--uploader-delete-wrap-height</code></td><td>Preview delete button height</td><td><code>14px</code></td></tr><tr><td><code>--uploader-delete-background</code></td><td>Delete component background color</td><td><code>rgb(0, 0, 0)</code></td></tr><tr><td><code>--uploader-delete-color</code></td><td>Delete component icon color</td><td><code>#fff </code></td></tr><tr><td><code>--uploader-delete-size</code></td><td>Delete component icon size</td><td><code>10px</code></td></tr></tbody></table>`,36),n=[l],i={__name:"doc.en-US",setup(o,{expose:t}){return t({frontmatter:{}}),(r,c)=>(e(),s("div",d,n))}};export{i as default};
