type Props = {
  imageUrl: string;
  name: string;
};

const List = (props: Props) => {
  const { imageUrl, name } = props;
  return (
    <div className="h-[188px] w-[140px]">
      <img src={imageUrl} alt={name} />
      <div className="text-center text-white">{name}</div>
    </div>
  );
};

export default List;
