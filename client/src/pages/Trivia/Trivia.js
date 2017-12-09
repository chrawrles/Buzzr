import React from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Quiz from "../../components/Quiz";
import TrvBtn from "../../components/TrvBtn";
import Ads from "../../components/Ads";
import "./Trivia.css";

const Trivia = () =>

<div className="wrapper">
    <div className="nav">
        <Nav />
    </div>
    <div className="container-fluid">
        <h1>Play Trivia!</h1>
        <Quiz />
        <TrvBtn className="TrvBtn"/>
    </div>
    <div className="Ads">
    <Ads />
    </div>
    <Footer />

</div>
export default Trivia;
