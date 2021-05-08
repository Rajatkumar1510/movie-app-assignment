import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./components/Search";
import SearchResults from "./components/SearchResults";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import css from"./App.css";
const App = () => {
  // const search_api =
  //   "";

  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState("");
  const handleOnsubmit = (e) => {
    e.preventDefault();
    setSearchText('')
  };
  // const handleOnChange = (e) => {
  //   setSearchText(e.target.value);
  // };

  // useEffect(async () => {
  //   const { data } = await axios(search_api);

  //   setMovies(data.results);
  // }, []);

  const handleOnChange = (e) => {
    e.preventDefault();

    setSearchText(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=4bc98a6f04569f0ac160f8a6c4f46ebd&query=${searchText}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setMovies(data.results);
        } else {
          setMovies([]);
        }
      });
  };
  console.log(movies);
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/" exact>
            <Search
              searchText={searchText}
              setSearchText={setSearchText}
              handleOnChange={handleOnChange}
              handleOnsubmit={handleOnsubmit}
            />
          </Route>
          <Route path="/results">
            <SearchResults movies={movies} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
