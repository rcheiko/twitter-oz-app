import { css } from "@emotion/react"

import { Theme, colors, useTheme } from "../../../theme"

export const style = (theme: Theme) => css`
display: flex;
flex-direction: column;
align-items: flex-end;
margin-right: 1rem;

.text {
  color: ${colors.white};
  font-size: 1.8rem;
  background: ${theme.colors.active};
  padding: 1rem 2rem;
  border-radius: 2rem 2rem .25rem 2rem;
}

.date {
  margin-top: .5rem;
  font-size: 1.4rem;
  color: ${theme.colors.inactive};
}
`

const Sended = () => {
  const theme = useTheme()

  return (
    <div css={style(theme)}>
      <span className='text'>Message</span>
      <span className='date'>Feb 19, 2022, 9:11 AM</span>
    </div>
  )
}

export default Sended