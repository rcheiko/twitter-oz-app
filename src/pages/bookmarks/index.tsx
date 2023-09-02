import { css } from "@emotion/react"
import { Theme, useTheme } from "../../theme"
import Header from "../../components/global/header"

export const bookmarks = (theme: Theme) => css`
.top-header {
  padding: 0.25rem 1.5rem;
}
`

export const Bookmarks = () => {
  const theme = useTheme()

  return (
    <div css={bookmarks(theme)}>
      <Header scrollToTop={true}>
        <div className="top-header">
          <h3>Bookmarks</h3>
          <p>Pseudo</p>
        </div>
      </Header>
    </div>
  )
}

export default Bookmarks