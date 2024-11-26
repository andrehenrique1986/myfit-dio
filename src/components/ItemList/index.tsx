import React from "react";

import { Item } from "../../types";

interface ItemProps {
  item: Item;
}

import { Container, IconContainer, InfoContainer, Title, Kcal } from "./style";

const ItemList: React.FC<ItemProps> = ({ item }) => {
  return (
    <Container>
      <IconContainer></IconContainer>
      <InfoContainer>
        <Title>{item.name}</Title>
        <Kcal>{item.kcal} kcal</Kcal>
      </InfoContainer>
    </Container>
  );
};

export default ItemList;
