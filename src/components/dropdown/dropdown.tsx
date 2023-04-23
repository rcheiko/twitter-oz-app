import { css } from "@emotion/react";
import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";
import { ReactNode, useState } from "react";
import { Theme, useTheme } from "../../theme";

const styleDropdownMenu = (theme: Theme) => css`
border-radius: 15px;
background-color: ${theme.colors.backgroundTertiary};
box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
width: 275px;

span {
  svg {
    fill: ${theme.colors.backgroundPrimary};
  }
}
`

export function Dropdown ({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <RadixDropdownMenu.Root open={open} onOpenChange={setOpen}>
      {children}
    </RadixDropdownMenu.Root>
  )
}

export function DropdownCard ({ children }: { children: ReactNode }) {
  return (
    <RadixDropdownMenu.Trigger asChild>
      {children}
    </RadixDropdownMenu.Trigger>
  )
}

export function DropdownMenu ({ children }: { children: ReactNode }) {
  const theme = useTheme()

  return (
    <RadixDropdownMenu.Portal>
      <RadixDropdownMenu.Content sideOffset={5} align="start" css={styleDropdownMenu(theme)}>
        {children}
        <RadixDropdownMenu.Arrow />
      </RadixDropdownMenu.Content>
    </RadixDropdownMenu.Portal>
  )
}

export function DropdownItem ({ children }: { children: ReactNode }) {
  return (
    <RadixDropdownMenu.Item className="DropdownMenuItem">
      {children}
    </RadixDropdownMenu.Item>
  )
}

export function DropdownArrow () {
  return (
    <RadixDropdownMenu.Arrow />
  )
}