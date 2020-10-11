interface Tag {
  node: {
    name: string;
  };
}

interface Props {
  tags: {
    edges: Array<Tag>;
  };
}
export default function Tags({ tags }: Props) {
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
}
