import { Event } from "../types/Event";
import { toTime } from "../utils/time";

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
    <div onClick={onClick} className="border p-1 px-2 rounded-lg">
      <div className="flex justify-between">
        <div>{data.type}</div>
        <div>{timeString}</div>
        <div className=" cursor-pointer">Edit</div>
      </div>
      <div>{data.comment}</div>
    </div>
  );
};
