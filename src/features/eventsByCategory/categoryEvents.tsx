import { IEvent } from "@/entities/event";
import { EventCategories } from "@/entities/event";
import { EventsCarousel } from "@/widgets/eventsCarousel";

interface CategoryEventsProps {
  events: IEvent[];
}

const backgroundMap: Record<string, string> = {
  "Развлечения ": "/public/развлечения.png",
  "Мастер-классы": "/public/мк.png",
  "Где покушать?": "/public/еда.png",
  "Где отдохнуть?": "/public/чилл.png",
  "Культурные мероприятия": "/public/культура.png",
};

export function CategoryEvents({ events }: CategoryEventsProps) {
  return (
    // Контейнер для скролла от секции к секции
    <div className="flex flex-col">
      {Object.values(EventCategories).map((category, index) => {
        // Фильтруем события по текущей категории
        const filteredEvents = events.filter(
          (event) => event.type === category,
        );

        return (
          <section
            key={category}
            id={index.toString()}
            style={{
              backgroundImage: `url(${backgroundMap[category]})`,
              backgroundColor: "rgba(185,178,167,1)",
            }}
            className="bg-bottom bg-no-repeat bg-cover bg-blend-overlay min-h-[calc(100vh-152px)] flex flex-col p-10 w-full gap-5 snap-start "
          >
            <h2 className="font-spectral text-[50px] text-[rgba(64,61,57,1)] font-bold px-40">
              {category}
            </h2>

            {filteredEvents.length ? (
              <EventsCarousel events={filteredEvents} />
            ) : (
              <p className="w-[50%] mx-auto font-spectral text-center text-lg text-gray-500 bg-zinc-200 rounded-md px-4 py-2">
                События для данной категории отсутствуют.
              </p>
            )}
          </section>
        );
      })}
    </div>
  );
}
