'use client'

import Image from "next/image";
import Link from "next/link";
import AvatarImage from "@/assets/user.png";
import NavLink from "@/components/shared/NavLink/NavLink"
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
   const { data: session, isPending } = authClient.useSession();

  const user = session?.user
  
  

  return (
    <nav className="flex justify-between mt-6 items-center ">
      <div></div>
      {/* Center */}
      <ul className="flex items-center gap-8 text-lg text-[#706F6F]">
        <li>
          <NavLink href="/">Home</NavLink>
        </li>
        <li>
          <NavLink href="/about">About</NavLink>
        </li>
        <li>
          <NavLink href="/career">Career</NavLink>
        </li>
      </ul>
      {/* Right */}
      {isPending ? (
        <span className="loading loading-spinner text-success mr-20"></span>
      ) : user ? (
        <div className=" flex items-center gap-4 mr-16">
          <Image
            src={user.image || AvatarImage}
            alt="User Avatar"
            width={48}
            height={48}
            className="rounded-full"
          />

          <Link href="/login">
            <button
              className="bg-[#403F3F] text-white px-7 py-3 font-semibold cursor-pointer"
              onClick={async () => await authClient.signOut()}
            >
              Log Out
            </button>
          </Link>
        </div>
      ) : (
        <Link href="/login">
          <button className="bg-[#403F3F] text-white px-7 py-3 font-semibold cursor-pointer mr-16">
            Login
          </button>
        </Link>
      )}
    </nav>
  );
};

export default Navbar;
