import styled from "styled-components";
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import houseImage from "./assets/house_front_pencil.jpeg";
import houseInside from "./assets/inside_pencil_2.jpeg";
import StripImage from "./components/StripImage";
import { Container } from "./components/Container";
import { FeaturedSection } from "./sections/FeaturedSection.js";
import { LocationSection } from "./sections/LocationSection.js";
import { MenuSection } from "./sections/MenuSection.js";
import { FooterSection } from "./sections/FooterSection.js";
import AboutSection from "./sections/AboutSection.js";
import { withTheme } from "styled-components";
import { FloatingButton } from "./components/FloatingButton/FloatingButton";

function App() {
  return (
    <>
      <FloatingButton />
      <div id="home" />
      <NavBar />
      <StripImage imageUrl={houseImage} position="top center" size="contain" />

      <AboutSection />

      <FeaturedSection />

      <MenuSection />

      <LocationSection />

      <StripImage
        imageUrl={houseInside}
        position="bottom center"
        size="cover"
        opacity="0.5"
      />

      <FooterSection />
    </>
  );
}

export default withTheme(App);
