import { css } from "@emotion/react"

import { Theme, useTheme } from "../../theme"
import Header from "../../components/global/header"
import TweetDisplay from "../../components/tweet/tweet-display"

const style = (theme: Theme) => css`
.top-header {
  padding: 0.25rem 1.5rem;
}
`

const Bookmarks = () => {
  const theme = useTheme()

  return (
    <div css={style(theme)}>
      <Header scrollToTop={true}>
        <div className="top-header">
          <h3>Bookmarks</h3>
          <p>Pseudo</p>
        </div>
      </Header>
      {/* <TweetDisplay />
      <TweetDisplay />
      <TweetDisplay />
      <TweetDisplay /> */}

    </div>
  )
}

export default Bookmarks