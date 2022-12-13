/* eslint-disable */
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Error,
  Loader,
  Searchbar,
  Sidebar,
  SongCard,
  TopPlay,
} from "../components";
import { selectGenreListId } from "../redux/features/playerSlice";
import { useGetSongsByGenreQuery } from "../redux/services/shazamCore";
import { genres } from "../assets/constants";

const Discover = () => {
  const dispatch = useDispatch();
  const { genreListId } = useSelector((state) => state.player);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsByGenreQuery(
    genreListId || "POP"
  );
  console.log(genreListId);
  if (isFetching) return <Loader title="Loading songs..." />;

  if (error) return <Error />;

  const genreTitle = genres.find(({ value }) => value === genreListId)?.title;

  return (
    <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
      <div className="flex-1 h-fit pb-40">
        <div className="flex flex-col justify-center">
          <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
            <h2 className="font-bold text-3xl text-white text-left">
              Discover {genreTitle}
            </h2>

            <select
              onChange={(e) => dispatch(selectGenreListId(e.target.value))}
              value={genreListId || "pop"}
              className=" text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5 bg-[#bb2649]
          "
            >
              {genres.map((genre) => (
                <option key={genre.value} value={genre.value}>
                  {genre.title}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-wrap sm:justify-start justify-center align-center gap-8">
            {data?.map((song, i) => (
              <SongCard
                key={song.key}
                song={song}
                isPlaying={isPlaying}
                activeSong={activeSong}
                data={data}
                i={i}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="xl:sticky relative top-0 h-fit">
        <TopPlay />
      </div>
    </div>
  );
};

export default Discover;
