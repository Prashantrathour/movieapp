// MoviePoster.js
import React from 'react';
import {Link, useNavigate} from "react-router-dom"
function MoviePoster({
  title,
  poster_path,
  release_date,
  vote_average,
  vote_count,
  overview,id,
  btnname,remove,addtofav
}) {
  const imageUrl = `https://image.tmdb.org/t/p/w300${poster_path}`;
const navigate=useNavigate()
  return (
    <div  className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-8 rounded-md shadow-md text-white">
      <div className="flex flex-col md:flex-row space-x-0 md:space-x-4">
        <div className="flex-shrink-0 mb-4 md:mb-0 md:w-48 cursor-pointer">
          <img
          onClick={()=>navigate(`details/${id}`,{state:{title,
            poster_path,
            release_date,
            vote_average,
            vote_count,
            overview,id}})}
            loading="lazy"
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <div className="flex-grow flex items-center justify-between md:pl-4">
          <div className="flex-1">
            <h2 className="text-3xl font-semibold mb-2">{title}</h2>
            <p className="text-gray-200">{release_date}</p>
            <p className="text-gray-200">Vote Average: {vote_average}</p>
            <p className="text-gray-200">Vote Count: {vote_count}</p>
            <p className="text-gray-200">{overview}</p>
          </div>
          <div className="flex items-end place-items-end flex-col">
          <button
        className="bg-blue-500 text-white px-4 py-2 w-40 rounded-md mt-2"
        onClick={()=>{
            
            return !remove?addtofav({
                title,
                poster_path,
                release_date,
                vote_average,
                vote_count,
                overview,id
               
              }):remove(id)
        }
        }
      >
        {btnname}
      </button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 w-40" onClick={()=>navigate(`details/${id}`,{state:{title,
        poster_path,
        release_date,
        vote_average,
        vote_count,
        overview,id}})} >All Details</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoviePoster;
