import React from "react";
import "./GoHome.css";
import { withRouter } from "react-router-dom";
import homeIconBlack from "../../assets/home_black.png";
import homeIconWhite from "../../assets/home_white.png";

class GoHome extends React.Component {
  navigateToHome = () => {
    const { history } = this.props;

    history.push("/");
  };

  render() {
    const { location } = this.props;
    const whiteBtn = location.pathname === "/";

    return (
      <button
        className={`go-home-btn ${whiteBtn ? "white-bkg" : "gradient-bkg"}`}
        onClick={this.navigateToHome}
      >
        <img
          className="home-icon"
          src={whiteBtn ? homeIconBlack : homeIconWhite}
          alt="home icon"
        ></img>
      </button>
    );
  }
}
export default withRouter(GoHome);
