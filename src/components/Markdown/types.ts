import type { ClassValue, HTMLAttributes } from "svelte/elements";

export type tMarkdownProps = HTMLAttributes<HTMLDivElement> & {
    // Classes:

    // --- Default Classes:
    MarkdownClass?: ClassValue,
    
    // Extra Props Here:
    src?: string,

};