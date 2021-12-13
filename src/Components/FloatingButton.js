import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Icon } from "./Icon";
import { Container } from "./Container";
import { Typography } from "./Typography";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { faClock, faEnvelope } from "@fortawesome/free-regular-svg-icons";

const RoundButton = styled.div`
  color: ${({ theme }) => theme.primary.dark};
  background-color: ${({ theme }) => theme.background};
  border: 1.5px solid ${({ theme }) => theme.primary.dark};
  box-shadow: 1px 2px 4px #c6c6c6;
  border-radius: 50%;
  height: 36px;
  width: 36px;

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  padding: 4px;
  margin: 4px;

  :active,
  :hover {
    cursor: pointer;
    color: white;
    background-color: ${({ theme }) => theme.primary.light};
    border: 1.5px solid ${({ theme }) => theme.primary.light};
  }

  :active,
  :hover ${Icon} {
    cursor: pointer;
    color: white;
  }
`;

const AnimateText = styled(Typography).attrs({
  variant: "body",
})`
  display: none;
  color: white;
  font-size: 13px;

  padding-top: 4px;
  padding-left: 4px;
`;

const ArrowDown = styled(Icon).attrs({
  icon: faChevronDown,
  size: "sm",
})`
  position: absolute;
  color: white;
  display: none;
  padding-left: 0;
  right: -15px;
`;

const ClockIcon = styled(Icon).attrs({
  icon: faClock,
  size: "lg",
})`
  position: absolute;
  padding-left: 0;
  left: 12px;
`;

const AnimateButton = styled(RoundButton)`
  @keyframes shape {
    20% {
      border-radius: 40px;
    }
    50% {
      border-radius: 32px;
    }
    100% {
      border-radius: 24px;
    }
  }

  @keyframes showup {
    0% {
      display: none;
      opacity: 0;
    }
    50% {
      display: none;
      opacity: 0.3;
    }
    80% {
      display: block;
      opacity: 0.8;
    }
    100% {
      display: block;
      opacity: 1;
    }
  }

  :hover {
    ${({ animate }) =>
      animate &&
      css`
        width: 100%;
        border-radius: 24px;
        transition-duration: 500ms;
        transition-timing-function: ease-in;

        animation: shape;
        animation-duration: 2s;

        padding: 0 12px 0 20px;
      `}
  }

  :hover ${Icon} {
    ${({ animate }) =>
      animate &&
      css`
        animation: showup 1.8s;
      `}
  }

  :hover ${AnimateText} {
    ${({ animate }) =>
      animate &&
      css`
        display: block;
        padding: 0;
        margin: 0;
        animation: showup 1.8s;
      `}
  }

  :active,
  :hover ${ArrowDown} {
    ${({ animate }) =>
      animate &&
      css`
        display: block;
        animation: showup 1.8s;
        transform: translateX(-25px);
      `}
  }
`;

const StickyWrapper = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 25%;
  z-index: 1;
`;

const FloatingWrapper = styled(Container).attrs({
  justify: "flex-end",
})`
  position: absolute;
  top: 50%;
  right: 20px;
`;

const OpeningHourWrapper = styled(Container).attrs({
  direction: "column",
  fullWidth: true,
})`
  max-width: 100%;
  background-color: ${({ theme }) => theme.background};
  border: 1.5px solid ${({ theme }) => theme.primary.dark};
  border-radius: 8px;
  padding: 12px 16px;
  margin-right: 4px;
  margin-bottom: 4px;

  box-shadow: 1px 2px 4px #c6c6c6;
  z-index: 1;
`;

const iconLinkDetails = [
  {
    name: faWhatsapp,
    url: "https://wa.me/6281386041621",
    animate: false,
  },
  {
    name: faMapMarkerAlt,
    url: "https://goo.gl/maps/3bGVGfccvN3KL1Dh9",
    animate: false,
  },
];

const openingHours = [
  {
    day: "Monday",
    time: "10am - 3pm",
  },
  {
    day: "Tuesday",
    time: "10am - 3pm",
  },
  {
    day: "Wednesday",
    time: "10am - 3pm",
  },
  {
    day: "Thursday",
    time: "10am - 3pm",
  },
  {
    day: "Friday",
    time: "10am - 3pm",
  },
  {
    day: "Saturday",
    time: "10am - 3pm",
  },
  {
    day: "Sunday",
    time: "Closed",
  },
];

export function FloatingButton() {
  const [showDetail, setShowDetail] = useState(false);

  const handleMouseOut = (event) => {
    const button = event.currentTarget;
    if (button) {
      setShowDetail(false);
    }
  };

  return (
    <StickyWrapper>
      <FloatingWrapper direction="column" align="flex-end">
        {iconLinkDetails.map((icon) => (
          <a href={icon.url} target="_blank" rel="noreferrer">
            <RoundButton animate={icon.animate}>
              <Icon icon={icon.name} size="lg" />
            </RoundButton>
          </a>
        ))}

        <AnimateButton
          animate
          onClick={() => setShowDetail(true)}
          onMouseLeave={handleMouseOut}
        >
          <Container justify="space-between" align="center">
            <ClockIcon />
            <AnimateText>Closed, open tomorrow 10am</AnimateText>
            <ArrowDown />
          </Container>
        </AnimateButton>
        {showDetail && (
          <OpeningHourWrapper>
            {openingHours.map((detail) => (
              <Container justify="space-between" padding="4">
                <div>{detail.day}</div>
                <div>{detail.time}</div>
              </Container>
            ))}
          </OpeningHourWrapper>
        )}

        <AnimateButton animate>
          <Icon icon={faEnvelope} size="lg" />
        </AnimateButton>
      </FloatingWrapper>
    </StickyWrapper>
  );
}
