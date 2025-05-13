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
                :error="errors.email"
                @input="errors.email = ''"
                required
              ></provet-input>
            </provet-fieldset>

            <provet-fieldset>
              <provet-input
                label="Password"
                :type="showPassword ? 'text' : 'password'"
                v-model="formData.password"
                :error="errors.password"
                @input="errors.password = undefined"
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
                label="Confirm Password"
                :type="showConfirmPassword ? 'text' : 'password'"
                v-model="formData.confirmPassword"
                :error="errors.confirmPassword"
                @input="errors.confirmPassword = undefined"
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
import * as yup from "yup";
import "@provetcloud/web-components/lib/Input";
import "@provetcloud/web-components/lib/Button";
import "@provetcloud/web-components/lib/Checkbox";
import "@provetcloud/web-components/lib/Fieldset";
import "@provetcloud/web-components/lib/Card";
import "@provetcloud/web-components/lib/Select";
import "@provetcloud/web-components/lib/VisuallyHidden";
import "@provetcloud/web-components/lib/Icon";

const showPassword = ref(false);
const showConfirmPassword = ref(false);

const formData = ref({
  email: "",
  password: "",
  confirmPassword: "",
  agreeTerms: false,
});

const errors = ref({
  email: undefined,
  password: undefined,
  confirmPassword: undefined,
  agreeTerms: undefined,
});

const schema = yup.object({
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(
      /[^A-Za-z0-9]/,
      "Password must contain at least one special character"
    ),
  confirmPassword: yup
    .string()
    .required("Please confirm your password")
    .oneOf([yup.ref("password")], "Passwords must match"),
  agreeTerms: yup
    .boolean()
    .oneOf([true], "You must agree to the terms and conditions"),
});

const validateForm = async () => {
  try {
    // Reset errors
    Object.keys(errors.value).forEach((key) => {
      errors.value[key] = undefined;
    });

    // Validate form data
    await schema.validate(formData.value, { abortEarly: false });
    return true;
  } catch (validationError) {
    if (validationError instanceof yup.ValidationError) {
      // Set validation errors
      validationError.inner.forEach((error) => {
        if (error.path) {
          errors.value[error.path] = error.message;
        }
      });
    }
    return false;
  }
};

const handleSubmit = async () => {
  const isValid = await validateForm();
  if (isValid) {
    console.log("Form submitted:", formData.value);
    // Here you would typically send the data to your API
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
  }
}
</style>
