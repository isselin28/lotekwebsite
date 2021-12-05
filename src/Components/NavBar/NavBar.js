import styled, { css } from "styled-components";
import React from "react";
import menuItems from "./MenuItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import logoLotek from "../../assets/logo.png";
import { Typography } from "../Typography";
import { Container } from "../Container";
import { Image } from "../Image";

const NavContainer = styled(Container).attrs({
  justify: "center",
  align: "center",
})`
  background: #f7f0e8;
  height: 250px;
  position: relative;
`;

const Nav = styled.nav`
  margin-bottom: 30px;
`;

const BurgerLogo = styled(FontAwesomeIcon).attrs({
  icon: faBars,
  size: "lg",
})`
  color: white;
`;

const SocialMediaIcon = styled(FontAwesomeIcon).attrs({
  size: "lg",
})`
  color: #94703a;
  padding: 4px;
`;

const NavMenu = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 50px;
  list-style: none;
  text-align: center;
  width: 70vw;
  justify-content: center;
  max-height: 36px;
  margin: 10px;
  padding: 0px;

  @media (max-width: 960px) {
    ${(active) => {
      active
        ? css`
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 500px;
            position: absolute;
            top: 80px;
            left: -100%;
            opacity: 1;
            transition: all 0.5s ease;
          `
        : css`
            backround: #6668f4;
            left: 0;
            opacity: 1;
            transition: all 0.5s ease;
            z-index: 1;
          `;
    }}
  }
`;

const NavLink = styled.a`
  font-size: 15px;
  color: #605e5e;
  text-decoration: none;
  padding: 4px 16px;
  letter-spacing: -0.5px;

  @media (max-width: 960px) {
    text-align: center;
    padding: 16px;
    width: 100%;
    display: table;
  }

  :hover {
    border-radius: 0;
    color: rgb(148, 112, 58);
  }
`;

const Logo = styled(Image).attrs({
  width: 160,
})`
  margin-top: 30px;
  margin-bottom: 16px;
`;

const Title = styled(Typography).attrs({ variant: "title" })`
  font-size: 28px;
  font-family: "Lato", sans-serif;
  font-style: normal;
  letter-spacing: 2px;
  margin-bottom: 4px;
`;

const HeaderLine = styled.hr`
  border: none;
  border-bottom: 0.5px solid #94703a;
  height: 0.5px;
  margin: 4px;
  width: 100vw;
`;

const TextDescription = styled(Typography).attrs({
  variant: "body",
})`
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  line-height: 1.3;
`;

const PositionWrapper = styled.div`
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  right: ${(props) => props.right}px;
`;

function NavBar() {
  return (
    <NavContainer>
      <Nav>
        <BurgerLogo />
        <Container direction="column" align="center" justify="center">
          <PositionWrapper top="40" left="150">
            <TextDescription variant="body">
              Jl. Batang Hari No.21,
              <br /> Cideng, Gambir, Jakarta 10150
            </TextDescription>
          </PositionWrapper>
          <Logo src={logoLotek} alt="Logo" />
          <Title>LOTEK KALIPAH APO 42</Title>

          <PositionWrapper top="40" right="170">
            <SocialMediaIcon icon={faInstagram} />
            <SocialMediaIcon icon={faWhatsapp} />
          </PositionWrapper>

          <NavMenu>
            {menuItems.map((item, index) => {
              return (
                <li key={index}>
                  <NavLink href={item.url}>{item.title}</NavLink>
                </li>
              );
            })}
          </NavMenu>
          <HeaderLine />
        </Container>
      </Nav>
    </NavContainer>
  );
}

export default NavBar;
