import PropTypes from "prop-types";
import { AiFillEye } from "react-icons/ai";
import {  FcShare } from "react-icons/fc";
import { BsBookmark } from "react-icons/bs";
import { Link } from "react-router-dom";

const Midil = ({ singleNew1 }) => {
  
  const { _id, title , details, image_url, author,total_view, rating} = singleNew1;

  return (
    <div>
      <div className="w-full p-4  bg-white border-b-2 shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex justify-between  items-center mb-4 ">
          <div className="flex items-center">
            <img
              className="inline-block flex-shrink-0 h-[3.875rem] w-[3.875rem] rounded-full"
              src={author.img}
              alt="Image Description"
            />
            <div className="ml-3">
              <h3 className="font-semibold text-gray-800 dark:text-white">
               {author.name}
              </h3>
              <p className="text-sm font-medium text-gray-400">{author.published_date}</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-2">
           <BsBookmark></BsBookmark>
           <Link to="https://www.facebook.com/" target="_blank"><FcShare></FcShare></Link>
          </div>
        </div>
        <h2 className="mb-4">{title}</h2>
        <a href="#">
          <img
            className="rounded-t-lg"
            src={image_url}
            alt=" image"
          />
        </a>
        <div className=" mt-5">
          
              {
                details.length >100 ? <p>{details.slice(0,200)} <Link to={`/singleNew1/${_id}`} className="font-semibold text-lime-400">read More...</Link> </p>
                : <p>{details}</p>
              }
            
          <div className="flex items-center justify-between mt-5">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
            <div className="flex items-center mt-2.5 mb-5">
            <svg
              className="w-4 h-4 text-yellow-300 mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300 mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300 mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300 mr-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
              {rating.number}
            </span>
          </div>
            </span>
            <div className="flex justify-center items-center gap-3 ">
            <AiFillEye></AiFillEye> <span>{total_view}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Midil;
Midil.propTypes = {
  singleNew1: PropTypes.object,
};
