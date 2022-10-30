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
  color: white;
  background-color: #000000;
  margin-top: 25%;
  .button{
    text-decoration: none;
    color: white;
  }
`

export default PageNotFound