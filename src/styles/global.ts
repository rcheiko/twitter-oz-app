import { css } from "@emotion/react";
import { Theme } from "../theme";

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px'
}

export const globalStyle = (theme: Theme) => css`
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
}

html {
  font-size: 62.5%;
  height: 100%;
  width: 100%;
}

body {
  margin: 0;
  height: 100%;
  width: 100%;
  font-size: 1.6rem;
  font-family: Fira Sans;
  background-color: ${theme.colors.backgroundPrimary};
  color: ${theme.colors.primary};
  font-family: 'Poppins', sans-serif;
}

body > .mount {
  height: 100%;
  width: 100%;
}

a {
  color: ${theme.colors.primary};
  text-decoration: none;

  &:hover {
    color: ${theme.colors.secondaryActive};
  }

  &.active {
    color: ${theme.colors.active};
  }
}

ul {
  list-style: none;
}

button {
  color: ${theme.colors.white};
  cursor: pointer;
  background-color: ${theme.colors.third};
  border: none;

  &:hover {
    opacity: 0.9;
  }
}

input[type="number"] {
  -webkit-appearance: textfield;
    -moz-appearance: textfield;
          appearance: textfield;
}
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none;
}
input[type=number]:focus {
  outline: none;
}
input[type=number]:focus::placeholder {
  color: transparent;
}
`