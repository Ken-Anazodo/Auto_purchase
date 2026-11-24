import { z } from "zod";

// Sign up form validation schema
export const signUpSchema = z
  .object({
    email: z
      .string()
      .min(1, "Email is required")
      .email("Please enter a valid email address")
      .max(100, "Email must be less than 100 characters"),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(128, "Password must be less than 128 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[^A-Za-z0-9]/,
        "Password must contain at least one special character"
      ),

    confirmPassword: z.string().min(1, "Please confirm your password"),

    userType: z.enum(["BUYER", "SELLER"]),

    acceptTerms: z.boolean().refine((val) => val === true, {
      message: "You must agree to the Terms of Service and Privacy Policy",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

// Login form validation schema
export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address"),

  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must be at least 8 characters"),

  rememberMe: z.boolean().optional(),
});

export type LoginFormData = z.infer<typeof loginSchema>;

// Password strength checker
export const getPasswordStrength = (
  password: string
): {
  score: number;
  label: string;
  color: string;
} => {
  let score = 0;

  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  const strengthMap = {
    0: { label: "Very Weak", color: "bg-autobuy-red-1" },
    1: { label: "Weak", color: "bg-autobuy-red-2" },
    2: { label: "Weak", color: "bg-autobuy-orange-1" },
    3: { label: "Fair", color: "bg-autobuy-yellow-1" },
    4: { label: "Good", color: "bg-autobuy-blue-2" },
    5: { label: "Strong", color: "bg-autobuy-green-2" },
    6: { label: "Very Strong", color: "bg-autobuy-green-1" },
  };

  const strength =
    strengthMap[score as keyof typeof strengthMap] || strengthMap[0];

  return {
    score,
    label: strength.label,
    color: strength.color,
  };
};

// Type exports
export type SignUpFormData = z.infer<typeof signUpSchema>;
