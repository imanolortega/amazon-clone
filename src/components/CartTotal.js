import React from "react";
import styled from "styled-components";
import NumberFormat from "react-number-format";

const CartTotal = ({cartItems}) => {
  const getCountCart = () => {
    let count = 0
    cartItems.forEach((item) => {
      count += item.product.quantity;
    });

    return count;
  }

  const getTotal = () => {
    let total = 0;
    cartItems.forEach(item => {
      total += (item.product.price * item.product.quantity);
    });
    return total;
  }
  return <Container>
  <h2>Cart Total ({getCountCart()} items): {<NumberFormat value={getTotal()} displayType={'text'} thousandSeparator={true} prefix={'$'} />
}</h2>
  <CheckoutButton>Proceed to Checkout</CheckoutButton>
  </Container>;
};

const Container = styled.div`
  flex: 0.2;
  background-color: white;
  padding: 20px;
`;

const CheckoutButton = styled.div`
  display:flex;
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

  :hover{
    background: linear-gradient(to bottom, #f7dfa5, #ddb347);
  }
`;

export default CartTotal;
