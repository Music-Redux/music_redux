/* eslint-disable */
import React, { useState, useEffect } from "react";
import TopChartsBar from "./TopChartsBar";
// import  RelatedSongs from '../components'
import { useAuthUser } from "react-auth-kit";
import axios from "axios";
import { HiOutlineCog } from "react-icons/hi";

import PostCard from "../components/PostCard";
import TopCharts from "./TopCharts";

import { TopPlay } from "../components";
import EditProfile from "../components/EditProfile";
import { logo } from "../assets";

const Profile = () => {
  const auth = useAuthUser();
  const user = auth();
  const [isOpen, setIsOpen] = useState(false);
  const [posts, setPosts] = useState();
  const [fav, setFav] = useState();
  console.log(user);
  // retrieve data from the back end
  var config = {
    method: "get",
    url: `http://localhost:8000/api/profile/${user?.id}`,
    headers: {
      // Accept:application/json
    },
  };

  useEffect(() => {
    axios(config)
      .then(function (response) {
        // console.log(response.data);
        setPosts(response.data.posts);
        setFav(response.data.fav);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  // console.log(posts);
  return (
    <div className="container ">
      <div
        className="section section-padding pb-0 "
        style={{ color: "black", textAlign: "left", marginTop: "100px" }}
      >
        <section>
          <div className="flex">
            <img
              className="w-40 h-40 rounded-full"
              src={user.avatar}
              // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeZwsegc8jKXRGwkIEUIh19LZs422aMzEcXbs9DmqHpNF9BjeArIJNdaRBFOf5UZY_z2E&usqp=CAU"
              alt="Rounded avatar"
            />

            <div className="pt-10 pl-4">
              <h2 className="font-bold text-3xl text-white text-left">
                Welcome {user?.name}
                {/* {user['last-name'] }  */}
                {/* Manar Olimat  */}
              </h2>
              <p className="mt-1 text-sm text-gray-500">{user?.email}</p>
              <span
                id="badge-dismiss-default"
                className="inline-flex items-center py-1 px-2 mr-2 text-sm font-medium text-blue-800 bg-blue-100 rounded dark:bg-blue-200 dark:text-blue-800"
              >
                Edit
                <button
                  type="button"
                  onClick={() => setIsOpen(true)}
                  className="inline-flex items-center p-0.5 ml-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-300 dark:hover:text-blue-900"
                  data-dismiss-target="#badge-dismiss-default"
                  aria-label="Remove"
                >
                  <HiOutlineCog />
                </button>
              </span>

              <EditProfile
                open={isOpen}
                onClose={() => setIsOpen(false)}
                user={user}
              />
            </div>
          </div>

          <div className="relative mx-auto  max-w-screen-xl px-4 py-8">
            <div className="grid gap-4 lg:grid-cols-4 lg:items-start">
              <div className="lg:col-span-3 ">
                <h1 className="text-2xl font-bold text-white pb-4 lg:text-3xl">
                  Your Posts
                </h1>
                {posts?.map((item, i) => {
                  return <PostCard key={i} post={item} />;
                  // console.log(item['description']);
                  // <PostCard post={item} />
                })}
              </div>

              {/* <div className="xl:sticky relative top-0 h-fit">
            <TopPlay />
          </div> */}
              {/* side fav */}
              <div className="lg:sticky lg:top-0">
                <h1 className="text-2xl font-bold text-white pb-4 lg:text-3xl">
                  Favorites
                </h1>
                {/* <RelatedSongs /> */}
                {/* {console.log(fav[0].song_id)} */}

                {fav
                  ? fav.map((item) => (
                      <TopChartsBar
                        key={item["song_id"]}
                        fav={item["song_id"]}
                      />
                    ))
                  : null}

                {/* <TopPlay /> */}
                {/* <TopCharts /> */}
                {/* <section>
            <a
  className="relative block rounded-xl border border-gray-100 p-8 shadow-xl"
  href=""
>


  <div className="mt-4 text-gray-500 sm:pr-8">
    
    <h3 className="mt-4 text-xl font-bold text-gray-900">Science of Chemistry</h3>

    <p className="mt-2 hidden text-sm sm:block">
      You can manage phone, email and chat conversations all from a single
      mailbox.
    </p>
  </div>
</a>

            </section>

            <section>
            <a
  className="relative block rounded-xl border border-gray-100 p-8 shadow-xl"
  href=""
>


  <div className="mt-4 text-gray-500 sm:pr-8">
    
    <h3 className="mt-4 text-xl font-bold text-gray-900">Science of Chemistry</h3>

    <p className="mt-2 hidden text-sm sm:block">
      You can manage phone, email and chat conversations all from a single
      mailbox.
    </p>
  </div>
</a>

            </section>

            <section>
            <a
  className="relative block rounded-xl border border-gray-100 p-8 shadow-xl"
  href=""
>


  <div className="mt-4 text-gray-500 sm:pr-8">
    
    <h3 className="mt-4 text-xl font-bold text-gray-900">Science of Chemistry</h3>

    <p className="mt-2 hidden text-sm sm:block">
      You can manage phone, email and chat conversations all from a single
      mailbox.
    </p>
  </div>
</a>

            </section>

            <section>
            <a
  className="relative block rounded-xl border border-gray-100 p-8 shadow-xl"
  href=""
>


  <div className="mt-4 text-gray-500 sm:pr-8">
    
    <h3 className="mt-4 text-xl font-bold text-gray-900">Science of Chemistry</h3>

    <p className="mt-2 hidden text-sm sm:block">
      You can manage phone, email and chat conversations all from a single
      mailbox.
    </p>
  </div>
</a>

            </section> */}
              </div>
              {/* //////////////////////////////////////////////// */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
