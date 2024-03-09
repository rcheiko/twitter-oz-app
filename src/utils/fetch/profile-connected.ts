import { fetchProxy } from "../proxy"

export const getProfileConnected = async () => {
  const res = await fetchProxy(
    'https://api.twitter.com/1.1/account/multi/list.json', {
      headers: {
        accept: "*/*",
        authorization: import.meta.env.VITE_BEARER_TOKEN_TWITTER,
        "x-csrf-token": "dd76e4e2c75717bc38667663ba4feb91405d2b0097345e5fc71d5a92ab9efecf4395fdb018bb3996654d6ee376dd6cfb9051b017ce3cb910576387cb3fa9e5419b01954468d1c06faeb8159225142183",
        Cookie: `kdt=op6KVvRA4lQO8MymHddnS3Ztlc5ElnKU09Elq6QJ; dnt=1; auth_multi="1270649793048649728:8db649f1949deb9d25d3446f119c84eaded6d9df"; auth_token=a29f64cc321031e038157ed5ada7b6c83120c8e0; guest_id=v1%3A170258044947635877; twid=u%3D843157717611089920; ct0=dd76e4e2c75717bc38667663ba4feb91405d2b0097345e5fc71d5a92ab9efecf4395fdb018bb3996654d6ee376dd6cfb9051b017ce3cb910576387cb3fa9e5419b01954468d1c06faeb8159225142183; d_prefs=MToxLGNvbnNlbnRfdmVyc2lvbjoyLHRleHRfdmVyc2lvbjoxMDAw; guest_id_ads=v1%3A170258044947635877; guest_id_marketing=v1%3A170258044947635877; personalization_id="v1_sv0PSmMoCKczogbbfBykKg=="; _ga=GA1.2.825641528.1702770637; _gid=GA1.2.2078389671.1707304069`
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