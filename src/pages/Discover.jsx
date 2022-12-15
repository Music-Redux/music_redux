/* eslint-disable */
import {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useIsAuthenticated, useAuthUser } from "react-auth-kit";
import axios from "axios";
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
  const auth = useAuthUser();
  const user_id = auth()?.id;
  console.log(user_id);
  const [userFav, setUserFav] = useState([]);
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
  var configGetByUser = {
    method: "post",
    url: "http://localhost:8000/api/getfav",
    headers: {
      'Accept': 'application/json',
            'Content-Type': 'application/json'
    },
    data: {
      'user_id':user_id,
    },
  };

//   useEffect(() =>{
    
//     axios(configGetByUser).then(response=>
//         {
//           //response.json() returns a promise as well 
//           // so we have to work with another then to get data 
//           return response.data;
    
//       }).then(data=>{
//         console.log(data);
//         setUserFav(data.filter(item=>item.song_id ));
        
//       });
// console.log(userFav);
      // userFav!=0 ? setIsFav(true):null;
  // },[genreListId,isPlaying,activeSong]);

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
                isFavp={ false
                  // userFav.filter(item=> item== song.key? true: false)
                 }
// { console.log(song.key)}
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
