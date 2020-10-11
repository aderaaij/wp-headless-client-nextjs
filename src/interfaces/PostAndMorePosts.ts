import { CategoryToPostConnection, Post as PostType } from 'types';

export type PostAndMorePosts = {
  post: PostType;
  posts: CategoryToPostConnection;
};
