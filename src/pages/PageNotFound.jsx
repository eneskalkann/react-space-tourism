import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function PageNotFound() {
  return (
    <Container>
      <h1>You're lost</h1>
      <Link to={"/"} className="button">Back to Home</Link>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  background-image:url("https://images.unsplash.com/photo-1446776877081-d282a0f896e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80");
  font-size: 42px;
  background-position: center;
  height: 100vh;
  background-repeat: no-repeat;
  box-sizing: border-box;
  background-size: cover;
  h1{
    font-size: 66px;
    color: white;
  }
  .button{
    text-decoration: none;
    margin: 20px auto;
    color: white;
    border: 3px solid white;
    width: 300px;
    border-radius: 10px;
  }
`

export default PageNotFound