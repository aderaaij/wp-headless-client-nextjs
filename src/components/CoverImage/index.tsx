import cn from 'classnames';
import Link from 'next/link';
import { FeaturedImage } from '@interfaces/FeaturedImage';

interface Props {
  title: string;
  coverImage: FeaturedImage['node'];
  slug?: string;
}

export default function CoverImage({ title, coverImage, slug }: Props) {
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
}
