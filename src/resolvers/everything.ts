import { INewsClient, EverythingParameters } from "../@types/INewsCient";

export default (newsClient: INewsClient) =>
  async (_: any, args: EverythingParameters) => {
    const articles = await newsClient.everything(args);

    return articles;
  };
