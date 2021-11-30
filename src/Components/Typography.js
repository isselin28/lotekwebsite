import styled, { css } from "styled-components";

const variants = {
  title: {
    fontSize: "30px",
    fontFamily: "Libre Baskerville",
    fontWeight: 300,
    fontStyle: "italic",
    color: "#94703a",
  },
  label: {
    fontSize: "14px",
    fontFamily: "Lato",
    fontWeight: 500,
    color: "#605e5e",
    letterSpacing: "2px",
    lineHeight: 2,
  },
  body: {
    fontSize: "15px",
    fontFamily: "Lato",
    fontWeight: 500,
    color: "#605e5e",
    letterSpacing: "1px",
    lineHeight: 1.5,
  },
};

export const Typography = styled.div`
  ${({ variant }) => css`
    font-size: ${variants[variant].fontSize};
    font-family: ${variants[variant].fontFamily}, serif;
    font-style: ${variants[variant].fontStyle};
    font-weight: ${variants[variant].fontWeight};
    color: ${variants[variant].color};
    letter-spacing: ${variants[variant].letterSpacing};
    line-height: ${variants[variant].lineHeight};

    margin-bottom: 4px;
  `}
`;
