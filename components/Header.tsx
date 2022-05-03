import Image from "next/image";
import React, { useEffect, useState } from "react";
import { BsSearch, BsFillBellFill } from "react-icons/bs";
import useAuth from "../hooks/useAuth";

const Header = () => {
  const data = ["Home", "TV Shows", "Movies", "New & Popular", "My List"];
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const { logout } = useAuth();
  return (
    <header className={`${scroll && "bg-[#141414]"}`}>
      <div className="flex items-center space-x-2 md:space-x-9">
        <Image
          className="cursor-pointer object-contain"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          width={100}
          height={100}
          alt="logo"
        />
        <ul className="hidden md:flex space-x-4">
          {data.map((item, id) => (
            <li
              key={id}
              className="cursor-pointer text-[#e5e5e5] text-sm font-light transition duration-300 hover:text-[#b3b3b3]"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center space-x-4 text-sm font-light">
        <BsSearch className="hidden md:inline h-6 w-6" />
        <p className="hidden lg:inline">Kids</p>
        <BsFillBellFill className="h-6 w-6" />

        <Image
          src="https://rb.gy/g1pwyx"
          alt="avatar"
          width={40}
          height={40}
          className="cursor-pointer rounded  object-contain "
          onClick={logout}
        />
      </div>
    </header>
  );
};

export default Header;
