import { css } from "@emotion/react"

import { Theme, colors, fontSizes } from "../theme"

export const styleSidebar = (theme: Theme) => css`
display: flex;
position: sticky;
flex-direction: column;
align-items: center;
width: 100%;
height: 100vh;
overflow-y: auto;
top: 0;
@media (min-width: 768px) {
  align-items: flex-end;
}

> *:not(.profile) {
  @media (min-width: 768px) {
    width: 17.5rem;
    font-size: ${fontSizes["lg"]};
  }
  @media (min-width: 1024px) {
    width: 22.5rem;
    font-size: ${fontSizes["xl"]};
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
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
}

.profile-under {
  display: flex;
  flex: auto;
  align-items: flex-end;
  margin-bottom: 1rem;
  .profile {
    display: flex;
    cursor: pointer;
    padding: 0.75rem 0.75rem;

    @media (min-width: 768px) {
      width: 17.5rem;
    }
    @media (min-width: 1024px) {
      width: 22.5rem;
      margin: 0.25rem;
    }
    @media (min-width: 768px) {
      justify-content: center;
      align-items: center;
      flex-direction: row;
      overflow: hidden;  
    }

    &:hover {
      border-radius: 2rem;
      background-color: ${theme.colors.backgroundSecondary};
    }

    .name-profile {
      @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
        padding-left: 1rem;
        font-size: ${fontSizes.lg};
        font-weight: 500;
      }
      @media (min-width: 1024px) {
        font-size: ${fontSizes.xl};
      }
    }

    .text-at-profile {
      font-size: ${fontSizes.base};
      font-weight: 400;
      @media (min-width: 1024px) {
        font-size: ${fontSizes.sm};
      }
      color: ${theme.colors.inactive}
    }

    .endProfile {
      display: none;
      @media (min-width: 768px) {
        flex: auto;
        display: flex;
        align-items: center;
        justify-content: flex-end;
      }
    }
  }
}

.tweet-div {
  padding-right: .5rem;
  @media (min-width: 768px) {
    padding-right: 2rem;
  }

  .tweet-button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.blue};
    width: 100%;
    min-height: 3rem;
    border-radius: 2rem;
    span { 
      display: none;
    }

    @media (min-width: 768px) {
      span {
        display: initial;
      }
      svg {
        display: none;
      }
      font-size: ${fontSizes.lg};
      font-weight: 400;
    }

    &:hover {
      opacity: 0.8;
    }
  }
}

p {
  display: none;
}

@media (min-width: 768px) {
  align-items: flex-end;
  p {
    display: inline;
  }
}

a :first-of-type {
  @media (min-width: 768px) {
    margin-right: 1rem;
  }
}
}
`

export const styleRightbar = (theme: Theme) => css`
&.nav {
  display: none;
  @media (min-width: 768px) {
    display: none;
  }
}
`
