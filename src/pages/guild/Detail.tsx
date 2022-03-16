import GuildDetailCard from '../../components/cards/guild/Detail';

const Detail = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-default">
      <div className="grid grid-cols-guild-detail gap-4">
        <GuildDetailCard size="big" />
        <GuildDetailCard />
        <GuildDetailCard />
        <GuildDetailCard size="big" />
      </div>
    </div>
  );
};

export default Detail;
