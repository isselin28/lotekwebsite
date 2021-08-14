import styled from "styled-components";
import React from "react";
import menuItems from "./MenuItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

const Nav = styled.div`
  display: flex;
`;

const Logo = styled(FontAwesomeIcon).attrs({
  icon: faShoppingBasket,
  size: "lg",
})``;

function NavBar() {
  return (
    <div>
      <Nav>
        <Logo />
      </Nav>
      <ul>
        {menuItems.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.url}>{item.title}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default NavBar;
