import React from "react";
import styled from "styled-components";
import img from "../assets/home/background-home-desktop.jpg";
import imgMobile from "../assets/home/background-home-mobile.jpg";
import Header from "../components/Header";
import {motion} from 'framer-motion'


function Home() {
  return (
    <Container className="container">
      <motion.div initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}>
      <Header></Header>
      <div className="home">
        <div className="home-content">
          <h2>So, you want to travel to</h2>
          <h1>Space</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <h1 className="home-explore">EXPLORE</h1>
      </div>
      </motion.div>
    </Container>
  );
}

const Container = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Bellefair&display=swap');

  background-image: url(${img});
  background-position: center;
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  color: white;
  box-sizing: border-box;
  background-size: cover;

  .home {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20%;
    margin-left: 0px;
    &-content{
      width: 350px;
      margin: 0 45px 0 0;
      h2{
        font-family: 'Barlow Condensed' , sans-serif;
        letter-spacing: 4.75px;
        font-size: 28px;
        text-transform: uppercase;
        color: #D0D6F9;
        white-space: nowrap;
      }
      h1{
        font-family: 'Bellefair' , sans-serif;
        font-weight: 400;
        font-size:150px;
        text-transform: uppercase;
        color: #fff;
      }
      p{
        margin-top: 20px;
        font-family: 'Barlow Condensed' , sans-serif;
        color: #D0D6F9;
        width: 450px;
        letter-spacing: 2px;
      }
    }
    &-explore {
      color: #0B0D17;
      border-radius: 50%;
      width: 274px;
      height: 274px;
      font-size: 30px;
      font-weight: 300;
      justify-content: center;
      align-items: center;
      display: flex;
      background-color: #fff;
      margin: 20px 0 0 30% ;
      cursor: pointer;

      :hover{
        box-shadow:  0 0 50px 50px #979797;}
        transition: 1s;
  }
}
@media screen and (max-width:1046px){
    background-size: cover;
    height: 99.9vh;
    background-position: bottom;
    .home{
      flex-direction: column;
      margin-top: 0%;
      text-align: center;
      position: relative;
      &-content{
        margin: 100px 0px 0 0;
        width: 450px;
        h2{
          font-size: 20px;
          letter-spacing: 3.38px;
        }
      }
      &-explore{
        margin: 40px 0 0 0% ;
      }
    }
}
@media screen and (max-width:865px){
  .home{
    &-explore{
      margin-top: 2rem;
    }
  } 
  }
@media screen and (max-width:650px){
  .home{
    &-explore{
      margin-top: 2rem;
    }
  } 
}
@media screen and (max-width:487px) {
  background-image: url(${imgMobile});
  height: 100vh;
  .home {
    &-content{
      width: 347px;
      h2{
        font-size: 16px;
      }
      h1{
        font-size: 80px;
        margin-top: 2rem;
        margin-bottom: 3rem;
      }
      p{
        font-size: 15px;
        width: 347px;
        margin:0 auto;
      }
    }
    &-explore{
      margin-top: 4rem;
      width: 200px;
      height: 200px;
      font-size: 20px;
    }
  }
}
@media screen and (max-width:420px) {
    .home{
      &-content{
        margin-top: 40px;
      }
      &-explore{
        margin-top: 8rem;
      }
    }
}

@media screen and (max-width:394px){  
  .home{
    &-explore{
      margin-top: 9rem;
      width: 175px;
      height: 175px;
    }
  }
  }

@media screen and (max-width:376px){  
  .home{
    &-explore{
      margin-top: 5rem;
      width: 175px;
      height: 175px;
    }
  }
  }
`;

export default Home;
