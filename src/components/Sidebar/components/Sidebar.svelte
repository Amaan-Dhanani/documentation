<script lang="ts">
  import type { Props } from "..";
  import { fade, slide } from "svelte/transition";
  import { writable } from "svelte/store";

  let { items }: Props = $props();
  const openMap = writable<Record<number, boolean>>({});

  function toggle(index: number) {
    openMap.update((o) => ({ ...o, [index]: !o[index] }));
  }
</script>

<div
  class="relative flex w-full max-w-xs flex-col bg-gray-900 p-4 text-gray-200 shadow-xl shadow-black/30"
>
  <nav class="flex flex-col gap-1 p-2 text-base font-normal">
    {#each items as item, i}
      <div class="w-full">
        {#if item.children}
          <div>
            <button
              class="flex items-center text-start justify-between w-full p-3 font-semibold text-gray-200 rounded-lg cursor-pointer hover:bg-gray-800"
              onclick={() => {
                item.onClick?.(item);
                toggle(i);
              }}
            >
              <span class="flex items-center gap-2">{item.label}</span>
              <span class="transition-transform" class:rotate-180={$openMap[i]}>
                ▼
              </span>
            </button>

            {#if $openMap[i]}
              <div transition:fade>
                <div
                  class="ml-6 mt-1 flex flex-col gap-1"
                  transition:slide={{ duration: 200 }}
                >
                  {#each item.children as child}
                    <button
                      class="flex items-center text-start gap-2 p-2 rounded hover:bg-gray-800 text-gray-300"
                      onclick={() => child.onClick?.(child)}
                    >
                      {child.label}
                    </button>
                  {/each}
                </div>
              </div>
            {/if}
          </div>
        {:else}
          <button
            class="flex items-center justify-start w-full gap-2 p-3 rounded-lg hover:bg-gray-800 text-gray-300"
            onclick={() => item.onClick?.(item)}
          >
            {item.label}
          </button>
        {/if}
      </div>
    {/each}
  </nav>
</div>
