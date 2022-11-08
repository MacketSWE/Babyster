import { useMutation } from "@apollo/client";
import { useState } from "react";
import { ADD_EVENT_COMMENT, UPDATE_FOOD_TIME, UPDATE_SLEEP_END_TIME, UPDATE_SLEEP_START_TIME } from "../queries";
import { Event } from "../types/Event";
import { toTime } from "../utils/time";
import { Button } from "./Button";
import { Input } from "./Input";

interface Props {
  data: Event;
  clear: any;
}

export const EditEventContainer = ({ data, clear }: Props) => {
  
  return (
    <div className="h-full w-full my-5 space-y-2 px-4 overflow-y-scroll">
      <div onClick={clear}>{`Editing event: ${data.id}`}</div>
      { data.type === 'eat' 
        ? <EditFoodEvent event={data} /> 
        : <EditSleepEvent event={data} />
      }
    </div>
  );
};

type EventTimeCategory= 'sleepStart' | 'sleepEnd' | 'food'

const EventItemContainer = ({ children } : { children: any }) => {
  return (
    <div className="flex items-center">{children}</div>
  )
}

const EditComment = ({ event } : { event: Event }) => {
  const [addComment, { data }] = useMutation(ADD_EVENT_COMMENT);
  const [text, setText] = useState('')

  const onAddComment = () => {
    if(text.length > 2) {
      addComment({
        variables: {
          id: event.id,
          comment: text,
        },
        // refetchQueries: ["Events"],
      })
    }
  }

  console.log(data, '<--- change comment data')

  return (
    <EventItemContainer>
      {event.comment && <div>{event.comment}</div>}
      <Input value={text} onChange={setText} placeholder="Kommentar" />
      <Button label="Lägg till kommentar" onClick={onAddComment} />
    </EventItemContainer>
  )
}

const EditTime = ({ event, type } : { event: Event, type: EventTimeCategory }) => {
  let timeString = '';
  let buttonText = '';
  let query;

  switch (type) {
    case 'sleepEnd':
      timeString = toTime(event.sleepEndTime)
      buttonText = 'Ändra sluttid'
      query = UPDATE_SLEEP_END_TIME
      break;
    case 'sleepStart':
      timeString = toTime(event.sleepStartTime)
      buttonText = 'Ändra starttid'
      query = UPDATE_SLEEP_START_TIME
      break;
    case 'food':
      timeString = toTime(event.foodTime)
      buttonText = 'Ändra tid'
      query = UPDATE_FOOD_TIME
      break;
    default:
      break;
  }

  const [addTime, { data }] = useMutation(query);
  const [time, setTime] = useState(0)

  const onUpdateTime = () => {
    if(time > 0) {
      if(type === 'sleepEnd'){
        addTime({
          variables: {
            id: event.id,
            sleepEndTime: time,
          },
        })
      } else if (type === 'sleepStart'){
        addTime({
          variables: {
            id: event.id,
            sleepStartTime: time,
          },
        })
      } else if (type === 'food'){
        addTime({
          variables: {
            id: event.id,
            foodTime: time,
          },
        })
      }

    }
  }


  console.log(data, '<--- data change time')

  return (
    <EventItemContainer>
      <div>{type}: {timeString}</div>
      <input type="datetime-local" onChange={(e) => { 
        const newTime =  new Date(e.target.value).getTime()
        setTime(newTime)
      }} />
      <Button label={buttonText} onClick={onUpdateTime} />
    </EventItemContainer>
  )
}

const EditSleepEvent = ({ event } : { event: Event }) => {
  return (
    <div>
      <EditComment event={event} />
      <EditTime event={event} type="sleepStart" />
      <EditTime event={event} type="sleepEnd" />
    </div>
  )
}

const EditFoodEvent = ({ event } : { event: Event }) => {
  return (
    <div>
      <EditComment event={event} />
      <EditTime event={event} type="food" />
    </div>
  )
}