"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";

import { Eye, EyeSlash } from "@gravity-ui/icons";
import { Button, InputGroup } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";
import { BsGoogle } from "react-icons/bs";

const LoginPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handelGoogleLogIn = async () => {
   const data = await authClient.signIn.social({
     provider: "google",
   });
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
              const { email, password } = data;

      

      const { data: res, error } = await authClient.signIn.email({
        email: email,
        password: password,
        callbackURL: "/",
      });

      if (error) {
          toast.error(error.message)
      }
      if (res) {
          toast.success("Log In Successful")
      }
  };

  return (
    <div className="min-h-screen bg-[#F3F3F3] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-3xl bg-white rounded-md p-14">
        <h1 className="text-5xl font-bold text-center text-[#403F3F]">
          Login your account
        </h1>

        <hr className="my-10 border-gray-200" />

        <form className="space-y-7" onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}
          <div>
            <label className="block text-xl font-semibold text-[#403F3F] mb-3">
              Email address
            </label>

            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full h-16 bg-[#F3F3F3] px-6 outline-none rounded"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Enter a valid email address",
                },
              })}
            />

            {errors.email && (
              <p className="text-red-500 font-semibold mt-2">
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
                    hasUppercase: (value) =>
                      /[A-Z]/.test(value) ||
                      "Password must contain one uppercase letter",

                    hasLowercase: (value) =>
                      /[a-z]/.test(value) ||
                      "Password must contain one lowercase letter",

                    hasNumber: (value) =>
                      /\d/.test(value) || "Password must contain one number",

                    hasSpecialChar: (value) =>
                      /[!@#$%^&*(),.?":{}|<>]/.test(value) ||
                      "Password must contain one special character",
                  },
                })}
              />

              <InputGroup.Suffix className="pr-4">
                <Button
                  isIconOnly
                  type="button"
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
              <p className="text-red-500 font-semibold mt-2">
                {errors.password.message}
              </p>
            )}

            <ul className="text-sm text-gray-500 mt-3 space-y-1">
              <li>• Minimum 8 characters</li>
              <li>• At least one uppercase letter</li>
              <li>• At least one lowercase letter</li>
              <li>• At least one number</li>
              <li>• At least one special character</li>
            </ul>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full h-16 bg-[#403F3F] text-white text-2xl font-semibold hover:bg-black transition cursor-pointer"
          >
            Login
          </button>

          <div className="">
            <button
              type="button"
              className="w-full h-16 bg-[#403F3F] text-white text-2xl font-semibold hover:bg-black transition flex items-center gap-4 justify-center cursor-pointer" onClick={handelGoogleLogIn}
            >
              <BsGoogle></BsGoogle>
              Login With Google
            </button>
          </div>

          <p className="text-center text-xl font-medium text-[#706F6F]">
            Don&apos;t Have An Account ?
            <Link
              href="/register"
              className="text-[#FF4A5B] font-semibold ml-2"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
