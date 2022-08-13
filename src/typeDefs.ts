import { gql } from "apollo-server";

const typeDefs = gql`
  type Source {
    id: ID
    name: String
  }

  type Article {
    author: String
    content: String
    description: String
    publishedAt: String!
    source: Source!
    title: String
    url: String!
    urlToImage: String
  }

  type Query {
    headlines(
      country: String
      category: String
      sources: String
      keyword: String
      pageSize: Int
      page: Int
    ): [Article!]!
  }
`;

export default typeDefs;
