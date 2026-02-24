import { useEffect } from "react";
import axios from "axios";
import Nav from "./components/Nav.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";

function App() {
  
  // async function fetchDb() {
  //   const options = {
  //     method: "GET",
  //     url: "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&region=840'",
  //     params: {
  //       language: "en-US",
  //       page: "1",
  //       region: "840",
  //     },
  //     headers: {
  //       accept: "application/json",
  //       Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDNjYjY2OGIyZjU0ZDNkNTAzNWRkYzYyNGFiZjE4OCIsIm5iZiI6MTcxMjY5MDcxMC42NDMwMDAxLCJzdWIiOiI2NjE1OTYxNjNkNzQ1NDAxODUwOWI1YTYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.tTZlQPdTUI3RiVDr6hkSsp0LFLw_YB5wR65t83Fmv1k",
  //     },
  //   };

  //   const {data} = await axios.request(options)
  //   console.log(data.results)

  // }

  // useEffect(() => {
  //   fetchDb();
  // }, [])

  return (
    <div className="App container">
      <Router>
        <Nav /> 
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
