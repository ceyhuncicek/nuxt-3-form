<template>
  <div class="n-reset">
    <main class="success-container" role="main">
      <provet-card>
        <div class="success-content">
          <provet-icon
            name="interface-checked-circle"
            size="xl"
            class="success-icon"
            aria-hidden="true"
          />
          <h1 class="n-typescale-headline-large" tabindex="-1">
            Registration Successful!
          </h1>
          <p class="n-typescale-body-large" role="status">
            Thank you for registering. Your account has been created
            successfully.
          </p>
          <div class="button-container">
            <provet-button
              variant="primary"
              @click="navigateHome"
              aria-label="Return to registration page"
            >
              Return to Home
            </provet-button>
          </div>
        </div>
      </provet-card>
    </main>
  </div>
</template>

<script setup lang="ts">
import "@provetcloud/web-components/lib/Card";
import "@provetcloud/web-components/lib/Button";
import "@provetcloud/web-components/lib/Icon";

const router = useRouter();

const navigateHome = () => {
  router.push("/");
};

// Focus the heading when the page loads for better screen reader announcement
onMounted(() => {
  const heading = document.querySelector("h1");
  if (heading) {
    heading.focus();
  }
});
</script>

<style scoped>
.success-container {
  width: min(100% - 2rem, 600px);
  margin-inline: auto;
  padding-block: var(--n-space-m);
}

.success-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: var(--n-space-m);
  padding: var(--n-space-m);
}

.success-icon {
  color: var(--n-color-success);
  height: 4rem;
  width: 4rem;
}

/* Remove outline from heading when focused programmatically */
h1:focus {
  outline: none;
}

@media (max-width: 600px) {
  .success-container {
    width: min(100% - 1rem, 600px);
  }

  .success-content {
    padding: var(--n-space-s);
    gap: var(--n-space-s);
  }

  .success-icon {
    height: 3rem;
    width: 3rem;
  }
}
</style>
