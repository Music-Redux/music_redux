/* eslint-disable */
import {useState} from "react";
import axios from "axios";
export const Comment = ({ comment, users }) => {
  const user = users.find((user) => user.id === comment.user_id);
  const [isOpend, setOpend] = useState(false);

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", gap: "4px" }}>
        <img
          //u can read the image like this
          // src={`data:image/jpeg;base64,${user.avatar}`}
          src={user?.avatar}
          width="8%"
          alt=""
          className="rounded-lg m-2"
        />
        <div className="bg-[#353535] outline p-2 m-4 ml-0 w-6/8 rounded-lg">
          <p className="text-white text-sm">
            {user ? user["first-name"] + "  " + user["last-name"] : "test"}
          </p>
          <span className="text-white text-sm ">{comment.comment}</span>
        </div>
      </div>
    </>
  );
};
