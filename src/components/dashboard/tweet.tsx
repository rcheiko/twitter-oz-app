import { css } from "@emotion/react";
import { Theme, colors, fontSizes, useTheme } from "../../theme";
import avatar from "../../assets/avatar.jpg"
import Avatar from "../avatar";
import { useEffect, useRef, useState } from "react";
import { Calendar, Image, PieChart, PlusCircle, Smile, X } from "react-feather";
import { breakpoints } from "../../styles/global";
import { PopOver, PopOverCard, PopOverMenu } from "../popover/popover"
import { openDB, deleteDB, wrap, unwrap } from 'idb'
import { fontWeights } from "../../theme";

const tweet = (theme: Theme) => css`
display: flex;
align-items: flex-start;
justify-content: space-between;
padding: 1rem 1.5rem;

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
      margin: 1rem 0 0 1rem;
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
        background-color: ${theme.colors.secondary};
        color: ${theme.colors.primary};
        border: none;
        outline: none;
        border-radius: 3rem;
        padding: 0.75rem 1.75rem;
        font-size: ${fontSizes.lg};
        font-weight: 500;
        cursor: pointer;

        @media (max-width: ${breakpoints.lg}) {
          padding: 0.5rem 1.25rem;
          font-size: ${fontSizes.sm};
          font-weight: 500;
        }

        &:hover {
          opacity: 0.8;
        }
    }
  }
}
`

export default function Tweet() {
  const theme = useTheme()

  const [val, setVal] = useState("")
  const textAreaRef = useRef(null)

  const resizeTextArea = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto"
      textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px"
    }
  }

  useEffect(resizeTextArea, [val])

  const onChange = (e) => {
    setVal(e.target.value)
  }

  const db = openDB('my-db', 1.2);

  return (
    <div css={tweet(theme)}>
      <div className="responsive-avatar">
        <Avatar src={avatar} />
      </div>
      <div className="tweet">
        <div className="area-tweet">
          <textarea className="text-area-tweet"  ref={textAreaRef} value={val} onChange={onChange} rows={3} placeholder="What's Happening?" />
          <div className="delete">
            <X onClick={() => setVal("")} />
          </div>
        </div>
        <div className="action-tweet">
          <div className="tweet-icon">
            <div>
              <Image size={20} />
            </div>
            <div>
              <PopOver>
                <PopOverCard>
                  <Smile size={20} />
                </PopOverCard>
                <PopOverMenu>
                  <div>
                    <input type="text" placeholder="Search Emoji" />
                    <div>
                        
                    </div>                  
                    <div>test</div>
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
            <button>
              Tweet
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}