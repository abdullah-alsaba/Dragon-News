"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Eye, EyeSlash } from "@gravity-ui/icons";
import { Button, InputGroup } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";

const RegisterPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

    const onSubmit = async (data) => {
      
        const { name, email, password, photoURL } = data
        
       


    const { data: res, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: photoURL,
      callbackURL: "/login",
    });
        
        if (error) {
            toast.error(error.message)

        }
        if (res) {
            toast.success("Sign Up successful")
        }
        
  };

  return (
    <div className="min-h-screen bg-[#F3F3F3] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-3xl bg-white rounded-md p-14">
        <h1 className="text-5xl font-bold text-center text-[#403F3F]">
          Register your account
        </h1>

        <hr className="my-10 border-gray-200" />

        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <div>
            <label className="block text-xl font-semibold text-[#403F3F] mb-3">
              Your Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full h-16 bg-[#F3F3F3] rounded px-6 outline-none"
              {...register("name", {
                required: "Name is required",
              })}
            />

            {errors.name && (
              <p className="text-red-500 mt-2 font-semibold">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-xl font-semibold text-[#403F3F] mb-3">
              Photo URL
            </label>

            <input
              type="text"
              placeholder="Enter photo URL"
              className="w-full h-16 bg-[#F3F3F3] rounded px-6 outline-none"
              {...register("photoURL", {
                required: "Photo URL is required",
              })}
            />

            {errors.photoURL && (
              <p className="text-red-500 mt-2 font-semibold">
                {errors.photoURL.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-xl font-semibold text-[#403F3F] mb-3">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full h-16 bg-[#F3F3F3] rounded px-6 outline-none"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Enter a valid email address",
                },
              })}
            />

            {errors.email && (
              <p className="text-red-500 mt-2 font-semibold">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-xl font-semibold text-[#403F3F] mb-3">
              Password
            </label>

            <InputGroup className="w-full h-16 bg-[#F3F3F3] rounded">
              <InputGroup.Input
                type={isVisible ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full h-16 px-6 outline-none bg-transparent"
                {...register("password", {
                  required: "Password is required",

                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },

                  validate: {
                    uppercase: (value) =>
                      /[A-Z]/.test(value) ||
                      "Must contain one uppercase letter",

                    lowercase: (value) =>
                      /[a-z]/.test(value) ||
                      "Must contain one lowercase letter",

                    number: (value) =>
                      /\d/.test(value) || "Must contain one number",

                    special: (value) =>
                      /[!@#$%^&*(),.?":{}|<>]/.test(value) ||
                      "Must contain one special character",
                  },
                })}
              />

              <InputGroup.Suffix className="pr-4">
                <Button
                  type="button"
                  isIconOnly
                  size="sm"
                  variant="ghost"
                  aria-label={isVisible ? "Hide password" : "Show password"}
                  onPress={() => setIsVisible(!isVisible)}
                >
                  {isVisible ? (
                    <Eye className="size-5" />
                  ) : (
                    <EyeSlash className="size-5" />
                  )}
                </Button>
              </InputGroup.Suffix>
            </InputGroup>

            {errors.password && (
              <p className="text-red-500 mt-2 font-semibold">
                {errors.password.message}
              </p>
            )}

            <ul className="text-sm text-gray-500 mt-3 space-y-1">
              <li>• Minimum 8 characters</li>
              <li>• One uppercase letter</li>
              <li>• One lowercase letter</li>
              <li>• One number</li>
              <li>• One special character</li>
            </ul>
          </div>

          {/* Terms */}
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              className="checkbox checkbox-sm rounded"
              {...register("terms", {
                required: "You must accept terms and conditions",
              })}
            />

            <span className="text-[#706F6F] font-medium">
              Accept Term & Conditions
            </span>
          </label>

          {errors.terms && (
            <p className="text-red-500 font-semibold">{errors.terms.message}</p>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="w-full h-16 bg-[#403F3F] text-white text-2xl font-semibold hover:bg-black transition"
          >
            Register
          </button>

          <p className="text-center text-xl font-medium text-[#706F6F]">
            Already Have An Account?
            <Link href="/login" className="text-[#FF4A5B] font-semibold ml-2">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
