import { ApolloClient, InMemoryCache, makeVar } from "@apollo/client"
import { RestLink } from "apollo-link-rest"

const restLink = new RestLink({ uri: import.meta.env.VITE_BACK_URL })

export const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: restLink
})

export const screenName = makeVar<string | undefined>(undefined)
