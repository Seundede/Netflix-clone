import Link from "next/link";
import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import { FiCheck } from 'react-icons/fi'
import Table from "./Table";
const Plan = () => {
  const { logout } = useAuth();

  return (
    <div>
      <header className="border-b border-white/10 bg-[#141414]">
        <Link href="/" passHref>
          <img
            className="cursor-pointer object-contain"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            width={100}
            height={100}
            alt="logo"
          />
        </Link>
        <button
          className="font-medium text-lg hover:underline"
          onClick={logout}
        >
          Sign Out
        </button>
      </header>

      <main className="pt-28 text-white max-w-5xl pb-12 md:px-12 transition-all">
        <h1 className="text-3xl mb-3 font-medium">
          Choose the plan that's right for you
        </h1>
        <ul>
          <li className="flex items-center gap-x-2 text-lg">
            <FiCheck className="h-7 w-7 text-[#E50914]" /> Watch all you want.
            Ad-free.
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <FiCheck className="h-7 w-7 text-[#E50914]" /> Recommendations just
            for you.
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <FiCheck className="h-7 w-7 text-[#E50914]" /> Change or cancel your
            plan anytime.
          </li>
        </ul>
        <div className="mt-4 flex flex-col space-y-4">
          <div className="flex w-full items-center self-end md:w-3/5">
            <div className={`plan && opacity-60`}>Basic</div>
            <div className={`plan && opacity-60`}>Standard</div>
            <div className={`plan && opacity-100`}>Premium</div>
          </div>
          <Table />
          <button>Subscribe</button>
        </div>
      </main>
    </div>
  );
};

export default Plan;
