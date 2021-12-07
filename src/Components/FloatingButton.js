import React from "react";
import styled from "styled-components";
import { Icon } from "./Icon";
import { Container } from "./Container";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
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

const StickyWrapper = styled.div`
  position: -webkit-sticky;
  position: sticky;
  bottom: 20px;
`;

const FloatingWrapper = styled(Container)`
  position: absolute;
  bottom: 30px;
  right: 20px;
`;

const iconDetails = [
  {
    name: faWhatsapp,
    url: "https://wa.me/6281386041621",
  },
  { name: faMapMarkerAlt, url: "https://goo.gl/maps/3bGVGfccvN3KL1Dh9" },
  { name: faClock, url: "" },
  { name: faEnvelope, url: "" },
];

export function FloatingButton() {
  return (
    <StickyWrapper>
      <FloatingWrapper direction="column">
        {iconDetails.map((icon) => (
          <a href={icon.url} target="_blank" rel="noreferrer">
            <RoundButton>
              <Icon icon={icon.name} size="lg" />
            </RoundButton>
          </a>
        ))}
      </FloatingWrapper>
    </StickyWrapper>
  );
}
