## `SVELTEKIT-MONGODB-TEMP > PROTECTING ROUTES`


Our goal is to protect certain pages from non-authenticated users. Simply head to `+layout.svelte` and find this section of code and add a directory!
 
 ```ts
 const protected_routes = ['/dashboard', '/settings'];
//=================================  ADD MORE HERE ⤴
```
