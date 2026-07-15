import Image from "next/image";
import Link from "next/link";
import AvatarImage from "@/assets/user.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between mt-6 items-center ">
      <div></div>
      {/* Center */}
      <ul className="flex items-center gap-8 text-lg text-[#706F6F]">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/career">Career</Link>
        </li>
      </ul>
      {/* Right */}
      <div className=" flex items-center gap-4 mr-16">
        <Image
          src={AvatarImage}
          alt="User Avatar"
          width={48}
          height={48}
          className="rounded-full"
        />

        <Link href="/signin">
          <button className="bg-[#403F3F] text-white px-7 py-3 font-semibold cursor-pointer">
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
