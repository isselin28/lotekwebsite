import React from "react";
import styled from "styled-components";
import { Container } from "../components/Container";
import { Typography } from "../components/Typography";
import { Icon } from "../components/Icon";
import { Button } from "../components/Button";
import { faPepperHot } from "@fortawesome/free-solid-svg-icons";

const Line = styled.hr`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.primary.light};
  height: 1px;
  min-width: 100px;
  margin: 12px;
`;

function Divider() {
  return (
    <Container align="center" margin="80">
      <Line />
      <Icon icon={faPepperHot} size="18" />
      <Icon icon={faPepperHot} size="18" />
      <Icon icon={faPepperHot} size="18" />
      <Line />
    </Container>
  );
}

export function MenuSection() {
  return (
    <Container direction="column" align="center">
      <Divider />
      <div id="menu" />
      <Typography variant="title">Menu</Typography>
      <Button primary>Download Our Special Delicacies Here</Button>
      <Divider />
    </Container>
  );
}
