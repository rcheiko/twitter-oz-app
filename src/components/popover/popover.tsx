import { css } from "@emotion/react"
import * as RadixPopover from "@radix-ui/react-popover"
import { ReactNode, useState } from "react"

import { Theme, useTheme } from "../../theme"

const stylePopOverMenu = (theme: Theme) => css`
border-radius: 15px;
z-index: 1301;
background-color: ${theme.colors.backgroundTertiary};
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
width: 275px;
border: none;
&:focus {
  outline: none;
}
span {
  svg {
    fill: ${theme.colors.backgroundPrimary};
  }
}
`

export const PopOver = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false)
  return (
    <RadixPopover.Root open={open} onOpenChange={setOpen}>
      {children}
    </RadixPopover.Root>
  )
}

export const PopOverCard = ({ children }: { children: ReactNode }) => {
  return (
    <RadixPopover.Trigger asChild>
      {children}
    </RadixPopover.Trigger>
  )
}

export const PopOverMenu = ({ children }: { children: ReactNode }) => {
  const theme = useTheme()

  return (
    <RadixPopover.Portal>
      <RadixPopover.Content sideOffset={5} align="start" css={stylePopOverMenu(theme)}>
        {children}
        <RadixPopover.Arrow />
      </RadixPopover.Content>
    </RadixPopover.Portal>
  )
}

export const PopOverArrow = () => {
  return (
    <RadixPopover.Arrow />
  )
}