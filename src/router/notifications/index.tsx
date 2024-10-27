import { useEffect, useState } from "react"
import { Bell, Heart, Repeat, Settings, User, Video } from "react-feather"
import { css } from "@emotion/react"

import { getNotifications, GlobalObjects } from "../../utils/fetch/notifications"
import { wrapTextNotification } from "../../components/wrap-text/notifications"
import { colors, Theme, useTheme } from "../../theme"
import ListSelectTimeline from "../../components/global/list-select-timeline"
import TweetDisplay from "../../components/notifications/tweet-display"
import Header from "../../components/global/header"
import Avatar from "../../components/avatar"

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
  const [notifications, setNotifications] = useState<GlobalObjects | undefined>()

  const listTimeline = [
    'All',
    'Verified',
    'Mentions'
  ]

  useEffect(() => {
    getNotifications().then(res => setNotifications(res))
  }, [])

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
      {/* <div className="main">
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
      </div> */}
      {
        listTimeline[indexTimeline] === 'All' && notifications && (
          Object.values(notifications.notifications).map(value => {
            return (
              <div className="main" key={value.id}>
                {
                  value.icon.id === 'bell_icon'
                    ? <Bell size={28} fill={colors.blue} color={colors.blue} className="icon-notification" />
                    : value.icon.id ==='live_icon'
                      ? <Video size={28} fill="#F91880" color="#F91880" className="icon-notification" />
                      : value.icon.id === 'person_icon'
                        ? <User size={28} fill={colors.blue} color={colors.blue} className="icon-notification" />
                        : '???'
                }
                <div className="tweet-informations">
                  <div className="profile-picture-notification">
                    {
                      value.template.aggregateUserActionsV1.fromUsers.map((users, index) => {
                        const userInfo = notifications?.users[users.user.id]
                        if (!userInfo) return null
                        return (
                          <Avatar src={userInfo.profile_image_url_https} size="3.5rem" key={index} />
                        )
                      })
                    }
                  </div>
                  <div>{wrapTextNotification(value.message, notifications?.users)}</div>
                  {/* <span className="tweet-inactive">Tweet</span> */}
                </div>
              </div>
            )
          }
        ))
      }
      {
        notifications?.tweets && 
          Object.values(notifications?.tweets).map(value => {
            const user = notifications?.users[value.user_id]
            return (
              <TweetDisplay
                key={value.id}
                tweet={value}
                user={user}
              />
            )
          })
      }
    </div>
  )
}

export default Notifications