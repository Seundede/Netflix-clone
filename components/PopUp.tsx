import React, { useEffect, useState } from "react";
import Modal from "@mui/material/Modal";
import { useRecoilState } from "recoil";
import { modalState, movieState } from "../atoms/modalAtom";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";
import ReactPlayer from "react-player/lazy";
import { FaPlay, FaThumbsUp, FaVolumeMute, FaVolumeUp } from "react-icons/fa";

const PopUp = () => {

  interface Genre {
    id: number;
    name: string;
  }

  interface Element {
    type:
      | "Bloopers"
      | "Featurette"
      | "Behind the Scenes"
      | "Clip"
      | "Trailer"
      | "Teaser";
  }
  const [showModal, setShowModal] = useRecoilState(modalState);

  const handleClose = () => {
    setShowModal(false);
  };
  const [movie, setMovie] = useRecoilState(movieState);
  const [trailer, setTrailer] = useState("");
  const [genres, setGenres] = useState<Genre[]>([]);
  const [muted, setMuted] = useState(false);
  useEffect(() => {
    if (!movie) return;
    async function fetchMovie() {
      const data = await fetch(
        `https://api.themoviedb.org/3/${
          movie?.media_type === "tv" ? "tv" : "movie"
        }/${movie?.id}?api_key=${
          process.env.NEXT_PUBLIC_API_KEY
        }&language=en-US&append_to_response=videos`
      ).then((response) => response.json());
      if (data?.videos) {
        const index = data.videos.results.findIndex(
          (element: Element) => element.type === "Trailer"
        );
        setTrailer(data.videos?.results[index]?.key);
      }
      if (data?.genres) {
        setGenres(data.genres);
      }
    }
    fetchMovie();
  }, [movie]);

  return (
    <Modal
      open={showModal}
      onClose={handleClose}
      className="!top-16 left-0 right-0 z-50 mx-auto w-[80vw] max-w-5xl overflow-hidden rounded-md fixed "
    >
      <div className='relative'>
        <button
          onClick={handleClose}
          className="absolute right-5 top-5 h-9 w-9 border-none bg-[#181818] hover:bg-[#181818] modalButton z-50 "
        >
          <AiOutlineClose className="h-5 w-4" />
        </button>
        <div className="relative pt-[56.25%]">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailer}`}
            width="100%"
            height="100%"
            playing
            muted={muted}
            style={{ position: "absolute", top: "0", left: "0" }}
          />
          <div className="absolute bottom-10 flex items-center w-full justify-between px-10">
            <div className="flex space-x-3">
              <button className="flex items-center rounded gap-x-2 bg-white px-3 text-xl font-bold text-black transition hover:bg-[#e6e6e6]">
                <FaPlay className="text-black h-4 w-6  " />
                Play
              </button>
              <button className="modalButton">
                <AiOutlinePlus className="h-7 w-7" />
              </button>
              <button className="modalButton">
                <FaThumbsUp className="h-7 w-7" />
              </button>
            </div>
            <button onClick={() => setMuted(!muted)} className="modalButton">
              {muted ? (
                <FaVolumeUp className="h-5 w-5" />
              ) : (
                <FaVolumeMute className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
        <div className="space-y-5 text-sm lg:text-lg bg-[#181818] p-10 rounded-b-md">
          <div className="flex items-center text-sm space-x-3">
            <p className="font-semibold text-green-400">
              {movie?.vote_average * 10}% Match
            </p>
            <p className="font-light">
              {movie?.release_date || movie?.first_air_date}
            </p>
            <div className="flex h-4 rounded items-center justify-center text-xs px-2 py-1 border border-white/40 ">
              HD
            </div>
          </div>
          <div className="flex flex-col gap-x-10 gap-y-4 font-light md:flex-row">
            <p>{movie?.overview}</p>
            <div className="flex flex-col space-y-3 text-sm">
              <div>
                <span className="text-[gray]">Genres: </span>
                {genres.map((genre) => genre.name).join(",")}
              </div>

              <div className="text-[gray] uppercase">
                <span className="normal-case">Original language: </span>
                {movie?.original_language}
              </div>
              <div className="text-[gray]">
                <span>Total votes: </span>
                {movie?.vote_count}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PopUp;
