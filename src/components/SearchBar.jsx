// SearchBar.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { searchMovies } from '../services/api'; // Implement this service
import {ToastContainer,toast} from "react-toastify"
function SearchBar({fetchMovies,loading}) {

  const [query, setQuery] = useState('');
    

 const navigate = useNavigate();
  const handleSearch =  () => {

fetchMovies(query);
  
 
    }
  
  

  return (
    <div className="flex items-center mb-4">
        <ToastContainer/>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 mr-2"
        placeholder="Search for movies..."
      />
      <button className="bg-blue-500 text-white px-6 py-2 rounded-lg" onClick={handleSearch}>
        {loading?"Loading":"Search"}
      </button>
    </div>
  );
}

export default SearchBar;
