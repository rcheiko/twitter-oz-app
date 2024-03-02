import { css } from "@emotion/react"
import Shimmer from "./shimmer/shimmer"

const avatarStyle = (size?: string) => css`
height: ${size ? size : `4.5rem`};
width: ${size ? size : `4.5rem`};  
border-radius: 50%;
:after {
  border-radius: 50%;
}
`
const Avatar = ({src, size, shimmer = false}: {src?: string, size?: string, shimmer?: boolean}) => {
  return (
    <>
      {
        shimmer
          ? <Shimmer css={avatarStyle(size)} />
          : src && <img css={avatarStyle(size)} src={src} alt="avatar" />
      }
    </>
  )
}

export default Avatar