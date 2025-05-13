import { describe, it, expect, beforeEach } from "vitest";
import { useForm } from "~/composables/useForm";

describe("Form Validation", () => {
  let form: ReturnType<typeof useForm>;

  beforeEach(() => {
    form = useForm();
  });

  it("should validate email format", async () => {
    // Test invalid email
    form.formData.value.email = "invalid-email";
    await form.validateForm();
    expect(form.errors.value.email).toBe("Invalid email format");

    // Test valid email
    form.formData.value.email = "test@example.com";
    await form.validateForm();
    expect(form.errors.value.email).toBeUndefined();
  });

  it("should validate password requirements", async () => {
    // Test password without number
    form.formData.value.password = "Password!";
    await form.validateForm();
    expect(form.errors.value.password).toContain(
      "must contain at least one number"
    );

    // Test password without uppercase
    form.formData.value.password = "password123!";
    await form.validateForm();
    expect(form.errors.value.password).toContain(
      "must contain at least one uppercase letter"
    );

    // Test password without lowercase
    form.formData.value.password = "PASSWORD123!";
    await form.validateForm();
    expect(form.errors.value.password).toContain(
      "must contain at least one lowercase letter"
    );

    // Test password without special character
    form.formData.value.password = "Password123";
    await form.validateForm();
    expect(form.errors.value.password).toContain(
      "must contain at least one special character"
    );

    // Test valid password
    form.formData.value.password = "Password123!";
    await form.validateForm();
    expect(form.errors.value.password).toBeUndefined();
  });

  it("should validate password confirmation", async () => {
    form.formData.value.password = "Password123!";
    form.formData.value.confirmPassword = "DifferentPassword123!";
    await form.validateForm();
    expect(form.errors.value.confirmPassword).toBe("Passwords must match");

    form.formData.value.confirmPassword = "Password123!";
    await form.validateForm();
    expect(form.errors.value.confirmPassword).toBeUndefined();
  });

  it("should validate terms agreement", async () => {
    form.formData.value.agreeTerms = false;
    await form.validateForm();
    expect(form.errors.value.agreeTerms).toContain(
      "must agree to the terms and conditions"
    );

    form.formData.value.agreeTerms = true;
    await form.validateForm();
    expect(form.errors.value.agreeTerms).toBeUndefined();
  });

  it("should handle form submission", async () => {
    // Test invalid form submission
    const invalidResult = await form.handleSubmit();
    expect(invalidResult).toBe(false);
    expect(Object.keys(form.errors.value).length).toBeGreaterThan(0);

    // Test valid form submission
    form.formData.value = {
      email: "test@example.com",
      password: "Password123!",
      confirmPassword: "Password123!",
      agreeTerms: true,
      receiveUpdates: false,
    };

    const validResult = await form.handleSubmit();
    expect(validResult).toBe(true);

    const hasErrors = Object.values(form.errors.value).some(
      (value) => value !== undefined
    );
    expect(hasErrors).toBe(false);
  });

  it("should reset form", () => {
    // Fill form with data
    form.formData.value = {
      email: "test@example.com",
      password: "Password123!",
      confirmPassword: "Password123!",
      agreeTerms: true,
      receiveUpdates: true,
    };
    form.errors.value = { email: "Some error" };

    // Reset form
    form.resetForm();

    // Check if form is reset
    expect(form.formData.value).toEqual({
      email: "",
      password: "",
      confirmPassword: "",
      agreeTerms: false,
      receiveUpdates: false,
    });
    expect(Object.keys(form.errors.value).length).toBe(0);
  });
});
