import { FaceSmileIcon } from '@heroicons/react/24/outline'
import Picker from '@emoji-mart/react'
import data from '@emoji-mart/data/sets/14/twitter.json'

import { PopOver, PopOverCard, PopOverMenu } from "./popover-card"
import { useTheme } from "../theme"

const Emoji = ({
  addText
}: {
  addText: (text: string) => void
}) => {
  const theme = useTheme()

  return (
    <div>
      <PopOver>
        <PopOverCard>
          <FaceSmileIcon />
        </PopOverCard>
        <PopOverMenu>
          <div>
            <Picker
              set="twitter"
              data={data}
              onEmojiSelect={(e: any) => addText(e.native)}
              autoFocus={true}
              emojiSize={22}
              emojiButtonSize={30}
              maxFrequentRows={1}
              perLine={10}
              searchPosition="static"
              theme={theme.colorScheme}
              skinTonePosition="none"
            />
          </div>
        </PopOverMenu>
      </PopOver>
    </div>
  )
}

export default Emoji