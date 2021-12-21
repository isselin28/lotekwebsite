import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Icon } from "../Icon";
import { Container } from "../Container";
import { Typography } from "../Typography";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { RoundButton } from "./RoundButton";

const AnimateText = styled(Typography).attrs({
  variant: "body",
})`
  display: none;
  color: ${({ theme }) => theme.background};
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
  right: -10px;
`;

const ClockIcon = styled(Icon).attrs({
  icon: faClock,
  size: "lg",
})`
  position: absolute;
  padding-left: 0;
  left: 18px;
  font-size: 22px;
`;

const AnimateButton = styled(RoundButton)`
  @keyframes shape {
    20% {
      border-radius: 48px;
    }
    50% {
      border-radius: 40px;
    }
    100% {
      border-radius: 32px;
    }
  }

  @keyframes showup {
    0% {
      display: none;
      opacity: 0;
    }
    20% {
      display: none;
      opacity: 0;
    }
    60% {
      display: none;
      opacity: 0.5;
    }
    100% {
      display: block;
      opacity: 1;
    }
  }

  :active,
  :hover {
    ${({ animate, isOpen }) =>
      animate &&
      css`
        width: 100%;
        border-radius: 32px;
        transition-duration: 500ms;
        transition-timing-function: ease-in;
        border: none;

        animation: shape;
        animation-duration: 2s;

        padding-right: 20px;
        padding-left: 24px;

        background-color: ${({ theme }) =>
          isOpen ? theme.primary.light : theme.default};
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
  top: 30%;
  z-index: 1;
`;

const FloatingWrapper = styled(Container).attrs({
  justify: "flex-end",
})`
  position: absolute;
  top: 50%;
  right: 40px;
`;

const OpeningHourWrapper = styled(Container).attrs({
  direction: "column",
  fullWidth: true,
})`
  max-width: 100%;
  background-color: ${({ theme }) => theme.background};
  padding: 12px 16px;
  margin: 0 8px 4px 0;
  border-radius: 8px;

  ${({ isOpen }) => css`
    border: 1.5px solid
      ${({ theme }) => (isOpen ? theme.primary.dark : theme.default)};
  `}

  box-shadow: 1px 2px 4px #c6c6c6;
  z-index: 1;
`;

const OpeningHourText = styled.div`
  font-weight: ${(props) => (props.bold ? 700 : 400)};
`;

export function FloatingButton() {
  const [showDetail, setShowDetail] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(true);
  const [shopStatus, setShopStatus] = useState("");
  const [dayId, setDayId] = useState(0);

  useEffect(() => {
    const date = new Date();
    const dayUTC = date.getUTCDay();
    const hour = date.getUTCHours() + 7; // GMT+7 for Indonesia

    setDayId(dayUTC);

    if (hour > 23 && hour < 32) {
      if (dayUTC === 6) {
        setDayId(0);
      } else {
        setDayId(dayUTC + 1);
      }
    }

    if (hour > 9 && hour < 15 && dayId !== 0) {
      setIsShopOpen(true);
      setShopStatus("Open now until 3pm");
    } else if (dayId === 6) {
      setShopStatus("Close, open on Monday 9am ");
    } else {
      setIsShopOpen(false);
      setShopStatus("Close, open tomorrow at 9am ");
    }
  }, [dayId]);

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
    { id: 1, day: "Monday", time: "10am - 3pm" },
    { id: 2, day: "Tuesday", time: "10am - 3pm" },
    { id: 3, day: "Wednesday", time: "10am - 3pm" },
    { id: 4, day: "Thursday", time: "10am - 3pm" },
    { id: 5, day: "Friday", time: "10am - 3pm" },
    { id: 6, day: "Saturday", time: "10am - 3pm" },
    { id: 0, day: "Sunday", time: "Closed" },
  ];

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
              <Icon icon={icon.name} size="22" />
            </RoundButton>
          </a>
        ))}

        <AnimateButton
          animate
          onClick={() => setShowDetail(true)}
          onMouseLeave={handleMouseOut}
          isOpen={isShopOpen}
        >
          <Container justify="space-between" align="center">
            <ClockIcon />
            <AnimateText isOpen={isShopOpen}>{shopStatus}</AnimateText>
            <ArrowDown />
          </Container>
        </AnimateButton>
        {showDetail && (
          <OpeningHourWrapper isOpen={isShopOpen}>
            {openingHours.map((detail) => (
              <Container justify="space-between" padding="4">
                <OpeningHourText bold={detail.id === dayId}>
                  {detail.day}
                </OpeningHourText>
                <OpeningHourText bold={detail.id === dayId}>
                  {detail.time}
                </OpeningHourText>
              </Container>
            ))}
          </OpeningHourWrapper>
        )}
      </FloatingWrapper>
    </StickyWrapper>
  );
}
