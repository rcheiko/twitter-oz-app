import { InboxArrowDownIcon, GifIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline'
import { Info, PlusSquare, Image, Smile } from "react-feather"
import { useEffect, useRef, useState } from 'react'
import { css } from "@emotion/react"

import { Theme, useTheme } from "../../theme"
import Header from "../../components/global/header"
import Avatar from "../../components/avatar"
import avatar from "../../assets/avatar.jpg"
import Sender from './chat/sender'
import Sended from './chat/sended'

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
    max-width: 450px;
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

        .inbox-arrow {
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
    height: 100vh;

    .main-chat {
      display: flex;
      flex-direction: column;
      gap: .5rem;
      flex: 1;
      overflow-y: scroll;
      margin-top: 1rem;
    }
    .chat-bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      
      background: ${theme.colors.backgroundSecondary};
      min-height: 5rem;
      padding: 0 2rem;
      .icon-send {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding-right: 2rem;
        border-right: 1px solid ${theme.colors.backgroundQuaternary};
        color: ${theme.colors.active};
        div {
          display: flex;
          align-items: center;

          padding: .5rem;
          :hover {
            cursor: pointer;
            background: ${theme.colors.backgroundQuaternary};
            border-radius: 50%;
          }
  
          .gif-icon {
            width: 2.4rem;
            height: 2.4rem;
          }  
        }
      }
      .input {
        display: flex;
        flex: 1;
        textarea {
          display: flex;
          align-items: center;
          font-size: 1.4rem;
          color: ${theme.colors.primary};
          flex: 1;
          border: none;
          resize: none;
          outline: none;
          background: transparent;
          padding: 0 1rem;
        }
      }

      .send-icon {
        width: 3.5rem;
        height: 3.5rem;
        color: ${theme.colors.active};
        cursor: pointer;
        padding: .5rem;

        :hover {
          border-radius: 50%;
          background: ${theme.colors.backgroundQuaternary};
        }
      }
    }
  }
}
`

export const Messages = () => {
  const theme = useTheme()
  const userNames = ['User1', 'User2', 'User3', 'User4', 'User5','User1', 'User2', 'User3', 'User4', 'User5','User1', 'User2', 'User3', 'User4', 'User5','User1', 'User2', 'User3', 'User4', 'User5','User1', 'User2', 'User3', 'User4', 'User5','User1', 'User2', 'User3', 'User4', 'User5','User1', 'User2', 'User3', 'User4', 'User5','User1', 'User2', 'User3', 'User4', 'User5','User1', 'User2', 'User3', 'User4', 'User5','User1', 'User2', 'User3', 'User4', 'User5']
  const scrollableElementRef = useRef(null)
  const textareaRef = useRef(null)
  const [inputValue, setInputValue] = useState('')

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  useEffect(() => {
    const textarea = textareaRef.current

    const maxTextareaHeight = 200

    const adjustTextareaHeight = () => {
      if (textarea) {
        textarea.style.height = 'auto'
        textarea.style.height = Math.min(maxTextareaHeight, textarea.scrollHeight) + 'px'
      }
    }

    adjustTextareaHeight()

    textarea.addEventListener('input', adjustTextareaHeight)

    return () => {
      textarea.removeEventListener('input', adjustTextareaHeight)
    };
  }, [inputValue])

  useEffect(() => {
    const scrollableElement = scrollableElementRef.current
    const scrollToBottom = () => {
      if (scrollableElement)
        scrollableElement.scrollTop = scrollableElement.scrollHeight
    }
    scrollToBottom()
    window.addEventListener('load', scrollToBottom)
    return () => {
      window.removeEventListener('load', scrollToBottom)
    }
  }, []) // scroll chat to the last message

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
              <InboxArrowDownIcon className="inbox-arrow" />
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
          <div
            className="main-chat"
            ref={scrollableElementRef}
          >
            <Sender />
            <Sended />
            <Sender />
            <Sended />
            <Sended />
            <Sended />
            <Sender />
            <Sender />
            <Sender />
            <Sender />
            <Sended />
            <Sended />
            <Sended />
            <Sender />
            <Sender />
            <Sender />
            <Sender />
          </div>
          <div className='chat-bottom'>
            <div className='icon-send'>
              <div>
                <Image size={22} />
              </div>
              <div>
                <Smile size={22} />
              </div>
              <div>
                <GifIcon className='gif-icon' />
              </div>
            </div>
            <div className='input'>
              <textarea
                ref={textareaRef}
                rows={1}
                value={inputValue}
                onChange={handleChange}
                placeholder="Message"
              />
            </div>
            <PaperAirplaneIcon className='send-icon' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Messages