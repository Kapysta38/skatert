import { EventCategories, IEvent } from "@/entities/event";

export const defaultState: IEvent[] = [
  {
    id: 1,
    title: "Whitelanes - Bowling клуб",
    image: "public/боулинг.png",
    shortDescription:
      "это идеальный способ отдохнуть, зарядиться азартом и провести время в отличной компании",
    fullDescription: "",
    link: "https://whitelanes.ru/",
    textPosition: "bottom",
    type: EventCategories.Happy,
  },
  {
    id: 11,
    title: "MAFIA VIP",
    image: "public/мафия.png",
    shortDescription:
      "первая в России и единственная в Вашем городе студия для игры в Мафию с падающими стульями",
    fullDescription: "",
    link: "https://mafiavip.ru/rooms/city/perm",
    textPosition: "bottom",
    type: EventCategories.Happy,
  },
  {
    id: 12,
    title: "KartON",
    image: "public/картинг.png",
    shortDescription:
      "это открытый картинг-центр, где вы можете покататься на бензиновых и электрических картах, а также на картах для детей с ограничением скорости.",
    fullDescription: "",
    link: "https://kart-on.ru/",
    textPosition: "top",
    type: EventCategories.Happy,
  },
  {
    id: 13,
    title: "QUEST HUNTER",
    image: "public/квест.png",
    shortDescription:
      "это захватывающая игра, где вы, будучи одним из героев, проходите запланированный сюжет.",
    fullDescription: "",
    link: "https://questhunter.info/perm/",
    textPosition: "top",
    type: EventCategories.Happy,
  },
  {
    id: 6,
    title: "Лепи Нежно",
    shortDescription:
      "это про нежность и заботу во всем!\n" +
      "Нежно лепим руками, нежно лепим за гончарным кругом, нежно и бережно сопровождаем ваши изделия",
    type: EventCategories.MasterClass,
    textPosition: "top",
    fullDescription: "",
    image: "public/mk1.png",
    link: "https://lepinejno.ru/",
  },
  {
    id: 6,
    title: "Школа кондитеров\n" + "Felicia",
    shortDescription:
      "Научись виртуозно создавать десерты под чутким руководством шеф-кондитера!",
    type: EventCategories.MasterClass,
    textPosition: "top",
    fullDescription: "",
    image: "public/mk2.png",
    link: "https://felicia-school.ru/",
  },
  {
    id: 6,
    title: "Nolan Wine & Kitchen",
    shortDescription:
      "ресторан который предлагает своим гостям разнообразное меню, включающее в себя блюда из рыбы и морепродуктов, а также мясные блюда и десерты.",
    type: EventCategories.Eat,
    textPosition: "top",
    fullDescription: "",
    image: "public/e1.png",
    link: "https://nolan-wine-kitchen.clients.site/",
  },
  {
    id: 6,
    title: "Цех - кофейня",
    shortDescription:
      "уютное место где можно позавтракать, пообедать или поужинать, а также насладиться ароматным кофе и вкусными десертами.",
    type: EventCategories.Eat,
    textPosition: "top",
    fullDescription: "",
    image: "public/e2.png",
    link: "https://yandex.ru/maps/org/tsekh/29138344521/?ll=56.247742%2C58.000074&z=16",
  },
  {
    id: 6,
    title: "Чайка ZaZa",
    shortDescription:
      "это стильное место с современным интерьером, выполненным из натуральных материалов. Просторные залы с большими окнами, откуда открывается вид на реку Каму, создают ощущение простора и свободы.",
    type: EventCategories.Eat,
    textPosition: "bottom",
    fullDescription: "",
    image: "public/e3.png",
    link: "https://zazarest.ru/",
  },
  {
    id: 6,
    title: "Кафе Barberry Cabare",
    shortDescription:
      "это кафе, которое специализируется на клубнике в шоколаде. Интерьер кафе выполнен в стиле кабаре, с использованием красного бархата и роскошных люстр.",
    type: EventCategories.Eat,
    textPosition: "top",
    fullDescription: "",
    image: "public/e4.png",
    link: "https://yandex.ru/maps/org/barberry_cabare/177456238308/?ll=56.236315%2C58.012319&z=16",
  },
  {
    id: 6,
    title: "Глэмпинг WELCOME TO FOREST",
    shortDescription:
      "это глэмпинг, расположенный в лесу недалеко от Демидково.",
    type: EventCategories.Relax,
    textPosition: "top",
    fullDescription: "",
    image: "public/r1.png",
    link: "https://welcome2parma.ru/",
  },
  {
    id: 6,
    title: "Термальный комплекс - Акватория",
    shortDescription:
      "это термальный комплекс, расположенный в живописном месте недалеко от города. Он предлагает своим гостям широкий спектр услуг, включая открытый подогреванемый бассейн, баню, сауну, хаммам, массаж и кафе.",
    type: EventCategories.Relax,
    textPosition: "bottom",
    fullDescription: "",
    image: "public/r2.png",
    link: "http://akvaterm59.ru/",
  },
  {
    id: 6,
    title: "Санаторий «Демидково»",
    shortDescription:
      "расположен в сосновом бору на берегу реки Камы. Гостям предлагается проживание в комфортабельных номерах, а также в уютных эко-домиках с просторными верандами и видом на лес.",
    type: EventCategories.Relax,
    textPosition: "top",
    fullDescription: "",
    image: "public/r3.png",
    link: "https://demidkovo.ru/",
  },
  // Добавьте остальные события
  {
    id: 6,
    title: "Permm",
    shortDescription:
      "это современное пространство для проведения различных арт-мероприятий, научных и образовательных событий. Здесь можно познакомиться с необычными и глубокими по смыслу произведениями современного искусства.",
    type: EventCategories.Cultural,
    textPosition: "top",
    fullDescription: "",
    image: "public/c1.png",
    link: "https://permm.ru/",
  },
  {
    id: 6,
    title: "Пермский академический Театр-Театр",
    shortDescription:
      "один из старейших театров Пермского края, основанный 14 марта 1927 года. В театре есть три сценические площадки: Большая сцена, «Сцена-Молот» и детская сцена «Театр-Тятрик».",
    type: EventCategories.Cultural,
    textPosition: "top",
    fullDescription: "",
    image: "public/c2.png",
    link: "https://teatr-teatr.com/",
  },
  {
    id: 6,
    title: "Театр оперы и балета",
    shortDescription:
      "один из старейших музыкальных театров России. Он получил большую известность не только на родине, но и за пределами бывшего СССР и России.",
    type: EventCategories.Cultural,
    textPosition: "top",
    fullDescription: "",
    image: "public/c3.png",
    link: "https://permopera.ru/",
  },
];
