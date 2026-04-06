<script lang="ts">
  import type { Props } from "..";
  import { fade, slide } from "svelte/transition";
  import { writable } from "svelte/store";

  let { items }: Props = $props();
  const openMap = writable<Record<string, boolean>>({});

  function toggle(key: string) {
    openMap.update((o) => ({ ...o, [key]: !o[key] }));
  }
</script>

<div class="relative flex w-full max-w-xs flex-col bg-gray-900 p-4 text-gray-200 shadow-xl shadow-black/30">
  <nav class="flex flex-col gap-1 p-2 text-base font-normal">
    {#each items as item, i}
      <div class="w-full">
        {#if item.children}
          <button
            class="flex items-center text-start justify-between w-full p-3 rounded-lg cursor-pointer hover:bg-gray-800"
            class:font-bold={item.bold}
            class:text-gray-100={item.bold}
            class:text-gray-200={!item.bold}
            onclick={() => {
              item.onClick?.(item);
              toggle(`item-${i}`);
            }}
          >
            <span class="flex items-center gap-2">{item.label}</span>
            <span class="transition-transform" class:rotate-180={$openMap[`item-${i}`]}>
              ▼
            </span>
          </button>

          {#if $openMap[`item-${i}`]}
            <div transition:fade>
              <div class="ml-6 mt-1 flex flex-col gap-1" transition:slide={{ duration: 200 }}>
                {#each item.children as child, j}
                  <div class="w-full">
                    <button
                      class="flex items-center text-start justify-between w-full gap-2 p-2 rounded hover:bg-gray-700"
                      class:font-bold={child.bold}
                      class:text-gray-300={child.bold}
                      class:text-gray-400={!child.bold}
                      onclick={() => {
                        child.onClick?.(child);
                        if (child.children) toggle(`child-${i}-${j}`);
                      }}
                    >
                      {child.label}
                      {#if child.children}
                        <span class="transition-transform" class:rotate-180={$openMap[`child-${i}-${j}`]}>
                          ▼
                        </span>
                      {/if}
                    </button>

                    {#if child.children && $openMap[`child-${i}-${j}`]}
                      <div class="ml-4 mt-1 flex flex-col gap-1" transition:slide={{ duration: 200 }}>
                        {#each child.children as subchild}
                          <button
                            class="flex items-center text-start gap-2 p-2 rounded hover:bg-gray-700 text-gray-400"
                            class:font-bold={subchild.bold}
                            class:text-gray-300={subchild.bold}
                            onclick={() => subchild.onClick?.(subchild)}
                          >
                            {subchild.label}
                          </button>
                        {/each}
                      </div>
                    {/if}
                  </div>
                {/each}
              </div>
            </div>
          {/if}
        {:else if item.label}
          <button
            class="flex items-center justify-start w-full gap-2 p-3 rounded-lg hover:bg-gray-800"
            class:font-bold={item.bold}
            class:text-gray-100={item.bold}
            class:text-gray-300={!item.bold}
            onclick={() => item.onClick?.(item)}
          >
            {item.label}
          </button>
        {/if}
      </div>
    {/each}
  </nav>
</div>