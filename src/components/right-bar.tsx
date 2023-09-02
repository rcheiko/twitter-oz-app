import { useTheme } from "../theme"
import { styleRightbar } from "../styles/side"

export const Rightbar = () => {
  const theme = useTheme()

  return (
    <nav css={styleRightbar(theme)} className="nav">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, praesentium!
    </nav>
  )
}

export default Rightbar