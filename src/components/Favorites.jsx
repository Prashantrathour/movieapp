// Favorites.js
import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';

function Favorites() {
  // State to store the list of favorite movies
  const [favorites, setFavorites] = useState([]);

  // Function to get favorites from local storage
  const getFavoritesFromLocalStorage = () => {
    const storedFavorites = localStorage.getItem('favorites');
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  };

  useEffect(() => {
    // Load favorites from local storage on component mount
    const storedFavorites = getFavoritesFromLocalStorage();
    setFavorites(storedFavorites);
  }, []);
const remove=(id)=>{
console.log(id)
let res=favorites.filter((fav)=>fav.id!=id);
localStorage.setItem('favorites', JSON.stringify(res));
setFavorites(res)
}
  return (
    <div className="container mx-auto my-8">
      <div className='flex justify-between px-10'>
      <h1 className="text-3xl font-semibold mb-4">Favorite Movies</h1>
<Link to={"/"}><strong>Home</strong></Link>
        </div>
      {favorites.length === 0 ? (
        <p>No favorite movies yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} btnname={"Remove From btn"} remove={remove}/>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
