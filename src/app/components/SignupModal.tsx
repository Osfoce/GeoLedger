"use client";

import { useEffect, useState } from "react";

type SignupModalProps = {
  onClose: () => void;
};

type FormState = {
  name: string;
  password: string;
  confirmPassword: string;
};

type ErrorState = {
  name?: string;
  password?: string;
  confirmPassword?: string;
};

type PasswordRules = {
  length: boolean;
  uppercase: boolean;
  lowercase: boolean;
  number: boolean;
  symbol: boolean;
};

export default function SignupModal({ onClose }: SignupModalProps) {
  const [form, setForm] = useState<FormState>({
    name: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<ErrorState>({});

  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // Password validation
  const validatePassword = (password: string): PasswordRules => {
    return {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /[0-9]/.test(password),
      symbol: /[!@#$%^&*]/.test(password),
    };
  };

  const passwordRules = validatePassword(form.password);
  const isPasswordValid = Object.values(passwordRules).every(Boolean);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newErrors: ErrorState = {};

    if (!form.name) newErrors.name = "Name is required";

    if (!isPasswordValid) {
      newErrors.password = "Password does not meet requirements";
    }

    if (form.password !== form.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form Submitted:", form);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50">

      {/* MODAL */}
      <div className="bg-[#020617] p-6 rounded-xl w-100 text-white relative">

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-xl"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold mb-4 text-green-500">
          Create Account
        </h2>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">

          <input
            type="text"
            placeholder="Full Name"
            className="p-2 rounded bg-black/30 outline-none"
            value={form.name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setForm({ ...form, name: e.target.value })
            }
          />
          {errors.name && (
            <p className="text-red-400 text-xs">{errors.name}</p>
          )}

          <input
            type="password"
            placeholder="Password"
            className="p-2 rounded bg-black/30 outline-none"
            value={form.password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          {/* PASSWORD RULES */}
          <div className="text-xs space-y-1">
            <p className={passwordRules.length ? "text-green-400" : "text-red-400"}>
              • At least 8 characters
            </p>
            <p className={passwordRules.uppercase ? "text-green-400" : "text-red-400"}>
              • Uppercase letter
            </p>
            <p className={passwordRules.lowercase ? "text-green-400" : "text-red-400"}>
              • Lowercase letter
            </p>
            <p className={passwordRules.number ? "text-green-400" : "text-red-400"}>
              • Number
            </p>
            <p className={passwordRules.symbol ? "text-green-400" : "text-red-400"}>
              • Special character
            </p>
          </div>

          {errors.password && (
            <p className="text-red-400 text-xs">{errors.password}</p>
          )}

          <input
            type="password"
            placeholder="Confirm Password"
            className="p-2 rounded bg-black/30 outline-none"
            value={form.confirmPassword}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setForm({ ...form, confirmPassword: e.target.value })
            }
          />

          {errors.confirmPassword && (
            <p className="text-red-400 text-xs">
              {errors.confirmPassword}
            </p>
          )}

          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 p-2 rounded font-bold"
          >
            Sign Up
          </button>
        </form>

        {/* DIVIDER */}
        <div className="my-4 text-center text-sm text-white/50">
          OR
        </div>

        {/* GOOGLE */}
        <button className="w-full border border-white/30 p-2 rounded hover:bg-white/10">
          Continue with Google
        </button>
      </div>
    </div>
  );
}