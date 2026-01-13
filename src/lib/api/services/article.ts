import { API_ENDPOINTS, apiRequest } from '../config';
import { ApiResponse, Article } from '../types';

export const articleService = {
  getArticles: async (): Promise<ApiResponse<Article[]>> => {
    return apiRequest<ApiResponse<Article[]>>(API_ENDPOINTS.GET_ARTICLES);
  },

  getArticleById: async (id: string): Promise<ApiResponse<Article>> => {
    return apiRequest<ApiResponse<Article>>(API_ENDPOINTS.GET_ARTICLE_BY_ID(id));
  },
};
