import { Result3 } from "../../types/twitter/UserTweet"
import { follow, unfollow } from "../fetch/unfollow"

export const followButton = async(userInfo: Result3 | undefined, followed: boolean | undefined): Promise<boolean> => {
  if (followed === undefined) return false
  if (followed) {
    return await unfollow(userInfo?.rest_id)
  } else {
    return await follow(userInfo?.rest_id)
  }
}