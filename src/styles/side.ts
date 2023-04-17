import { css } from "@emotion/react"
import { Theme } from "../theme"
import { breakpoints } from "./global";

export const styleSidebar = (theme: Theme) => css`
  &.nav {
    display: flex;
    position: sticky;
    flex-direction: column;
    align-items: center;
    width: 100%;
    top: 0;

    > *:not(.profile) {
      @media (min-width: ${breakpoints.md}) {
        width: 175px;
      }

      @media (min-width: ${breakpoints.lg}) {
        width: 225px;
      }

      display:flex;
      margin: 0.25rem 0;
      
      > * {
        display: flex;
        align-items: center;
        padding: 1rem 1rem;
        &:hover {
          border-radius: 2rem;
          background-color: ${theme.colors.backgroundSecondary};
        }    
      } 
    }

    .profilePicture {
      height: 40px;
      width: 40px;  
      border-radius: 50%;
    }

    .profile {
      @media (min-width: ${breakpoints.md}) {
        width: 175px;
      }

      @media (min-width: ${breakpoints.lg}) {
        width: 225px;
      }

      @media (min-width: ${breakpoints.md}) {
        justify-content: center;
        align-items: center;
        flex-direction: row;
        overflow: hidden;  
      }

      display: flex;
      margin: 0.25rem;
      cursor: pointer;
      padding: 0.75rem 0.75rem;
  
      &:hover {
        border-radius: 2rem;
        background-color: ${theme.colors.backgroundSecondary};
      } 

      .nameProfile {
        @media (min-width: ${breakpoints.md}) {
          display: flex;
          flex-direction: column;
          padding-left: 1rem;
          font-size: 1.5rem;

          .text-grey {
            font-size: 1.1rem;
            font-weight: 200;
          }
        }
      }

      .endProfile {
        display: none;
        @media (min-width: ${breakpoints.md}) {
          flex: auto;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }
      }
    }

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
