import { Event } from "../types/Event";

interface Props {
  data: Event;
  clear: any;
}

export const EditEventContainer = ({ data, clear }: Props) => {
  return (
    <div className="h-full w-full my-5 space-y-2 px-4 overflow-y-scroll">
      <div onClick={clear}>{`Editing event: ${data.id}`}</div>
    </div>
  );
};
