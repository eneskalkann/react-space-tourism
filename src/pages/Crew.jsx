import React from "react";
import Header from "../components/Header";
import styled from "styled-components";
import { useState } from "react";
import img from "../assets/crew/background-crew-desktop.jpg";
import imgTablet from"../assets/crew/background-crew-tablet.jpg";
import imgMobile from "../assets/crew/background-crew-mobile.jpg";
import { motion } from "framer-motion";

function Crew() {
  const [toggle, setToggle] = useState(1);

  const tab = (index) => {
    setToggle(index);
  };

  return (
    <CrewContainer>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      >
        <Header></Header>
        <h1 className="content-h1">
          <span>02</span>Meet to crew
        </h1>
        <div className="content-tabs">
          <div className="content-desc">
            <div
              className={toggle === 1 ? "content  active-content" : "content"}
            >
              <div className="content-div">
                <img
                  className="image-margin commander-image"
                  src={require("../assets/crew/image-douglas-hurley.png")}
                  alt="commander-douglas-hurley"
                />
                <div className="content-div-column commander">
                  <h2>Commander</h2>
                  <h1>Douglas Hurley</h1>
                  <p className="paragraph-width">
                    Douglas Gerald Hurley is an American engineer, former Marine
                    Corps pilot and former NASA astronaut. He launched into
                    space for the third time as commander of Crew Dragon Demo-2.
                  </p>
                  <div className="content-div-button">
                    <button
                      className={toggle === 1 ? "tabs active-tabs" : "tabs"}
                      onClick={() => tab(1)}
                    ></button>
                    <button
                      className={toggle === 2 ? "tabs active-tabs" : "tabs"}
                      onClick={() => tab(2)}
                    ></button>
                    <button
                      className={toggle === 3 ? "tabs active-tabs" : "tabs"}
                      onClick={() => tab(3)}
                    ></button>
                    <button
                      className={toggle === 4 ? "tabs active-tabs" : "tabs"}
                      onClick={() => tab(4)}
                    ></button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={toggle === 2 ? "content  active-content" : "content"}
            >
              <div className="content-div">
                <img
                  src={require("../assets/crew/image-mark-shuttleworth.png")}
                  alt="specialist-mark-shuttleworth"
                />
                <div className="content-div-column">
                  <h2>Mission Specialist</h2>
                  <h1>Mark Shuttleworth</h1>
                  <p>
                    Mark Richard Shuttleworth is the founder and CEO of
                    Canonical, the company behind the Linux-based Ubuntu
                    operating system. Shuttleworth became the first South
                    African to travel to space as a space tourist.
                  </p>
                  <div className="content-div-button">
                    <button
                      className={toggle === 1 ? "tabs active-tabs" : "tabs"}
                      onClick={() => tab(1)}
                    ></button>
                    <button
                      className={toggle === 2 ? "tabs active-tabs" : "tabs"}
                      onClick={() => tab(2)}
                    ></button>
                    <button
                      className={toggle === 3 ? "tabs active-tabs" : "tabs"}
                      onClick={() => tab(3)}
                    ></button>
                    <button
                      className={toggle === 4 ? "tabs active-tabs" : "tabs"}
                      onClick={() => tab(4)}
                    ></button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={toggle === 3 ? "content  active-content" : "content"}
            >
              <div className="content-div">
                <img
                  src={require("../assets/crew/image-victor-glover.png")}
                  alt="pilot-victor-glover"
                />
                <div className="content-div-column pilot">
                  <h2>Pilot</h2>
                  <h1>Victor Glover</h1>
                  <p>
                    Pilot on the first operational flight of the SpaceX Crew
                    Dragon to the International Space Station. Glover is a
                    commander in the U.S. Navy where he pilots an F/A-18.He was
                    a crew member of Expedition 64, and served as a station
                    systems flight engineer.
                  </p>
                  <div className="content-div-button">
                    <button
                      className={toggle === 1 ? "tabs active-tabs" : "tabs"}
                      onClick={() => tab(1)}
                    ></button>
                    <button
                      className={toggle === 2 ? "tabs active-tabs" : "tabs"}
                      onClick={() => tab(2)}
                    ></button>
                    <button
                      className={toggle === 3 ? "tabs active-tabs" : "tabs"}
                      onClick={() => tab(3)}
                    ></button>
                    <button
                      className={toggle === 4 ? "tabs active-tabs" : "tabs"}
                      onClick={() => tab(4)}
                    ></button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={toggle === 4 ? "content  active-content" : "content"}
            >
              <div className="content-div engineer">
                <img
                  src={require("../assets/crew/image-anousheh-ansari.png")}
                  alt="engineer-anousheh-ansari"
                />
                <div className="content-div-column">
                  <h2>Flight Engineer</h2>
                  <h1>Anousheh Ansari</h1>
                  <p>
                    Anousheh Ansari is an Iranian American engineer and
                    co-founder of Prodea Systems. Ansari was the fourth
                    self-funded space tourist, the first self-funded woman to
                    fly to the ISS, and the first Iranian in space.
                  </p>
                  <div className="content-div-button">
                    <button
                      className={toggle === 1 ? "tabs active-tabs" : "tabs"}
                      onClick={() => tab(1)}
                    ></button>
                    <button
                      className={toggle === 2 ? "tabs active-tabs" : "tabs"}
                      onClick={() => tab(2)}
                    ></button>
                    <button
                      className={toggle === 3 ? "tabs active-tabs" : "tabs"}
                      onClick={() => tab(3)}
                    ></button>
                    <button
                      className={toggle === 4 ? "tabs active-tabs" : "tabs"}
                      onClick={() => tab(4)}
                    ></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </CrewContainer>
  );
}

const CrewContainer = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Bellefair&display=swap");

  background-image: url(${img});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
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
    flex-direction: row-reverse;
    justify-content: center;
    position: fixed;
    height: 600px;
    margin-left: 155px;
    img {
      margin-left: 120px;
    }
    .image-margin {
      margin-left: 220px;
    }
    &-column {
      h2 {
        margin: 63px 0 23px 0;
        color: #979797;
        font-family: "Bellefair", sans-serif;
        font-weight: 400;
        font-size: 32px;
        text-transform: uppercase;
      }
      h1 {
        font-family: "Bellefair", sans-serif;
        font-size: 56px;
        font-weight: 400;
        text-transform: uppercase;
        white-space: nowrap;
        margin-bottom: 62px;
      }
      p {
        font-family: "Barlow Condensed", sans-serif;
        color: #d0d6f9;
        letter-spacing: 2.3px;
        line-height: 25px;
        font-weight: 300;
        width: 500px;
        margin-bottom: 120px;
      }
      .paragraph-width {
        width: 400px;
      }
    }
    &-button {
      .active-tabs {
        background-color: #fff;
      }
      button {
        border: none;
        background: #979797;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        cursor: pointer;
        margin-right: 30px;
        :hover {
          opacity: 0.7;
          transition: 0.5s;
        }
      }
    }
  }

  @media screen and (max-width: 1425px) {
    .content-div {
      .image-margin {
        margin-left: 120px;
      }
    }
  }
  @media screen and (max-width: 1320px) {
    .content-div {
      img {
        margin-left: 20px;
      }
      .image-margin {
        margin-left: 70px;
      }
    }
  }
  @media screen and (max-width: 1270px) {
    .content-div {
      margin-left: 120px;
      .image-margin {
        margin-left: 50px;
      }
    }
  }
  @media screen and (max-width: 1200px) {
    .content-h1 {
      font-size: 24px;
      margin-left: 120px;
    }
    .content-div {
      margin-left: 70px;
      img {
        margin-left: -75px;
      }
      .image-margin {
        margin-left: 50px;
      }
      &-column {
        h2 {
          font-size: 28px;
        }
        h1 {
          font-size: 49px;
        }
      }
    }
  }
  @media screen and (max-width: 1046px) {
    overflow: hidden;
    .content-h1 {
      font-size: 19px;
      margin: 38.5px 0 0 136px;
    }
    .content-div {
      flex-direction: column-reverse;
      align-items: center;
      justify-content: center;
      position: relative;
      margin-left: 0;
      margin-top: 30px;
      img {
        margin-left: 0px;
        margin-top: 220px;
        position: fixed;
        width: 320px;
      }
      .image-margin {
        margin-left: 0px;
      }
      &-column {
        margin-bottom: 350px;
        align-items: center;
        justify-content: center;
        text-align: center;
        position: fixed;
        h2 {
          margin: 0px 0 0px 0;
          color: #979797;
          font-family: "Bellefair", sans-serif;
          font-weight: 400;
          font-size: 24px;
          text-transform: uppercase;
        }
        h1 {
          font-family: "Bellefair", sans-serif;
          font-size: 40px;
          font-weight: 400;
          text-transform: uppercase;
          white-space: nowrap;
          margin-bottom: 20px;
          margin-top: 20px;
        }
        p {
          font-family: "Barlow Condensed", sans-serif;
          color: #d0d6f9;
          letter-spacing: 2.3px;
          line-height: 25px;
          font-size: 16px;
          font-weight: 300;
          width: 588px;
          margin-bottom: 40px;
        }
      }
      .pilot{
          margin-top: -30px;
          p{
          }
        }
        .commander{
          margin-top: -22px;
          p{
            margin-top: 0px;
          }
    }
  }
  @media screen and (max-width:873px){
    background-image: url(${imgTablet});
    height: 100vh;
    .content-div{
      img{
        overflow: hidden;
        bottom:0;
        top: 230px;
      }
    }
  }
  @media screen and (max-width: 580px) {
    .content-h1 {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 20px 0 0 0;
    }
    .content-div {
      &-column {
        p {
          width: 427px;
        }
      }
    }
  }

  @media screen and (max-width: 480px) {
    .content-div {
      flex-direction: column;
      &-column {
        h2 {
          font-size: 16px;
          margin-bottom: 20px;
        }
        h1 {
          font-size: 24px;
        }
        p {
          font-size: 15px;
          width: 327px;
          margin: 20px auto;
        }
      }
    }
  }

  @media screen and (max-width: 420px){
    background-image: url(${imgMobile});
    background-size: cover;
    .content-div {
      position: absolute;
      left: 10%;
      right: 10%;
      bottom: 0;
      .commander-image{
        margin-top:160px;
      }
      img {
        width: 220px;
        object-fit: cover;
        top: 42%;
      }
      &-column {
        display: block;
        h2 {
          margin-top: -20px;
          font-size: 16px;
          margin-bottom: 20px;
        }
        h1 {
          font-size: 24px;
        }
        p {
          padding: 0 20px;
          margin: 20px auto;
        }
        }
        .pilot{
          margin-top: 0px;
          p{
            width: 375px;
          }
        }
        .commander{
          margin-top: 30px;
          p{
            margin-top: 40px;
          }
    }
    
    &-button{
      margin-left: 28%;
      margin-right: 25%;
        button {
            width: 15px;
            height: 15px;
            margin-right: 20px;
          }
      }
    }
    @media screen and (max-width:415px) {
      .content-div{
        img{
          top: 45%;
        }
        .commander-image{
          margin-top: 120px;
        }
      }
    }

    @media screen and (max-width:391px) {
      .content-div{
        img{
          top: 52%;
        }
      }
    }
    @media screen and (max-width:376px){
      .content-div{
          img {
        width: 170px;
        margin-top: 42%;
      }
      .commander-image{
          margin-top: 100px;
        }
        &-column{
          h2{
            margin-top: 120px;
          }
        }
      .pilot{
          p{
            width: 375px;
          }
        }
        .commander{
          margin-top: 0px;
          p{
            margin-top: 40px;
          }
          button{
            margin-top: 30px;
          }
        }
      }
    }
    @media screen and (max-width:361px){
      .content-div{
        .commander-image{
          margin-top: 100px;
        }
      }
      }
  }
  }
`;

export default Crew;
