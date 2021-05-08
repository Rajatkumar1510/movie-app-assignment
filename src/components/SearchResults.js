import React from "react";
import { Link } from "react-router-dom";
import Movies from "./Movies";
const SearchResults = ({movies}) => {
  return (
    <div>
      <div className="tv-layout">
        <div className="container-fluid">
          <div className="row">
            <div className="span12">
              <div className="nav-row">
                <Link to="/">
                  <div className="round-box back-arrow">
                    <img src="assets/images/icons/arrow-back.png" alt="" />
                  </div>
                </Link>
              </div>

              <div className="tv-data-row">
                <h1>Search Results</h1>

                <div className="col-12">
                  <div className="search-results">
                    {/* SEARCH RESULTS GO HERE */}
                    <Movies movies={movies}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cd-panel cd-panel--from-right js-cd-panel-main">
          <div className="cd-panel__container">
            <a href="#" className="cd-panel__close js-cd-close">
              X
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
