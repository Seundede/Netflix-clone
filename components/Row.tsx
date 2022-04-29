import React from 'react'
import { Movie } from '../typings'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import MovieContent from "./MovieContent";

interface Props {
   title: string,
   movies: Movie[]
}

const Row = ({title,movies}: Props) => {
  
  return (
    <div className="h-60 space-y-1 md:space-y-2">
      <h2 className="cursor-pointer font-semibold text-[#e5e5e5] w-55 text-sm transition duration-300 hover:text-white md:text-2xl">
        {title}
      </h2>
      <div className="relative group md:-ml-2">
   
        <div className="flex items-center space-x-1 md:space-x-2.5 md:p-2 overflow-x-scroll no-scrollbar ">
          {movies.map((movie) => (
            <MovieContent key={movie.id} movie={movie} />
          ))}
        </div>
     
      </div>
    </div>
  );
}

export default Row