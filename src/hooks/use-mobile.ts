import * as React from "react";

export function useIsMobile(breakpoint: number = 768): boolean {
  const subscribe = (callback: () => void) => {
    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    mediaQuery.addEventListener("change", callback);
    return () => mediaQuery.removeEventListener("change", callback);
  };

  const getSnapshot = () => {
    return window.matchMedia(`(max-width: ${breakpoint - 1}px)`).matches;
  };

  const getServerSnapshot = () => {
    return false;
  };

  return React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
