<script lang="ts">
  import { cn } from "$components/utils";
  import type { Props } from "..";
  import markdownit from "markdown-it";
  import { fade } from "svelte/transition";
  import { cubicOut } from "svelte/easing";

  const md = new markdownit({
    html: true,
    linkify: true,
    typographer: true,
  });

  let {
    class: className,
    MarkdownClass = "prose prose-lg h-screen prose-invert max-w-none p-4 bg-[#0d1117] [&:not(pre)>code]:px-1.5 py-5 bg-neutral-800 [&_code::before,&_code::after]:content-none [&_pre]:p-4 overflow-x-auto",
    src = "",
  }: Props = $props();

  let html = $state("");
  let displayedHtml = $state(""); // content that actually renders
  let MarkdownCls = $state(cn(MarkdownClass, className));

  $effect(() => {
    MarkdownCls = cn(MarkdownClass, className);
  });

  // fetch markdown whenever src changes
  $effect(async () => {
    if (!src) return;

    try {
      const res = await fetch(src);
      const text = await res.text();
      html = md.render(text);

      // trigger fade-out then fade-in
      displayedHtml = "";
      setTimeout(() => {
        displayedHtml = html;
      }, 50); // slight delay to allow fade-out
    } catch (e) {
      html = "<p class='text-red-500'>Failed to load markdown</p>";
      displayedHtml = html;
    }
  });
</script>

<!-- Outer div keeps background and sizing -->
<div class={MarkdownCls}>
  <!-- Inner div fades in/out content -->
  {#if displayedHtml}
    <div
      in:fade={{ duration: 500, easing: cubicOut }}
      out:fade={{ duration: 300, easing: cubicOut }}
      style="will-change: opacity; backface-visibility: hidden;"
    >
      {@html displayedHtml}
    </div>
  {/if}
</div>