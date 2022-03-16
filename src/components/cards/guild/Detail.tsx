type Props = {
  size?: 'big' | 'small';
};

const Detail = ({ size = 'small' }: Props) => {
  return (
    <div
      className={`h-80 rounded-lg bg-[#2F3136] ${
        size === 'big' ? 'w-[550px]m col-span-2' : 'w-80'
      }`}
    ></div>
  );
};

export default Detail;
