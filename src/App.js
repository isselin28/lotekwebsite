import React from "react";
import styled from "styled-components";
import NavBar from "./components/NavBar/NavBar";
import houseImage from "./assets/house_front_pencil.jpeg";
import houseInside from "./assets/house_inside_pencil.png";
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
import { device } from "./themes.js";

const MobileImage = styled(Image)`
  object-position: 0% 100%;
  max-height: 60vw;
  margin-bottom: -3px;
`;

const ContentWrapper = styled.div`
  padding-top: 200px;

  @media ${device.desktop} {
    padding-top: 260px;
  }
`;

const FullWidthWrapper = styled.div`
  width: 100vw;
`;

function App() {
  return (
    <FullWidthWrapper>
      {!isMobileDevice() && <FloatingButton />}

      <div id="home" />
      <NavBar />

      <ContentWrapper>
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
      </ContentWrapper>
    </FullWidthWrapper>
  );
}

export default withTheme(App);
