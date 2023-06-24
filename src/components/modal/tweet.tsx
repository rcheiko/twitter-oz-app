import { css } from "@emotion/react"
import { Theme } from "../../theme"
import Modal from "../modal"

export const tweetModalStyle = (theme: Theme) => css`

`

interface ITweetModal {
  open: boolean
  onClose: () => void
}

export const TweetModal = ({
  open,
  onClose
}: ITweetModal) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div>
        <h1>Are you sure?</h1>
        <p>Do you really want to delete these records? This process cannot be undone.</p>
      </div>
    </Modal>
  )
}