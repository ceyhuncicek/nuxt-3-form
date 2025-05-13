<template>
  <article class="registration-form">
    <provet-card>
      <div class="n-space-y-l">
        <header>
          <h2 class="n-typescale-headline-medium responsive-heading">
            Register an Account
          </h2>
        </header>

        <form @submit.prevent="handleSubmit" class="n-space-y-m">
          <provet-fieldset>
            <provet-visually-hidden>Account Information</provet-visually-hidden>
            <provet-fieldset>
              <provet-input
                label="Email"
                type="email"
                v-model="formData.email"
                required
              ></provet-input>
            </provet-fieldset>

            <provet-fieldset>
              <provet-input
                label="Password"
                type="password"
                v-model="formData.password"
                required
              ></provet-input>
            </provet-fieldset>

            <provet-fieldset>
              <provet-input
                label="Confirm Password"
                type="password"
                v-model="formData.confirmPassword"
                required
              ></provet-input>
            </provet-fieldset>
          </provet-fieldset>

          <provet-fieldset>
            <provet-visually-hidden>Terms Agreement</provet-visually-hidden>
            <provet-fieldset>
              <provet-checkbox
                label="I agree to the Terms and Conditions"
                v-model="formData.agreeTerms"
                type="checkbox"
                required
              ></provet-checkbox>
            </provet-fieldset>
          </provet-fieldset>

          <footer class="button-container">
            <provet-button type="submit" variant="primary" full-width
              >Register</provet-button
            >
          </footer>
        </form>
      </div>
    </provet-card>
  </article>
</template>

<script setup>
import { ref } from "vue";
import "@provetcloud/web-components/lib/Input";
import "@provetcloud/web-components/lib/Button";
import "@provetcloud/web-components/lib/Checkbox";
import "@provetcloud/web-components/lib/Fieldset";
import "@provetcloud/web-components/lib/Card";
import "@provetcloud/web-components/lib/Select";
import "@provetcloud/web-components/lib/VisuallyHidden";

const formData = ref({
  email: "",
  password: "",
  confirmPassword: "",
  agreeTerms: false,
});

const handleSubmit = () => {
  console.log("Form submitted:", formData.value);
  // Here you would typically send the data to your API
};
</script>

<style scoped>
.registration-form {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: var(--n-space-s);
}

.button-container {
  margin-top: var(--n-space-m);
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .registration-form {
    padding: var(--n-space-xs);
    max-width: 100%;
  }

  .responsive-heading {
    font-size: var(--n-font-size-l);
    text-align: center;
  }
}
</style>
