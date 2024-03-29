// fetch("https://twitter.com/i/api/graphql/9zwVLJ48lmVUk8u_Gh9DmA/ProfileSpotlightsQuery?variables=%7B%22screen_name%22%3A%22ZeratoR%22%7D", {
//   "headers": {
//     "accept": "*/*",
/*
    "accept-language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
    "authorization": "",
    "content-type": "application/json",
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
"screen_name":"ZeratoR" ======= // screen_name = username of the profile you want to get the spotlight of
*/

export interface ProfileSpotlightType {
  data: Data;
}

export interface Data {
  user_result: UserResultByScreenName;
}

export interface UserResultByScreenName {
  result: Result;
  id: string;
}

export interface Result {
  __typename: string;
  legacy: Legacy;
  rest_id: string;
  profilemodules: Profilemodules;
  id: string;
}

export interface Legacy {
  blocking: boolean;
  blocked_by: boolean;
  protected: boolean;
  following: boolean;
  followed_by: boolean;
  name: string;
  screen_name: string;
}

export interface Profilemodules {
  v1: any[];
}
