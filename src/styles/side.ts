import { css } from "@emotion/react"
import { Theme, colors, fontSizes, fontWeights } from "../theme"
import { breakpoints } from "./global";

export const styleSidebar = (theme: Theme) => css`
&.nav {
  display: flex;
  position: sticky;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  min-height: 100vh;
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

  .profile-under {
    display: flex;
    flex: auto;
    align-items: flex-end;
    margin-bottom: 1rem;
    .profile {
      display: flex;
      margin: 0.25rem;
      cursor: pointer;
      padding: 0.75rem 0.75rem;

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

      &:hover {
        border-radius: 2rem;
        background-color: ${theme.colors.backgroundSecondary};
      }

      .nameProfile {
        @media (min-width: ${breakpoints.md}) {
          display: flex;
          flex-direction: column;
          padding-left: 1rem;
          font-size: ${fontSizes.lg};
          font-weight: ${fontWeights('lg')};
        }
      }

      .text-at-profile {
        font-size: ${fontSizes.sm};
        font-weight: ${fontWeights('sm')};
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
  }
  .tweet-div {
    padding-right: 2rem;
    .tweet-button {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${colors.blue};
      font-size: ${fontSizes.lg};
      font-weight: ${fontWeights('lg')};
      width: 100%;
      min-height: 3rem;
      border-radius: 2rem;

      @media (max-width: ${breakpoints.lg}) {
        padding: 0.5rem 1.25rem;
        font-size: ${fontSizes.sm};
        font-weight: 500;
      }

      &:hover {
        opacity: 0.8;
      }
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
