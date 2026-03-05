import axios from "axios";
import React, { useEffect, useState } from "react";

const Search = () => {
	const [ movieResults, setMovieResults ] = useState(); 

	async function searchMovies() {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/search/movie?query=harry%potter&language=en-US&page=1&sort_by=popularity.desc",
      params: {
        language: "en-US",
        page: "1",
        region: "840",
      },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDNjYjY2OGIyZjU0ZDNkNTAzNWRkYzYyNGFiZjE4OCIsIm5iZiI6MTcxMjY5MDcxMC42NDMwMDAxLCJzdWIiOiI2NjE1OTYxNjNkNzQ1NDAxODUwOWI1YTYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.tTZlQPdTUI3RiVDr6hkSsp0LFLw_YB5wR65t83Fmv1k",
      },
    };
    const { data } = await axios.request(options);
		setMovieResults(data.results)
  }

	function searchMovieFunc() {
		const searchField = document.querySelector('#movie__search');
		console.log(searchField.value);
		
	}


	useEffect(() => {
		searchMovies() 
	}, [])
  return (
    <div>

      <form>
        <input id="movie__search" type="text" />
        <button onClick={() => searchMovieFunc()}>Search</button>
      </form>

      <div>
        <button className="btn">Action</button>
        <button className="btn">Comedy</button>
        <button className="btn">Romance</button>
        <button className="btn">Thriller</button>
        <button className="btn">Thriller</button>
      </div>

			<div className="movie__results"></div>
    </div>
  );
};

export default Search;
