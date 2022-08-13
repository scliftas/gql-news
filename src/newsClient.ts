import axios from "axios";
import { INewsClient, HeadlineParameters } from "./@types/INewsCient";

export default class News implements INewsClient {
  apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async doRequest(endpoint: string, reqParams: HeadlineParameters) {
    const params = reqParams;
    params.apiKey = this.apiKey;

    try {
      const result = await axios.get(`https://newsapi.org/v2/${endpoint}`, {
        params,
      });

      return result.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }

  async headlines({
    keyword = null,
    country = null,
    category = null,
    source = null,
    pageSize = 5,
    page = 1,
  }) {
    const params: HeadlineParameters = { pageSize, page };

    if (keyword) params.q = keyword;

    if (source) {
      params.sources = source;
    } else {
      if (country) params.country = country;
      if (category) params.category = category;
    }

    const result = await this.doRequest("top-headlines", params);

    return result.articles;
  }
}
