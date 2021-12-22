import styled, { css } from "styled-components";
import React, { useEffect, useState } from "react";
import menuItems from "./MenuItems";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

import logoLotek from "../../assets/logo.png";
import { Typography } from "../Typography";
import { Container } from "../Container";
import { Image } from "../Image";
import { Icon } from "../Icon";
import { Link } from "react-scroll";
import { withTheme } from "styled-components";

const NavContainer = styled(Container).attrs({
  justify: "center",
  align: "center",
})`
  background: #f7f0e8;
  box-shadow: 0 2px 4px 0 rgba(148, 112, 58, 0.1),
    0 4px 8px 0 rgba(148, 112, 58, 0.1);

  width: 100%;
  max-width: 100vw;
  height: 250px;
`;

const Nav = styled.nav`
  position: relative;
  width: 80%;
  margin-top: 28px;
  margin-bottom: 30px;
`;

const NavMenu = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 50px;
  list-style: none;
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
            background: #6668f4;
            left: 0;
            opacity: 1;
            transition: all 0.5s ease;
            z-index: 1;
          `;
    }}
  }
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.default};
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
    cursor: pointer;
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
  border-bottom: 0.5px solid ${({ theme }) => theme.primary.dark};
  height: 0.5px;
  margin: 0;
  padding-top: 8px;
  width: 99vw;
  opacity: 0.6;
`;

const TextDescription = styled(Typography).attrs({
  variant: "body",
})`
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  line-height: 1.3;
  color: ${({ theme }) => theme.primary.dark};
`;

const PositionWrapper = styled.div`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
`;

function NavBar() {
  const [navigationLinks, setNavigationLinks] = useState(menuItems);

  useEffect(() => {
    const load = () => {
      const navigationLinksWithScroll = menuItems.map((menu) => {
        const id = menu.name.toString();
        let element = document.getElementById(id);

        return { ...menu, distanceFromTop: element.offsetTop };
      });

      setNavigationLinks(navigationLinksWithScroll);
    };
    window.onload = load;
  }, []);

  return (
    <NavContainer>
      <Nav>
        <Container direction="column" align="center" justify="center">
          <PositionWrapper top="40px" left="30px">
            <TextDescription variant="body">
              Jl. Batang Hari No.21,
              <br /> Cideng, Gambir, Jakarta 10150
            </TextDescription>
          </PositionWrapper>
          <Logo src={logoLotek} alt="Logo" />
          <Title>LOTEK KALIPAH APO 42</Title>

          <PositionWrapper top="40px" right="30px">
            <a
              href="https://www.instagram.com/lotekkalipahapo42"
              target="_blank"
              rel="noreferrer"
            >
              <Icon icon={faInstagram} size="lg" />
            </a>
          </PositionWrapper>

          <NavMenu>
            {navigationLinks.map((item, index) => {
              return (
                <li key={index}>
                  <NavLink
                    to={item.name}
                    spy={true}
                    smooth={true}
                    duration={item.distanceFromTop / 1.2}
                  >
                    {item.title}
                  </NavLink>
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

export default withTheme(NavBar);
