import { useQuery } from "@apollo/client";
import { GET_EVENTS } from "../queries";
import { Event } from "../types/Event";
import { EventItem } from "./EventItem";

export const EventList = () => {
  const { loading, data } = useQuery(GET_EVENTS);

  if (loading || !data?.events) {
    return null;
  }

  return (
    <div className="h-full w-full my-5 space-y-2 px-4 overflow-y-scroll">
      {data.events.map((e: Event) => {
        return <EventItem key={e.id} data={e} />;
      })}
    </div>
  );
};
