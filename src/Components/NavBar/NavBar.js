import styled, { css } from "styled-components";
import React from "react";
import { useState } from "react";
import menuItems from "./MenuItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logoLotek from "../../assets/logo.png";

const Nav = styled.nav`
  background: #f7f0e8;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  @media (max-width: 960px) {
    position: relative;
  }

  margin-bottom: 30px;
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

  position: relative;
`;

const HeaderLine = styled.hr`
  background-color: #eae5e1;
  margin: 0px;
  width: 100vw;
`;

const TextDescription = styled.div`
  font-size: 11px;
  font-family: "Lato", sans-serif;
  font-weight: 500;
  color: #605e5e;
  text-transform: uppercase;

  margin-bottom: 4px;
  position: absolute;
  left: 40px;
  top: 30px;
  letter-spacing: 1px;
`;

const SocialMediaWrapper = styled(TextDescription)`
  font-size: 11px;
  font-family: "Lato", sans-serif;
  font-weight: 500;
  color: #605e5e;
  text-transform: uppercase;

  margin-bottom: 4px;
  position: absolute;
  top: 20px;
  right: 40px;
  letter-spacing: 1px;
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
          <TextDescription>
            Jl. Batang Hari No.21,
            <br /> Cideng, Gambir, Jakarta 10150
          </TextDescription>
          {/* <SocialMediaWrapper>
            <i class="fab fa-instagram fa-2x" />
            Hello
          </SocialMediaWrapper> */}
          <Logo src={logoLotek} alt="Logo" />
          <Title>LOTEK KALIPAH APO 42</Title>
          {/* <Title>Sedjak 1953</Title> */}

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
