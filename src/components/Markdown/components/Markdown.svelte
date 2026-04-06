<script lang="ts">
  import type { Props } from "..";
  import markdownit from "markdown-it";
  import hljs from "highlight.js";
  import hljs_svelte from "highlightjs-svelte";
  import { fade } from "svelte/transition";
  import { cubicOut } from "svelte/easing";

  hljs_svelte(hljs);

  // Highlight function for markdown-it
  const highlight: (str: string, lang: string) => string = (str, lang) => {
    try {
      if (lang && hljs.getLanguage(lang)) {
        return `<pre><code class="hljs language-${lang}">${
          hljs.highlight(str, { language: lang }).value
        }</code></pre>`;
      }
      return `<pre><code class="hljs">${hljs.highlightAuto(str).value}</code></pre>`;
    } catch {
      return `<pre><code class="hljs">${md.utils.escapeHtml(str)}</code></pre>`;
    }
  };

  const md = markdownit({
    html: true,
    linkify: true,
    typographer: true,
    highlight,
  });

  let { src = "" }: Props = $props();
  let html = $state("");
  let displayedHtml = $state("");

  $effect(() => {
    if (!src) return;

    (async () => {
      try {
        const res = await fetch(src);
        const text = await res.text();
        html = md.render(text);

        displayedHtml = "";
        setTimeout(() => (displayedHtml = html), 50);
      } catch {
        html = "<p style='color:red'>Failed to load markdown</p>";
        displayedHtml = html;
      }
    })();
  });
</script>

<div class="markdown-body px-10">
  {#if displayedHtml}
    <div
      in:fade={{ duration: 500, easing: cubicOut }}
      out:fade={{ duration: 300, easing: cubicOut }}
      style="will-change: opacity; backface-visibility: hidden;"
    >
      {@html displayedHtml}
    </div>
  {/if}

  <!-- GitHub Markdown CSS -->
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/5.8.1/github-markdown-dark.css"
  />
  <!-- Highlight.js theme -->
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css"
  />
</div>