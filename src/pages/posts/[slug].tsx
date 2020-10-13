import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import Container from '@components/Container';
import PostBody from '@components/PostBody';
import MoreStories from '@components/MoreStories';
import Header from '@components/Header';
import PostHeader from '@components/PostHeader';
import SectionSeparator from '@components/SectionSeparator';
import Layout from '@components/Layout';
import PostTitle from '@components/PostTitle';
import Tags from '@components/Tags';
import { getAllPostsWithSlug, getPostAndMorePosts } from '@lib/api';
import { CategoryToPostConnection, Post as GeneratedPostType } from 'types';
import { Post as PostType } from 'types';
interface Props {
  post: GeneratedPostType;
  posts?: CategoryToPostConnection;
  preview: boolean;
}

const Post: React.FC<Props> = ({ post, posts, preview }: Props) => {
  const router = useRouter();
  const morePosts = posts?.edges;

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout preview={preview}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article>
              <Head>
                <title>
                  {post.title} | Next.js Blog Example with{' '}
                  {process.env.CMS_NAME}
                </title>
                <meta
                  property="og:image"
                  content={post.featuredImage?.node?.sourceUrl}
                />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.featuredImage?.node}
                date={post.date}
                author={post.author?.node}
                categories={post.categories}
              />
              <PostBody content={post.content} />
              <footer>
                {post.tags.edges.length > 0 && <Tags tags={post.tags} />}
              </footer>
            </article>

            <SectionSeparator />
            {morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
        )}
      </Container>
    </Layout>
  );
};

export default Post;

interface StaticProps {
  props: {
    preview: boolean;
    post: PostType;
    posts: CategoryToPostConnection;
  };
}

interface StaticPropsContext {
  params: {
    slug: string;
  };
  preview: boolean;
  previewData: any;
}

export async function getStaticProps({
  params,
  preview = false,
  previewData,
}: StaticPropsContext): Promise<StaticProps> {
  const data = await getPostAndMorePosts(params.slug, preview, previewData);

  return {
    props: {
      preview,
      post: data.post,
      posts: data.posts,
    },
  };
}

interface StaticPaths {
  paths: (string | undefined)[] | [];
  fallback: boolean;
}

export async function getStaticPaths(): Promise<StaticPaths> {
  const allPosts = await getAllPostsWithSlug();

  return {
    paths:
      allPosts.edges.map(({ node }) => {
        if (node) {
          return `/posts/${node.slug}`;
        }
      }) || [],
    fallback: true,
  };
}
