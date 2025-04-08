import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/ui/carousel.tsx";
import { Event } from "@/entities/event";
import type { IEvent } from "@/entities/event";

export interface EventsCarouselProps {
  events: IEvent[];
}

export function EventsCarousel({ events }: EventsCarouselProps) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="min-w-[90%] mx-auto"
    >
      <CarouselContent className="lg:-ml-26 sm:-ml-0">
        {events.map((event, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3  ">
            <div className="lg:pl-26 sm:pl-0">
              <Event event={event} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext />
      <CarouselPrevious />
    </Carousel>
  );
}
