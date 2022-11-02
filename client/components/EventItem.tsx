import { Event } from "../types/Event";

const toTime = (time: number) => {
  return new Date(time).toLocaleString();
};

export const EventItem = ({
  data,
  onClick = () => null,
}: {
  data: Event;
  onClick?: any;
}) => {
  let timeString;
  if (data.type === "eat" && data.foodTime) {
    timeString = toTime(data.foodTime);
  } else if (data.type === "sleep" && data.sleepStartTime) {
    const end = data.sleepEndTime ? toTime(data.sleepEndTime) : "";
    timeString = `${toTime(data.sleepStartTime)} - ${end}`;
  }

  return (
    <div onClick={onClick} className="flex space-x-2 border p-1 rounded">
      <div>{data.type}</div>
      <div>{timeString}</div>
      <div>{data.comment}</div>
    </div>
  );
};
