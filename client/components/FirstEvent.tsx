import { useQuery } from "@apollo/client";
import { GET_LATEST_EVENT } from "../queries";
import { Event } from "../types/Event";
import { EventItem } from "./EventItem";

export const FirstEvent = () => {
  const { loading, data } = useQuery(GET_LATEST_EVENT);

  if (loading || !data?.events) {
    return null;
  }

  return (
    <div className="w-full my-5 px-4 flex flex-col-reverse">
      <EventItem data={data.events[0] as Event} />
    </div>
  );
};
