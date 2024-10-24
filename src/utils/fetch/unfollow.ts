import { fetchProxy } from "../proxy"

export const unfollow = async (user_id: string | undefined): Promise<boolean> => {
  if (!user_id) throw new Error('user id not provided')
  const params = new URLSearchParams()
  params.append('include_profile_interstitial_type', '1')
  params.append('include_blocking', '1')
  params.append('include_blocked_by', '1')
  params.append('include_followed_by', '1')
  params.append('include_want_retweets', '1')
  params.append('include_mute_edge', '1')
  params.append('include_can_dm', '1')
  params.append('include_can_media_tag', '1')
  params.append('include_ext_is_blue_verified', '1')
  params.append('include_ext_verified_type', '1')
  params.append('include_ext_profile_image_shape', '1')
  params.append('skip_status', '1')
  params.append('user_id', user_id)
  
  const res = await fetchProxy(
    'https://x.com/i/api/1.1/friendships/destroy.json', {
      headers: {
        accept: "*/*",
        "Content-Type": "application/x-www-form-urlencoded",
        authorization: import.meta.env.VITE_BEARER_TOKEN_TWITTER,
        "x-csrf-token": "afedc7db22625a05e9369bd1f35a18a9e5bf3b475e18350b698bd892bd1ee06cd752c8fca86c08b527f0412e33f0e1d1b2196c0a14ec64d0a389badeb21c9e61dc27237809d0abe710fb0498128e24c9",
      },
      method: 'POST',
      body: params
    }
  )

  if (res.status === 200) return true
  return false
}

export const follow = async (user_id: string | undefined): Promise<boolean> => {
  if (!user_id) throw new Error('user id not provided')
  const params = new URLSearchParams()
  params.append('include_profile_interstitial_type', '1')
  params.append('include_blocking', '1')
  params.append('include_blocked_by', '1')
  params.append('include_followed_by', '1')
  params.append('include_want_retweets', '1')
  params.append('include_mute_edge', '1')
  params.append('include_can_dm', '1')
  params.append('include_can_media_tag', '1')
  params.append('include_ext_is_blue_verified', '1')
  params.append('include_ext_verified_type', '1')
  params.append('include_ext_profile_image_shape', '1')
  params.append('skip_status', '1')
  params.append('user_id', user_id)

  const res = await fetchProxy(
    'https://x.com/i/api/1.1/friendships/create.json', {
      headers: {
        accept: "*/*",
        "Content-Type": "application/x-www-form-urlencoded",
        authorization: import.meta.env.VITE_BEARER_TOKEN_TWITTER,
        "x-csrf-token": "afedc7db22625a05e9369bd1f35a18a9e5bf3b475e18350b698bd892bd1ee06cd752c8fca86c08b527f0412e33f0e1d1b2196c0a14ec64d0a389badeb21c9e61dc27237809d0abe710fb0498128e24c9",
      },
      method: 'POST',
      body: params
    }
  )

  if (res.status === 200) return true
  return false
}