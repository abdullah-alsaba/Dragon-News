import React from 'react';
import Logo from "@/assets/logo.png"
import Image from 'next/image';
const Header = () => {
    return (
      <div>
        <Image
          src={Logo}
          alt="A image where write dragon news"
          width={300}
          height={200}
        ></Image>
        <p>Journalism Without Fear or Favour</p>
      </div>
    );
};

export default Header;