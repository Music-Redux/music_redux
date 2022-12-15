/* eslint-disable */
import React from "react";
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBTypography
} from 'mdb-react-ui-kit';

const PostCard = ({ post }) => {
  return (
    <>
      <MDBCard className='mb-5' style={{ backgroundColor: '#61303B' }}>
        <MDBCardHeader className='-mb-1 text-white'>Post number: {post["id"]}</MDBCardHeader>
        <MDBCardBody className='-mb-1'>
          <MDBTypography blockquote className='mb-0'>
            <p className="text-white">{post["description"]}{" "}</p>
            <footer className='blockquote-footer mt-2 text-sm'>
              Created at: {post["created_at"]}
            </footer>
          </MDBTypography>
        </MDBCardBody>
      </MDBCard>


      {console.log(post)}











      {/* <div className="pb-6">
      <div className="max-w-2xl px-4 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="flex items-center justify-between">
          <span className="text-sm font-light text-gray-600 dark:text-gray-400">
            {post["created_at"]}
          </span>
        </div>

        <div className="mt-2">
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            {post["description"]}{" "}
          </p>
        </div>

        <div className="flex items-center justify-between mt-4">
          <a
            href="#"
            className="text-blue-600 dark:text-blue-400 hover:underline"
            tabIndex="0"
            role="link"
          >
            Read more
          </a>
        </div>
      </div>
    </div> */}
    </>
  );
};

export default PostCard;
