import { css } from "@emotion/react"
import { Theme } from "../theme"
import { breakpoints } from "./global";

export const styleSidebar = (theme: Theme) => css`
  &.nav {
    position: sticky;
    top:0;
    display: flex;
    flex-direction: column;
    width: 100%;

    align-items: center;

    p {
      display: none;
    }

    @media (min-width: ${breakpoints.md}) {
      align-items: flex-end;
      p {
        display: inline;
      }
    }



    a :first-of-type {
      @media (min-width: ${breakpoints.md}) {
        margin-right: 1rem;
      }
    }

    > * {
      @media (min-width: ${breakpoints.md}) {
        width: 175px;
      }

      @media (min-width: ${breakpoints.lg}) {
        width: 225px;
      }

      > * {
        display: flex;

        > * {
          display: flex;
          margin: 0.25rem 0;
          padding: 1rem 1rem;
    
          &:hover {
            border-radius: 2rem;
            background-color: ${theme.colors.backgroundSecondary};
          }
        }
      }
    }
  }
`;

export const styleRightbar = (theme: Theme) => css`
&.nav {
  display: none;
  @media (min-width: ${breakpoints.md}) {
    display: none;
  }
}
`;
