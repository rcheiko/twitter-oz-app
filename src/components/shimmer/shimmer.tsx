import type { BaseHTMLAttributes } from 'react'

import { css } from '@emotion/react'
import { forwardRef } from 'react'

import { Theme, useTheme } from '../../theme'

const style = (theme: Theme) => css`
position: relative;
padding: 0 .2rem;
&:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  display: inline-block;
  position: absolute;
  border-radius: .5rem;
  ${
    theme.colorScheme === 'dark'
      ? "background: #1a1d24;"
      : "background: #ececec;"
  }
}
`

const Shimmer = forwardRef<HTMLSpanElement, BaseHTMLAttributes<HTMLButtonElement>>(({ children, ...props }, ref) =>
  <span className='shimmer' css={style(useTheme())} ref={ref} {...props}>
    {children}
  </span>
)

export default Shimmer