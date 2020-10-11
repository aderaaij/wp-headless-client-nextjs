interface Category {
  node: {
    name: string;
  };
}

interface Props {
  categories: {
    edges: Array<Category>;
  };
}

export default function Categories({ categories }: Props) {
  return (
    <span className="ml-1">
      under
      {categories.edges.length > 0 ? (
        categories.edges.map((category, index) => (
          <span key={index} className="ml-1">
            {category.node.name}
          </span>
        ))
      ) : (
        <span className="ml-1">{categories.edges[0].node.name}</span>
      )}
    </span>
  );
}
