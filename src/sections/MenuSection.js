import React from "react";
import styled from "styled-components";
import { Container } from "../components/Container";
import { Typography } from "../components/Typography";
import { Icon } from "../components/Icon";
import { Image } from "../components/Image";
import { faPepperHot } from "@fortawesome/free-solid-svg-icons";
import * as menuData from "./menu.json";
import foodLotek from "../assets/food_lotek.jpg";
import foodKolakCampur from "../assets/food_kolakcampur.jpg";

const Line = styled.hr`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.primary.light};
  height: 1px;
  min-width: 100px;
  margin: 12px;
`;

const MenuContainer = styled(Container)`
  width: 50%;
`;

const Column = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  padding-bottom: 40px;
  column-gap: 50px;
  row-gap: 60px;
`;

const ItemName = styled(Typography).attrs({
  variant: "title",
})`
  font-size: 20px;
  font-style: normal;
  align-self: flex-start;
`;

const ItemIngredient = styled(Typography).attrs({
  variant: "body",
})`
  font-style: italic;
  padding-top: 14px;
`;

function Divider() {
  return (
    <Container align="center" margin="80">
      <Line />
      <Icon icon={faPepperHot} size="18" />
      <Icon icon={faPepperHot} size="18" />
      <Icon icon={faPepperHot} size="18" />
      <Line />
    </Container>
  );
}

export function MenuSection() {
  const { menuItems } = menuData.default;
  const { specialities, drinks } = menuItems;
  return (
    <Container align="flex-start" justify="center">
      <MenuContainer direction="column" align="center" justify="center">
        <Divider />

        <Typography variant="title">Our Menu</Typography>

        <Column>
          <div>
            <ItemName>{specialities.featured.name}</ItemName>
            <Typography variant="body">{specialities.featured.body}</Typography>
            <ItemIngredient>{specialities.featured.ingredients}</ItemIngredient>
          </div>
          <Image src={foodLotek} width="320" height="170" />
          {specialities.list.map((item) => (
            <div>
              <ItemName>{item.name}</ItemName>
              <Typography variant="body">{item.body}</Typography>
              <ItemIngredient>{item.ingredients}</ItemIngredient>
            </div>
          ))}
        </Column>

        <ItemName>{specialities.additional.name}</ItemName>
        <Column>
          {specialities.additional.body.map((item) => (
            <div>
              <Typography variant="body">{item.name}</Typography>
              <Typography variant="body">{item.submenu}</Typography>
              <ItemIngredient>{item.options}</ItemIngredient>
            </div>
          ))}
        </Column>

        <Column>
          <div>
            <ItemName>{drinks.featured.name}</ItemName>
            <Typography variant="body">{drinks.featured.body}</Typography>
            <ItemIngredient>{drinks.featured.ingredients}</ItemIngredient>
          </div>
          <Image src={foodKolakCampur} width="320" height="170" />
          {drinks.list.map((item) => (
            <div>
              <ItemName>{item.name}</ItemName>
              <Typography variant="body">{item.body}</Typography>
              <ItemIngredient>{item.ingredients}</ItemIngredient>
            </div>
          ))}
        </Column>

        <ItemName>{drinks.additional.name}</ItemName>
        <Column>
          {drinks.additional.body.map((item) => (
            <div>
              <Typography variant="body">{item.name}</Typography>
              <Typography variant="body">{item.submenu}</Typography>
              <ItemIngredient>{item.options}</ItemIngredient>
            </div>
          ))}
        </Column>

        <Divider />
      </MenuContainer>
    </Container>
  );
}
