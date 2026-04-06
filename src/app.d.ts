// SvelteKit App namespace
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
}

// Module declaration for highlightjs-svelte
declare module 'highlightjs-svelte' {
  import hljs from 'highlight.js';
  const init: (hljsInstance: typeof hljs) => void;
  export default init;
}

export {};