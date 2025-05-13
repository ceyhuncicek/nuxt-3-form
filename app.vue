<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  title: "Nuxt 3 Form Application",
  htmlAttrs: {
    class: "n-reset",
  },
});
</script>

<style>
:root {
  --app-height: 100%;
}

html,
body {
  margin: 0;
  padding: 0;
  height: var(--app-height);
  background-color: var(--n-color-background);
}

@media screen and (max-width: 768px) {
  :root {
    --app-height: -webkit-fill-available;
  }
}
</style>
