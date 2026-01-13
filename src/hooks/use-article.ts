import { useQuery } from '@tanstack/react-query';
import { articleService } from '../lib/api/services/article';

export function useArticles() {
  return useQuery({
    queryKey: ['articles'],
    queryFn: async () => {
      const response = await articleService.getArticles();
      return response.data;
    },
  });
}
