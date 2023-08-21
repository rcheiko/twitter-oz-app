import { css } from "@emotion/react"
import { Heart, Repeat, Settings } from "react-feather"
import { useState } from "react"

import { Theme, fontSizes, useTheme } from "../../theme"
import Header from "../../components/global/header"
import avatar from "../../assets/avatar.jpg"
import Avatar from "../../components/avatar"

export const notifications = (theme: Theme) => css`
.icon {
  display: flex;
  align-items: center;
  padding: 1rem;
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

.bar-blue {
  display:flex;
  justify-content: center;
  align-items: center;
  span {
    border-radius: 25px;
    height: 3px;
    width: 50%;
    max-width: 100px;
    background-color: rgb(29, 155, 240);  
  }
}

.list-button-timeline {
  display: flex;
  justify-content: center;
  align-items: center;
  div p {
    font-size: ${fontSizes.lg};
    font-weight: 500;
    padding-bottom: 0.5rem;
  }

  > * {
    text-align: center;
    padding: 0.5rem 0;
    flex-grow: 1;

    :hover {
      background-color: ${theme.colors.blur};
    }
  }
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

export const Notifications = () => {
  const theme = useTheme()
  const [listTimeline, setlistTimeline] = useState(0)
  const wichTimeline = [
    'All',
    'Verified',
    'Mentions'
  ]

  return (
    <div css={notifications(theme)}>
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
        <div className="list-button-timeline">
          {
            wichTimeline.map((item, index) => (
              <div key={item} onClick={() => setlistTimeline(index)}>
                <p>{item}</p>
                {
                  index === listTimeline
                    ? <div className="bar-blue"><span></span></div>
                    : null
                }
              </div>
            ))
          }
        </div>
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

export default Notifications;