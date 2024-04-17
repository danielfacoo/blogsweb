/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

 


const Card = ({blog}) => {
   // console.log(blog)

   const {id, title , image ,category , author , authorPic, published_date , reading_time, content , tags  } = blog;
  return (
    <Link to={`/blogs/${id}`} className="block rounded w-full lg:flex mb-10"
      href="#"
    >
        {/* image */}
      <div 
        className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75"
        style={{ backgroundImage: `url(${image})` }} 
        title="deit is very important"
      ></div>
      <div className="bg-white rounded px-4 flex flex-col justify-between leading-normal">
        <div>
            {/* title */}
            <div className="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
            {title}
          </div>
          
          {/* content */}
          <p className="text-gray-700 text-base">
            {content}
          </p>
          {/* Tags */}
          <p className="text-gray-700 text-sm py-1 italic">
            Tags: {tags.map((tag,index) => <span key={index} className="mx-1 underline ">{tag}</span>) }
          </p>
        </div>
        <div className="flex mt-3">
            {/* profile photo */}
          <img src={authorPic}
            className="h-10 w-10 rounded-full mr-2 object-cover" alt="Author" />
          <div>
            {/* username */}
            <p className="font-semibold text-gray-700 text-sm capitalize"> {author} </p>
            {/* date */}
            <p className="text-gray-600 text-xs"> {published_date} </p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card