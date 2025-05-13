import { object, string, boolean, ref as yupRef } from "yup";

export const formSchema = object({
  email: string().required("Email is required").email("Invalid email format"),
  password: string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(/[0-9]/, "Password must contain at least one number")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    .matches(
      /[^A-Za-z0-9]/,
      "Password must contain at least one special character"
    ),
  confirmPassword: string()
    .required("Please confirm your password")
    .oneOf([yupRef("password")], "Passwords must match"),
  agreeTerms: boolean()
    .required()
    .oneOf([true], "You must agree to the terms and conditions"),
  receiveUpdates: boolean().default(false),
});

export type FormData = {
  email: string;
  password: string;
  confirmPassword: string;
  agreeTerms: boolean;
  receiveUpdates: boolean;
};

export type FormErrors = {
  [K in keyof FormData]?: string;
};
