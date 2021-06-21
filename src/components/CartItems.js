import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";

const CartItems = () => {
  return (
    <Container>
      <Title>Shopping Cart</Title>
      <hr></hr>
      <ItemsContainer>
        <CartItem />
      </ItemsContainer>
    </Container>
  );
};

const Container = styled.div`
  height: 300px;
  flex: 0.8;
  background-color: white;
  margin-right: 18px;
  padding: 20px;
`;

const Title = styled.h2``;

const ItemsContainer = styled.div``;

export default CartItems;
