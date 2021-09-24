/* eslint-disable react/jsx-no-target-blank */
import React,{useState,useEffect} from "react";
import {Link} from 'react-router-dom';
import homeAnime from '../../assets/home_anime.gif';

// import Modal from '../Modal/Modal.jsx'
import "./Home.css";
const line= {
    textDecoration: 'none',
    color: 'black',
    backgroundColor:'white',
}
const Home = () => {
    // const [modal,setModal] = useState(false);
    // useEffect(() => {
    //     setTimeout(()=>{
    //         setModal(true);
    //     },1000)
    // },[]);
    /**[] means sirf ek baar render jab page refresh ho baaki nhi vrna jab jab componenet mai
     * chnage hoga render method call aur useEffect call
    */

    // const closeModal = () => {
    //     setModal(false);
    // }


    return (
    <div className = "home-container">
        {/* {modal && <Modal closeModal={closeModal} />}   */}
        {/* modal true toh hi render Modal component */}
        {/* {modal==true ? <Modal/>:''} */}

        <div className = "header-text">
            <h1>Hey, I'm Sumit Kumar!</h1>
            <p>Being a Freelance Full-Stack Developer,I create beautiful and responsive websites:)</p>

        </div>
        <div className="head-btns">
            <Link to = '/about' className="btn btn-white">
                <p  style={{...line}} className="btn-text">About me</p>
            </Link>
            <a target="_blank" className="btn btn-transparent" style={{...line}} href="https://drive.google.com/file/d/1z6RTYrlzQfPvcXH5R9r5GBQMxOVqpunq/view" >
             
                <p className="btn-text">Resume!</p>
            
            </a>
        </div>
        <div className="splash-image">
            <img src={homeAnime} alt="animation" className="home-anime"></img>
        </div>
    
    </div>
    )}
export default Home;