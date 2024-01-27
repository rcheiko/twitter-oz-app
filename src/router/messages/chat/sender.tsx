import { css } from "@emotion/react"

import { Theme, useTheme } from "../../../theme"

export const style = (theme: Theme) => css`
display: flex;
flex-direction: column;
align-items: flex-start;
margin-left: 1rem;

.text {
  font-size: 1.8rem;
  background: ${theme.colors.backgroundSecondary};
  padding: 1rem 2rem;
  border-radius: 2rem 2rem 2rem .25rem;
}

.date {
  margin-top: .5rem;
  font-size: 1.4rem;
  color: ${theme.colors.inactive};
}
`

const Sender = () => {
  const theme = useTheme()

  return (
    <div css={style(theme)}>
      <span className='text'>Message</span>
      <span className='date'>Feb 19, 2022, 8:11 AM</span>
    </div>
  )
}

export default Sender