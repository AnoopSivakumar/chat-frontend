import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";
import ChatContainer from "./ChatContainer";
import ChatInput from "./ChatInput";
import Cat from "../assets/cat.gif"
export default function Welcome() {
  const [userName, setUserName] = useState("");
  useEffect(async () => {
    setUserName(
      await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      ).username
    );
  }, []);
  return (
    <Container>
      <img src={Cat} alt="" />
      <h1>
        Welcome, <span>{userName}!</span>
      </h1>
      <h3>Please select a chat to Start messaging.</h3>
    </Container>
     
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #2b700;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: #2b7003;
  }
`;
