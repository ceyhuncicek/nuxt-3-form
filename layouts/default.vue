<template>
  <div>
    <provet-top-bar>
      <h1 class="n-typescale-headline-small">Nuxt 3 Form App</h1>

      <provet-button
        slot="end"
        variant="plain"
        @click="toggleDarkMode"
        :aria-label="
          isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'
        "
      >
        <provet-icon
          :name="isDarkMode ? 'interface-mode-light' : 'interface-mode-dark'"
          size="m"
        />
      </provet-button>
    </provet-top-bar>

    <div class="layout-content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import "@provetcloud/web-components/lib/TopBar";
import "@provetcloud/web-components/lib/Button";
import "@provetcloud/web-components/lib/Icon";

const { isDarkMode, toggleDarkMode } = useTheme();
</script>

<style scoped>
.layout-content {
  min-height: calc(100vh - var(--n-top-bar-height));
  background-color: var(--n-color-background);
  padding-top: var(--n-top-bar-height);
}

/* Custom accent colors for the top bar */
:root {
  --n-color-accent: #3559c7;
  --n-color-accent-secondary: #1a3fa0;
}
</style>
