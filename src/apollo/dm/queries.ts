import { gql } from '@apollo/client';

export const GET_UNREAD = gql`
  query Unread {
    Unread @rest(type: "Unread", path: "Unread") {
        ntab_unread_count
        dm_unread_count
        total_unread_count
        is_from_urt
    }
  }
`;