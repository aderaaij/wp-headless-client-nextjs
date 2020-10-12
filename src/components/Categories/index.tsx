import { PostToCategoryConnection } from 'types';

interface Props {
  categories: PostToCategoryConnection;
}

const Categories: React.FC<Props> = ({ categories }) => {
  return (
    <span className="ml-1">
      under
      {categories.edges.length > 0 ? (
        categories.edges.map((category, index) => (
          <span key={index} className="ml-1">
            {category?.node.name}
          </span>
        ))
      ) : (
        <span className="ml-1">Whatevs</span>
      )}
    </span>
  );
};
export default Categories;
