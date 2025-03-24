interface TagProps {
  name: string;
}

const Tag: React.FC<TagProps> = ({ name }) => {
  return (
    <a
      className="cursor-pointer rounded-xl border bg-white px-3 text-sm font-semibold text-primary hover:bg-gray-100"
      href={`/viec-lam-it?tech=${name}`}
      title={name}
    >
      {name}
    </a>
  );
};

export default Tag;
