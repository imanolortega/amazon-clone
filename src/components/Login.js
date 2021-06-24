import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";

const Login = ({ setUser }) => {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        let user = result.user;
        let newUser = {
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        };
        setUser(newUser);
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <Container>
      <Content>
        <AmazonLogo
          src={
            "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          }
        />
        <h2>Sign in</h2>
        <LoginButton onClick={signIn}>Sign in with Google</LoginButton>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f8f8f8;
  display: grid;
  place-items: center;
`;
const Content = styled.div`
  background-color: white;
  padding: 50px;
  border-radius: 4px;
  border: 1px #ddd solid;
  display: grid;
  place-items: center;
`;
const AmazonLogo = styled.img`
  height: 35px;
`;
const LoginButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #f7dfa5, #f0c14b);
  box-shadow: 0 1px 0 rgb(255 255 255 / 40%) inset;
  border-radius: 3px;
  border-color: #adb1b8 #a2a6ac #8d9096;
  border-style: solid;
  border-width: 1px;
  padding: 8px 12px;
  cursor: pointer;

  :hover {
    background: linear-gradient(to bottom, #f7dfa5, #ddb347);
  }
`;

export default Login;
