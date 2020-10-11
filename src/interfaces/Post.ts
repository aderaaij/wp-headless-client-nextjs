import { AuthorTeaser } from './Author';
import { FeaturedImage } from './FeaturedImage';

export interface PostTeasers {
  edges: PostTeaser[];
}

export interface PostTeaser {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  featuredImage: FeaturedImage;
  author: AuthorTeaser;
}

export type Post = {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  featuredImage: FeaturedImage;
  author: AuthorTeaser;
  categories: { edges: any[] };
  tags: { edges: any[] };
  content: string;
  posts: PostTeasers;
};

export type PostAndMorePosts = {
  post: Post;
  posts: PostTeasers;
};
