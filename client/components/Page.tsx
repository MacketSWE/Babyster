import Head from "next/head";
import { Footer } from "./Footer";
import { Header } from "./Header";

interface Props {
  children: any;
}

export const Page = ({ children }: Props) => {
  return (
    <div className="h-screen w-full flex bg-gray-200 justify-center">
      <div className="bg-white w-full md:w-1/2 lg:w-2/5 items-center justify-center flex flex-col">
        <div className="h-menu w-full" />
        {children}
        <div className="h-menu w-full" />
        <Header />
        <Footer />
      </div>
    </div>
  );
};
