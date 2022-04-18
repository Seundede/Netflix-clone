import Image from "next/image";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../requests";
import { Movie } from "../typings";
import { FaPlay } from 'react-icons/fa'
import { HiInformationCircle } from "react-icons/hi";

type Props = {
  netflixOriginals: Movie[];
};
const Banner = ({ netflixOriginals }: Props) => {
  const [movie, setMovie] = useState<Movie | null>(null);
  useEffect(() => {
    setMovie(
      netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)]
    );
  }, [netflixOriginals]);
   const truncate = (string: any , n:number) => {
     return string?.length > n ? string.substr(0, n - 1) + "..." : string;
   };

  return (
    <div className="flex flex-col space-y-2 py-16  md:space-y-4 lg:h-[65vh] lg:pb-12 lg:justify-end">
      <div className="top-0 left-0 absolute h-[95vh] w-screen -z-50">
        <Image
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
          alt="banner"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="text-xs max-w-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl text-shadow-lg">
        {truncate(movie?.overview, 150)}
      </p>
      <div className="flex space-x-4">
        <button className="button bg-white text-black">
          <FaPlay className="text-black h-4 w-4 md:h-7 md:w-7 " />
          Play
        </button>
        <button className="button bg-[gray]/70">
          More Info
          <HiInformationCircle className=" h-4 w-4 md:h-7 md:w-7 " />
        </button>
      </div>
    </div>
  );
};

export default Banner;
