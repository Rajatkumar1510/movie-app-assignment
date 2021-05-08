import React, { useState } from "react";
import { Link } from "react-router-dom";
const Search = ({
  searchText,
  setSearchText,
  handleOnChange,
  handleOnsubmit,
}) => {
  return (
    <div>
      <div className="tv-layout">
        <div className="container-fluid">
          <div className="row">
            <div className="span12">
              <div className="tv-data-row">
                <div className="col-12">
                  <div className="seach-box">
                    <div className="input-group">
                      <span className="input-search">
                        <img
                          src="../assets/images/icons/search-icon.png"
                          alt=""
                        />
                      </span>
                      <form onSubmit={handleOnsubmit}>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search"
                          aria-label="Username"
                          aria-describedby="basic-addon1"
                          onChange={handleOnChange}
                          value={searchText}
                        />
                      </form>
                    </div>
                  </div>

                  <div className="search-block-iteams">
                    <div className="recent-search">
                      <h1>Recent Search Iteams</h1>

                      <div className="seach-item">
                        <span>
                          <img
                            src="../assets/images/icons/reload-icon.png"
                            alt=""
                          />
                          Action Movies in Telugu 2020
                        </span>
                      </div>
                    </div>

                    {/* Keyboard */}

                    <div className="key-board-box" id="show-alpabets">
                      <div className="key-board-row">
                        <span className="key">
                          <button>A</button>
                        </span>
                        <span className="key">
                          <button>B</button>
                        </span>
                        <span className="key">
                          <button>C</button>
                        </span>
                        <span className="key">
                          <button>D</button>
                        </span>
                        <span className="key">
                          <button>E</button>
                        </span>
                        <span className="key">
                          <button>F</button>
                        </span>
                        <span className="key">
                          <button>G</button>
                        </span>
                        <span className="arrow-change">
                          <button>
                            <img
                              src="../assets/images/icons/clear-icon.png"
                              alt=""
                            />
                          </button>
                        </span>
                      </div>

                      <div className="key-board-row">
                        <span className="key">
                          <button>H</button>
                        </span>
                        <span className="key">
                          <button>I</button>
                        </span>
                        <span className="key">
                          <button>J</button>
                        </span>
                        <span className="key">
                          <button>K</button>
                        </span>
                        <span className="key">
                          <button>L</button>
                        </span>
                        <span className="key">
                          <button>M</button>
                        </span>
                        <span className="key">
                          <button>N</button>
                        </span>
                        <span className="arrow-change show-numbers">
                          <button>123</button>
                        </span>
                      </div>

                      <div className="key-board-row">
                        <span className="key">
                          <button>O</button>
                        </span>
                        <span className="key">
                          <button>P</button>
                        </span>
                        <span className="key">
                          <button>Q</button>
                        </span>
                        <span className="key">
                          <button>R</button>
                        </span>
                        <span className="key">
                          <button>S</button>
                        </span>
                        <span className="key">
                          <button>T</button>
                        </span>
                        <span className="key">
                          <button>U</button>
                        </span>
                      </div>

                      <div className="key-board-row">
                        <span className="key">
                          <button>V</button>
                        </span>
                        <span className="key">
                          <button>W</button>
                        </span>
                        <span className="key">
                          <button>X</button>
                        </span>
                        <span className="key">
                          <button>Y</button>
                        </span>
                        <span className="key">
                          <button>Z</button>
                        </span>
                        <span className="key">
                          <button>-</button>
                        </span>
                        <span className="key">
                          <button>'</button>
                        </span>
                      </div>

                      <div className="key-board-row">
                        <span className="space-clear">
                          <button>SPACE</button>
                        </span>
                        <span className="space-clear">
                          <button>CLEAR</button>
                        </span>
                        <span className="search-btn">
                          <button
                            onSubmit={() => {
                              setSearchText(searchText);
                              handleOnsubmit();
                            }}
                          >
                            <Link to="/results">SEARCH</Link>
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
