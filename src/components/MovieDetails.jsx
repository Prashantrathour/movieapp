// MovieDetails.js
import React, { useEffect, useState } from 'react';
import { NavLink, useParams,useLocation } from 'react-router-dom';
import { getMovieDetails } from '../services/api'; // Implement this service
import {toast,ToastContainer} from "react-toastify"
function MovieDetails() {
  const { id } = useParams();
  const [details, setDetails] = useState(null);


  useEffect(() => {
    const fetchMovieDetails = async () => {
      const movieDetails = await getMovieDetails(id);
      console.log(movieDetails)
      setDetails(movieDetails);
    };

    fetchMovieDetails();
  }, [id]);

  const handleAddToFavorites = () => {
    // Implement logic to add the movie to favorites
    // You may use local storage or any state management solution
    // Example: addToFavorites(details);
  };

  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto">
         <div className="flex justify-between px-10">
        <h1 className="text-3xl font-semibold mb-4">Movie Details</h1>
        <div className='flex gap-5 p-2'>
        <NavLink to={"/"}>
          <strong>Home</strong>
        </NavLink>
        <NavLink to={"/favorites"}>
          <strong>Favorites</strong>
        </NavLink>

        </div>
      </div>
     <Card {...details}/>
    </div>
  );
}

export default MovieDetails;




const Card = ({
  title,
  poster_path,
  release_date,
  genres,
  overview,
  homepage,
  production_companies,
  production_countries,
  runtime,
  spoken_languages,
  status,
  tagline,
  vote_average,
  vote_count,
}) => {
  const imageUrl = `https://image.tmdb.org/t/p/original${poster_path}`;
const location=useLocation()
const addtofav=(movie)=>{
	handleAddToFavorites(movie)
 }
 const handleAddToFavorites = (movie) => {
    // Retrieve existing favorites from local storage
    const existingFavorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // Check if the movie is already in favorites
    const isAlreadyInFavorites = existingFavorites.some((fav) => fav.id=== movie.id);

    // If not already in favorites, add the movie to the list
    if (!isAlreadyInFavorites) {
        
      const updatedFavorites = [...existingFavorites, movie];

      // Update local storage with the new list of favorites
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      toast("item added successfully")
    } else {
        toast("Already added to favorites");
    }
  };

  return (
    <div className="container mx-auto">
        <ToastContainer/>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 mb-4 md:mr-4">
          <img src={imageUrl} alt={title} className="w-full h-[530px] object-cover overflow-hidden" />
        </div>
        <div className="md:w-2/3">
          <h1 className="text-4xl font-bold mb-2">{title}</h1>
          <p className="text-gray-600">{tagline}</p>
          <p className="text-gray-800 mt-2">{overview}</p>

          <div className="flex flex-wrap mt-4">
            <p className="mr-4">
              <strong>Release Date:</strong> {release_date}
            </p>
            <p className="mr-4">
              <strong>Genres:</strong> {genres.map((genre) => genre.name).join(', ')}
            </p>
            <p className="mr-4">
              <strong>Runtime:</strong> {runtime} minutes
            </p>
            <p className="mr-4">
              <strong>Vote Average:</strong> {vote_average}
            </p>
            <p className="mr-4">
              <strong>Vote Count:</strong> {vote_count}
            </p>
            <p className="mr-4">
              <strong>Status:</strong> {status}
            </p>
            <p className="mr-4">
              <strong>Language:</strong> {spoken_languages.length>0?spoken_languages[0].english_name:"English"}
            </p>
            <p className="mr-4">
              <strong>Production Countries:</strong>{' '}
              {production_countries.map((country) => country.name).join(', ')}
            </p>
          </div>

          <div className="mt-4">
            <p className="text-gray-800">
              <strong>Production Companies:</strong>{' '}
              {production_companies.map((company) => (
                <span key={company.id} className="mr-2">
                  {company.name}
                </span>
              ))}
            </p> 
          </div>

          {homepage && (
            <div className="mt-4">
              <p className="text-gray-800">
                <strong>Homepage:</strong>{' '}
                <a href={homepage} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                  {homepage}
                </a>
              </p>
            </div>
          )}
        </div>
      </div>
        <div className='border w-full'>

        <button onClick={()=>addtofav({movie:location.state})} className='w-full p-3 rounded bg-pink-700 text-white font-semibold'>Add to fav</button>
        </div>
    </div>
  );
};



