import { ref } from "vue";
import { formSchema, type FormData, type FormErrors } from "~/utils/validation";

export const useForm = () => {
  const formData = ref<FormData>({
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
    receiveUpdates: false,
  });

  const errors = ref<FormErrors>({});
  const isSubmitting = ref(false);

  const validateForm = async (): Promise<boolean> => {
    try {
      // Reset errors
      Object.keys(errors.value).forEach((key) => {
        errors.value[key as keyof FormErrors] = undefined;
      });

      // Validate form data
      await formSchema.validate(formData.value, { abortEarly: false });
      return true;
    } catch (validationError) {
      if (validationError instanceof Error && "inner" in validationError) {
        (
          validationError.inner as Array<{ path?: string; message: string }>
        ).forEach((error) => {
          if (error.path) {
            errors.value[error.path as keyof FormErrors] = error.message;
          }
        });
      }
      return false;
    }
  };

  const handleSubmit = async (): Promise<boolean> => {
    isSubmitting.value = true;
    try {
      const isValid = await validateForm();
      if (isValid) {
        // Here normally we send data to api
        console.log("Form submitted:", formData.value);
        return true;
      }
      return false;
    } finally {
      isSubmitting.value = false;
    }
  };

  const resetForm = () => {
    formData.value = {
      email: "",
      password: "",
      confirmPassword: "",
      agreeTerms: false,
      receiveUpdates: false,
    };
    errors.value = {};
  };

  return {
    formData,
    errors,
    isSubmitting,
    validateForm,
    handleSubmit,
    resetForm,
  };
};
