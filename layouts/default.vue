<template>
  <div class="n-theme-light">
    <n-top-bar>
      <n-top-bar-start>
        <n-top-bar-item>
          <h1 class="n-typescale-headline-small">Nuxt 3 Form App</h1>
        </n-top-bar-item>
      </n-top-bar-start>
    </n-top-bar>

    <n-container size="medium" class="n-space-y-l n-space-y-m">
      <main class="n-space-y-m">
        <slot />
      </main>

      <footer class="n-space-y-s n-text-center">
        <n-divider></n-divider>
        <p class="n-typescale-body-small n-color-text-weaker">
          © 2025 Nuxt 3 Form App
        </p>
      </footer>
    </n-container>
  </div>
</template>

<script setup>
// Layout logic will go here
</script>
