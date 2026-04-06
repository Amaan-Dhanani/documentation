<script lang="ts">
  import { Sidebar, Markdown } from "$components";
  import './page.css';
  let src = $state('');
  let text = $state('');

  // === DON'T TOUCH ANYTHING ABOVE THIS LINE ==== //

const sidebarItems = [
  {
    label: "sveltekit-mongodb-temp",
    bold: true, // explicitly bold
    children: [
      {
        label: "Essentials for Deployment",
        bold: true,
        children: [
          { label: "Environment Variables", onClick: () => (src = "/sveltekit-mongodb-temp/Environment_Variables.md") },
          { label: "Capacitor (Mobile Deployment)", onClick: () => (src = "/sveltekit-mongodb-temp/Capacitor.md") },
          { label: "Vercel (Web Deployment)", onClick: () => (src = "/sveltekit-mongodb-temp/Vercel.md") },
        ],
      },
      { label: "Protecting Routes", onClick: () => (src = "/sveltekit-mongodb-temp/Protecting_Routes.md") },
      { label: "Theme Setup", onClick: () => (src = "/sveltekit-mongodb-temp/Theme_Setup.md") },
    ],
  },
];

  // === DON'T TOUCH ANYTHING BELOW THIS LINE ==== //

  // --- Automatically generate text from src ---
  $effect(() => {
    if (src) {
      // remove leading slash and extension
      const clean = src.replace(/^\/|\.md$/g, '');
      // split by /, replace _ with space
      const parts = clean.split('/').map(p => p.replace(/_/g, ' '));
      // join with arrows
      text = parts.join(' > ');
    } else {
      text = '';
    }
  });
</script>


<div class="flex w-full h-screen bg-[#0d1117]">
  <Sidebar items={sidebarItems} />
  <div class="flex-1 overflow-y-auto">
    <Markdown {src} />
  </div>
</div>