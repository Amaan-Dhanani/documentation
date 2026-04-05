## `SVELTEKIT-MONGODB-TEMP > THEME SETUP`
---


Add a theme section inside a `.css` file (preferably imported in `+layout.svelte`):

```css
/* == THEME == */
  /* theme variables */
/* == END THEME == */
````
Import and use `ThemeInit` in `+layout.svelte`:

```svelte
import { ThemeInit } from 'sk-clib/theme';

<ThemeInit
	defaults={{
		defaultSeedColor: '#3d5cff',
		defaultMode: 'dark',
		defaultVariant: 'vibrant'
	}}
/>
```

Required Imports:

```ts
import { theme } from 'sk-clib/theme';
import { onMount } from 'svelte';
```

Reactive State:

```ts
let mounted = false;
const isDark = theme.mode === 'dark';

onMount(() => {
	mounted = true;
});
```

Toggle Logic:

```ts
onclick={() => (theme.mode = isDark ? 'light' : 'dark')}
```

Conditional Rendering (SSR-safe):

```svelte
{#if mounted}
	<!-- toggle UI -->
{/if}
```