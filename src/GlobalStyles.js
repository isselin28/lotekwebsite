import { createGlobalStyle } from "styled-components";
import LotekTheme from "./themes.js";

const GlobalStyle = createGlobalStyle`
    body{
        font-family: "Lato", sans-serif;
        font-weight: 500;
        font-size: 15.5px;
        color: #605e5e;
        margin: 0;
    }

    a{
        color: ${LotekTheme.default};
        text-decoration: none;
    }
`;

export default GlobalStyle;
