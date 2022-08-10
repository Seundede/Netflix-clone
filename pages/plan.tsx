import Link from "next/link";
import React from "react";
import useAuth from "../hooks/useAuth";
import { FiCheck } from "react-icons/fi";
import Table from "../components/Table";
import { useRouter } from "next/router";
import Image from "next/image";

const Plan = () => {

  const { logout } = useAuth();
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };

  return (
    <div>
      <header className="border-b border-white/10 bg-[#141414]">
        <Link href="/" passHref>
          <Image
            className="cursor-pointer object-contain"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            width={70}
            height={70}
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

      <main className="pt-28 text-white max-w-5xl mx-auto pb-12 md:px-12 transition-all px-2.5">
        <h1 className="text-3xl mb-3 font-medium">
          Choose the plan thats right for you
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
          <button
            className="rounded mx-auto w-11/12 bg-[#E50914] py-4 text-xl shadow hover:bg-[#f6121d] md:w-[420px]"
            onClick={handleClick}
          >
            Subscribe
          </button>
        </div>
      </main>
    
    </div>
  );
};

export default Plan;
