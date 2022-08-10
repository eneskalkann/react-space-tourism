import React, { useState } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import img from "../assets/destination/background-destination-desktop.jpg";
import imgMobile from "../assets/destination/background-destination-mobile.jpg";
import imgTablet from "../assets/destination/background-destination-tablet.jpg";
import {motion} from 'framer-motion'


function Destination() {
  const [toggle, setToggle] = useState(1);

  const tab = (index) => {
    setToggle(index);
  };

  return (
    <DestinationContainer>
      <motion.div initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}>
      <Header />
      <h1 className="content-h1">
        <span>01</span>Pick your destination
      </h1>
      <div className="content-tabs">
        <div className="content-desc">
          <div className={toggle === 1 ? "content  active-content" : "content"}>
            <div className="content-div">
              <img src={require("../assets/destination/image-moon.png")} alt="moon"/>
              <div className="content-div-column">
                <div className="content-div-button">
                  <button
                    className={toggle === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => tab(1)}>Moon</button>
                  <button
                    className={toggle === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => tab(2)}>Mars</button>
                  <button
                    className={toggle === 3 ? "tabs active-tabs" : "tabs"}
                    onClick={() => tab(3)}>Europa</button>
                  <button
                    className={toggle === 4 ? "tabs active-tabs" : "tabs"}
                    onClick={() => tab(4)}>Titan</button>
                </div>
                <h1 className="content-div-planet-header">Moon</h1>
                <p className="content-div-planet-p">
                  See our planet as you’ve never seen it before. A perfect
                  relaxing trip away to help regain perspective and come back
                  refreshed. While you’re there, take in some history by
                  visiting the Luna 2 and Apollo 11 landing sites.
                </p>
                <hr />
                <div className="content-div-numbers">
                  <div className="left">
                    <h6>Avg. Distance</h6>
                    <h5>348,400KM</h5>
                  </div>
                  <div className="right">
                    <h6>est. travel time</h6>
                    <h5>3 days</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={toggle === 2 ? "content  active-content" : "content"}>
            <div className="content-div">
              <img src={require("../assets/destination/image-mars.png")} alt="Mars" />
              <div className="content-div-column">
                <div className="content-div-button">
                  <button
                    className={toggle === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => tab(1)}>Moon</button>
                  <button
                    className={toggle === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => tab(2)}>Mars</button>
                  <button
                    className={toggle === 3 ? "tabs active-tabs" : "tabs"}
                    onClick={() => tab(3)}>Europa</button>
                  <button
                    className={toggle === 4 ? "tabs active-tabs" : "tabs"}
                    onClick={() => tab(4)}>Titan</button>
                </div>
                <h1 className="content-div-planet-header">Mars</h1>
                <p className="content-div-planet-p">
                  Don’t forget to pack your hiking boots. You’ll need them to
                  tackle Olympus Mons, the tallest planetary mountain in our
                  solar system. It’s two and a half times the size of Everest!
                </p>
                <hr />
                <div className="content-div-numbers">
                  <div className="left">
                    <h6>Avg. Distance</h6>
                    <h5>225 mil. km</h5>
                  </div>
                  <div className="right">
                    <h6>est. travel time</h6>
                    <h5>9 months</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={toggle === 3 ? "content  active-content" : "content"}>
            <div className="content-div">
              <img src={require("../assets/destination/image-europa.png")}alt="europa"/>
              <div className="content-div-column">
                <div className="content-div-button">
                <button
                    className={toggle === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => tab(1)}>Moon</button>
                  <button
                    className={toggle === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => tab(2)}>Mars</button>
                  <button
                    className={toggle === 3 ? "tabs active-tabs" : "tabs"}
                    onClick={() => tab(3)}>Europa</button>
                  <button
                    className={toggle === 4 ? "tabs active-tabs" : "tabs"}
                    onClick={() => tab(4)}>Titan</button>
                </div>
                <h1 className="content-div-planet-header">Europa</h1>
                <p className="content-div-planet-p">
                  The smallest of the four Galilean moons orbiting Jupiter,
                  Europa is a winter lover’s dream. With an icy surface, it’s
                  perfect for a bit of ice skating, curling, hockey, or simple
                  relaxation in your snug wintery cabin.
                </p>
                <hr />
                <div className="content-div-numbers">
                  <div className="left">
                    <h6>Avg. Distance</h6>
                    <h5>628 mil. km</h5>
                  </div>
                  <div className="right">
                    <h6>est. travel time</h6>
                    <h5>3 years</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={toggle === 4 ? "content  active-content" : "content"}>
            <div className="content-div">
              <img src={require("../assets/destination/image-titan.png")}alt=""/>
              <div className="content-div-column">
                <div className="content-div-button">
                <button
                    className={toggle === 1 ? "tabs active-tabs" : "tabs"}
                    onClick={() => tab(1)}>Moon</button>
                  <button
                    className={toggle === 2 ? "tabs active-tabs" : "tabs"}
                    onClick={() => tab(2)}>Mars</button>
                  <button
                    className={toggle === 3 ? "tabs active-tabs" : "tabs"}
                    onClick={() => tab(3)}>Europa</button>
                  <button
                    className={toggle === 4 ? "tabs active-tabs" : "tabs"}
                    onClick={() => tab(4)}>Titan</button>
                </div>
                <h1 className="content-div-planet-header">Titan</h1>
                <p className="content-div-planet-p">
                  The only moon known to have a dense atmosphere other than
                  Earth, Titan is a home away from home (just a few hundred
                  degrees colder!). As a bonus, you get striking views of the
                  Rings of Saturn.
                </p>
                <hr className="hr-class" />
                <div className="content-div-numbers">
                  <div className="left">
                    <h6>Avg. Distance</h6>
                    <h5>1.6 bil. km</h5>
                  </div>
                  <div className="right">
                    <h6>est. travel time</h6>
                    <h5>7 years</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </motion.div>
    </DestinationContainer>
  );
}

const DestinationContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Bellefair&display=swap");

  background-image: url(${img});
  background-position: center;
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  color: white;
  box-sizing: border-box;
  background-size: cover;
  .content-h1 {
    font-family: "Barlow Condensed", sans-serif;
    letter-spacing: 4.75px;
    font-size: 28px;
    white-space: nowrap;
    text-transform: uppercase;
    font-weight: 400;
    margin: 76px 0 0 166.6px;
    span {
      font-weight: 700;
      margin-right: 25px;
      color: #979797;
    }
  }
  .content-tabs {
    display: flex;
  }

  .content-desc {
    img {
      width: 445px;
      height: 445px;
    }
    .content-div {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 41px;
      &-button{
        display: flex;
      }
      &-column {
        display: flex;
        flex-direction: column;
        margin: -50px 0 0 157px;
      }
      &-planet-header {
        font-family: "Bellefair", sans-serif;
        text-transform: uppercase;
        font-size: 100px;
        font-weight: 400;
        margin: 40px 0 0px -10px;
      }
      &-planet-p {
        margin: 10px 0 60px 0;
        font-family: "Barlow Condensed", sans-serif;
        color: #d0d6f9;
        width: 450px;
        letter-spacing: 2.3px;
        line-height: 23px;
        font-weight: 300;
      }
      &-numbers {
        display: flex;
        text-transform: uppercase;
        justify-content: left;
        position: static;
        margin-top: 20px;
        h6 {
          font-size: 14px;
          letter-spacing: 2.35px;
          font-weight: 300;
          font-family: "Barlow Condensed", sans-serif;
          color: #d0d6f9;
        }
        h5 {
          font-weight: 300;
          font-size: 28px;
          font-family: "Bellefair", sans-serif;
          color: #fff;
          margin-top: 10px;
        }
        .right {
          margin-left: 140px;
        }
      }
      hr {
        position: relative;
        border: none;
        height: 1px;
        background-color: #979797;
        border-radius: 5px;
      }
    }
  }
  .tabs {
    font-family: "Barlow Condensed", sans-serif;
    font-size: 16px;
    letter-spacing: 2.6px;
    text-transform: uppercase;
    display: flex;
    padding: 15px;
    text-align: center;
    color: #d0d6f9;
    background: none;
    cursor: pointer;
    border: none;
    box-sizing: content-box;
    position: relative;
    outline: none;
  }
  .active-tabs {
    color: white;
    ::before {
      content: "";
      display: block;
      position: absolute;
      top: 50px;
      left: 50%;
      transform: translateX(-50%);
      width: calc(100% + 2px);
      height: 3px;
      background: white;
    }
  }
  button {
    cursor: pointer;
    border: none;
    :hover{
      color: #fff;
      transition:.3s;
    }
  }
  .content-desc {
    flex-grow: 1;
  }
  .content {
    background: transparent;
    padding: 20px;
    width: 100%;
    height: 100%;
    display: none;
  }
  .active-content {
    display: block;
  }
  @media screen and (max-width:1170px){
    .content-desc{
      .content-div{
      &-column{
        margin: -50px 0 0 107px;
      }
    }
    }
  }
  @media screen and (max-width:1046px){
    .content-h1 {
    font-size: 19px;
    margin: 38.5px 0 0 136px;
  }
    .content-tabs{
      img{
        width: 300px;
        height: 300px;
      }
      .content-div{
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 1px;
        &-column {
        margin: 0px 0 0 0px;
        align-items: center;
        justify-content: center;
        }
        &-planet-header{
          font-size: 80px;
          margin: 15px 0 0 0;
        }
        &-planet-p {
        margin: 10px 0 0px 0;
        width: 573px;
        text-align: center;
      }
      &-numbers{
        margin-top: 15px;
        h5 {
          margin-top: 5px;
        }
      }
      }
      hr{
        background-color: #979797;
        height: 1px;
        width: 600px;
        margin-top: 15px;
      } 
    }
  }
  @media screen and (max-width:640px){
    background-image: url(${imgTablet});
    height: 100vh;
    .content-h1{
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 20px 0 -17px 0;
    }
    .content-tabs{
      align-items: center;
      justify-content: center;
      img{
        margin-top: 20px;
        width: 170px;
        height: 170px;
      }
      .content-div{
      &-planet-p {
        margin: 10px 0 0px 0;
        width: 327px;
        text-align: center;
      }
      &-numbers{
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h6 {
          text-align: center;
          font-size: 14px;
          letter-spacing: 2.35px;
          font-weight: 300;
          font-family: "Barlow Condensed", sans-serif;
          color: #d0d6f9;
        }
        h5 {
          text-align: center;
          font-weight: 300;
          font-size: 28px;
          font-family: "Bellefair", sans-serif;
          color: #fff;
          margin-top: 10px;
        }
        .right {
          margin-left: 0;
          margin-top: 20px;
        }
      }
      
      hr{
        width: 327px;
      } 
    }   
    }
  }

  @media screen and (max-width:420px){
    background-image: url(${imgMobile});
    height: 100vh;
     background-size: cover;
    .content-tabs{
      img{
        margin-top: 30px;
        margin-bottom: 20px;
      }
    }
  }
  @media screen and (max-width:415px) and (max-height:736px) {
    .content-tabs{
      img{
        margin-top: 0px;
      }
    }
    .content-desc{
      max-width: 100%;
      .content-div{
        &-button{
          button{
            margin-top: -25px;
          }
        }
        &-planet-p{
          margin-top: -3px;
          width: 387px;
        }
      }
    }
  }
  @media screen and (max-width:376px){
    .content-tabs{
      img{
        margin-top: -0px;
      }
    }
    .content-desc{
      .content-div{
        &-button{
          button{
            font-size: 14px;
            margin-top: -20px;
          }
        }
        &-planet-header{
          font-size: 56px;
        }
        &-planet-p{
          font-size: 15px;
          margin-top: -3px;
          width: 327px;
        }
        &-numbers{
          position: relative;
          margin-top: 10px;
          margin-bottom: -10px;
          h6 {
          font-size: 12px;
          letter-spacing: 2.36px;
          margin-bottom: -9px;
        }
        h5 {
          font-weight: 300;
          font-size: 22px;
          margin-top: 9px;
        }
        .right{
          margin-top: 10px;
          margin-bottom: 0;
        }
        }
      }
    }
  }
  @media screen and (max-width: 376px) and (min-height:811px){
    .content-tabs{
      img{
        margin-top: 60px;
      }
    }
  }
  @media screen and (max-width:361px){
    .content-desc{
      max-width: 100%;
      .content-div{
        margin-top: 60px;
        &-planet-p{
        letter-spacing: 1px;
        width: 310px;
        }
      }
      hr{
      margin-top: 5px;
      margin-bottom: 0px;
    }
    }
  }
`;

export default Destination;
