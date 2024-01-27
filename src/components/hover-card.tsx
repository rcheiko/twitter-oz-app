import * as HoverCard from '@radix-ui/react-hover-card'
import { ReactNode, useState } from 'react'
import { css } from '@emotion/react'

import { Theme, useTheme } from "../theme"

const hoverToolTipStyle = (theme: Theme, width: number) => css`
  padding: ${1.6/(30/width)}rem;
  background: ${theme.colors.backgroundPrimary};
  border: 1px solid ${theme.colors.borderPrimary};
  border-radius: 0.8rem;
  box-shadow: 0 0.4rem 1.6rem rgba(0, 0, 0, 0.1);
  color: ${theme.colors.primary};
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 2.4rem;
  overflow: hidden;
  overflow-wrap: anywhere;
  a {
    color: ${theme.colors.active};
  }
  .HoverCardArrow {
    fill: ${theme.colors.backgroundSecondary};
  }
`

interface TooltipDisplayProps {
  toolTipText: ReactNode;
  text: ReactNode;
  width?: number;
}

const TooltipDisplay = ({toolTipText, text, width = 30}: TooltipDisplayProps) => {
  const theme = useTheme()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <HoverCard.Root openDelay={300} {...matchMedia('(min-width: 640px)').matches ? {} : { open: isOpen }}>
      <HoverCard.Trigger asChild onClick={() => setIsOpen(!isOpen)}>
        {text}
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content className="HoverCardContent" css={hoverToolTipStyle(theme, width)}>
          {toolTipText}
          <HoverCard.Arrow className="HoverCardArrow" />
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
    )
}

export default TooltipDisplay