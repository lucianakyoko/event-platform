import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ohje100bxo01w7awtic4yw/master',
  cache: new InMemoryCache()
})