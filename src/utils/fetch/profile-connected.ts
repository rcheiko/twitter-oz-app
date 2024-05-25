import { fetchProxy } from "../proxy"

export const getProfileConnected = async () => {
  const res = await fetchProxy(
    'https://api.twitter.com/1.1/account/multi/list.json', {
      headers: {
        accept: "*/*",
        authorization: import.meta.env.VITE_BEARER_TOKEN_TWITTER,
        "x-csrf-token": "74de5dc1fc7fef37d9b9a6a47a1c6509f80ad975cf7bfdaa6f7655a2616b48dea0d740ff46100a305a621a8aec8db8afb1ebf3b7a94ee4559d2f0004c6a67460bb006dbb039fec6cb647a296f72122ce",
        Cookie: `kdt=op6KVvRA4lQO8MymHddnS3Ztlc5ElnKU09Elq6QJ; dnt=1; g_state={"i_l":0}; d_prefs=MToxLGNvbnNlbnRfdmVyc2lvbjoyLHRleHRfdmVyc2lvbjoxMDAw; guest_id_ads=v1%3A170258044947635877; guest_id_marketing=v1%3A170258044947635877; _ga=GA1.2.825641528.1702770637; _gid=GA1.2.1281033806.1711925821; auth_multi="1270649793048649728:8db649f1949deb9d25d3446f119c84eaded6d9df"; auth_token=3c5521333a6f3bf8714a3422a0c6745d32ff74f0; personalization_id="v1_hF67G9SAsPWaCKfyvKiH5g=="; guest_id=v1%3A171226296269133117; twid=u%3D843157717611089920; ct0=74de5dc1fc7fef37d9b9a6a47a1c6509f80ad975cf7bfdaa6f7655a2616b48dea0d740ff46100a305a621a8aec8db8afb1ebf3b7a94ee4559d2f0004c6a67460bb006dbb039fec6cb647a296f72122ce; lang=en`
      }
    }
  )
  return await res.json() as ProfileConnectedType
}

export type ProfileConnectedType = {
  users: Array<{
    avatar_image_url: string
    is_auth_valid: boolean
    is_protected: boolean
    is_verified: boolean
    name: string
    screen_name: string
    user_id: string
  }>
}