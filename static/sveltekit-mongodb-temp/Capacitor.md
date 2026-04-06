## `SVELTEKIT-MONGODB-TEMP > CAPACITOR (MOBILE DEPLOYMENT)`

Install (done):
```bash
bun add @capacitor/core @capacitor/android @capacitor/ios
bun add -d @capacitor/cli
```

Init:
```bash
bunx cap init
bunx cap add android
bunx cap add ios
```

SvelteKit config (**use node**):
```js
import adapter from '@sveltejs/adapter-node';

export default {
  kit: {
    adapter: adapter()
  }
};
```

Capacitor config:
```ts
export default {
  webDir: 'build'
};
```

Build + sync:
```bash
bun run build
bunx cap sync
```
