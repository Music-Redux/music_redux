import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getReviews } from "../redux/fromDB/reviewSlice";
import { Review } from "./Review";
// import { getUsers } from "../redux/fromDB/userSlice";

export const Reviews = ({ songid }) => {
  //   console.log(typeof parseInt(songid));
  let songId = parseInt(songid);
  const reviews = useSelector((state) =>
    state.Reviews?.data?.data.filter((rev) => rev.song_id === songId)
  );

  // console.log(reviews);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getReviews());
  }, []);

  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-3xl text-white">Reviews :</h1>
      {reviews?.map((review) => {
        return <Review review={review} />;
      })}
    </div>
  );
};
