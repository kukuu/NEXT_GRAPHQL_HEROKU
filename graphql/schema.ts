import {gql} from 'apollo-server-micro';

export const typeDefs = gql`
  type Person {
    id: ID!
    name: String
    address: String
    email: String
    phone: String
  }
  type Edge {
    cursor: String
    node: Person
  }
  type Response {
    edges: [Edge]
    pageInfo: PageInfo
  }
  type PageInfo {
    hasNextPage: Boolean
    endCursor: String
  }
  type Query {
    people(first: Int = 3,after: Int = 2): Response!
  }
`;