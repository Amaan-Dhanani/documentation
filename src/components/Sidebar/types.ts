import type { ClassValue, HTMLAttributes } from "svelte/elements";

export type tSidebarProps = HTMLAttributes<HTMLDivElement> & {
    // Classes:

    // --- Default Classes:
    SidebarClass?: ClassValue,
    
    // Extra Props Here:
    items?: any;

};