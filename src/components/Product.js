import React from "react";
import styled from "styled-components";

const Product = () => {
  return (
    <Container>
      <Title>SodaStream</Title>
      <Price>$4999</Price>
      <Rating>⭐⭐⭐⭐⭐</Rating>
      <Image src="https://www.sodastream.com.ar/uploads/picture/image/288/SODA_60__NEGRO.jpg" />
      <ActionSection>
        <AddToCartButton>Add to Cart</AddToCartButton>
      </ActionSection>
    </Container>
  );
};
const Container = styled.div`
  background-color: white;
  z-index: 100;
  max-height: 400px;
  flex: 1;
  padding: 20px;
  margin: 10px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.span``;
const Price = styled.span`
  font-weight: 500;
`;
const Rating = styled.div``;
const Image = styled.img`
  max-width: 200px;
  object-fit: contain;
`;
const ActionSection = styled.div`
  margin-top: 12px;
  display: grid;
  place-content: center;
`;
const AddToCartButton = styled.button`
  width: 100px;
  background: linear-gradient(to bottom, #f7dfa5, #f0c14b);
  box-shadow: 0 1px 0 rgb(255 255 255 / 40%) inset;
  border-radius: 3px;
  border-color: #adb1b8 #a2a6ac #8d9096;
  border-style: solid;
  border-width: 1px;
  padding: 8px 12px;
`;

export default Product;
