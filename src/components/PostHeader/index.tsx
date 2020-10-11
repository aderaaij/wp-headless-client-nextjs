import Avatar from '@components/Avatar';
import Date from '@components/Date';
import CoverImage from '@components/CoverImage';
import PostTitle from '@components/PostTitle';
import Categories from '@components/Categories';
import { FeaturedImage } from '@interfaces/FeaturedImage';
import { AuthorTeaser } from '@interfaces/Author';

interface Props {
  title: string;
  coverImage: FeaturedImage['node'];
  date: string;
  author: AuthorTeaser['node'];
  categories: any;
}
export default function PostHeader({
  title,
  coverImage,
  date,
  author,
  categories,
}: Props) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar author={author} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} coverImage={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar author={author} />
        </div>
        <div className="mb-6 text-lg">
          Posted <Date dateString={date} />
          <Categories categories={categories} />
        </div>
      </div>
    </>
  );
}
