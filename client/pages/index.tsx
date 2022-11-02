import type { NextPage } from "next";
import Head from "next/head";
import { Page } from "../components/Page";
import { useEffect, useState } from "react";
import { useSignInAnonymous } from "@nhost/nextjs";
import { EventList } from "../components/EventList";
import { Circle } from "../components/Circle";
import { SleepingCircle } from "../components/SleepingCircle";
import { Button } from "../components/Button";
import { useMutation } from "@apollo/client";
import {
  ADD_EAT_EVENT,
  ADD_SLEEP_COMMENT,
  ADD_SLEEP_END_TIME,
  ADD_SLEEP_EVENT,
} from "../queries";
import { FirstEvent } from "../components/FirstEvent";

const Home: NextPage = () => {
  const [isSleeping, setIsSleeping] = useState(false);
  const [sleepInProgessId, setSleepInProgessId] = useState<string | null>(null);

  const { user, signInAnonymous } = useSignInAnonymous();

  const [addEatEvent] = useMutation(ADD_EAT_EVENT);
  const [addSleepEvent] = useMutation(ADD_SLEEP_EVENT);
  const [updateSleepEvent, {}] = useMutation(ADD_SLEEP_END_TIME);
  const [addSleepComment, {}] = useMutation(ADD_SLEEP_COMMENT);

  const isLoading = !user;

  const onAddEatEvent = () => {
    addEatEvent({
      variables: {
        baby: "e1baf789-8413-4da6-aff5-ab01cd9907c0",
        type: "eat",
        foodTime: new Date().getTime(),
      },
      refetchQueries: ["Events"],
    });
  };

  const onAddSleepEvent = async () => {
    toggleSleep();
    const res = await addSleepEvent({
      variables: {
        baby: "e1baf789-8413-4da6-aff5-ab01cd9907c0",
        type: "sleep",
        sleepStartTime: new Date().getTime(),
      },
      refetchQueries: ["Events"],
    });
    try {
      const id = res.data.insert_events.returning[0].id;
      setSleepInProgessId(id);
    } catch (error) {
      console.log(error, "<-- error");
    }
  };

  const onUpdateSleepEvent = () => {
    toggleSleep();
    updateSleepEvent({
      variables: {
        id: sleepInProgessId,
        sleepEndTime: new Date().getTime(),
      },
      refetchQueries: ["Events"],
    });
    setSleepInProgessId(null);
  };

  const onAddSleepComment = () => {
    addSleepComment({
      variables: {
        id: sleepInProgessId,
        comment: "wow!",
      },
      refetchQueries: ["Events"],
    });
    setSleepInProgessId(null);
  };

  const toggleSleep = () => {
    setIsSleeping(!isSleeping);
  };

  useEffect(() => {
    if (!user) {
      signInAnonymous();
    }
  }, [user]);

  return (
    <Page>
      <Head>
        <title>Baby Esther</title>
        <meta name="description" content="Monitor my baby" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <>
          {isSleeping ? <SleepingCircle /> : <Circle />}
          <div className="flex space-x-4 mt-4 justify-center">
            {!isSleeping ? (
              <>
                <Button label="Åt" onClick={onAddEatEvent}></Button>
                <Button label="Somnade" onClick={onAddSleepEvent}></Button>
              </>
            ) : (
              <Button label="Vaknade" onClick={onUpdateSleepEvent}></Button>
            )}
          </div>
          <FirstEvent />
        </>
      )}
    </Page>
  );
};

export default Home;
