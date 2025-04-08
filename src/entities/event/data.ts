import { EventCategories, IEvent } from "@/entities/event";

export const defaultState: IEvent[] = [
  {
    id: 1,
    title: "Whitelanes - Bowling клуб",
    image: "public/боулинг.png",
    shortDescription:
      "это идеальный способ отдохнуть, зарядиться азартом и провести время в отличной компании",
    fullDescription: "",
    link: "#",
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
    link: "#",
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
    link: "#",
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
    link: "#",
    textPosition: "top",
    type: EventCategories.Happy,
  },
  {
    id: 2,
    title: "Мастер-класс по кулинарии",
    image: "https://placehold.co/600x400?text=Мастер-класс",
    shortDescription: "Узнайте секреты шеф-повара",
    fullDescription:
      "На мастер-классе вы научитесь готовить изысканные блюда под руководством профессионала.",
    link: "#",
    textPosition: "bottom",
    type: EventCategories.MasterClass,
  },
  {
    id: 3,
    title: "Обзор лучших кафе города",
    image: "https://placehold.co/600x400?text=Где+покушать",
    shortDescription: "Где вкусно покушать?",
    fullDescription:
      "Подробное описание лучших заведений для гурманов, уютные кафе и рестораны.",
    link: "#",
    textPosition: "top",
    type: EventCategories.Eat,
  },
  {
    id: 4,
    title: "Летний отдых на природе",
    image: "https://placehold.co/600x400?text=Где+отдохнуть",
    shortDescription: "Идеальное место для отдыха",
    fullDescription:
      "Подробное описание мест для отдыха на природе, свежий воздух и активный отдых на свежем воздухе.",
    link: "#",
    textPosition: "bottom",
    type: EventCategories.Relax,
  },
  {
    id: 5,
    title: "Культурный вечер в музее",
    image: "https://placehold.co/600x400?text=Культурные+мероприятия",
    shortDescription: "Ночь в музее",
    fullDescription:
      "Подробное описание культурного мероприятия с экскурсиями, лекциями и творческими мастер-классами.",
    link: "#",
    textPosition: "top",
    type: EventCategories.Cultural,
  },
];
