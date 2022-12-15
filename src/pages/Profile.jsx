/* eslint-disable */
import React, { useState, useEffect } from "react";
import TopChartsBar from "./TopChartsBar";
// import  RelatedSongs from '../components'
import { useAuthUser } from "react-auth-kit";
import axios from "axios";
import PostCard from "../components/PostCard";

import EditProfile from "../components/EditProfile";
import ban from "../assets/ban5.jpg";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';


const Profile = () => {
  const auth = useAuthUser();
  const user = auth();
  const [isOpen, setIsOpen] = useState(false);
  const [posts, setPosts] = useState();
  const [fav, setFav] = useState();
  console.log(auth());
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

    <>
      <MDBRow className=" h-100">
        <MDBCol lg="8" xl="8" style={{ backgroundColor: '#5C212' }}>
          <MDBCard className="bg-gray-400">
            <div className="rounded-top text-white d-flex flex-row" style={{ backgroundImage: `url(${ban})`, backgroundSize: `cover`, height: '200px' }}>
              <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                <MDBCardImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeZwsegc8jKXRGwkIEUIh19LZs422aMzEcXbs9DmqHpNF9BjeArIJNdaRBFOf5UZY_z2E&usqp=CAU"
                  alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', height: '150px', zIndex: '1' }} />
                <MDBBtn

    <div className="container ">
      <div
        className="section section-padding pb-0 "
        style={{ color: "black", textAlign: "left", marginTop: "100px" }}
      >
        <section>
          <div className="flex">
            <img
              className="w-40 h-40 rounded-full"
              src={user?.avatar}
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
                  data-dismiss-target="#badge-dismiss-default"
                  aria-label="Remove"
                  outline color="light" style={{ height: '36px', overflow: 'visible' }}>
                  Edit profile  <span> &#9881; </span>
                </MDBBtn>
                <EditProfile
                  open={isOpen}
                  onClose={() => setIsOpen(false)}
                  user={user}
                />
              </div>
              <div className="ms-3" style={{ marginTop: '130px' }}>
                <MDBTypography tag="h5" className="text-3xl">{user.name}</MDBTypography>
              </div>
            </div>
            <div className="p-4 text-white bg-gray-500" style={{ boxShadow: '0px 3px 15px 1px #5C212F99' }} >
              <div className="d-flex justify-content-end text-center py-1">
                <div className="px-3">
                  <MDBCardText className="mb-1 h5">253</MDBCardText>
                  <MDBCardText className="small  mb-0">Favorites</MDBCardText>
                </div>

                <div>
                  <MDBCardText className="mb-1 h5">42</MDBCardText>
                  <MDBCardText className="small  mb-0">Posts</MDBCardText>
                </div>
              </div>
            </div>
            <MDBCardBody className="text-black p-4">
              {/* <div className="mb-5">
              <p className="lead fw-normal mb-1">About</p>
              <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                <MDBCardText className="font-italic mb-1">Web Developer</MDBCardText>
                <MDBCardText className="font-italic mb-1">Lives in New York</MDBCardText>
                <MDBCardText className="font-italic mb-0">Photographer</MDBCardText>
              </div>
            </div> */}
              <div className="d-flex justify-content-between align-items-center mb-4">
                <MDBCardText className="lead fw-normal mb-0">Recent Posts</MDBCardText>
              </div>
              <MDBRow>
                {posts?.map((item, i) => {
                  return <PostCard key={i} post={item} />;

                })}
              </MDBRow>

            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol xl="2" style={{ backgroundColor: '#5C212' }}>
          <h1 className="text-2xl font-bold text-white pb-4 lg:text-3xl">
            Favorites
          </h1>

          {fav
            ? fav.map((item) => (
              <TopChartsBar
                key={item["song_id"]}
                fav={item["song_id"]}
              />
            ))
            : null}
        </MDBCol>
      </MDBRow>


    </>
  );
};

export default Profile;
