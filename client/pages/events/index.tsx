import type { NextPage } from "next";
import Head from "next/head";
import { useSignInAnonymous } from "@nhost/nextjs";
import { Page } from "../../components/Page";
import { EventList } from "../../components/EventList";
import { Event } from "../../types/Event";
import { useState } from "react";
import { EditEventContainer } from "../../components/EditEventContainer";

const Events: NextPage = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const { user, signInAnonymous } = useSignInAnonymous();

  const isLoading = !user;

  if (isLoading) {
    return null;
  }

  return (
    <Page>
      <Head>
        <title>Baby Esther</title>
        <meta name="description" content="Monitor my baby" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {selectedEvent ? (
        <EditEventContainer
          data={selectedEvent}
          clear={() => setSelectedEvent(null)}
        />
      ) : (
        <EventList setSelectedEvent={setSelectedEvent} />
      )}
    </Page>
  );
};

export default Events;
