import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Product from "./Product";
import db from "../firebase";

const Home = () => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    db.collection("products").onSnapshot((snapshot) => {
      let tempProducts = [];
      tempProducts = snapshot.docs.map((doc) => ({
        id: doc.id,
        product: doc.data(),
      }));
      setProducts(tempProducts);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log(products);

  return (
    <Container>
      <Banner></Banner>
      <Content>
        {products.map((data) => (
          <Product
            title={data.product.name}
            price={data.product.price}
            rating={data.product.rating}
            image={data.product.image}
          />
        ))}
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
