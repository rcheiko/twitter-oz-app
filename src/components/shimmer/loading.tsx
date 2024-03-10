import { css } from "@emotion/react"

import { Theme, useTheme } from "../../theme"
import spinner from '../../assets/spinner.svg'

const style = (theme: Theme) => css`
display: flex;
justify-content: center;
align-items: center;
margin-top: 1rem;

img {
  width: 5rem;
  height: 5rem;  
}
`


const Loading = () => {
  const theme = useTheme()

  return (
    <div css={style(theme)}>
      <img src={spinner} alt="spinner" />
    </div>
  )
}

export default Loading