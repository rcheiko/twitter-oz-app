// fetch("https://twitter.com/i/api/graphql/pNpPbYKtMTdqXgET8fNQIA/UsersVerifiedAvatars?variables=%7B%22userIds%22%3A%5B%22843157717611089920%22%2C%221270649793048649728%22%2C%221540235765317246976%22%5D%7D&features=%7B%22blue_business_consumption_api_enabled%22%3Atrue%2C%22responsive_web_graphql_timeline_navigation_enabled%22%3Atrue%7D", {
//   "headers": {
//     "accept": "*/*",
/*
    "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
    "authorization": "Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA",
    "content-type": "application/json",
    "sec-ch-ua": "\"Google Chrome\";v=\"111\", \"Not(A:Brand\";v=\"8\", \"Chromium\";v=\"111\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-csrf-token": "03ce76555f4e96d5b21a7fd41af25c1659ab4ce14f0c1c7b172eddb9027fbe96d020efb8ac32f7cb3774a14fac0407d6dcb3f2239d86b7ef668387328db2f0759a433dfb060bf883ba43d17b4b59ace1",
    "x-twitter-active-user": "yes",
    "x-twitter-auth-type": "OAuth2Session",
    "x-twitter-client-language": "en"
  },
  "referrer": "https://twitter.com/ZeratoR",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": null,
  "method": "GET",
  "mode": "cors",
  "credentials": "include"
});

VARIABLES :
variables={
  "userIds":["843157717611089920",
  "1270649793048649728",
  "1540235765317246976"]
  }
  &features={
  "blue_business_consumption_api_enabled":true,
  "responsive_web_graphql_timeline_navigation_enabled":true
}
*/

export interface ProfileVerifiedType {
  data: Data;
}

export interface Data {
  usersResults: UsersResult[];
}

export interface UsersResult {
  result: Result;
}

export interface Result {
  __typename: string;
  is_blue_verified: boolean;
  has_nft_avatar: boolean;
  affiliates_highlighted_label: AffiliatesHighlightedLabel;
  rest_id: string;
  legacy: Legacy;
}

export interface AffiliatesHighlightedLabel {}

export interface Legacy {}
