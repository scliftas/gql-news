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

export type SearchIn = "title" | "description" | "content";

export type EverythingParameters = {
  q?: string | null;
  searchIn?: SearchIn | null;
  sources?: string | null;
  domains?: string | null;
  excludeDomains?: string | null;
  from?: string | null;
  to?: string | null;
  language?: string | null;
  sortBy?: string | null;
  pageSize?: number | null;
  page?: number | null;
  
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
  everything: (args: EverythingParameters) => Promise<Article[]>;
  headlines(args: HeadlineParameters): Promise<Article[]>;
}
