import { ApolloServer } from "apollo-server";
import { INewsClient } from "./@types/INewsCient";
import everything from "./resolvers/everything";
import headlines from "./resolvers/headlines";
import typeDefs from "./typeDefs";

export const createServer = (newsClient: INewsClient) => {
  const resolvers = {
    Query: {
      everything: everything(newsClient),
      headlines: headlines(newsClient),
    },
  };

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: "bounded",
  });

  return server;
};
