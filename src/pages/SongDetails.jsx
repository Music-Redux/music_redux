/* eslint-disable */
import React, { useEffect } from "react";




import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import { Reviews } from "../components/Reviews";
import { setActiveSong, playPause } from "../redux/features/playerSlice";
import {
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} from "../redux/services/shazamCore";
import { logo } from "../assets";
import Favorite from "../components/Favorite";
import axios from "axios";
import { useState } from "react";
import RemoveFavorite from "../components/RemoveFavorite";

const SongDetails = () => {
  const dispatch = useDispatch();
  const { songid, id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const [fav, setFav] = useState()

  const user_id = 1;

  const songDataFav = { user_id: user_id, song_id: songid }

  // get all favorites from database where user id = const user id
  // get song id
  // eslint-disable-next-line object-curly-spacing

  useEffect(() => {
    axios.post('http://127.0.0.1:8000/api/getfav', { user_id: user_id }).then(res => {
      let favArr = res.data.filter(e => e.song_id == songid);
      setFav(favArr.length);
    }).catch(err => { console.log(err) });
  }, [])

  console.log(songid);
  // console.log(fav);
  // console.log(artistId);
  const {
    data,
    isFetching: isFetchinRelatedSongs,
    error,
  } = useGetSongRelatedQuery({ songid });
  const { data: songData, isFetching: isFetchingSongDetails } =
    useGetSongDetailsQuery({ songid });

  if (isFetchingSongDetails && isFetchinRelatedSongs)
    return <Loader title="Searching song details" />;

  // console.log(songData.key);

  if (error) return <Error />;

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div className="flex flex-col">
      {console.log(fav, 'favvvv')}
      {fav.length > 0 ? (
        <Favorite songId={songid} userId={user_id} />
      ) : (

        <RemoveFavorite />
      )}
      <DetailsHeader artistId={artistId} songData={songData} />
      <div className="mb-10">
        <h2 className="text-white text-3xl font-bold">Lyrics:</h2>

        <div className="mt-5">
          {songData?.sections[1].type === "LYRICS" ? (
            songData?.sections[1]?.text.map((line, i) => (
              <p
                key={`lyrics-${line}-${i}`}
                className="text-gray-400 text-base my-1"
              >
                {line}
              </p>
            ))
          ) : (
            <p className="text-gray-400 text-base my-1">
              Sorry, No lyrics found!
            </p>
          )}
        </div>
      </div>
      <div className="text-white">
        <Reviews songid={songid} />
      </div>
      <RelatedSongs
        data={data}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
        handlePauseClick={handlePauseClick}
        handlePlayClick={handlePlayClick}
      />
    </div>
  );
};

export default SongDetails;
