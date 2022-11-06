import { useMutation } from "@apollo/client";
import { useState } from "react";
import { ADD_EVENT_COMMENT } from "../queries";
import { Event } from "../types/Event";
import { Button } from "./Button";
import { Input } from "./Input";

interface Props {
  data: Event;
  clear: any;
}


export const EditEventContainer = ({ data, clear }: Props) => {
  const [addComment, { data: res }] = useMutation(ADD_EVENT_COMMENT);
  const [text, setText] = useState('')
  const [time, setTime] = useState()

  const onAddComment = () => {
    if(text.length > 2) {
      addComment({
        variables: {
          id: data.id,
          comment: text,
        },
        refetchQueries: ["Events"],
      })
    }
  }

  //TODO ADD SLEEP TIME

  console.log(time, '<--- time')
  
  return (
    <div className="h-full w-full my-5 space-y-2 px-4 overflow-y-scroll">
      <div onClick={clear}>{`Editing event: ${data.id}`}</div>
      <div>
        <div>
          <Input value={text} onChange={setText} placeholder="Kommentar" />
          <Button label="Lägg till kommentar" onClick={onAddComment} />
        </div>
        {
          data.type === 'eat' ? <Button label="Ändra tid" /> 
          : (<>
              <Button label="Ändra starttid" />
              <Button label="Ändra sluttid" />
              <input type="datetime-local" onChange={(e) => { 
                const newTime =  new Date(e.target.value).getTime()
                console.log(newTime, '<--- newTime')
              }} />
            </>
          )
        }
        <Button label="Ta bort" />
      </div>
    </div>
  );
};
