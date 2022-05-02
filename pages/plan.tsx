import Link from 'next/link';
import React from 'react'

const Plan = () => {
  return (
    <div>
      <Link href='/'>
        <img
          className="cursor-pointer object-contain"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          width={100}
          height={100}
          alt="logo"
        />
      </Link>
    </div>
  );
} 

export default Plan