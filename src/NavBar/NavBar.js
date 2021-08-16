import styled, { css } from "styled-components";
import React from "react";
import { useState } from "react";
import menuItems from "./MenuItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logoLotek from "../assets/logo.png";

const Nav = styled.nav`
  background: #fffaf6;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  @media (max-width: 960px) {
    position: relative;
  }
`;

const BurgerLogo = styled(FontAwesomeIcon).attrs({
  icon: faBars,
  size: "lg",
})`
  color: white;
`;

const NavMenu = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-gap: 50px;
  list-style: none;
  text-align: center;
  width: 60vw;
  justify-content: center;
  margin-right: 36px;

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

  @media (max-width: 960px) {
    text-align: center;
    padding: 32px;
    width: 100%;
    display: table;
  }

  :hover {
    border-radius: 0;
    color: rgb(148, 112, 58);
  }
`;

const Logo = styled.img`
  width: 160px;
  margin-top: 30px;
  margin-bottom: 16px;
`;

const Title = styled.div`
  font-size: 28px;
  font-family: "Lato", sans-serif;
  font-weight: 300;
  letter-spacing: 2px;
  color: rgb(148, 112, 58);

  margin-bottom: 4px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeaderLine = styled.hr`
  border-bottom: 0.1px solid #eae5e1;
  width: 100%;
`;

function NavBar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <div>
      <Nav>
        <BurgerLogo onClick={handleClick} />
        <Wrapper>
          <Logo src={logoLotek} alt="Logo" />
          <Title>LOTEK KALIPAH APO</Title>
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
        </Wrapper>
      </Nav>
    </div>
  );
}

export default NavBar;
