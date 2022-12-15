import {useState, useEffect} from "react";
import { useSelector } from "react-redux";
import { useIsAuthenticated, useAuthUser } from "react-auth-kit";
import axios from "axios";
import { Error, Loader, SongCard } from "../components";
import { useGetTopChartsQuery } from "../redux/services/shazamCore";

const TopCharts = () => {
  const { data, isFetching, error } = useGetTopChartsQuery();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const auth = useAuthUser();
  const user_id = auth()?.id;
  const [userFav, setUserFav] = useState(0);

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

  if (isFetching) return <Loader title="Loading Top Charts" />;

  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Trending
      </h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data.map((song, i) => (
          <SongCard
            key={song.key}
            isFavp={userFav == song.key? true: false}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default TopCharts;
