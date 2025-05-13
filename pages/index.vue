<template>
  <div class="n-reset">
    <header class="container text-center">
      <h1 class="n-typescale-headline-large">Nuxt 3 Form Application</h1>
      <p class="n-typescale-body">
        Welcome to the Nuxt 3 Form Application using ProvetCloud Design System
      </p>
    </header>

    <!-- Main content -->
    <main id="content" class="container">
      <section
        class="registration-section"
        aria-labelledby="registration-heading"
      >
        <RegistrationForm />
      </section>
    </main>
  </div>
</template>

<script setup>
import RegistrationForm from "~/components/RegistrationForm.vue";
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 1200px;
  margin-inline: auto;
  padding: var(--n-space-l);
  box-sizing: border-box;
}

.text-center {
  text-align: center;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .container {
    padding: var(--n-space-m);
  }
}

@media (max-width: 480px) {
  .container {
    padding: var(--n-space-s);
  }

  h1.n-typescale-headline-large {
    font-size: var(--n-font-size-xl);
    line-height: 1.3;
  }
}
</style>
