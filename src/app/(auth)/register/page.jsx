import Link from "next/link";

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-[#F3F3F3] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-3xl bg-white rounded-md p-14">
        <h1 className="text-5xl font-bold text-center text-[#403F3F]">
          Register your account
        </h1>

        <hr className="my-10 border-gray-200" />

        <form className="space-y-6">
          <div>
            <label className="block text-xl font-semibold text-[#403F3F] mb-3">
              Your Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full h-16 bg-[#F3F3F3] rounded px-6 outline-none"
            />
          </div>

          <div>
            <label className="block text-xl font-semibold text-[#403F3F] mb-3">
              Photo URL
            </label>

            <input
              type="text"
              placeholder="Enter photo URL"
              className="w-full h-16 bg-[#F3F3F3] rounded px-6 outline-none"
            />
          </div>

          <div>
            <label className="block text-xl font-semibold text-[#403F3F] mb-3">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full h-16 bg-[#F3F3F3] rounded px-6 outline-none"
            />
          </div>

          <div>
            <label className="block text-xl font-semibold text-[#403F3F] mb-3">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full h-16 bg-[#F3F3F3] rounded px-6 outline-none"
            />
          </div>

          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" className="checkbox checkbox-sm rounded" />

            <span className="text-[#706F6F] font-medium">
              Accept Term & Conditions
            </span>
          </label>

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
