import { gql } from '@apollo/client';

export const GET_PROFILE_CONNECTED = gql`
  query ProfileConnected {
    ProfileConnected @rest(path: "ProfileConnected") {
        users {
            user_id
            name
            screen_name
            avatar_image_url
            is_suspended
            is_verified
            is_protected
            is_auth_valid
        }
    }
  }
`;

export const GET_PROFILE_VERIFIED = gql`
  query ProfileVerified {
    ProfileVerified @rest(path: "ProfileVerified") {
        users {
            user_id
            name
            screen_name
            avatar_image_url
            is_suspended
            is_verified
            is_protected
            is_auth_valid
        }
    }
  }
`;
