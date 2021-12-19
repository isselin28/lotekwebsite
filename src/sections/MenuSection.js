import React from "react";
import styled, { css } from "styled-components";
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  padding-bottom: 40px;
  column-gap: 50px;
  row-gap: 60px;
`;

const Item = styled(Typography).attrs({
  variant: "title",
})`
  font-size: ${({ header }) => (header ? "24px" : "20px")};
  font-style: normal;
  align-self: flex-start;

  ${({ header }) =>
    header &&
    css`
      margin-top: 20px;
      margin-bottom: 15px;
      border-bottom: 1px solid ${({ theme }) => theme.primary.dark};
      width: 100%;
      padding-right: 8px;
    `}
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
  const { specialties, drinks } = menuItems;
  return (
    <Container align="flex-start" justify="center">
      <MenuContainer direction="column" align="center" justify="center">
        <Divider />

        <Typography variant="title">Our Menu</Typography>

        <Item header>Specialties</Item>

        <Grid>
          <div>
            <Item>{specialties.featured.name}</Item>
            <Typography variant="body">{specialties.featured.body}</Typography>
            <ItemIngredient>{specialties.featured.ingredients}</ItemIngredient>
          </div>
          <Image src={foodLotek} width="320" height="170" />
          {specialties.list.map((item) => (
            <div>
              <Item>{item.name}</Item>
              <Typography variant="body">{item.body}</Typography>
              <ItemIngredient>{item.ingredients}</ItemIngredient>
            </div>
          ))}
        </Grid>

        <Item>{specialties.additional.name}</Item>
        <Grid>
          {specialties.additional.body.map((item) => (
            <div>
              <Typography variant="body">{item.name}</Typography>
              <Typography variant="body">{item.submenu}</Typography>
              <ItemIngredient>{item.options}</ItemIngredient>
            </div>
          ))}
        </Grid>

        <Item header>Dessert &amp; Drinks</Item>

        <Grid>
          <div>
            <Item>{drinks.featured.name}</Item>
            <Typography variant="body">{drinks.featured.body}</Typography>
            <ItemIngredient>{drinks.featured.ingredients}</ItemIngredient>
          </div>
          <Image src={foodKolakCampur} width="320" height="170" />
          {drinks.list.map((item) => (
            <div>
              <Item>{item.name}</Item>
              <Typography variant="body">{item.body}</Typography>
              <ItemIngredient>{item.ingredients}</ItemIngredient>
            </div>
          ))}
        </Grid>

        <Item>{drinks.additional.name}</Item>
        <Grid>
          {drinks.additional.body.map((item) => (
            <div>
              <Typography variant="body">{item.name}</Typography>
              <Typography variant="body">{item.submenu}</Typography>
              <ItemIngredient>{item.options}</ItemIngredient>
            </div>
          ))}
        </Grid>

        <Divider />
      </MenuContainer>
    </Container>
  );
}
