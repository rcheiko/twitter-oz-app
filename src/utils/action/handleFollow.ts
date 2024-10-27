import { Result3 } from "../../types/twitter/UserTweet"
import { follow, unfollow } from "../fetch/unfollow"
import { User } from "../fetch/notifications"

export const followButton = async(userInfo: Result3 | User | undefined, followed: boolean | null | undefined): Promise<boolean> => {
  if (followed === undefined) return false
  if (followed) {
    return await unfollow(userInfo?.rest_id ?? userInfo?.id_str)
  } else {
    return await follow(userInfo?.rest_id ?? userInfo?.id_str)
  }
}