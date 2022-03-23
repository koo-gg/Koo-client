import GuildDetailCard from '../../components/cards/guild/Detail';
import Header from '../../components/layout/Header';

const Detail = () => {
  return (
    <div className="flex items-center flex-col justify-center bg-default">
      <Header />
      <div 
      className="mt-14 
      grid grid-cols-guild-detail gap-4">
        <GuildDetailCard size="big" />
        <GuildDetailCard />
        <GuildDetailCard />
        <GuildDetailCard size="big" />
      </div>
    </div>
  );
};

export default Detail;
