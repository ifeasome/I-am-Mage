import { createGlobalStyle } from "styled-components";
// css styling for users chosen theme
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: "Noto Serif";
    transition: all 0.50s linear;
  }
  `;
