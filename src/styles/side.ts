import { css } from "@emotion/react"
import { Theme } from "../theme"

export const side_left = (theme: Theme) => css`
  .side-left {
    border-right: 1px solid ${theme.colors.primary};
    position: fixed;
    height: 100%;
    width: 20%;
    text-align: right;
    z-index: 1;
  }
`