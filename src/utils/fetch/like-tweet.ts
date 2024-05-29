import { fetchProxy } from "../proxy"

export const likeTweet = async (tweetId: string | undefined) => {
  if (!tweetId) throw new Error('No tweet id provided')
  const data = {
    variables: {
      tweet_id: tweetId
    },
  }
  
  const res = await fetchProxy(
    'https://x.com/i/api/graphql/lI07N6Otwv1PhnEgXILM7A/FavoriteTweet', {
      headers: {
        accept: "*/*",
        authorization: import.meta.env.VITE_BEARER_TOKEN_TWITTER,
        "Content-Type": "application/json",
        "x-csrf-token": "afedc7db22625a05e9369bd1f35a18a9e5bf3b475e18350b698bd892bd1ee06cd752c8fca86c08b527f0412e33f0e1d1b2196c0a14ec64d0a389badeb21c9e61dc27237809d0abe710fb0498128e24c9",
        Cookie: `guest_id=v1%3A171570254258676814; twid=u%3D843157717611089920; auth_token=3c5521333a6f3bf8714a3422a0c6745d32ff74f0; ct0=afedc7db22625a05e9369bd1f35a18a9e5bf3b475e18350b698bd892bd1ee06cd752c8fca86c08b527f0412e33f0e1d1b2196c0a14ec64d0a389badeb21c9e61dc27237809d0abe710fb0498128e24c9; d_prefs=MjoxLGNvbnNlbnRfdmVyc2lvbjoyLHRleHRfdmVyc2lvbjoxMDAw; lang=en`
      },
      method: 'POST',
      body: JSON.stringify(data)
    }
  )
  console.log(res)
}

export const dislikeTweet = async (tweetId: string | undefined) => {
  if (!tweetId) throw new Error('No tweet id provided')

    const data = {
      variables: {
        tweet_id: tweetId
      },
    }
    const res = await fetchProxy(
      'https://x.com/i/api/graphql/ZYKSe-w7KEslx3JhSIk5LA/UnfavoriteTweet', {
        method: 'POST',
        headers: {
          accept: "*/*",
          authorization: import.meta.env.VITE_BEARER_TOKEN_TWITTER,
          "Content-Type": "application/json",
          "x-csrf-token": "74de5dc1fc7fef37d9b9a6a47a1c6509f80ad975cf7bfdaa6f7655a2616b48dea0d740ff46100a305a621a8aec8db8afb1ebf3b7a94ee4559d2f0004c6a67460bb006dbb039fec6cb647a296f72122ce",
          Cookie: `kdt=op6KVvRA4lQO8MymHddnS3Ztlc5ElnKU09Elq6QJ; dnt=1; g_state={"i_l":0}; d_prefs=MToxLGNvbnNlbnRfdmVyc2lvbjoyLHRleHRfdmVyc2lvbjoxMDAw; guest_id_ads=v1%3A170258044947635877; guest_id_marketing=v1%3A170258044947635877; _ga=GA1.2.825641528.1702770637; _gid=GA1.2.1281033806.1711925821; auth_multi="1270649793048649728:8db649f1949deb9d25d3446f119c84eaded6d9df"; auth_token=3c5521333a6f3bf8714a3422a0c6745d32ff74f0; personalization_id="v1_hF67G9SAsPWaCKfyvKiH5g=="; guest_id=v1%3A171226296269133117; twid=u%3D843157717611089920; ct0=74de5dc1fc7fef37d9b9a6a47a1c6509f80ad975cf7bfdaa6f7655a2616b48dea0d740ff46100a305a621a8aec8db8afb1ebf3b7a94ee4559d2f0004c6a67460bb006dbb039fec6cb647a296f72122ce; lang=en`
        },
        body: JSON.stringify(data)
      }
    )
    console.log(res)
}

