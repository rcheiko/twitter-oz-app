import { SyntheticEvent, useCallback, useEffect, useRef, useState } from "react"
import { css } from "@emotion/react"
import { Search } from "react-feather"
import { GiphyFetch } from "@giphy/js-fetch-api"
import { Grid } from "@giphy/react-components"
import { IGif } from "@giphy/js-types"

import { Theme, useTheme } from "../../theme"
import Modal from "../modal"

const style = (theme: Theme) => css`
min-height: 80rem;

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

  picture {
    :hover {
      cursor: pointer;
    }
  }
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
  const [debounceTimeout, setDebounceTimeout] = useState<number | null>(null)
  const [width, setWidth] = useState(800)

  const gf = new GiphyFetch(import.meta.env.VITE_GIPHY_API_KEY) 
  const ref = useRef(null)

  useEffect(() => {
    if (!ref.current) return
    const resizeObserver = new ResizeObserver((entries) => {
      if (entries && entries.length > 0) {
        const { width } = entries[0].contentRect
        setWidth(width > 800 ? 800 : width)
      }
    })
    resizeObserver.observe(ref.current)
    return () => resizeObserver.disconnect()
  }, [ref])

  const fetchGifs = useCallback((offset: number) => {
    if (search) {
      return gf.search(search, { offset, sort: 'relevant', limit: 10, type: 'gifs' })
    } else {
      return gf.trending({ offset, limit: 10 })
    }
  }, [search, gf])

  const debounceChange = (e) => {
    const value = e.target.value

    if (debounceTimeout) {
      clearTimeout(debounceTimeout)
    }

    const newTimeout = setTimeout(() => {
      setSearch(value)
    }, 1000)

    setDebounceTimeout(newTimeout)
  }

  const onGifClick = (gif: IGif, e: SyntheticEvent<HTMLElement, Event>) => {
    console.log(gif);
    setGif(gif.images.original.url)
    onClose()
  }

  return (
    <Modal open={open} onClose={onClose}>
      <div css={style(theme)} ref={ref}>
        <div className="search-bar">
          <label htmlFor="search-gif">
            <Search size={16} />
          </label>
          <input
            id="search-gif"
            type="text"
            placeholder="Search GIFs"
            onChange={debounceChange}
          />
        </div>
        <div className="main">
          <Grid
            key={search}
            width={width}
            columns={3}
            noLink={true}
            onGifClick={onGifClick}
            fetchGifs={fetchGifs}
            hideAttribution={true}
          />
        </div>
      </div>
    </Modal>
  )
}

export default GifModal