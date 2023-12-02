import React, { useState, useEffect } from 'react';

const MovieFilter = ({getsearchdata}) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState(''); // Default sorting by vote average


    const fetchData = async (sortBy) => {
      try {
        const apiKey = "f2193c6e6fa7b3c6a83188ac4746dcfd"
        const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=${sortBy}`;

        const response = await fetch(apiUrl);
        const data = await response.json();
            console.log(data)
        getsearchdata(data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };


 const sort=(e)=>{
    fetchData(e)
    setSortBy(e)
 }

  return (
    <div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Sort By:</label>
        <select
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          value={sortBy}
          onChange={(e) => sort(e.target.value)}
        >
          <option value="">----Select Option----</option>
          <option value="vote_average.desc">Vote Average Decending</option>
          <option value="vote_average.asc">Vote Average Ascending</option>
          <option value="release_date.desc">Release Date Latest</option>
          <option value="release_date.asc">Release Date Old</option>
        </select>
      </div>
    </div>
  );
};

export default MovieFilter;
