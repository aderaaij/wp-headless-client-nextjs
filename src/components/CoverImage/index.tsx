import cn from 'classnames';
import Link from 'next/link';
import { MediaItem } from 'types';

interface Props {
  title: string;
  coverImage: MediaItem;
  slug?: string;
}

const CoverImage: React.FC<Props> = ({ title, coverImage, slug }) => {
  const image = (
    <img
      src={coverImage?.sourceUrl}
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </div>
  );
};
export default CoverImage;
