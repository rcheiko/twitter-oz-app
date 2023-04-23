import { css } from "@emotion/react";
import { Theme, useTheme } from "../../theme";
import avatar from "../../assets/avatar.jpg"

const tweet = (theme: Theme) => css`
padding: 1rem 1.5rem;

.profilePicture {
  height: 40px;
  width: 40px;  
  border-radius: 50%;
}
`
export default function Tweet() {
  const theme = useTheme()

  return (
    <div css={tweet(theme)}>
      <img src={avatar} alt="" className="profilePicture" />
      <input type="text" placeholder="What's Happening?" />
    </div>
  )
}