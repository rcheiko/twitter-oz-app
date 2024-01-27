import { useState } from "react"
import { Heart, Repeat, Settings } from "react-feather"
import { css } from "@emotion/react"

import { Theme, useTheme } from "../../theme"
import Header from "../../components/global/header"
import avatar from "../../assets/avatar.jpg"
import Avatar from "../../components/avatar"
import ListSelectTimeline from "../../components/global/list-select-timeline"

const style = (theme: Theme) => css`
.icon {
  display: flex;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  :hover {
    border-radius: 25%;
    background-color: ${theme.colors.backgroundSecondary};
  }
}

.top-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.25rem 1.5rem;
}

.main {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 2rem;
  gap: 2rem;
  border-bottom: 1px solid ${theme.colors.blur};
  cursor: pointer;
  :hover {
    background-color: ${theme.colors.blur};
  }

  .icon-notification {
    margin-top: .5rem;
  }

  .tweet-informations {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    .profile-picture-notification {
      display: flex;
      gap: 1rem;
    }

    .tweet-inactive {
      color: ${theme.colors.inactive};
    }
  }
}
`

const Notifications = () => {
  const theme = useTheme()
  const [indexTimeline, setIndexTimeline] = useState(0)
  const listTimeline = [
    'All',
    'Verified',
    'Mentions'
  ]

  return (
    <div css={style(theme)}>
      <Header scrollToTop={true}>
        <div className="top-header">
          <div>
            <h3>Notifications</h3>
            <p>Pseudo</p>
          </div>
          <div className="icon">
            <Settings size={22} />
          </div>
        </div>
        <ListSelectTimeline
          listTimeline={listTimeline}
          indexTimeline={indexTimeline}
          setIndexTimeline={setIndexTimeline}
        />
     </Header>
      <div className="main">
        <Heart size={28} fill="red" color="red" className="icon-notification" />
        <div className="tweet-informations">
          <Avatar src={avatar} size="3.5rem" />
          <span>NathNath Retweeted a Tweet you were tagged in</span>
          <span className="tweet-inactive">Tweet</span>
        </div>
      </div>
      <div className="main">
        <Repeat size={28} fill="green" color="green" className="icon-notification" />
        <div className="tweet-informations">
          <div className="profile-picture-notification">
            <Avatar src={avatar} size="3.5rem" />
            <Avatar src={avatar} size="3.5rem" />
            <Avatar src={avatar} size="3.5rem" />
          </div>
          <span>NathNath Retweeted a Tweet you were tagged in</span>
          <span className="tweet-inactive">Tweet</span>
        </div>
      </div>
      <div className="main">
        <Heart size={28} fill="red" color="red" className="icon-notification" />
        <div className="tweet-informations">
          <Avatar src={avatar} size="3.5rem" />
          <span>NathNath Retweeted a Tweet you were tagged in</span>
          <span className="tweet-inactive">Tweet</span>
        </div>
      </div>
    </div>
  )
}

export default Notifications