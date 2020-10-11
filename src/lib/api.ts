import { previewPost } from '@graphql/queries/previewPost';
import { allPostsWithSlug } from '@graphql/queries/allPostsWithSlug';
import { allPostsForHome } from '@graphql/queries/allPostsForHome';
import { AuthorFields } from '@graphql/fragments/AuthorFields';
import { postBySlug } from '@graphql/queries/postBySlug';
import { PostFields } from '@graphql/fragments/PostFields';
import { PostTeasers, PostAndMorePosts } from '@interfaces/Post';
import { PostIdType, PostIdTypeUnion } from '@interfaces/PostIdType';

const API_URL = process.env.WORDPRESS_API_URL;

enum PreviewStatus {
  DRAFT = 'draft',
  PUBLISH = 'publish',
}

interface Variables {
  id?: string;
  idType?: PostIdTypeUnion;
  onlyEnabled?: boolean;
  preview?: boolean;
}

interface FetchOptions {
  variables?: Variables;
}

async function fetchAPI(
  query: string,
  { variables }: FetchOptions = {}
): Promise<any> {
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  if (process.env.WORDPRESS_AUTH_REFRESH_TOKEN) {
    headers[
      'Authorization'
    ] = `Bearer ${process.env.WORDPRESS_AUTH_REFRESH_TOKEN}`;
  }

  if (!API_URL) throw new Error('API_URL undefined');

  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error('Failed to fetch API');
  }
  return json.data;
}

export async function getPreviewPost(
  id: string,
  idType = PostIdType.DATABASE_ID
) {
  const data = await fetchAPI(previewPost, {
    variables: { id, idType },
  });
  return data.post;
}

interface PostWithSlug {
  node: {
    slug: string;
  };
}
interface AllPostsWithSlug {
  edges: Array<PostWithSlug>;
}

export async function getAllPostsWithSlug(): Promise<AllPostsWithSlug> {
  const data = await fetchAPI(allPostsWithSlug);
  return data?.posts;
}

export async function getAllPostsForHome(
  preview: boolean
): Promise<PostTeasers> {
  const data = await fetchAPI(allPostsForHome, {
    variables: {
      onlyEnabled: !preview,
      preview,
    },
  });
  return data?.posts;
}

export async function getPostAndMorePosts(
  slug: string,
  preview: boolean,
  previewData: any
): Promise<PostAndMorePosts> {
  const postPreview = preview && previewData?.post;
  // The slug may be the id of an unpublished post
  const isId = Number.isInteger(Number(slug));
  const isSamePost = isId
    ? Number(slug) === postPreview.id
    : slug === postPreview.slug;
  const isDraft = isSamePost && postPreview?.status === PreviewStatus.DRAFT;
  const isRevision =
    isSamePost && postPreview?.status === PreviewStatus.PUBLISH;
  const query = `${AuthorFields}${PostFields}${postBySlug(isRevision)}`;
  const data = await fetchAPI(query, {
    variables: {
      id: isDraft ? postPreview.id : slug,
      idType: isDraft ? PostIdType.DATABASE_ID : PostIdType.SLUG,
    },
  });

  // Draft posts may not have an slug
  if (isDraft) data.post.slug = postPreview.id;
  // Apply a revision (changes in a published post)
  if (isRevision && data.post.revisions) {
    const revision = data.post.revisions.edges[0]?.node;

    if (revision) Object.assign(data.post, revision);
    delete data.post.revisions;
  }

  // Filter out the main post
  data.posts.edges = data.posts.edges.filter(
    ({ node }: any) => node.slug !== slug
  );
  // If there are still 3 posts, remove the last one
  if (data.posts.edges.length > 2) data.posts.edges.pop();
  return data;
}
