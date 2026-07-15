'use client'



import Link from "next/link";

export const metadata = {
  title: "Dragon News - Log In",
  
};
const LoginPage = () => {

    const onSubmit = (e) => {
        e.preventDefault()
        const formData= new FormData(e.target)
        const newUser = Object.formEntries(FormData.entries())
        console.log(newUser)
}


  return (
    <div className="min-h-screen bg-[#F3F3F3] flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-3xl bg-white rounded-md p-14">
        <h1 className="text-5xl font-bold text-center text-[#403F3F]">
          Login your account
        </h1>

        <hr className="my-10 border-gray-200" />

        <form className="space-y-7" onSubmit={onSubmit}>
          <div>
            <label className="block text-xl font-semibold text-[#403F3F] mb-3">
              Email address
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="w-full h-16 bg-[#F3F3F3] px-6 outline-none rounded"
            />
          </div>

          <div>
            <label className="block text-xl font-semibold text-[#403F3F] mb-3">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full h-16 bg-[#F3F3F3] px-6 outline-none rounded"
            />
          </div>

          <button
            type="submit"
            className="w-full h-16 bg-[#403F3F] text-white text-2xl font-semibold hover:bg-black transition"
          >
            Login
          </button>

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
