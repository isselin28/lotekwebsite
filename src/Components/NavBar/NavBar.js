import styled from "styled-components";
import React, { useEffect, useState } from "react";
import menuItems from "./MenuItems";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faBars, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import logoLotek from "../../assets/logo.png";
import { Typography } from "../Typography";
import { Container } from "../Container";
import { Image } from "../Image";
import { Icon } from "../Icon";
import { Link } from "react-scroll";
import { withTheme } from "styled-components";

const SectionContainer = styled(Container).attrs({
  justify: "center",
  align: "center",
})`
  background: #f7f0e8;
  box-shadow: 0 2px 4px 0 rgba(148, 112, 58, 0.1),
    0 4px 8px 0 rgba(148, 112, 58, 0.1);

  width: 100vw;
  height: 260px;
`;

const ModalContainer = styled.div`
  z-index: 1;
  background-color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100vw;

  @media (min-width: 900px) {
    display: none;
  }
`;

const Nav = styled.nav`
  display: none;

  @media (min-width: 900px) {
    display: block;
    position: relative;
    width: 80%;
    margin-top: 8px;
    margin-bottom: 0px;
  }
`;

const NavMobileWrapper = styled.nav`
  display: flex;
  position: absolute;
  top: 20%;
`;

const NavMenu = styled.ul`
  position: relative;
  list-style: none;
  text-align: center;
  padding: 0;

  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-gap: 40px;
    justify-content: center;
    max-height: 36px;
    margin: 0px;
    padding: 0px;
  }
`;

const NavLinkWrapper = styled.li`
  padding: 10px;
  margin: 0;
`;

const NavLink = styled(Link)`
  color: ${({ theme }) => theme.default};
  padding: 16px 16px;
  text-align: center;
  padding: 0;

  @media (min-width: 900px) {
    display: table;
    width: 100%;
    text-align: left;
    letter-spacing: -0.5px;
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
  text-align: center;
  width: 80%;
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
  display: none;
  position: absolute
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  line-height: 1.3;
  color: ${({ theme }) => theme.primary.dark};

  @media (min-width: 900px) {
    display: block;
    top: 40px;
    left: 30px;
  } ;
`;

const PositionWrapper = styled.div`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
`;

const InstagramIcon = styled(Icon).attrs({
  icon: faInstagram,
  size: "lg",
})`
  display: ${({ isModalOpen }) => (isModalOpen ? "block" : "none")};
  padding: 10px;

  @media (min-width: 900px) {
    display: block;
    position: absolute;
    top: 40px;
    left: initial;
    right: 15vw;
  }
`;

const BurgerIcon = styled(Icon).attrs({
  icon: faBars,
  size: "2x",
})`
  display: block;
  position: absolute;
  top: 50px;
  right: 20px;

  @media (min-width: 900px) {
    display: none;
  }
`;

const CloseIcon = styled.div`
  position: absolute;
  top: 40px;
  right: 20px;

  font-size: 50px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary.dark};
`;

const IconWrapper = styled(Icon)`
  padding: 10px;
`;

function NavList(props) {
  const { onClose } = props;
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
    <NavMenu>
      {navigationLinks.map((item, index) => {
        return (
          <NavLinkWrapper key={index}>
            <NavLink
              to={item.name}
              spy={true}
              smooth={true}
              duration={item.distanceFromTop / 1.2}
              onClick={onClose}
            >
              {item.title}
            </NavLink>
          </NavLinkWrapper>
        );
      })}
    </NavMenu>
  );
}

function NavBar() {
  const [isMobileNavOpen, setOpenMobileNav] = useState(false);

  const iconLinkDetails = [
    {
      name: faWhatsapp,
      url: "https://wa.me/6281386041621",
    },
    {
      name: faMapMarkerAlt,
      url: "https://goo.gl/maps/3bGVGfccvN3KL1Dh9",
    },
  ];

  return (
    <>
      <SectionContainer>
        <Container direction="column" align="center" justify="center">
          <PositionWrapper top="40px" left="15vw">
            <TextDescription variant="body">
              Jl. Batang Hari No.21,
              <br /> Cideng, Gambir, Jakarta 10150
            </TextDescription>
          </PositionWrapper>
          <Logo src={logoLotek} alt="Logo" />
          <Title>LOTEK KALIPAH APO 42</Title>

          <a
            href="https://www.instagram.com/lotekkalipahapo42"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon />
          </a>

          <BurgerIcon onClick={() => setOpenMobileNav(true)} />
          <Nav>
            <NavList />
          </Nav>

          <HeaderLine />
        </Container>
      </SectionContainer>

      {isMobileNavOpen && (
        <ModalContainer>
          <CloseIcon onClick={() => setOpenMobileNav(false)}>&#215;</CloseIcon>
          <Container direction="column" align="center">
            <NavMobileWrapper>
              <NavList
                onClose={() => setOpenMobileNav(false)}
                showCloseIcon={isMobileNavOpen}
              />
            </NavMobileWrapper>
            <Container align="center">
              <a
                href="https://www.instagram.com/lotekkalipahapo42"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon isModalOpen={isMobileNavOpen} />
              </a>
              {iconLinkDetails.map((icon, idx) => (
                <a href={icon.url} target="_blank" rel="noreferrer" key={idx}>
                  <IconWrapper icon={icon.name} size="lg" />
                </a>
              ))}
            </Container>
          </Container>
        </ModalContainer>
      )}
    </>
  );
}

export default withTheme(NavBar);
