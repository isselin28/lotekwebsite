import styled, { css } from "styled-components";

const variants = {
  title: {
    fontSize: "30px",
    fontFamily: "Libre Baskerville",
    fontWeight: 300,
    fontStyle: "italic",
  },
  label: {
    fontSize: "14px",
    letterSpacing: "2px",
    lineHeight: 2,
  },
  body: {
    fontSize: "15px",
    letterSpacing: "1px",
    lineHeight: 1.5,
  },
};

export const Typography = styled.div`
  ${({ variant, theme }) => css`
    font-size: ${variants[variant].fontSize};
    font-family: ${variants[variant].fontFamily}, serif;
    font-style: ${variants[variant].fontStyle};
    font-weight: ${variants[variant].fontWeight};
    color: ${variant === "title" ? theme.primary.dark : theme.default};
    letter-spacing: ${variants[variant].letterSpacing};
    line-height: ${variants[variant].lineHeight};

    margin-bottom: 4px;
    text-align: ${({ align }) => align};
  `}
`;
