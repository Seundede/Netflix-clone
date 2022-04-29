import Image from 'next/image';
import React from 'react'
import { baseUrl } from '../requests';
import { Movie } from '../typings'
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../atoms/modalAtom";
interface Props {
    movie: Movie
}
const MovieContent = ({movie}:Props) => {
    const [showModal, setShowModal] = useRecoilState(modalState);
    const [currentMovie, setCurrentMovie] = useRecoilState(movieState);
  return (
    <div
      className="relative h-44 min-w-[180px] cursor-pointer transition duration-300 ease-out hover:scale-110"
      onClick={() => {
        setCurrentMovie(movie);
        setShowModal(true);
      }}
    >
      {movie.name}
      <Image
        src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
        alt="banner"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
}

export default MovieContent; 