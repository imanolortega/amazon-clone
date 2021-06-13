import React from "react";
import styled from "styled-components";
import Product from "./Product";

const Home = () => {
  return (
    <Container>
      <Banner></Banner>
      <Content>
        <Product />
        <Product />
      </Content>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1500px;
  margin: 0 auto;
`;
const Banner = styled.div`
  background-image: url("https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_TallHero_Gamers_en_US_1x._CB667161802_.jpg");
  min-width: 600px;
  min-height: 600px;
  background-position: center;
  background-size: cover;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
  z-index: 1;
`;
const Content = styled.div`
  padding-left: 10px;
  padding-right: 10px;
  margin-top: -350px;
  z-index: 100;
  display: flex;
`;

export default Home;
