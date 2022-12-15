import { useState } from 'react';
import { HiOutlineHeart, HiHeart } from "react-icons/hi";
import { useAuthUser } from "react-auth-kit";
import axios from 'axios';
const Track = ({ isPlaying, isActive, activeSong }) => {
  const auth = useAuthUser();
  const user_id = auth()?.id;
  const data = {
    "user_id": user_id,
    "song_id": activeSong.key,
  }

  var configAdd = {
    method: "post",
    url: "http://localhost:8000/api/add_favorite",
    headers: {},
    data: data,
  };

  var configRemove = {
    method: "delete",
    url: "http://127.0.0.1:8000/api/delete_favorite",
    headers: {
      'Accept': 'application/json',
            'Content-Type': 'application/json'
    },
    data: data,
  };

  // console.log(activeSong.key);
  const [isFav, setIsFav] = useState(false);
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

console.log(isFav);
  return (
    <div className="flex-1 flex items-center justify-start">
      <div className={`${isPlaying && isActive ? 'animate-[spin_3s_linear_infinite]' : ''} hidden sm:block h-16 w-16 mr-4`}>
        <img src={activeSong?.images?.coverart} alt="cover art" className="rounded-full" />
      </div>
      <div className="w-[50%]">
        <div className="flex">
          <p className="truncate text-white font-bold text-lg">
            {activeSong?.title ? activeSong?.title : 'No active Song'}
          </p>{isFav ? <HiHeart onClick={handleRemoveFromFav} color='red' className='ml-8 w-8 h-8' />
            : <HiOutlineHeart onClick={handleAddToFav} color='red' className=' ml-8 w-8 h-8' />}


        </div>

        <p className="truncate text-gray-300">
          {activeSong?.subtitle ? activeSong?.subtitle : 'No active Song'}
        </p>
      </div>
    </div>
  );
};

export default Track;
