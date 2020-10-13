import { PostToTagConnection } from 'types';

interface Props {
  tags: PostToTagConnection;
}

const Tags: React.FC<Props> = ({ tags }) => {
  return (
    <div className="max-w-2xl mx-auto">
      <p className="mt-8 text-lg font-bold">
        Tagged
        {tags.edges.map((tag, index) => (
          <span key={index} className="ml-4 font-normal">
            {tag.node.name}
          </span>
        ))}
      </p>
    </div>
  );
};
export default Tags;
