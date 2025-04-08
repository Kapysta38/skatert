import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useMemo,
} from "react";
import { IEvent } from "./types";
import { defaultState } from "@/entities/event/data.ts";

interface EventContextProps {
  events: IEvent[];
  setEvents: React.Dispatch<React.SetStateAction<IEvent[]>>;
  filter: string; // текущий фильтр по названию
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

const EventContext = createContext<EventContextProps | undefined>(undefined);

export const EventProvider = ({ children }: { children: ReactNode }) => {
  const [events, setEvents] = useState<IEvent[]>(defaultState);
  const [filter, setFilter] = useState<string>("");

  const filteredEvents = useMemo(
    () =>
      events.filter((event) =>
        event.title.toLowerCase().includes(filter.toLowerCase()),
      ),
    [events, filter],
  );

  return (
    <EventContext.Provider
      value={{ events: filteredEvents, setEvents, filter, setFilter }}
    >
      {children}
    </EventContext.Provider>
  );
};

export const useEvents = (): EventContextProps => {
  const context = useContext(EventContext);
  if (context === undefined) {
    throw new Error("useEvents должен использоваться внутри EventProvider");
  }
  return context;
};
