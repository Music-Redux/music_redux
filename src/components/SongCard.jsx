/* eslint-disable */
import {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { HiOutlineHeart, HiHeart } from "react-icons/hi";
import axios from 'axios';
import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";
import { useIsAuthenticated, useAuthUser } from "react-auth-kit";

const SongCard = ({ song, isPlaying, activeSong, data, i, isFavp }) => {
  // console.log();
  const isAuthenticated = useIsAuthenticated();
  const dispatch = useDispatch();
  const auth = useAuthUser();
  const user_id = auth()?.id;
  const favData = {
    "user_id": user_id,
    "song_id": song.key,
  }

  var configAdd = {
    method: "post",
    url: "http://localhost:8000/api/add_favorite",
    headers: {},
    data: favData,
  };

  var configRemove = {
    method: "delete",
    url: "http://127.0.0.1:8000/api/delete_favorite",
    headers: {
      'Accept': 'application/json',
            'Content-Type': 'application/json'
    },
    data: favData,
  };
  

  // console.log(activeSong.key);
  const [isFav, setIsFav] = useState(isFavp);
console.log(isFav);
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };




  // setIsFav(false);
    // add to fav
  const handleAddToFav = (e) => {
    e.preventDefault();

    axios(configAdd)
      .then(function (response) {
        // console.log(response.data);
        setIsFav(!isFav);
      })
      .catch(function (error) {
        console.log(error);
      });


  };

  // remove from fav
  const handleRemoveFromFav = (e) => {
    e.preventDefault();
    axios(configRemove)
      .then(function (response) {
        // console.log(response.data);
        setIsFav(!isFav);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="flex flex-col  w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer bg-[#BB264959] ">
    {isAuthenticated() ? (isFav ? <HiHeart onClick={handleRemoveFromFav}  className='ml-8 e  heart w-8 h-8' />
            : <HiOutlineHeart onClick={handleAddToFav}  className=' ml-8 heart w-8 h-8' />):null}

      <div className="relative w-full h-56 group">
        
        <div
          className={`absolute inset-0 justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
            activeSong?.title === song.title
              ? "flex bg-black bg-opacity-70"
              : "hidden"
          }`}
        >
          
          {isAuthenticated() ? (
            <PlayPause
              isPlaying={isPlaying}
              activeSong={activeSong}
              song={song}
              handlePause={handlePauseClick}
              handlePlay={handlePlayClick}
            />
          ) : (
            <a href="/login" className="text-white">
              Login to listen
            </a>
          )}
        </div>
       
        <img
          alt="song_img"
          src={song.images?.coverart}
          className="w-full h-full rounded-lg"
        />
      </div>

      <div className="mt-4 flex flex-col">
        <p className="font-semibold text-lg text-white truncate">
          <Link to={`/songs/${song?.key}`}>{song.title}</Link>
          
        </p>
        <p className="text-sm flex truncate text-gray-300 mt-1">
          <Link
            to={
              song.artists
                ? `/artists/${song?.artists[0]?.adamid}`
                : "/top-artists"
            }
          >
            {song.subtitle}
          </Link>
         
        </p>
      </div>
    </div>
  );
};

export default SongCard;
