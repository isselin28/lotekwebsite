import styled from "styled-components";
import React from "react";
import menuItems from "./MenuItems";

const Nav = styled.div`
  display: flex;
`;

const Logo = styled.div``;

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
