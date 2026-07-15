import Image from "next/image";
import Logo from "@/assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <header className="py-10 flex flex-col items-center text-center">
      <Image
        src={Logo}
        alt="Dragon News Logo"
        width={420}
        priority
        className="w-auto h-auto"
      />

      <p className="text-[#706F6F] mt-4 text-lg">
        Journalism Without Fear or Favour
      </p>

      <p className="mt-2 text-xl font-semibold text-[#403F3F]">
        {format(new Date(), "EEEE, MMMM dd, yyyy")}
      </p>
    </header>
  );
};

export default Header;
