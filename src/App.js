import React from "react";
import styled from "styled-components";
import NavBar from "./components/NavBar/NavBar";
import houseImage from "./assets/house_front_pencil.jpeg";
import houseInside from "./assets/inside_pencil_2.jpeg";
import StripImage from "./components/StripImage";
import { Image } from "./components/Image";
import { FeaturedSection } from "./sections/FeaturedSection.js";
import { LocationSection } from "./sections/LocationSection.js";
import { MenuSection } from "./sections/MenuSection.js";
import { FooterSection } from "./sections/FooterSection.js";
import AboutSection from "./sections/AboutSection.js";
import { withTheme } from "styled-components";
import { FloatingButton } from "./components/FloatingButton/FloatingButton";
import { isMobileDevice } from "./utils.js";

const MobileImage = styled(Image)`
  object-position: 0% 100%;
  max-height: 30vh;
  margin-bottom: -3px;
`;

function App() {
  return (
    <>
      {!isMobileDevice() && <FloatingButton />}
      <div id="home" />
      <NavBar />
      {isMobileDevice() ? (
        <Image src={houseImage} alt="Lotek Kalipah Apo House" responsive />
      ) : (
        <StripImage
          imageUrl={houseImage}
          position="top center"
          size="contain"
        />
      )}

      <AboutSection />
      <FeaturedSection />
      <MenuSection />
      <LocationSection />

      {isMobileDevice() ? (
        <MobileImage
          src={houseInside}
          alt="Lotek Kalipah Apo Table"
          responsive
        />
      ) : (
        <StripImage
          imageUrl={houseInside}
          position="bottom center"
          size="cover"
          opacity="0.5"
        />
      )}
      <FooterSection />
    </>
  );
}

export default withTheme(App);
