import { useEffect, useRef, useState } from "react"
import { X } from "react-feather"
import { css } from "@emotion/react"
import { openDB, deleteDB, wrap, unwrap } from 'idb'
import { PhotoIcon, GifIcon, CalendarDaysIcon, ListBulletIcon } from '@heroicons/react/24/outline'

import { Theme, colors, fontSizes, useTheme } from "../../theme"
import avatar from "../../assets/avatar.jpg"
import Avatar from "../../components/avatar"
import Emoji from "../../components/emoji"
import GifModal from "../../components/modal/gif"

const style = (theme: Theme) => css`
display: flex;
align-items: flex-start;
justify-content: space-between;
padding: 1rem 1.5rem;
border-bottom: 1px solid ${theme.colors.borderPrimary};

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
      flex: auto;
      resize: none;
      overflow-y: hidden;
      border: none;
      outline: none;
      font-size: ${fontSizes.base};
      font-weight: 400;
      color: ${theme.colors.primary};
      background-color: ${theme.colors.backgroundSecondary};
      border-radius: 1rem;
      padding: 1rem;
      margin: 1rem 0 0 1rem;
    }
    .img-gif {
      display: grid;
      place-items: center;
      padding: 1.5rem;
      .img {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        position: relative;
        max-width: 25rem;
        img {
          max-width: 25rem;
          height: auto;
          border-radius: .5rem;
        }

        .delete-gif {
          position: absolute;
          top: 0;
          right: 0;
          padding: .25rem;
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
    }
    .delete {
      height: 0;
      position: relative;
      right: 3rem;
      top: 1.5rem;
      cursor: pointer;
      svg:hover {
      background-color: ${theme.colors.blur};
      border-radius: 50%;
      }
    }
  }

  .action-tweet {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    
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
}
`


const Tweet = () => {
  const theme = useTheme()

  const textAreaRef = useRef(null)

  const [val, setVal] = useState("")
  const [openGif, setOpenGif] = useState(false)
  const [gif, setGif] = useState("")

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto"
      textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px"
    }
  }, [val])

  const db = openDB('my-db', 1.2)

  return (
    <div css={style(theme)}>
      <div className="responsive-avatar">
        <Avatar src={avatar} />
      </div>
      <div className="tweet">
        <div className="area-tweet">
          <textarea
            className="text-area-tweet"
            ref={textAreaRef}
            value={val}
            onChange={(e) => setVal(e.target.value)}
            rows={3}
            placeholder="What's Happening?"
          />
          {
            gif && (
              <div className="img-gif">
                <div className="img">
                  <img src={gif} alt="gif" />
                  <div className="delete-gif">
                    <div onClick={() => setGif("")} >
                      <X size={18} />
                    </div>
                  </div>
                </div>
              </div>
            )
          }
          <div className="delete">
            <X onClick={() => setVal("")} />
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
            <Emoji />
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
      </div>
      <GifModal
        open={openGif}
        onClose={() => setOpenGif(false)}
        setGif={setGif}
      />
    </div>
  )
}

export default Tweet