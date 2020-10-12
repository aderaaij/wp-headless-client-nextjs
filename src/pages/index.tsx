import Head from 'next/head';
import Container from '@components/Container';
import MoreStories from '@components/MoreStories';
import HeroPost from '@components/HeroPost';
import Intro from '@components/Intro';
import Layout from '@components/Layout';
import { getAllPostsForHome } from '@lib/api';
import { CategoryToPostConnection } from 'types';

export interface Props {
  allPosts: CategoryToPostConnection;
  preview: boolean;
}

const Index: React.FC<Props> = ({ allPosts: { edges }, preview }: Props) => {
  const heroPost = edges[0]?.node;
  const morePosts = edges.slice(1);

  return (
    <>
      <Layout preview={preview}>
        <Head>
          <title>Next.js Blog Example with {process.env.CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.featuredImage.node}
              date={heroPost.date}
              author={heroPost.author.node}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
};

export default Index;

interface StaticProps {
  props: Props;
}
export const getStaticProps = async ({
  preview = false,
}: Record<'preview', boolean>): Promise<StaticProps> => {
  const allPosts = await getAllPostsForHome(preview);
  return {
    props: { allPosts, preview },
  };
};
