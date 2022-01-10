import axios from "axios";

export type EventLaunch = {
  id: string;
  provider: string;
};

export interface Article {
  id: number;
  featured: boolean;
  title: string;
  url: string;
  imageUrl: string;
  newsSite: string;
  summary: string;
  publishedAt: string;
  launches: EventLaunch[];
  events: EventLaunch[];
}

export type UpdatableArticle = Partial<Omit<Article, "id">>;

export type CreatableArticle = Omit<Article, "id">;

const articleApiClient = axios.create({
  baseURL: `${process.env.REACT_APP_URL_API}/articles`,
  timeout: 500000,
});

export default {
  getArticle: (id: number) =>
    articleApiClient.get(`${id}`).then(({ data }) => data),

  listArticles: (
    offset: number,
    limit: number,
    newest: boolean,
    title: string
  ) => {
    let parsedTitle = "";
    if (title.length > 0) {
      parsedTitle = `&${new URLSearchParams({ title }).toString()}`;
    }

    return articleApiClient
      .get(`?start=${offset}&limit=${limit}&newest=${newest}${parsedTitle}`)
      .then(({ data }) => data);
  },
  createArticles: (id: number, data: CreatableArticle) =>
    articleApiClient.post(`${id}`, data),

  updateArticles: (id: number, data: UpdatableArticle) =>
    articleApiClient.put(`${id}`, data),

  deleteArticles: (id: number) => articleApiClient.delete(`${id}`),
};
