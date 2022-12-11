import React from 'react'
import  TopChartsBar  from './TopChartsBar'
// import  RelatedSongs from '../components'
import PostCard from '../components/PostCard'
import TopCharts from './TopCharts'
import {
  HiOutlineCog
} from "react-icons/hi";
import { TopPlay } from '../components';

const Profile = () => {
  return (
    <div className="container ">
    <div
      className="section section-padding pb-0 "
      style={{ color: "black", textAlign: "left", marginTop: "100px" }}
    >
       <section>
      <div className="flex">
      <img 
       class="w-40 h-40 rounded-full" 
       src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeZwsegc8jKXRGwkIEUIh19LZs422aMzEcXbs9DmqHpNF9BjeArIJNdaRBFOf5UZY_z2E&usqp=CAU" 
       alt="Rounded avatar"/>

         <div className='pt-10 pl-4'>
         <h2 className="font-bold text-3xl text-white text-left">
          Welcome Manar Olimat 
        </h2>
        <p class="mt-1 text-sm text-gray-500">manar@gmail.com</p>
        <span id="badge-dismiss-default" class="inline-flex items-center py-1 px-2 mr-2 text-sm font-medium text-blue-800 bg-blue-100 rounded dark:bg-blue-200 dark:text-blue-800">
  Edit
  <button type="button" class="inline-flex items-center p-0.5 ml-2 text-sm text-blue-400 bg-transparent rounded-sm hover:bg-blue-200 hover:text-blue-900 dark:hover:bg-blue-300 dark:hover:text-blue-900" data-dismiss-target="#badge-dismiss-default" aria-label="Remove">
      {/* <svg aria-hidden="true" class="w-3.5 h-3.5" ariaHidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg> */}
     <HiOutlineCog/>
      <span class="sr-only">Remove badge</span>
  </button>
</span>
         </div>
      </div>

    <div class="relative mx-auto  max-w-screen-xl px-4 py-8">
     
  
      <div class="grid gap-4 lg:grid-cols-4 lg:items-start">
        <div class="lg:col-span-3 ">
        <h1 class="text-2xl font-bold text-white pb-4 lg:text-3xl">Your Posts</h1>

        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
        </div>

        <div className="xl:sticky relative top-0 h-fit">
            <TopPlay />
          </div>
  {/* side fav */}
        <div class="lg:sticky lg:top-0">
        <h1 class="text-2xl font-bold text-white pb-4 lg:text-3xl">Favorites</h1>
        {/* <RelatedSongs /> */}
        {/* <TopChartsBar/> */}
        {/* <TopPlay /> */}
        {/* <TopCharts /> */}
        {/* <section>
            <a
  class="relative block rounded-xl border border-gray-100 p-8 shadow-xl"
  href=""
>


  <div class="mt-4 text-gray-500 sm:pr-8">
    
    <h3 class="mt-4 text-xl font-bold text-gray-900">Science of Chemistry</h3>

    <p class="mt-2 hidden text-sm sm:block">
      You can manage phone, email and chat conversations all from a single
      mailbox.
    </p>
  </div>
</a>

            </section>

            <section>
            <a
  class="relative block rounded-xl border border-gray-100 p-8 shadow-xl"
  href=""
>


  <div class="mt-4 text-gray-500 sm:pr-8">
    
    <h3 class="mt-4 text-xl font-bold text-gray-900">Science of Chemistry</h3>

    <p class="mt-2 hidden text-sm sm:block">
      You can manage phone, email and chat conversations all from a single
      mailbox.
    </p>
  </div>
</a>

            </section>

            <section>
            <a
  class="relative block rounded-xl border border-gray-100 p-8 shadow-xl"
  href=""
>


  <div class="mt-4 text-gray-500 sm:pr-8">
    
    <h3 class="mt-4 text-xl font-bold text-gray-900">Science of Chemistry</h3>

    <p class="mt-2 hidden text-sm sm:block">
      You can manage phone, email and chat conversations all from a single
      mailbox.
    </p>
  </div>
</a>

            </section>

            <section>
            <a
  class="relative block rounded-xl border border-gray-100 p-8 shadow-xl"
  href=""
>


  <div class="mt-4 text-gray-500 sm:pr-8">
    
    <h3 class="mt-4 text-xl font-bold text-gray-900">Science of Chemistry</h3>

    <p class="mt-2 hidden text-sm sm:block">
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
  )
}

export default Profile
