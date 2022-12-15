/* eslint-disable */

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CommentForm } from "./CommentForm";
export const Post = ({ post, user }) => {
    const [isOpen, setOpen] = useState(false);

    const handleDropDown = () => {
        setOpen(!isOpen);
    };

    return (
    <>
      <div className="w-3/4 bg-[#1e1e1e] mt-5 border-2 border-rose-500 p-6 rounded-lg">
        <div>
          {/* <img
            //u can read the image like this
            // src={`data:image/jpeg;base64,${user.avatar}`}
            src={user?.avatar}
            width="10%"
            alt=""
            className="rounded-lg"
          />
          <p className="text-white mt-2">
            {" "}
            {user ? user.name : "test"}
          </p>
        </div>

                    <section class="bg-white dark:bg-gray-900 py-8 lg:py-16">
                        <article class="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900">
                            <footer class="flex justify-between items-center mb-2">
                                <div class="flex items-center">
                                    <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                                        <img
                                            class="mr-2 w-6 h-6 rounded-full"
                                            src={user?.avatar}
                                            alt="Michael Gough"
                                        />{" "}
                                        {user ? user.name : "test"}
                                    </p>
                                    <p class="text-sm text-gray-600 dark:text-gray-400">
                                        <time
                                            pubdate
                                            datetime="2022-02-08"
                                            title="February 8th, 2022"
                                        >
                                            Feb. 8, 2022
                                        </time>
                                    </p>
                                </div>
                                <div className="dropdown">
                                    <button
                                        id="dropdownComment1Button"
                                        data-dropdown-toggle="dropdownComment1"
                                        onClick={handleDropDown}
                                        class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                        type="button"
                                    >
                                        <svg
                                            class="w-5 h-5"
                                            aria-hidden="true"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path>
                                        </svg>
                                        <span class="sr-only">Comment settings</span>
                                    </button>

                                    <article class="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900">
                                        <footer class="flex justify-between items-center mb-2">
                                            <div class="flex items-center">
                                                <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white"><img
                                                    class="mr-2 w-6 h-6 rounded-full"
                                                    src={user.avatar}
                                                    // "https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                                                    alt="Michael Gough" />{" "}
                                                    {user ? user.name : "test"}</p>
                                                <p class="text-sm text-gray-600 dark:text-gray-400"><time pubdate datetime="2022-02-08"
                                                    title="February 8th, 2022">Feb. 8, 2022</time></p>
                                            </div>
                                            <div className="dropdown">
                                                <button id="dropdownComment1Button" data-dropdown-toggle="dropdownComment1"
                                                    onClick={handleDropDown}
                                                    class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                                                    type="button">
                                                    <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
                                                        </path>
                                                    </svg>
                                                    <span class="sr-only">Comment settings</span>
                                                </button>

                                                <div
                                                    id="dropdown"
                                                    className={` z-9999 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600 ${isOpen ? "block" : "hidden"
                                                        }`}
                                                >
                                                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200"
                                                        aria-labelledby="dropdownMenuIconHorizontalButton">
                                                        <li>
                                                            <a href="#"
                                                                class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                                                        </li>
                                                        <li>
                                                            <a href="#"
                                                                class="block py-2 px-4 hover:bg-gray-100 text-red-500 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                                                        </li>

                                                    </ul>
                                                </div>
                                            </div>

                                        </footer>
                                        <p class="text-gray-500 dark:text-gray-400">
                                            {post?.description}
                                        </p>
                                        <div class="flex items-center mt-4 space-x-4">
                                            <button
                                                type="button"
                                                class="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400"
                                            >
                                                <svg
                                                    aria-hidden="true"
                                                    class="mr-1 w-4 h-4"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        stroke-width="2"
                                                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                                    ></path>
                                                </svg>
                                                Reply
                                            </button>
                                        </div>
                                    </article>
                                    </div>
                                </section>
                                <CommentForm postId={post?.id} />
                                {/* </div> */}
                                {/* ///////////////////////////////////////// */}
                            </div>
                        </div>
                    </>
                    );
};
