import GuildListCard from '../../components/cards/guild/List';

const list = [
  {
    imageUrl:
      'https://cdn.discordapp.com/icons/944939793123512330/b9e4997361a924f7dc224dc44f3386f6.png?size=256',
    name: 'Tokki',
  },
  {
    imageUrl:
      'https://cdn.discordapp.com/icons/855335317749497867/129dcdd41f1b9cb76aa3ca54b8e94bf7.png?size=256',
    name: 'KooGG',
  },
  {
    imageUrl:
      'https://cdn.discordapp.com/icons/944939793123512330/b9e4997361a924f7dc224dc44f3386f6.png?size=256',
    name: 'Tokki',
  },
  {
    imageUrl:
      'https://cdn.discordapp.com/icons/855335317749497867/129dcdd41f1b9cb76aa3ca54b8e94bf7.png?size=256',
    name: 'KooGG',
  },
  {
    imageUrl:
      'https://cdn.discordapp.com/icons/944939793123512330/b9e4997361a924f7dc224dc44f3386f6.png?size=256',
    name: 'Tokki',
  },
  {
    imageUrl:
      'https://cdn.discordapp.com/icons/855335317749497867/129dcdd41f1b9cb76aa3ca54b8e94bf7.png?size=256',
    name: 'KooGG',
  },
  {
    imageUrl:
      'https://cdn.discordapp.com/icons/944939793123512330/b9e4997361a924f7dc224dc44f3386f6.png?size=256',
    name: 'Tokki',
  },
  {
    imageUrl:
      'https://cdn.discordapp.com/icons/855335317749497867/129dcdd41f1b9cb76aa3ca54b8e94bf7.png?size=256',
    name: 'KooGG',
  },
  {
    imageUrl:
      'https://cdn.discordapp.com/icons/944939793123512330/b9e4997361a924f7dc224dc44f3386f6.png?size=256',
    name: 'Tokki',
  },
  {
    imageUrl:
      'https://cdn.discordapp.com/icons/855335317749497867/129dcdd41f1b9cb76aa3ca54b8e94bf7.png?size=256',
    name: 'KooGG',
  },
  {
    imageUrl:
      'https://cdn.discordapp.com/icons/944939793123512330/b9e4997361a924f7dc224dc44f3386f6.png?size=256',
    name: 'Tokki',
  },
  {
    imageUrl:
      'https://cdn.discordapp.com/icons/855335317749497867/129dcdd41f1b9cb76aa3ca54b8e94bf7.png?size=256',
    name: 'KooGG',
  },
];

const List = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center bg-default">
      <div className="mt-80 grid w-full grid-cols-guild-list gap-12 px-16">
        {list.map((l, idx) => {
          return (
            <GuildListCard key={idx} imageUrl={l.imageUrl} name={l.name} />
          );
        })}
      </div>
    </div>
  );
};

export default List;
