import { useEffect, useState } from "react";

export const useIsNativeApp = () => {
  const [isNative, setIsNative] = useState(false);

  useEffect(() => {
    if (window.isNativeApp) {
      setIsNative(true);
    }
  }, []);

  return {
    isNative,
  };
};
