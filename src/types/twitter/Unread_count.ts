// fetch("https://twitter.com/i/api/2/badge_count/badge_count.json?supports_ntab_urt=1", {
//   "headers": {
//     "accept": "*/*",
/*
    "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
    "authorization": "",
    "x-csrf-token": "03ce76555f4e96d5b21a7fd41af25c1659ab4ce14f0c1c7b172eddb9027fbe96d020efb8ac32f7cb3774a14fac0407d6dcb3f2239d86b7ef668387328db2f0759a433dfb060bf883ba43d17b4b59ace1",
    "x-twitter-active-user": "yes",
    "x-twitter-auth-type": "OAuth2Session",
    "x-twitter-client-language": "en",
    "x-twitter-polling": "true"
  },
  "referrer": "https://twitter.com/home",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
});

VARIABLES :
    supports_ntab_urt=1
*/
export interface UnreadCount {
    ntab_unread_count: number
    dm_unread_count: number
    total_unread_count: number
    is_from_urt: boolean
}