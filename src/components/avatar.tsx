import { css } from "@emotion/react";

const avatarStyle = () => css`
height: 45px;
width: 45px;  
border-radius: 50%;
`
export default function Avatar({ src }: { src: string }) {
  return (
    <img css={avatarStyle()} src={src} alt="" />
  )
}