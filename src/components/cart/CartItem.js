import React from "react";
import styled from "styled-components";
import { db } from "../../firebase";

const CartItem = ({ id, item }) => {
  const deleteItem = (e) => {
    e.preventDefault();
    db.collection("cartItems").doc(id).delete();
  };

  let options = [];
  for (let i = 1; i < Math.max(item.quantity + 1, 21); i++) {
    options.push(<option value={i}> Qty: {i}</option>);
  }

  const changeQuantity = (e) => {
    db.collection("cartItems")
      .doc(id)
      .update({
        quantity: parseInt(e),
      });
  };

  return (
    <Container>
      <ImageContainer>
        <img alt="Soda Stream" src={item.image}></img>
      </ImageContainer>

      <CartItemInfo>
        <CartItemInfoTop>
          <h3>{item.name}</h3>
        </CartItemInfoTop>
        <CartItemInfoBottom>
          <CartItemQuantityContainer>
            <select
              onChange={(e) => changeQuantity(e.target.value)}
              value={item.quantity}>
              {options}
            </select>
          </CartItemQuantityContainer>
          <CartItemDeleteContainer onClick={deleteItem}>
            Delete
          </CartItemDeleteContainer>
        </CartItemInfoBottom>
      </CartItemInfo>

      <CartItemPrice>${item.price}</CartItemPrice>
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
const CartItemInfo = styled.div`
  flex-grow: 1;
`;
const CartItemInfoTop = styled.div`
  color: #007185;

  hr {
    color: #d5d9d9 !important;
  }import db from './../firebase';


  h3 {
    font-size: 18px;
    margin-top: 0;
    margin-bottom: 0;
  }
`;
const CartItemInfoBottom = styled.div`
  display: flex;
  margin-top: 4px;
  align-items: center;
`;
const CartItemQuantityContainer = styled.div`
  select {
    cursor: pointer;
    border-color: #D5D9D9;
    border-radius: 8px;
    background-color: #f0f2f2;
    padding: 8px;
    box-shadow: 0 2px 5px 0 rgb(213 217 217 / 50%);
    font-size: 13px;
    line-height: 29px;
    margin: 0;
    outline: 0;
    padding: 0 10px 0 11px

    :focus {
      outline: none;
    } 
  }
  select:hover{
    background-color: #dfe2e2;
  }
`;
const CartItemDeleteContainer = styled.div`
  font-size: 13px;
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
  padding-top: 12px;
  padding-bottom: 12px;
  display: flex;
  border-bottom: 1px solid #d5d9d9;
`;

export default CartItem;
