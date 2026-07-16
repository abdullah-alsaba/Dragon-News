
'use client'
import Image from "next/image";
import Link from "next/link";
import {
  FaGoogle,
  FaGithub,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

import Swimming from "@/assets/swimming.png";
import Class from "@/assets/class.png";
import Playground from "@/assets/playground.png";
import Bg from "@/assets/bg.png";
import { handelGithubLogIn, handelGoogleLogIn } from "@/lib/function";


const SocialSide = () => {
  

  return (
    <aside className="col-span-3 space-y-8">
      {/* Login */}
      <div>
        <h2 className="text-2xl font-bold text-[#403F3F] mb-5">Login With</h2>

        <div className="space-y-3">
          <button
            type="button"
            onClick={handelGoogleLogIn}
            className="border-b border-[#E7E7E7] rounded-md h-12 flex items-center justify-center gap-2 text-[#4285F4] font-medium hover:bg-slate-50 transition cursor-pointer w-full"
          >
            <FaGoogle />
            Login with Google
          </button>

          <button
            type="button"
            onClick={handelGithubLogIn}
            className="border-b border-[#E7E7E7] rounded-md h-12 flex items-center justify-center gap-2 text-[#403F3F] font-medium hover:bg-slate-50 transition cursor-pointer w-full"
          >
            <FaGithub />
            Login with Github
          </button>
        </div>
      </div>

      {/* Social */}
      <div>
        <h2 className="text-2xl font-bold text-[#403F3F] mb-5">Find Us On</h2>

        <div className="border-b  border-[#E7E7E7] rounded-md overflow-hidden">
          <Link
            href="#"
            className="flex items-center gap-4 p-4 border-b border-[#E7E7E7]  hover:bg-slate-50"
          >
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-blue-600">
              <FaFacebookF />
            </div>
            Facebook
          </Link>

          <Link
            href="#"
            className="flex items-center gap-4 p-4  border-b border-gray-700 hover:bg-slate-50"
          >
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-sky-500">
              <FaTwitter />
            </div>
            Twitter
          </Link>

          <Link
            href="#"
            className="flex items-center gap-4 p-4 hover:bg-slate-50"
          >
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-pink-500">
              <FaInstagram />
            </div>
            Instagram
          </Link>
        </div>
      </div>

      {/* Q-Zone */}
      <div className="bg-[#F3F3F3] p-5">
        <h2 className="text-2xl font-bold text-[#403F3F] mb-6">Q-Zone</h2>

        <div className="space-y-5">
          <Image src={Swimming} alt="Swimming" className="w-full" />

          <Image src={Class} alt="Class" className="w-full" />

          <Image src={Playground} alt="Playground" className="w-full" />
        </div>
      </div>

      {/* Advertisement */}
      <Image src={Bg} alt="Advertisement" className="w-full" />
    </aside>
  );
};

export default SocialSide;
