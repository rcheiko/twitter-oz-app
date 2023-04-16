import { css } from "@emotion/react";
import { breakpoints } from "../styles/global";
import { Theme, useTheme } from "../theme"
import { styleRightbar } from "../styles/side"

export default function Rightbar() {
  const theme = useTheme();

  return (
    <>
      <nav css={styleRightbar(theme)} className="nav">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, praesentium!
      </nav>
    </>
  )
}
