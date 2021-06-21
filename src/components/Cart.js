import React from "react";
import styled from "styled-components";
import CartItems from "./CartItems";
import CartTotal from "./CartTotal";

const Cart = ({ cartItems }) => {
  return (
    <Container>
      <CartItems cartItems={cartItems} />
      <CartTotal />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 14px 18px 0px 18px;
`;

export default Cart;
