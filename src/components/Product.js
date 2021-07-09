import React from "react";
import styled from "styled-components";
import { db } from "./../firebase";

const Product = ({ title, price, rating, image, id }) => {
  const addToCart = () => {
    const cartItem = db.collection("cartItems").doc(id);
    cartItem.get().then((doc) => {
      if (doc.exists) {
        cartItem.update({ quantity: doc.data().quantity + 1 });
      } else {
        db.collection("cartItems").doc(id).set({
          name: title,
          image: image,
          price: price,
          quantity: 1,
        });
      }
    });
  };

  return (
    <Container>
      <Title>{title}</Title>
      <Rating>
        {Array(rating)
          .fill()
          .map(() => (
            <span>⭐</span>
          ))}
      </Rating>
      <Price>${price}</Price>
      <Image src={image} />
      <ActionSection>
        <AddToCartButton onClick={addToCart}>Add to Cart</AddToCartButton>
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

const Title = styled.h2`
  font-size: 15px;
  font-weight: 500;
  margin: 0;
  padding: 0;
  margin-top: 8px;
`;
const Price = styled.span`
  font-weight: 500;
  font-size: 21px;
  margin-top: 8px;
`;
const Rating = styled.div`
  font-size: 12px;
  margin-top: 8px;
`;
const Image = styled.img`
  margin-top: 12px;
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
  cursor: pointer;

  :hover {
    background: linear-gradient(to bottom, #f7dfa5, #ddb347);
  }
`;

export default Product;
