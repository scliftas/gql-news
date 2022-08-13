import { createServer } from "../server";
import { INewsClient, Article, HeadlineParameters } from "../@types/INewsCient";

const mockHeadlines: Article[] = [
  {
    author: "Test Author 1",
    publishedAt: "2022-08-13T16:42:31Z",
    source: {
      id: "test-source-id-1",
      name: "Test Source 1",
    },
    title: "Test Article 1",
    url: "https://test.com/article-1",
    urlToImage: "https://test.com/article-1.png",
    content: "Test Content 1",
    description: "Test Description 1",
  },
  {
    author: "Test Author 2",
    publishedAt: "2022-08-13T16:18:00Z",
    source: {
      id: "test-source-id-2",
      name: "Test Source 2",
    },
    title: "Test Article 2",
    url: "https://test.com/article-2",
    urlToImage: "https://test.com/article-2.png",
    content: "Test Content 2",
    description: "Test Description 2",
  },
];

class MockNewsClient implements INewsClient {
  apiKey: string;
  headlines(_: HeadlineParameters) {
    return Promise.resolve(mockHeadlines);
  }
}

test("headlines query returns headlines from the news api", async () => {
  const newsClient = new MockNewsClient();
  const server = createServer(newsClient);

  const result = await server.executeOperation({
    query: `query Headlines {headlines{author
      publishedAt
      source {
        id
        name
      }
      title
      url
      urlToImage
      content
      description}}`,
  });

  expect(result.data).toEqual({ headlines: mockHeadlines });
});
