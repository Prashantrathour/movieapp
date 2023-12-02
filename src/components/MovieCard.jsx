// MovieCard.js
import React from 'react';
import { Link } from 'react-router-dom';
import {ToastContainer,toast} from "react-toastify"
function MovieCard({ movie,toastfun,btnname,remove,addtofav }) {
    

  return (
    <div className="bg-white p-9 shadow-md rounded-md w-full h-[650px]">
       
      <div className="h-[450px] overflow-hidden">
        <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} className="mb-2 rounded-md object-cover w-full h-full" />
      </div>
      <h2 className="text-lg font-semibold mb-1">{movie.title}</h2>
      <p className="text-gray-600">{movie.release_date}</p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
        onClick={()=>{
            
            return !remove?addtofav(movie):remove(movie.id)
        }
        }
      >
        {btnname}
      </button>
      <Link to={`/details/${movie.id}`} className="text-blue-500 hover:underline block mt-2">
        View Details
      </Link>
    </div>
  );
}

export default MovieCard;
