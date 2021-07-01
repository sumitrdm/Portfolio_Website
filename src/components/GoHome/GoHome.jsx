import React,{ Component } from "react";
import "./GoHome.css";
import {withRouter} from 'react-router-dom'
import homeIconBlack from '../../assets/home_black.png';
import homeIconWhite from '../../assets/home_white.png';


//This component is only there to teach you programmatic (splash screen apne aap change bina kuch button badaye google signup ek screen open and automatically screen changes) navigation
//It could have been done easily just by using Link component
//But  I have used the history object(inside withRouter module) to respresent it's usage
//History object is the stack of values
class GoHome extends React.Component
{
    navigateToHome = () => {
        const {history} = this.props;
        // console.log(history);
        // setTimeout(() => {
        //     //2 sec ke lie wait then push 
        //     history.push("/")
        // //push to home page

        // },2000)
        history.push("/")

    }

    render()
    {
        // const {location} = this.props;
        // console.log(location);
        // const {history} = this.props;
        // console.log(history);
        // console.log(this.props)
        const {location} = this.props;
        const whiteBtn = location.pathname === '/';



        return ( 
            <button
             className={`go-home-btn ${ whiteBtn ? 'white-bkg' : 'gradient-bkg'}`}
            onClick={this.navigateToHome}>
                    <img className="home-icon"  src={whiteBtn  ? homeIconBlack : homeIconWhite} alt="home icon"></img>
            </button>
        );
    }
}
export default withRouter(GoHome);