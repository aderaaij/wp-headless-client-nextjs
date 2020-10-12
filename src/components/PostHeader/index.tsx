import Avatar from '@components/Avatar';
import Date from '@components/Date';
import CoverImage from '@components/CoverImage';
import PostTitle from '@components/PostTitle';
import Categories from '@components/Categories';
import { MediaItem, PostToCategoryConnection, User } from 'types';

interface Props {
  title: string;
  coverImage?: MediaItem;
  date: string;
  author?: User;
  categories?: PostToCategoryConnection;
}
const PostHeader: React.FC<Props> = ({
  title,
  coverImage,
  date,
  author,
  categories,
}) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      {author && (
        <div className="hidden md:block md:mb-12">
          <Avatar author={author} />
        </div>
      )}
      {coverImage && (
        <div className="mb-8 md:mb-16 sm:mx-0">
          <CoverImage title={title} coverImage={coverImage} />
        </div>
      )}
      <div className="max-w-2xl mx-auto">
        {author && (
          <div className="block md:hidden mb-6">
            <Avatar author={author} />
          </div>
        )}
        <div className="mb-6 text-lg">
          Posted <Date dateString={date} />
          {categories && <Categories categories={categories} />}
        </div>
      </div>
    </>
  );
};
export default PostHeader;
