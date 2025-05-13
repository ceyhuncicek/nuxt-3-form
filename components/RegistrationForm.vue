<template>
  <article class="registration-form">
    <provet-card>
      <div class="n-space-y-l">
        <header>
          <h2 class="n-typescale-headline-medium responsive-heading">
            Register an Account
          </h2>
        </header>

        <form @submit.prevent="onSubmit" class="n-space-y-m">
          <provet-fieldset>
            <provet-visually-hidden>Account Information</provet-visually-hidden>
            <provet-fieldset>
              <provet-input
                name="email"
                expand
                label="Email"
                type="email"
                v-model="formData.email"
                :error="errors.email"
                @input="errors.email = ''"
                hint="Enter a valid email address (e.g., example@domain.com)"
                required
              ></provet-input>
            </provet-fieldset>

            <provet-fieldset>
              <provet-input
                name="password"
                expand
                label="Password"
                :type="showPassword ? 'text' : 'password'"
                v-model="formData.password"
                :error="errors.password"
                @input="errors.password = undefined"
                hint="Password must be at least 8 characters and contain: 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character"
                required
              >
                <provet-button
                  href="#"
                  slot="end"
                  square
                  @click="showPassword = !showPassword"
                  :aria-label="showPassword ? 'Hide password' : 'Show password'"
                >
                  <provet-icon
                    :name="
                      showPassword ? 'interface-edit-on' : 'interface-edit-off'
                    "
                  />
                </provet-button>
              </provet-input>
            </provet-fieldset>

            <provet-fieldset>
              <provet-input
                expand
                name="confirmPassword"
                label="Confirm Password"
                :type="showConfirmPassword ? 'text' : 'password'"
                v-model="formData.confirmPassword"
                :error="errors.confirmPassword"
                @input="errors.confirmPassword = undefined"
                hint="Please enter your password again to confirm"
                required
              >
                <provet-button
                  href="#"
                  slot="end"
                  square
                  @click="showConfirmPassword = !showConfirmPassword"
                  :aria-label="
                    showConfirmPassword
                      ? 'Hide confirm password'
                      : 'Show confirm password'
                  "
                >
                  <provet-icon
                    :name="
                      showConfirmPassword
                        ? 'interface-edit-on'
                        : 'interface-edit-off'
                    "
                  />
                </provet-button>
              </provet-input>
            </provet-fieldset>
          </provet-fieldset>

          <provet-fieldset>
            <provet-visually-hidden>Terms Agreement</provet-visually-hidden>
            <provet-fieldset>
              <provet-checkbox
                label="I agree to the Terms and Conditions"
                v-model="formData.agreeTerms"
                :error="errors.agreeTerms"
                @input="errors.agreeTerms = undefined"
                type="checkbox"
                required
              ></provet-checkbox>
              <provet-checkbox
                label="I would like to receive occasional product updates and announcements"
                v-model="formData.receiveUpdates"
                :error="errors.receiveUpdates"
                type="checkbox"
              ></provet-checkbox>
            </provet-fieldset>
          </provet-fieldset>

          <footer class="button-container">
            <provet-button
              type="submit"
              variant="primary"
              full-width
              :disabled="isSubmitting"
            >
              {{ isSubmitting ? "Registering..." : "Register" }}
            </provet-button>
          </footer>
        </form>
      </div>
    </provet-card>
  </article>
</template>

<script setup lang="ts">
import { ref } from "vue";
import "@provetcloud/web-components/lib/Input";
import "@provetcloud/web-components/lib/Button";
import "@provetcloud/web-components/lib/Checkbox";
import "@provetcloud/web-components/lib/Fieldset";
import "@provetcloud/web-components/lib/Card";
import "@provetcloud/web-components/lib/Select";
import "@provetcloud/web-components/lib/VisuallyHidden";
import "@provetcloud/web-components/lib/Icon";
import { useRouter } from "vue-router";
import { useForm } from "~/composables/useForm";

const router = useRouter();
const { formData, errors, isSubmitting, handleSubmit } = useForm();

// Toggle password visibility
const showPassword = ref<boolean>(false);
const showConfirmPassword = ref<boolean>(false);

const onSubmit = async () => {
  const isValid = await handleSubmit();
  if (isValid) {
    router.push("/success");
  }
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
    margin-bottom: var(--n-space-s);
  }

  .button-container {
    margin-top: var(--n-space-s);
  }

  provet-fieldset {
    margin-bottom: var(--n-space-s);
  }

  provet-input,
  provet-checkbox {
    width: 100%;
  }
}

@media (max-width: 400px) {
  .registration-form {
    padding: var(--n-space-xxs);
  }

  provet-card {
    padding: var(--n-space-s);
  }

  .n-space-y-l {
    gap: var(--n-space-m);
  }

  .n-space-y-m {
    gap: var(--n-space-s);
  }
}
</style>
