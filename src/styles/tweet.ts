import { css } from "@emotion/react"

import { Theme, colors } from "../theme"

export const styleTweetDisplay = (theme: Theme) => css`
border-bottom: 1px solid ${theme.colors.borderPrimary};

:hover {
  cursor: pointer;
  background-color: ${theme.colors.blur};
}
> div {
  margin: 0 .25rem;
    @media (min-width: 640px) {
    margin: 0 2rem;
  }
  padding-bottom: 1rem;
}
.retweet-tweet {
  display: flex;
  align-items: center;
  padding: 1rem 1rem 0 1rem;
  gap: 1rem;
  color: ${theme.colors.inactive};
  font-size: 1.4rem;
  font-weight: 600;
}
.profile {
  display: flex;
  justify-content: flex-start;
  padding-top: 1rem;
  gap: .5rem;
  @media (min-width: 640px) {
    gap: 1rem;
  }
  .main {
    img {
      transition: all .2s ease-in-out;
      opacity: 1;
      :hover {
        cursor: pointer;
        opacity: .8;
      }  
    }
  }
  .tweet {
    display: flex;
    flex-direction: column;
    font-size: 1.4rem;
    flex: 1;
    width: 100%;
    @media (min-width: 640px) {
      font-size: 1.6rem;
    }
    .top-tweet {
      position: relative;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      .text {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        font-weight: 500;
        gap: .25rem;
        @media (min-width: 640px) {
          gap: .5rem;
        }
        img {
          width: 1.75rem;
          height: 1.75rem;
        }
        .hashtag-name {
          display: flex;
          font-weight: 400;
          color: ${theme.colors.inactive};
          gap: 0.25rem;
          @media (min-width: 640px) {
            gap: .5rem;
          }
        }
      }
      .more {
        position: absolute;
        right: 0;
        top: -.75rem;
        display: flex;
        align-items: center;
        padding: 1rem;
        cursor: pointer;
        border-radius: 50%;
        color: ${theme.colors.inactive};
        :hover {
          color: ${theme.colors.active};
          background-color: rgb(29, 155, 240, 0.1);
        }
      }
    }
    .picture {
      margin-top: 1rem;
      display: grid;
      gap: .25rem;
      width: 80%;
      height: auto;
      img {
        max-width: 100%;
        height: auto;
        object-fit: cover;
        box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.1);
        cursor: pointer;
      }
      &.number-1 {
        .picture-1 {
          border-radius: 1rem;
        }
      }
      &.number-2 {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 1fr;
        width: 90%;
        .picture-1 {
          border-radius: 1rem 0 0 1rem;
        }
        .picture-2 {
          border-radius: 0 1rem 1rem 0;
        }
      }
      &.number-3 {
        display: grid;
        grid-template-columns: 2fr 1fr;
        width: 90%;
        @media (min-width: 640px) {
          width: 70%;
        }
        .picture-1 {
          height:-webkit-fill-available;
          grid-column: 1 / span 1;
          grid-row: 1 / span 2;
          border-radius: 1rem 0 0 1rem;
        }
        .picture-2 {
          border-radius: 0 0 1rem 0;
        }
        .picture-3 {
          border-radius: 0 1rem 0 0;
        }
      }
      &.number-4 {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: repeat(2, 1fr);
        width: 90%;
        @media (min-width: 640px) {
          width: 60%;
        }
        .picture-1 {
          border-radius: 1rem 0 0 0;
        }
        .picture-2 {
          border-radius: 0 1rem 0 0;
        }
        .picture-3 {
          border-radius: 0 0 0 1rem;
        }
        .picture-4 {
          border-radius: 0 0 1rem 0;
        }
      }
    }
    .icon-tweet {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 1rem;
      color: ${theme.colors.secondaryInactive};
      @media (min-width: 640px) {
        margin-top: 1rem;
        margin-right: 4.5rem;
      }
      svg {
        width: 1.5rem;
        height: 1.5rem;
      }
      .answer {
        :hover {
          color: ${theme.colors.active};
        }
      }
      .retweet {
        display: flex;
        align-items: center;
        :hover {
          color: ${colors.green};
        }
      }
      .like {
        :hover {
          color: ${theme.colors.errorPrimary};
        }

      }
      .liked {
        svg {
          color: ${theme.colors.errorPrimary};
          fill: ${theme.colors.errorPrimary};
        }
        color: ${theme.colors.errorPrimary};

      }
      .view {
        :hover {
          color: ${theme.colors.active};
        }
      }
      .upload {
        :hover {
          color: ${theme.colors.active};
        }
      }
      > div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: .25rem;
        font-size: 1.2rem;
        @media (min-width: 960px) {
          gap: 1rem;
          font-size: 1.4rem;
        }
        @media (min-width: 1440px) {
          gap: 1rem;
          font-size: 1.6rem;
        }
      }
    }
  }
}
`