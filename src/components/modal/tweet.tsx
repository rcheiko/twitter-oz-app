import { css } from "@emotion/react"
import { X } from "react-feather"
import { PhotoIcon, GifIcon, CalendarDaysIcon, ListBulletIcon } from '@heroicons/react/24/outline'
import { useEffect, useRef, useState } from "react"

import { Theme, colors, fontSizes, useTheme } from "../../theme"

import Modal from "../modal"
import avatar from "../../assets/avatar.jpg"
import Avatar from "../avatar"
import Emoji from "../emoji"
import GifModal from "./gif"

const style = (theme: Theme) => css`
padding: 2rem 2rem .5rem;

@media (min-width: 640px) {
  min-width: 60rem;
}

.main {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 2.5rem 0.5rem 1.5rem;
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
      flex-direction: column;
      .text-area-tweet {
        height: 100%;
        min-height: 10rem;
        flex: auto;
        resize: none;
        overflow-y: hidden;
        border: none;
        outline: none;
        font-size: ${fontSizes.base};
        font-weight: 400;
        color: ${theme.colors.primary};
        background-color: ${theme.colors.backgroundSecondary};
        border-radius: .5rem;
        padding: 1.5rem;
        margin: 0 0 2rem 1rem;
      }
      .img-gif {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1.5rem;
        img {
          border-radius: .5rem;
          width: 75%;  
        }
        .delete-gif {
          padding: 1.5rem;
          position: absolute;
          top: .5rem;
          right: 6.5rem;
          > div {
            padding: .5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background-color: ${colors.darkTransparent};
            :hover {
              opacity: 0.8;
              cursor: pointer;
            }
          }
        }
      }
      .delete {
        height: 0;
        position: relative;
        right: 2rem;
        top: 0.5rem;
        cursor: pointer;
      }
    }
  }
}

.action-tweet {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 1rem;
  
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
        width: 2rem;
        height: 2rem;
      }
      &:hover {
        background-color: ${theme.colors.blur};
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
      font-weight: 400;
      cursor: pointer;

      @media (max-width: 1024px) {
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

const TweetModal = ({ open, onClose }: ITweetModal) => {
  const theme = useTheme()

  const [val, setVal] = useState("")
  const textAreaRef = useRef(null)

  const [openGif, setOpenGif] = useState(false)
  const [gif, setGif] = useState("")

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto"
      textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px"
    }
  }, [val])
  
  return (
    <Modal open={open} onClose={onClose}>
      <div css={style(theme)}>
        <div className="main">
          <div className="responsive-avatar">
            <Avatar src={avatar} />
          </div>
          <div className="tweet">
            <div className="area-tweet">
              <textarea
                className="text-area-tweet" 
                ref={textAreaRef}
                value={val}
                onChange={(e)=> setVal(e.target.value)}
                rows={3}
                placeholder="What's Happening?"
              />
              {
                gif && (
                  <div className="img-gif">
                    <img src={gif} alt="gif" />
                    <div className="delete-gif">
                      <div onClick={() => setGif("")} >
                        <X size={18} />
                      </div>
                    </div>
                  </div>
                )
              }
              <div className="delete">
                <X size={14} onClick={() => setVal("")} />
              </div>
            </div>
          </div>
        </div>
        <div className="action-tweet">
          <div className="tweet-icon">
            <div>
              <PhotoIcon />
            </div>
            <div onClick={() => setOpenGif(!openGif)}>
              <GifIcon />
            </div>
            <div>
              <Emoji />
            </div>
            <div>
              <CalendarDaysIcon />
            </div>
            <div>
              <ListBulletIcon />
            </div>
          </div>
          <div className="tweet-button">
            <button disabled={!val.length}>
              Tweet
            </button>
          </div>
        </div>
        <GifModal
          open={openGif}
          onClose={() => setOpenGif(false)}
          setGif={setGif}
        />
      </div>
    </Modal>
  )
}

export default TweetModal