// Home.js
import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";

import { getMoviePoster, getallmovies, searchmovie } from "../services/api";
import { Link } from "react-router-dom";
import MoviePoster from "./MoviePoster";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer,toast} from "react-toastify"
import MovieFilter from "./MovieFilter";
import {useNavigate} from "react-router-dom"
function Home() {
  const [movies, setMovies] = useState([]);
  const [totalpages, settotalpages] = useState(0);
  const [page, setpage] = useState(1);
  const [loading, setloading] = useState(false);
  const [moviespost, setMoviespost] = useState({});
  const [query, setquery] = useState("");
const navigator=useNavigate()
  // Assume you have a function to fetch movies from the API, e.g., fetchMovies()
  const fetchMovies = async (query) => {
    try {
      setloading(true);
      let res = await searchmovie(query);

      setMovies(res?.results);
      settotalpages(res.total_pages);
      setloading(false);
    } catch (error) {
      console.log(error);
      setloading(false);
      alert("please refresh");
    }
  };
const remove=(id)=>{

}


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
        movie.fav="true";
      const updatedFavorites = [...existingFavorites, movie];

      // Update local storage with the new list of favorites
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
      toast("item added successfully")
    } else {
        toast("Already added to favorites");
    }
  };
  useEffect(() => {
   
    (async () => {
      try {
        setloading(true);
        let res = await getallmovies(page);
        console.log(res.results);
        setMovies(res?.results);
        settotalpages(res.total_pages);
        setloading(false);
      } catch (error) {
        console.log(error);
        setloading(false);
      }
    })();

  }, [page]);
 const getsearchdata=(data)=>{
        setMovies(data)
 }
 if(!JSON.parse(localStorage.getItem("user"))) return navigator("/login")
  return (
    <div className="container mx-auto mt-4 w-full h-full">
        <ToastContainer/>
      <div className="flex justify-between px-10">
        <h1 className="text-3xl font-semibold mb-4">Movie Suggestion App</h1>
        <Link to={"/favorites"}>
          <strong>Favorites</strong>
        </Link>
      </div>
      <MovieFilter getsearchdata={getsearchdata}/>
      
      <SearchBar fetchMovies={fetchMovies} loading={loading} />
     {movies&&!movies.length==0? <div>
   

{!loading? (
        <div className="flex flex-col gap-4">
          {movies && movies?.map((movie) => <MoviePoster {...movie} addtofav={addtofav}  btnname={"Add to Favorite"}/>)}
        </div>
      ) : (
        <div>
            <p>Loading....</p>
        </div>
      )}
      <div className="flex w-full justify-center items-center gap-4">
        <button
          disabled={page == 1}
          className="p-3 bg-orange-300 font-semibold text-sm px-4 rounded-lg"
          onClick={() => setpage(page - 1)}
        >
          prev
        </button>
        <strong>{page}</strong>
        <button
          disabled={page == totalpages}
          className="p-3 bg-orange-300 font-semibold text-sm px-4 rounded-lg"
          onClick={() => setpage(page + 1)}
        >
          next
        </button>
      </div>

      </div>:<div className="flex justify-center items-center h-[500px]">
          <iframe
            style={{ border: "none", width: "50vw", height: "70vh" }}
            src="https://embed.lottiefiles.com/animation/109247"
          ></iframe>
        </div>}
    </div>
  );
}

export default Home;
