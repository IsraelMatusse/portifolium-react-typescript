export interface ApiResponse<T> {
  data: T;
  message: string;
}

export interface Article {
  id: number;
  title: string;
  published_at: Date;
  body: string;
  link: string;
}
