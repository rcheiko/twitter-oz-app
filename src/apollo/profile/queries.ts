import { gql } from '@apollo/client';


// TODO: add name of the user who need to be searched
export const GET_PROFILE_SPOTLIGHT = gql`
  query ProfileSpotlight {
    ProfileSpotlight @rest(type: "ProfileSpotlight", path: "ProfileSpotlight") {
        data {
            user_result: user_result_by_screen_name {
                result {
                    legacy {
                        name
                        screen_name
                        protected
                        following
                        followed_by
                        blocking
                        blocked_by
                    }
                    id
                }
                id
            }
        }
    }
  }
`;