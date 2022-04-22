import Image from "next/image";
import React, { useState } from "react";

const login = () => {
  const [login, setLogin] = useState<boolean>(false)
  return (
    <div className="h-screen w-screen flex flex-col md:items-center md:justify-center relative bg-black md:bg-transparent">
      <Image
        className="-z-10 opacity-80 invisible md:visible"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/d0982892-13ac-4702-b9fa-87a410c1f2da/519e3d3a-1c8c-4fdb-8f8a-7eabdbe87056/AE-en-20220321-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        layout="fill"
        objectFit="cover"
        alt="background"
      />
      <img
        src="https://rb.gy/ulxxee"
        className="absolute left-4 top-4 cursor-pointer object-contain md:left-10 md:top-6"
        width={150}
        height={150}
      />
      <form className="relative rounded bg-black mt-20 space-y-8 py-9 px-5 md:mt-0 md:max-w-md md:px-14">
        <h1 className="text-3xl font-semibold">Sign In</h1>
        <div className="space-y-4">
          <label className="inline-block w-full">
            <input type="email" placeholder="Email" className="input" />
          </label>
          <label className="inline-block w-full">
            <input type="password" placeholder="Password" className="input" />
          </label>
        </div>
        <button
          className="bg-[#e50914] w-full rounded font-semibold py-3"
        >
          Sign In
        </button>
        <div className="text-[gray]">New to Netflix? <button className="text-white hover:underline" type="submit">Sign up now</button></div>
      </form>
    </div>
  );
};

export default login;
