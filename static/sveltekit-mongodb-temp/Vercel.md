## `SVELTEKIT-MONGODB-TEMP > VERCEL (WEB DEPLOYMENT)`

Install (done):
```bash
bun i @sveltejs/adapter-vercel
```

SvelteKit config (**use vercel**):
```js
import adapter from '@sveltejs/adapter-vercel';

export default {
  kit: {
    adapter: adapter()
  }
};
```

Go to **Vercel**, add a new project, and insert the github repo link. You also have to had environment variables separately. The rest will happen automatically.