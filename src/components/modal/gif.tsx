import { useEffect, useState } from "react"
import { css } from "@emotion/react"
import { Search } from "react-feather"

import { Theme, useTheme } from "../../theme"
import Modal from "../modal"

const style = (theme: Theme) => css`
.search-bar {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 1.5rem 0 1.5rem 1.5rem;
  label {
    background-color: ${theme.colors.backgroundSecondary};
    padding: .5rem 1rem;
    border-top-left-radius: .5rem;
    border-bottom-left-radius: .5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
      cursor: pointer;
    }
  }
  input {
    width: 75%;
    border: none;
    outline: none;
    font-size: 1.6rem;
    font-weight: 400;
    color: ${theme.colors.primary};
    background-color: ${theme.colors.backgroundSecondary};
    border-top-right-radius: .5rem;
    border-bottom-right-radius: .5rem;
    padding: .5rem 1rem .5rem 0;
  }

  label, input {
    height: 4rem;
  }
}

.main {
  margin: 1.5rem;
}
`


interface IGifModal {
  open: boolean
  onClose: () => void
  setGif: (gif: string) => void
}

const GifModal = ({ open, onClose, setGif }: IGifModal) => {
  const theme = useTheme()
  const [search, setSearch] = useState("")

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // fetch gifs
    }, 1000)
    return () => clearTimeout(timeoutId)
  }, [search])

  const debounceChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <Modal open={open} onClose={onClose}>
      <div css={style(theme)}>
        <div className="search-bar">
          <label htmlFor="search-gif">
            <Search size={16} />
          </label>
          <input
            id="search-gif"
            type="text"
            placeholder="Search GIFs"
            value={search}
            onChange={debounceChange}
          />
        </div>
        <div className="main">
          GIFs
        </div>
      </div>
    </Modal>
  )
}

export default GifModal