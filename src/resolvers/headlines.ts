import { INewsClient, HeadlineParameters } from "../@types/INewsCient";

export default (newsClient: INewsClient) =>
  async (_: any, args: HeadlineParameters) => {
    const articles = await newsClient.headlines(args);

    return articles;
  };
