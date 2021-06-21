import React from "react";
import styled from "styled-components";

const CartItem = () => {
  return (
    <Container>
      <ImageContainer>
        <img
          alt="Soda Stream"
          src={
            "https://www.sodastream.com.ar/uploads/picture/image/293/Black_3.jpg"
          }></img>
      </ImageContainer>

      <CartItemInfo>
        <CartItemInfoTop>
          <h3>Soda Stream Black</h3>
        </CartItemInfoTop>
        <CartItemInfoBottom>
          <CartItemQuantityContainer>5</CartItemQuantityContainer>
          <CartItemDeleteContainer>Delete</CartItemDeleteContainer>
        </CartItemInfoBottom>
      </CartItemInfo>

      <CartItemPrice>$4999</CartItemPrice>
    </Container>
  );
};

const ImageContainer = styled.div`
  height: 180px;
  widht: 180px;
  flex-shrink: 0;
  flex-grow: 0;
  margin-right: 16px;
  img {
    object-fit: contain;
    widht: 100%;
    height: 100%;
  }
`;
const CartItemInfo = styled.div``;
const CartItemInfoTop = styled.div`
  color: #007185;
  h3 {
    font-size: 18px;
    margin-top: 0;
    margin-bottom: 0;
  }
`;
const CartItemInfoBottom = styled.div`
  display: flex;
  margin-top: 4px;
`;
const CartItemQuantityContainer = styled.div``;
const CartItemDeleteContainer = styled.div`
  color: #007185;
  margin-left: 16px;
  cursor: pointer;
`;
const CartItemPrice = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-left: 16px;
`;

const Container = styled.div`
  display: flex;
`;

export default CartItem;
