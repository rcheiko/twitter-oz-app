import { css } from "@emotion/react"
import { Theme, colors, fontSizes, fontWeights, useTheme } from "../../theme"
import Modal from "../modal"
import avatar from "../../assets/avatar.jpg"
import Avatar from "../avatar"
import { Calendar, Clock, Image, PieChart, PlusCircle, Smile, X } from "react-feather"
import { PopOver, PopOverCard, PopOverMenu } from "../popover/popover"
import { useEffect, useRef, useState } from "react"
import { smileyStyle } from "../../pages/dashboard/tweet"
import { breakpoints } from "../../styles/global"

export const tweetModalStyle = (theme: Theme) => css`
.main {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0.5rem;
  margin-top: .5rem;
  border-bottom: 1px solid ${theme.colors.borderPrimary};
  .responsive-avatar {
    img {
      width: 4rem;
      height: 4rem;
    }
  }
  @media (max-width: 767px) {
    .responsive-avatar {
      display: none;
    }
  }
  .tweet {
    display: flex;
    flex-direction: column;
    flex: auto;
    .area-tweet {
      overflow: hidden;
      flex: auto;
      display: flex;
      .text-area-tweet {
        flex: auto;
        resize: none;
        overflow-y: hidden;
        border: none;
        outline: none;
        font-size: ${fontSizes.base};
        font-weight: ${fontWeights('base')};
        color: ${theme.colors.primary};
        background-color: ${theme.colors.backgroundSecondary};
        border-radius: 1rem;
        padding: 1rem;
        margin: 0 0 1rem 1rem;
      }
      .delete {
        height: 0;
        position: relative;
        right: 30px;
        top: 15px;
        cursor: pointer;
        svg:hover {
        background-color: ${colors.blur};
        border-radius: 50%;
        }
      }
    }
  }
}
.action-tweet {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: .5rem;
  
  .tweet-icon {
    display: flex;
    align-items: center;

    > * {
      cursor: pointer;
      padding: 0.75rem;

      svg {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      &:hover {
        background-color: ${colors.blur};
        border-radius: 50%;
      }
    }
  }

  .tweet-button {
    flex: auto;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0.75rem;

    button {
      background-color: ${colors.blue};
      color: ${colors.white};
      border: none;
      outline: none;
      border-radius: 3rem;
      padding: 0.75rem 1.75rem;
      font-size: ${fontSizes.lg};
      font-weight: ${fontWeights('lg')};
      cursor: pointer;

      @media (max-width: ${breakpoints.lg}) {
        padding: 0.5rem 1.25rem;
        font-size: ${fontSizes.sm};
        font-weight: 500;
      }

      &:hover {
        opacity: 0.8;
      }
      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  }
}
`

interface ITweetModal {
  open: boolean
  onClose: () => void
}

export const TweetModal = ({
  open,
  onClose
}: ITweetModal) => {
  const theme = useTheme()

  const [val, setVal] = useState("")
  const textAreaRef = useRef(null)

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto"
      textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px"
    }
  }, [val])

  return (
    <Modal open={open} onClose={onClose}>
      <div css={tweetModalStyle(theme)}>
        <div className="main">
          <div className="responsive-avatar">
            <Avatar src={avatar} />
          </div>
          <div className="tweet">
            <div className="area-tweet">
              <textarea className="text-area-tweet"  ref={textAreaRef} value={val} onChange={(e)=> setVal(e.target.value)} rows={3} placeholder="What's Happening?" />
              <div className="delete">
                <X onClick={() => setVal("")} />
              </div>
            </div>
          </div>
        </div>
        <div className="action-tweet">
          <div className="tweet-icon">
            <div>
              <Image size={20} />
            </div>
            <div>
              <PopOver css={smileyStyle(theme)}>
                <PopOverCard>
                  <Smile size={20} />
                </PopOverCard>
                <PopOverMenu>
                  <div>
                    <input type="text" placeholder="Search Emoji" />               
                    <div className="smiley-list">
                      <div>
                        <Clock size={20} />
                      </div>
                      <div>
                        <Smile size={20} />
                      </div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                </PopOverMenu>
              </PopOver>
            </div>
            <div>
              <PieChart size={20} />
            </div>
            <div>
              <Calendar size={20} />
            </div>
            <div>
              <PlusCircle size={20} />
            </div>
          </div>
          <div className="tweet-button">
            <button disabled={!val.length}>
              Tweet
            </button>
          </div>
        </div>
      </div>
    </Modal>
  )
}