import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import img from "../assets/technology/background-technology-desktop.jpg";
import imgTablet from "../assets/technology/background-technology-tablet.jpg";
import { useState } from "react";
import { motion } from "framer-motion";

const variants ={
  hidden : {opacity:0},
  visible:{opacity:1},
  transition : {duration:1}
}

function Technology() {
  const [toggle, setToggle] = useState(1);

  const tab = (index) => {
    setToggle(index);
  };

  return (
    <TechnologyContainer>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      >
        <Header></Header>
        <h1 className="content-h1">
          <span>03</span>space launch 101
        </h1>
        <div className="content-div">
          <div className="content-div-container">
            <motion.div
              className={toggle === 1 ? "content  active-content" : "content"}
            >
              <motion.div className="content-div-button">
                <button
                  className={toggle === 1 ? "tabs active-tabs" : "tabs"}
                  onClick={() => tab(1)}
                >
                  1
                </button>
                <button
                  id="center-button"
                  className={toggle === 2 ? "tabs active-tabs" : "tabs"}
                  onClick={() => tab(2)}
                >
                  2
                </button>
                <button
                  className={toggle === 3 ? "tabs active-tabs" : "tabs"}
                  onClick={() => tab(3)}
                >
                  3
                </button>
              </motion.div>
              <div className="content-div-main">
                <motion.div className="content-div-desc">
                  <h5>The Terminology...</h5>
                  <h2>Launch Vehicle</h2>
                  <p>
                    A launch vehicle or carrier rocket is a rocket-propelled
                    vehicle used to carry a payload from Earth's surface to
                    space, usually to Earth orbit or beyond. Our WEB-X carrier
                    rocket is the most powerful in operation. Standing 150
                    metres tall, it's quite an awe-inspiring sight on the launch
                    pad!
                  </p>
                </motion.div>
                <div className="content-div-image">
                  <img
                    className="desktop-image"
                    src={require("../assets/technology/image-launch-vehicle-portrait.jpg")}
                    alt="vehicle"
                  />
                  <img
                    className="mobile-image"
                    src={require("../assets/technology/image-launch-vehicle-landscape.jpg")}
                    alt="vehicle"
                  />
                </div>
              </div>
            </motion.div>
            <div
              className={toggle === 2 ? "content  active-content" : "content"}
            >
              <div className="content-div-button">
                <button
                  className={toggle === 1 ? "tabs active-tabs" : "tabs"}
                  onClick={() => tab(1)}
                >
                  1
                </button>
                <button
                  id="center-button"
                  className={toggle === 2 ? "tabs active-tabs" : "tabs"}
                  onClick={() => tab(2)}
                >
                  2
                </button>
                <button
                  className={toggle === 3 ? "tabs active-tabs" : "tabs"}
                  onClick={() => tab(3)}
                >
                  3
                </button>
              </div>
              <div className="content-div-main">
                <div className="content-div-desc">
                  <h5>The Terminology...</h5>
                  <h2>spaceport</h2>
                  <p>
                    A spaceport or cosmodrome is a site for launching (or
                    receiving) spacecraft, by analogy to the seaport for ships
                    or airport for aircraft. Based in the famous Cape Canaveral,
                    our spaceport is ideally situated to take advantage of the
                    Earth’s rotation for launch.
                  </p>
                </div>
                <div className="content-div-image">
                  <img
                    className="desktop-image"
                    src={require("../assets/technology/image-space-capsule-portrait.jpg")}
                    alt="vehicle"
                  />
                  <img
                    className="mobile-image"
                    src={require("../assets/technology/image-space-capsule-landscape.jpg")}
                    alt="vehicle"
                  />
                </div>
              </div>
            </div>
            <div
              className={toggle === 3 ? "content  active-content" : "content"}
            >
              <div className="content-div-button">
                <button
                  className={toggle === 1 ? "tabs active-tabs" : "tabs"}
                  onClick={() => tab(1)}
                >
                  1
                </button>
                <button
                  id="center-button"
                  className={toggle === 2 ? "tabs active-tabs" : "tabs"}
                  onClick={() => tab(2)}
                >
                  2
                </button>
                <button
                  className={toggle === 3 ? "tabs active-tabs" : "tabs"}
                  onClick={() => tab(3)}
                >
                  3
                </button>
              </div>
              <div className="content-div-main">
                <div className="content-div-desc">
                  <h5>The Terminology...</h5>
                  <h2>space capsule</h2>
                  <p>
                    A space capsule is an often-crewed spacecraft that uses a
                    blunt-body reentry capsule to reenter the Earth's atmosphere
                    without wings. Our capsule is where you'll spend your time
                    during the flight. It includes a space gym, cinema, and
                    plenty of other activities to keep you entertained.
                  </p>
                </div>
                <div className="content-div-image">
                  <img
                    className="desktop-image"
                    src={require("../assets/technology/image-spaceport-portrait.jpg")}
                    alt="vehicle"
                  />
                  <img
                    className="mobile-image"
                    src={require("../assets/technology/image-spaceport-landscape.jpg")}
                    alt="vehicle"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </TechnologyContainer>
  );
}

const TechnologyContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Bellefair&display=swap");

  background-image: url(${img});
  background-position: center;
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  box-sizing: border-box;

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
  .content-div {
    display: flex;
    position: relative;
    &-main {
      display: flex;
    }
    &-desc {
      position: absolute;
      top: 29%;
      left: 20%;
      h5 {
        letter-spacing: 2.7px;
        font-size: 16px;
        text-transform: uppercase;
        font-family: "Barlow Condensed", sans-serif;
        font-weight: 300;
      }
      h2 {
        font-family: "Bellefair", sans-serif;
        text-transform: uppercase;
        white-space: nowrap;
        font-size: 58px;
        font-weight: 400;
        margin: 20px 0 50px 0;
      }
      p {
        color: #d0d6f9;
        font-size: 18px;
        font-family: "Barlow Condensed", sans-serif;
        font-weight: 300;
        width: 444px;
        height: 192px;
        line-height: 32px;
      }
    }
    &-image {
      right: 0;
      position: absolute;
      top: 0%;
      .mobile-image {
        display: none;
      }
    }
    &-button {
      display: flex;
      flex-direction: column;
      margin: 81px 0 0 80px;
      .active-tabs {
        background-color: #fff;
        color: #0b0d17;
        border: none;
      }
      button {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background-color: transparent;
        border: 1px solid #979797;
        color: #fff;
        margin-top: 40px;
        font-family: "Bellefair", sans-serif;
        font-size: 32px;
        cursor: pointer;
        :hover {
          border: 1.5px solid white;
          transition: 0.2s;
        }
      }
    }
  }
  @media (max-width: 1268px) {
    .content-div {
      &-desc {
        left: 12%;
      }
      &-button {
        margin: 81px 0 0 10px;
      }
    }
  }
  @media (max-width: 1146px) {
    .content-div {
      &-desc {
        h2 {
          font-size: 50px;
        }
      }
    }
  }
  @media (max-width: 1146px) {
    .content-div {
      &-desc {
        h5 {
          margin-top: 20px;
        }
        h2 {
          font-size: 48px;
          margin: 20px 0 30px 0;
        }
        p {
          width: 400px;
        }
      }
    }
  }
  @media screen and (max-width: 1046px) {
    .content-h1 {
      font-size: 19px;
      margin: 38.5px 0 0 136px;
    }
    .content-div {
      position: relative;
      flex-direction: column-reverse;
      align-items: center;
      justify-content: center;
      &-main {
        flex-direction: column;
      }
      &-button {
        flex-direction: row;
        margin: 290px 0 0 0px;
        #center-button {
          margin-right: 15px;
          margin-left: 15px;
        }
        button {
          width: 60px;
          height: 60px;
        }
      }
      &-desc {
        position: absolute;
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
        top: 92%;
        left: 20%;
        right: 20%;
        h5 {
          margin-top: 30px;
        }
        h2 {
          font-size: 40px;
          margin: 14px 0 14px 0;
        }
        p {
          font-size: 16px;
          text-align: center;
          width: 458px;
          height: 140px;
        }
      }
      &-image {
        position: absolute;
        right: 0;
        left: 0;
        top: 5%;
        overflow: hidden;
        .desktop-image {
          display: none;
        }
        .mobile-image {
          z-index: 0;
          object-fit: cover;
          display: flex;
          width: 101%;
          height: 307px;
        }
      }
    }
  }
  @media screen and (max-width:880px){
    img{
      margin-top: 10px;
    }
    .content-div{
      button{
        margin-top: 45px;
      }
      &-desc{
        margin-top: 0px;
      }
  }
  @media screen and (max-width: 768px) {
    background-image: url(${imgTablet});
    background-position: center;
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
  }

  @media screen and (max-width: 510px) {
    .content-h1 {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 20px 0 0 0;
    }
    .content-div {
      &-desc {
        p {
          width: 374px;
        }
      }
    }
  }
  @media screen and (max-width: 424px) {
    .content-div {
      &-button{
        margin-top: 220px;
      }
      &-desc {
        margin-top: 50px;
        p {
          width: 344px;
        }
      }
      &-image {
        top: -10%;
        .mobile-image {
          object-fit: contain;
        }
      }
    }
  }
  @media screen and (max-width:415px) and (max-height:736px) {
    .content-div{
      &-button{
        margin-top: 200px;
      }
      &-desc{
        margin-top: 20px;
      }
    }
  }
  @media screen and (max-width:395px){
    .content-div{
      &-image {
        top: -13%;
        z-index: 0;
        .mobile-image {
          object-fit: contain;
        }
      }
      &-button{
        z-index: 1;
        margin-top: 190px;
      }
    }
  }
  @media screen and (max-width: 376px) {
    .content-div {
      &-desc{
        margin-top: 10px;
      }
      &-button {
        flex-direction: row;
        margin-top: 150px;
        #center-button{
          margin-right: 15px;
          margin-left: 15px;
        }
        button {
          width: 40px;
          height: 40px;
          font-size: 16px;
        }
      }
      &-image {
        top: -20%;
        height: 270px;
        .mobile-image {
          object-fit: contain;
        }
      }
    }
  }
  @media screen and (max-width:361px) {
    .content-div {
      &-button {
        margin:150px 0 -20px 0px;
      }
      &-image {
        margin-top:0px;
      }
    }
  }
  }
  `;

export default Technology;
