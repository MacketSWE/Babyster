import { respW } from "../styles/constants";
import { useRouter } from "next/router";
import Image from "next/image";
import { useIsNativeApp } from "../utils/hooks/useIsNativeApp";
import { useUserData } from "@nhost/nextjs";

export const Header = () => {
  const router = useRouter();
  const user = useUserData();

  const { isNative } = useIsNativeApp();

  const handleClick = (route: string) => {
    router.push(route);
  };


  return (
    <div
      className={`${respW} bg-white shadow fixed top-0 items-center justify-between px-4 select-none`}
    >
    </div>
  );
};
