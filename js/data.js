// !Тут находятся все переменные
function getValue() {
  const DESCRIPTION = [
    'Пейзаж с заходящим солнцем над горизонтом, окрашивающий небо в оттенки розового и оранжевого.',
    'Портрет молодой женщины с улыбкой, окруженной цветущими полянами и яркими цветами.',
    'Городской пейзаж ночного времени с высотного здания, огни которого отражаются в реке.',
    'Макро-снимок капли росы на лепестке розы, преломляющей свет и создающей игру цветов и теней.',
    'Дикий лев, спокойно лежащий на саванне, с взглядом направленным вдаль.',
    'Абстрактная композиция из силуэтов людей, сливающихся в одно общее движение на фоне города.',
    'Фотография птицы, парящей в воздухе с расправленными крыльями, на фоне голубого неба.',
    'Подводный мир с разноцветными кораллами и рыбами, плавающими вокруг.',
    'Макро-снимок пушистой пчелы, собирающей нектар на цветке, с яркими деталями крыльев и мордочки.',
    'Атмосферный пейзаж горного озера в тумане, с отражением окружающих вершин на гладкой водной поверхности.'
  ];

  const MESSAGE = [
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов, это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота, и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];
  const NAMES = [
    'Тигран',
    'Зоха',
    'Максим',
    'Сергей',
    'Полина',
    'Мага',
    'Александр',
    'Екатерина',
    'Иван',
    'Анна',
    'Дмитрий',
    'Елена',
    'Наталья'
  ];
  return {DESCRIPTION,MESSAGE,NAMES};
}
const MIN_LIKES = 15;
const MAX_LIKES = 200;
const REPEAT_OBJ = 25;
const MIN_AVATAR = 1;
const MAX_AVATAR = 6;
const COMMENTS_MIN = 0;
const COMMENTS_MAX = 30;
export { getValue, MIN_LIKES, MAX_LIKES, REPEAT_OBJ, MIN_AVATAR, MAX_AVATAR, COMMENTS_MIN, COMMENTS_MAX };


