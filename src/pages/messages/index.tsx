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
    height: 100vh;
    overflow-y: scroll;
    .user-list {
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
          <div className="user-list">
            <h3>Utilisateurs</h3>
            <ul>
              {userNames.map((userName, index) => (
                <li key={index}>{userName}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="message">
          <div className="test">
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
    </div>
  )
}

export default Messages