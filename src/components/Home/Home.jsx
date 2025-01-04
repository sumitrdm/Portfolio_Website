/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Link } from "react-router-dom";
import homeAnime from "../../assets/home_anime.gif";
import "./Home.css";
const line = {
  textDecoration: "none",
  color: "black",
  backgroundColor: "white",
};
const Home = () => {
  return (
    <div className="home-container">
      <div className="header-text">
        <h1>Hey, I'm Sumit Kumar!</h1>
        <p>
          Being a Freelance Full-Stack Developer,I create beautiful and
          responsive websites:)
        </p>
      </div>
      <div className="head-btns">
        <Link to="/about" className="btn btn-white">
          <p style={{ ...line }} className="btn-text">
            About me
          </p>
        </Link>
        <a
          target="_blank"
          className="btn btn-transparent"
          style={{ ...line }}
          href="https://drive.google.com/file/d/1oDJEPabxAq7xiC-gs1ZUqtQvJIgD05eM/view?usp=sharing"
        >
          <p className="btn-text">Resume!</p>
        </a>
      </div>
      <div className="splash-image">
        <img src={homeAnime} alt="animation" className="home-anime"></img>
      </div>
      x
    </div>
  );
};
export default Home;
