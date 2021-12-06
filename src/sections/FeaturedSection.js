import React from "react";
import styled from "styled-components";
import republika from "../assets/logo_republika.png";
import detikfood from "../assets/logo_detikfood.png";
import cnn from "../assets/logo_cnn.png";
import kompastv from "../assets/logo_kompastv.png";
import sedap from "../assets/logo_sedap.png";
import { Image } from "../components/Image";
import { Container } from "../components/Container";
import { Typography } from "../components/Typography";

const FeaturedWrapper = styled(Container).attrs({
  align: "center",
  justify: "center",
})`
  position: relative;
  gap: 10px;
  margin-top: 80px;
  margin-bottom: 80px;
`;

const FeaturedLogoWrapper = styled(Container)`
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  right: ${(props) => props.right}px;
`;

export function FeaturedSection() {
  return (
    <Container align="center" justify="center" direction="column">
      <Typography variant="body">Featured On</Typography>
      <FeaturedWrapper>
        <FeaturedLogoWrapper
          direction="column"
          justify="flex-end"
          align="flex-end"
          padding="16"
          top="-45"
          right="100"
        >
          <FeaturedLogoWrapper padding="16" top="-15" left="-165">
            <a
              href="https://youtu.be/mlD6Ly4LtUg?t=222"
              target="_blank"
              rel="noreferrer"
            >
              <Image width="210" src={kompastv} alt="kompastv" />
            </a>
          </FeaturedLogoWrapper>

          <FeaturedLogoWrapper top="70" left="-175">
            <a
              href="https://food.detik.com/berita-boga/d-4870199/menjajal-nikmatnya-lotek-kalipah-apo-42-di-bandung"
              target="_blank"
              rel="noreferrer"
            >
              <Image width="195" src={detikfood} alt="detikfood" />
            </a>
          </FeaturedLogoWrapper>
        </FeaturedLogoWrapper>
        <a
          href="https://www.cnnindonesia.com/gaya-hidup/20150807152946-262-70734/kalipah-apo-lotek-bandung-warisan-nenek-dari-masa-lampau"
          target="_blank"
          rel="noreferrer"
        >
          <Image width="90" height="90" src={cnn} alt="cnn" />
        </a>
        <FeaturedLogoWrapper
          direction="column"
          justify="flex-start"
          align="flex-start"
          padding="15"
          top="15"
          left="95"
          gap="15"
        >
          <Image width="170" height="45" src={sedap} alt="sedap" />
          <a
            href="https://www.republika.co.id/berita/nsp9jd328/lotek-kalipah-apo-bertahan-hingga-tiga-generasi"
            target="_blank"
            rel="noreferrer"
          >
            <Image width="245" src={republika} alt="republika" />
          </a>
        </FeaturedLogoWrapper>
      </FeaturedWrapper>
    </Container>
  );
}
