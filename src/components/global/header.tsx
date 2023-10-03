import { css } from "@emotion/react"

import { fontSizes } from "../../theme"

const styleHeader = () => css`
&.top-page {
  position: sticky;
  top: 0;
  backdrop-filter: blur(12px);
  cursor: pointer;
  h3 {
    font-weight: 600;
  }
  p {
    font-size: ${fontSizes.sm};
    font-weight: 400;
  }
}
`

export const Header = ({ children, scrollToTop }: { children: React.ReactNode, scrollToTop: boolean }) => {
  const bottomToTop = () => {
    if (scrollToTop) {
      window.scrollTo({
        top: 0,
      })
    }
  }

  return (
    <div css={styleHeader()} onClick={bottomToTop} className="top-page">
      {children}
    </div>
  )
}

export default Header