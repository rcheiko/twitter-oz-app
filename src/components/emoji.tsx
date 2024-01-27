import { css } from "@emotion/react"
import { FaceSmileIcon, ClockIcon } from '@heroicons/react/24/outline'
import emojis from 'emojibase-data/en/data.json'

import { PopOver, PopOverCard, PopOverMenu } from "./popover-card"
import { Theme, useTheme } from "../theme"
import { useState } from "react"


const style = (theme: Theme) => css`
.smiley-list {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  max-width: 30rem;
  .icon {
    svg {
      width: 2.25rem;
      height: 2.25rem;
    }
  }

  .emoji {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    max-height: 20rem;
    overflow-y: scroll;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    padding: .5rem;
    :hover {
      background-color: ${theme.colors.backgroundSecondary};
      border-radius: .5rem;
    }
  }
}
`

const Emoji = () => {
  const theme = useTheme()
  const [ariaLabel, setAriaLabel] = useState('')


  const handleHover = (e) => {
    console.log('aaaa')
    
    const label = e.target.getAttribute('aria-label')
    setAriaLabel(label)
    console.log('ariaLabel', ariaLabel)
    
  }
  return (
    <div>
      <PopOver>
        <PopOverCard>
          <FaceSmileIcon />
        </PopOverCard>
        <PopOverMenu>
          <div css={style(theme)}>
            <input type="text" placeholder="Search Emoji" />               
            <div className="smiley-list">
              <div className="icon">
                <ClockIcon />
              </div>
              {ariaLabel}
              <div className="emoji">
                {
                  emojis.map((emoji, index) => {
                    return (
                      <>
                        {
                          emoji && emoji.group === 9
                            ? (
                              <span aria-label={emoji.label} onMouseOver={handleHover}>
                                {emoji.emoji}
                              </span>
                            )
                            : undefined
                        } 
                      </>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </PopOverMenu>
      </PopOver>
    </div>
  )
}

export default Emoji