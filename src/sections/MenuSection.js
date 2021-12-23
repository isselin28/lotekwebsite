import React from "react";
import styled, { css } from "styled-components";
import { Container } from "../components/Container";
import { Typography } from "../components/Typography";
import { Icon } from "../components/Icon";
import { Image } from "../components/Image";
import { faPepperHot } from "@fortawesome/free-solid-svg-icons";
import * as menuData from "./data/menu.json";
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
  width: 55%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(0, 1fr);
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
      margin-top: 40px;
      margin-bottom: 15px;
      border-bottom: 1px solid ${({ theme }) => theme.primary.dark};
      width: 100%;
    `}
`;

const ItemIngredient = styled(Typography).attrs({
  variant: "body",
})`
  font-style: italic;
  padding-top: ${({ options }) => (options ? "4px" : "14px")};
`;

const VegetarianIcon = styled(Container).attrs({
  align: "center",
  justify: "center",
})`
  border-radius: 50%;
  background-color: #e9db89;
  width: 25px;
  height: 25px;
  color: ${({ theme }) => theme.background};
`;

const SpicyIcon = styled(Icon).attrs({
  icon: faPepperHot,
  size: "lg",
})`
  color: #de5021;
`;

const ItemImage = styled(Image).attrs({
  height: 170,
  responsive: true,
})`
  object-position: 0 45%;
`;

const FlexColumn = styled(Container)`
  flex: 1;
`;

function Divider() {
  return (
    <Container align="center" margin="80">
      <Line />
      <Icon icon={faPepperHot} fontSize="18" />
      <Icon icon={faPepperHot} fontSize="18" />
      <Icon icon={faPepperHot} fontSize="18" />
      <Line />
    </Container>
  );
}

export function MenuSection() {
  const { menuItems } = menuData.default;
  const { main, drinks } = menuItems;

  const dishLabel = (veggie, spicy) => {
    return (
      <Container align="center" padding="10">
        {veggie && <VegetarianIcon>V</VegetarianIcon>}
        {spicy && <SpicyIcon />}
      </Container>
    );
  };

  return (
    <Container align="flex-start" justify="center">
      <div id="menu" />
      <MenuContainer direction="column" align="center" justify="center">
        <Divider />

        <Typography variant="title">Our Menu</Typography>

        <Item header>Main Course</Item>

        <Grid>
          <div>
            <Item>{main.featured.name}</Item>
            <Typography variant="body">{main.featured.body}</Typography>
            <Container>
              <ItemIngredient>{main.featured.ingredients}</ItemIngredient>
              {dishLabel(main.featured.vegetarian, main.featured.spicy)}
            </Container>
          </div>
          <ItemImage src={foodLotek} alt="Lotek khas Kalipah Apo" />
          {main.list.map((item, idx) => (
            <div key={`main_list_${idx}`}>
              <Item>{item.name}</Item>
              <Typography variant="body">{item.body}</Typography>
              <Container>
                <ItemIngredient>{item.ingredients}</ItemIngredient>
                {dishLabel(item.vegetarian, item.spicy)}
              </Container>
            </div>
          ))}
        </Grid>

        <Item>{main.additional.name}</Item>
        <Container justify="space-between" gap="50" fullWidth>
          {main.additional.body.map((item, idx) => (
            <FlexColumn direction="column" key={`main_additional_${idx}`}>
              <Typography variant="body">{item.submenu}</Typography>
              <Container>
                <ItemIngredient options>{item.options}</ItemIngredient>
                {dishLabel(main.additional.vegetarian, main.additional.spicy)}
              </Container>
            </FlexColumn>
          ))}
        </Container>

        <Container padding="30" gap="16">
          <Container align="center" gap="8">
            <VegetarianIcon>V</VegetarianIcon>Vegetarian
          </Container>
          <Container align="center" gap="4">
            <SpicyIcon />
            Spicy
          </Container>
        </Container>

        <Item header>Dessert &amp; Drinks</Item>

        <Grid>
          <div>
            <Item>{drinks.featured.name}</Item>
            <Typography variant="body">{drinks.featured.body}</Typography>
            <ItemIngredient>{drinks.featured.ingredients}</ItemIngredient>
          </div>
          <ItemImage src={foodKolakCampur} alt="Kolak Campur" />
          {drinks.list.map((item, idx) => (
            <div key={`drinks_list_${idx}`}>
              <Item>{item.name}</Item>
              <Typography variant="body">{item.body}</Typography>
              <ItemIngredient>{item.ingredients}</ItemIngredient>
            </div>
          ))}
        </Grid>

        <Item>{drinks.additional.name}</Item>
        <Container justify="space-between" gap="50" fullWidth>
          {drinks.additional.body.map((item, idx) => (
            <FlexColumn direction="column" key={`drinks_additional_${idx}`}>
              <Typography variant="body">{item.submenu}</Typography>
              <ItemIngredient options>{item.options}</ItemIngredient>
            </FlexColumn>
          ))}
        </Container>

        <Divider />
      </MenuContainer>
    </Container>
  );
}
