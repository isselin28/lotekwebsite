import styled from "styled-components";
import React, { useEffect, useState } from "react";
import menuItems from "./MenuItems";
import {
  faInstagram,
  faWhatsapp,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import logoLotek from "../../assets/logo.png";
import { Typography } from "../Typography";
import { Container } from "../Container";
import { Image } from "../Image";
import { Icon } from "../Icon";
import { Link } from "react-scroll";
import { withTheme } from "styled-components";
import { isMobileDevice } from "../../utils.js";
import { device } from "../../themes.js";
import { firebaseEvent } from "../../firebaseConfig";

const SectionContainer = styled(Container).attrs({
  justify: "center",
  align: "center",
})`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;

  background: #f7f0e8;
  box-shadow: 0 2px 4px 0 rgba(148, 112, 58, 0.1),
    0 4px 8px 0 rgba(148, 112, 58, 0.1);

  width: 100vw;
  height: 240px;

  @media ${device.desktop} {
    height: 260px;
  }
`;

const Nav = styled.nav`
  display: none;

  @media ${device.desktop} {
    display: block;
    position: relative;
    width: 80%;
    margin-top: 8px;
    margin-bottom: 0px;
  }
`;

const NavMenu = styled.ul`
  position: relative;
  list-style: none;
  text-align: center;
  padding: 0;

  @media ${device.desktop} {
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

  @media ${device.desktop} {
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

  @media ${device.desktop} {
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
  display: ${({ show }) => (show ? "block" : "none")};
  padding: 10px 20px;

  @media ${device.desktop} {
    display: block;
    position: absolute;
    top: 40px;
    left: initial;
    right: 10vw;
  }
`;

// Mobile Nav Components

const BurgerIcon = styled(Icon).attrs({
  icon: faBars,
  size: "2x",
})`
  display: block;
  position: absolute;
  top: 30px;
  right: 7vw;

  @media ${device.desktop} {
    display: none;
  }
`;

const Sticky = styled.div`
  position: -webkit-sticky;
  position: sticky;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 2;
`;

const MobileNavBar = styled.div`
  padding: 12px 20px 0px 20px;
  background-color: #f7f0e8;
  opacity: 0.8;
  height: 50px;
`;

const ModalContainer = styled.div`
  background-color: white;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;

  position: fixed;
  top: 0;
  left: 0;
  height: 125%;
  width: 100vw;

  @media ${device.desktop} {
    display: none;
  }
`;

const ModalContent = styled(Container).attrs({
  direction: "column",
  align: "center",
  justify: "space-around",
})`
  position: absolute;
  top: 5%;
  width: 100%;
  height: 80vh;
`;

const CloseIcon = styled.div`
  position: absolute;
  top: 12px;
  right: 7vw;
  z-index: 1; //bring forward icon so it's not overlapped & clickable

  font-size: 50px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary.dark};
`;

const MobileIconWrapper = styled(Icon)`
  padding: 10px 20px;
`;

const CopyRight = styled(Container).attrs({
  align: "center",
})`
  text-align: center;
  gap: 4px;
  padding: 15px 0;
`;

function NavList(props) {
  const { onClose } = props;
  const [navigationLinks, setNavigationLinks] = useState(menuItems);

  useEffect(() => {
    const loadMenuDistance = () => {
      return menuItems.map((menu) => {
        const id = menu.name.toString();
        let element = document.getElementById(id);

        return {
          ...menu,
          distanceFromTop: element.getBoundingClientRect().top,
        };
      });
    };

    window.onload = loadMenuDistance;
    let navigationLinksWithScroll = loadMenuDistance();
    setNavigationLinks(navigationLinksWithScroll);
  }, []);

  return (
    <NavMenu>
      {navigationLinks.map((item, index) => {
        return (
          <NavLinkWrapper key={index}>
            <NavLink
              to={item.name}
              spy={true}
              smooth="easeInOutQuad"
              duration={Math.abs(item.distanceFromTop)}
              isDynamic={true}
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
      fontawesome: faWhatsapp,
      name: "whatsapp",
      url: "https://wa.me/6281386041621",
    },
    {
      fontawesome: faMapMarkerAlt,
      name: "location",
      url: "https://goo.gl/maps/3bGVGfccvN3KL1Dh9",
    },
  ];

  if (isMobileNavOpen) {
    document.querySelector("body").style.overflow = "hidden";
  } else {
    document.querySelector("body").style.overflow = "visible";
  }

  return (
    <>
      {isMobileDevice() && (
        <Sticky>
          <MobileNavBar>
            <Container align="flex-end" justify="space-between" fullWidth>
              <Typography variant="label">LOTEK KALIPAH APO 42</Typography>
              <Icon
                icon={faBars}
                fontSize="28"
                onClick={() => setOpenMobileNav(true)}
              />
            </Container>
          </MobileNavBar>
        </Sticky>
      )}
      <SectionContainer>
        <Container direction="column" align="center" justify="center">
          <PositionWrapper top="40px" left="10vw">
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
            <InstagramIcon
              onClick={() => {
                firebaseEvent("Mobile: Instagram");
              }}
            />
          </a>

          <BurgerIcon
            onClick={() => {
              setOpenMobileNav(true);
              firebaseEvent("Mobile: Burger Menu");
            }}
          />
          <Nav>
            <NavList />
          </Nav>

          <HeaderLine />
        </Container>
      </SectionContainer>

      {isMobileNavOpen && (
        <ModalContainer>
          <CloseIcon onClick={() => setOpenMobileNav(false)}>&#215;</CloseIcon>
          <ModalContent as="nav">
            <NavList
              onClose={() => setOpenMobileNav(false)}
              showCloseIcon={isMobileNavOpen}
            />
            <Container align="center">
              <a
                href="https://www.instagram.com/lotekkalipahapo42"
                target="_blank"
                rel="noreferrer"
              >
                <InstagramIcon show={isMobileNavOpen.toString()} />
              </a>
              {iconLinkDetails.map((icon, idx) => (
                <a href={icon.url} target="_blank" rel="noreferrer" key={idx}>
                  <MobileIconWrapper
                    icon={icon.fontawesome}
                    size="lg"
                    onClick={() => firebaseEvent(`Mobile: Icon ${icon.name}`)}
                  />
                </a>
              ))}
            </Container>
            <a
              href="https://www.linkedin.com/in/isselinmoektijono/"
              target="_blank"
              rel="noreferrer"
            >
              <CopyRight onClick={() => firebaseEvent("Mobile: Linkedin")}>
                Website by - Isselin
                <Icon icon={faLinkedin} size="lg" />
              </CopyRight>
            </a>
          </ModalContent>
        </ModalContainer>
      )}
    </>
  );
}

export default withTheme(NavBar);
