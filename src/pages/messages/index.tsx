import { InboxArrowDownIcon } from '@heroicons/react/24/outline'
import { Info, PlusSquare } from "react-feather"
import { css } from "@emotion/react"

import { Theme, useTheme } from "../../theme"
import Header from "../../components/global/header"
import Avatar from "../../components/avatar"
import avatar from "../../assets/avatar.jpg"

export const messages = (theme: Theme) => css`
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1.5rem;
  .header-message {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 1rem;
  }
}

.main {
  display: flex;
  align-items: flex-start;
  flex-direction: row;

  .navigation {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-between;
    max-width: 400px;
    flex: 1;
    overflow: hidden;
    overflow-y: scroll;
    .inner {
      height: calc(100vh - 3.75rem);
      display: flex;
      flex-direction: column;

      .message-request {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.8rem;
        padding: 1.5rem 0;
        gap: 1.5rem;
        border-bottom: 1px solid ${theme.colors.borderPrimary};
        border-top: 1px solid ${theme.colors.borderPrimary};
        :hover {
          background: ${theme.colors.blur};
          cursor: pointer;
        }

        .icon {
          width: 3rem;
          height: 3rem;
        }
      }

      .user {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1rem;
        padding: 2rem 1rem;

        :hover {
          background: ${theme.colors.blur};
          cursor: pointer;
        }

        .details {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: .5rem;

          .top {
            display: flex;
            justify-content: center;
            gap: .75rem;
            font-size: 1.8rem;

            .username {
              font-weight: 600;
            }

            .inactive {
              color: ${theme.colors.inactive};
            }
          }

          .bottom {
            display: flex;
            align-items: center;
            font-size: 1.6rem;
            color: ${theme.colors.inactive};
          }
        }
      }
    }
  }
  
  .message {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-between;
    flex: 1;
    overflow: hidden;
      .message {
    }
  }
}
`

export const Messages = () => {
  const theme = useTheme()
  const userNames = ['User1', 'User2', 'User3', 'User4', 'User5','User1', 'User2', 'User3', 'User4', 'User5','User1', 'User2', 'User3', 'User4', 'User5','User1', 'User2', 'User3', 'User4', 'User5','User1', 'User2', 'User3', 'User4', 'User5','User1', 'User2', 'User3', 'User4', 'User5','User1', 'User2', 'User3', 'User4', 'User5','User1', 'User2', 'User3', 'User4', 'User5','User1', 'User2', 'User3', 'User4', 'User5','User1', 'User2', 'User3', 'User4', 'User5',];

  return (
    <div css={messages(theme)}>
      <div className="main">
        <div className="navigation">
          <Header scrollToTop={true}>
            <div className="header">
              <div>
                <h3>Messages</h3>
              </div>
              <PlusSquare />
            </div>
          </Header>
          <div className="inner">
            <div className="message-request">
              <InboxArrowDownIcon className="icon" />
              <span>Message requests</span>
            </div>
            <div>
              {
                userNames.map((userName, index) => (
                  <div key={index} className="user">
                    <Avatar src={avatar} size="4.5rem" />
                    <div className="details">
                      <div className="top">
                        <span className="username">{userName}</span>
                        <span className="inactive">@{userName}</span>
                        <span className="inactive">·</span>
                        <span className="inactive">01 oct</span>
                      </div>
                      <div className="bottom">
                        <span className="inactive">This is a message</span>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>

        <div className="message">
          <Header scrollToTop={true}>
            <div className="header">
              <div className="header-message">
                <Avatar src={avatar} size="3.3rem" />
                <h3>Shokker</h3>
              </div>
              <Info />
            </div>
          </Header>
        </div>
      </div>
    </div>
  )
}

export default Messages