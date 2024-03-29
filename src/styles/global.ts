import { css } from "@emotion/react"

import { Theme, colors, fontSizes } from "../theme"

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
  font-size: ${fontSizes.lg};
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
  color: ${colors.white};
  cursor: pointer;
  border: none;

  :hover {
    background-color: ${theme.colors.blur};
  }
}

.link {
  color: ${theme.colors.active};
  border-bottom: .1rem solid transparent;

  :hover {
    border-bottom: .1rem solid ${theme.colors.active};
    cursor: pointer;
  }
}
`