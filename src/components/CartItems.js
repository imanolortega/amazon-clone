import React from "react";
import styled from "styled-components";
import CartItem from "./CartItem";

const CartItems = ({ cartItems }) => {
  return (
    <Container>
      <Title>Shopping Cart</Title>
      <hr></hr>
      <ItemsContainer>
        {cartItems.map((item) => (
          <CartItem id={item.id} item={item.product} />
        ))}
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
