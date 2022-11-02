import type { NextPage } from "next";
import Head from "next/head";
import { useSignInAnonymous } from "@nhost/nextjs";
import { Page } from "../../components/Page";
import { EventList } from "../../components/EventList";

const Events: NextPage = () => {
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
      <EventList />
    </Page>
  );
};

export default Events;
