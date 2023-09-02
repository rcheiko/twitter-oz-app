import { css } from "@emotion/react"

const avatarStyle = (size?: string) => css`
height: ${size ? size : `4.5rem`};
width: ${size ? size : `4.5rem`};  
border-radius: 50%;
`
export const Avatar = ({ src, size }: { src: string, size?: string }) => {
  return (
    <img css={avatarStyle(size)} src={src} alt="avatar" />
  )
}

export default Avatar