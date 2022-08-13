import dotenv from "dotenv";
import NewsClient from "./newsClient";
import { createServer } from "./server";

dotenv.config();

const newsClient = new NewsClient(process.env.NEWS_API_KEY);

createServer(newsClient)
  .listen()
  .then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
