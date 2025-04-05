import React, { useEffect, useState } from "react";
import TvSeries from "../../assets/tv-series-icon-27.jpg";
import MovieIcon from "../../assets/movieIcon.png";
import Bookmark from "../../assets/bookmark.png";
import Movies from "../../assets/movies.jpeg";
import Series from "../../assets/download.jpeg";
import dropdown from "../../assets/dropdown-flat-color-outline-icon-free-png.webp";
import "./SideBar.css";
import { Link, useLocation } from "react-router-dom";
import Dropdown from "./Dropdown";

const SideBar = () => {
  const [selected, setSelected] = useState("/");
  const location = useLocation();
  const [toggleDropdown, setToggleDropdown] = useState(true);

  useEffect(() => {
    console.log(location.pathname);
    if (location.pathname === "/") {
      setSelected("/");
    } else if (location.pathname === "/movies") {
      setSelected("/movies");
    } else if (location.pathname === "/tvseries") {
      setSelected("/tvseries");
    } else if (location.pathname === "/bookmark") {
      setSelected("/bookmark");
    }
  }, [location]);

  return (
    <div style={{ zIndex: "7" }} className="sidebar position-sticky top-0 d-flex flex-xl-column justify-content-between justify-content-xl-start gap-xl-5 px-4 py-4 custom-bg-light-grey mx-md-4">
      <Link to="/">
        <img
          style={{ height: "32px", width: "32px" }}
          src={MovieIcon}
          alt="MoviesIcon"
          className="fs-1 custom-text-red"
        />
      </Link>
      <div className="d-flex flex-xl-column gap-3 gap-md-4">
        <Link to="/">
          <img
            src={TvSeries}
            alt=""
            style={{ height: "32px", width: "32px" }}
            className={`fs-1 ${
              selected === "/" ? "text-white" : "text-secondary"
            }`}
          />
        </Link>
        <Link to="/movies">
          <img
            style={{ height: "32px", width: "32px" }}
            src={Movies}
            alt="MoviesIcon"
            className={`fs-1 ${
              selected === "/movies" ? "text-white" : "text-secondary"
            }`}
          />
        </Link>
        <Link to="/tvseries">
          <img
            style={{ height: "32px", width: "32px" }}
            src={Series}
            alt="seriesIcon"
            className={`fs-1 ${
              selected === "/tvseries" ? "text-white" : "text-secondary"
            }`}
          />
        </Link>
        <Link to="/bookmark">
          <img
            style={{ height: "32px", width: "32px" }}
            src={Bookmark}
            alt="bookmarkIcon"
            className={`fs-1 ${
              selected === "/bookmark" ? "text-white" : "text-secondary"
            }`}
          />
        </Link>
      </div>
      <div className="mt-xl-auto position-relative">
        <img
          onClick={() => {
            setToggleDropdown(!toggleDropdown);
          }}
          src={dropdown}
          alt=""
          style={{ height: "42px", width: "42px" }}
        />
        {toggleDropdown ? <Dropdown /> : null}
      </div>
    </div>
  );
};

export default SideBar;
