// Определяем строковый enum для категорий событий с явно заданными значениями
export enum EventCategories {
  Happy = "Развлечения ",
  MasterClass = "Мастер-классы",
  Eat = "Где покушать?",
  Relax = "Где отдохнуть?",
  Cultural = "Культурные мероприятия",
}

export type TextPosition = "top" | "bottom";

export interface IEvent {
  id: number; // Уникальный идентификатор события
  title: string; // Название события
  image: string; // Путь или URL к изображению
  shortDescription: string; // Короткое описание
  fullDescription: string; // Полное описание
  link: string; // Ссылка для подробной информации или перехода
  textPosition: TextPosition; // Позиция текста: "top" (сверху) или "bottom" (снизу)
  type: EventCategories; // Тип события, представленный строковым enum
}
