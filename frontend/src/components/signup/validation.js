import { z } from "zod";

 export const validate = z
    .object({
      username: z
        .string()
        .min(5, "Username must be at least 5 characters.")
        .max(30, "Username must be less than 30 characters."),
      email: z.string().email("Invalid email address"),
      phone: z.string().regex(/^[0-9]{10}$/, "Phone number must be 10 digits."),
      fullname: z.string().min(3, "Full name must be at least 3 characters."),
      password: z.string().min(6, "Password must be at least 6 characters."),
      cpassword: z.string().min(6, "Confirm password must be at least 6 characters."),
    })
    .refine((data) => data.password === data.cpassword, {
      message: "Passwords do not match",
      path: ["cpassword"],
    });
