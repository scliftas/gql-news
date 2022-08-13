type Source = {
  id?: string | null;
  name?: string | null;
};

export type Article = {
  author: string;
  content?: string | null;
  description?: string | null;
  publishedAt: string;
  source: Source;
  title?: string | null;
  url?: string | null;
  urlToImage?: string | null;
};

export type HeadlineParameters = {
  keyword?: string;
  country?: string;
  category?: string;
  sources?: string;
  pageSize?: number;
  page?: number;
  q?: string;
  apiKey?: string;
};

export interface INewsClient {
  apiKey: string;
  headlines(args: HeadlineParameters): Promise<Article[]>;
}
