import React, { useEffect, useState } from "react";
import { useThrottle } from "hooks/useThrottle";

export function useOffsetTop(ref?: React.RefObject<HTMLElement>) {
  const [ viewportTop, setViewportTop ] = useState<number | undefined>(undefined);
  const [ pageOffsetTop, setPageOffsetTop ] = useState<number | undefined>(undefined);

  const handler = useThrottle(() => {
    if (!ref?.current) return;

    const clientRect = ref.current.getBoundingClientRect();
    setViewportTop(clientRect.top);
    const newPageOffsetTop = clientRect.top + window.pageYOffset;
    setPageOffsetTop(newPageOffsetTop);
  }, 100); // 100msに一度実行


  useEffect(() => {
    if (!ref?.current) return;

    // マウント時にも実行
    handler();
    window.addEventListener("scroll", handler);

    // アンマウント時にイベントリスナーを解除
    return () => window.removeEventListener("scroll", handler);
  }, [ handler ]);

  return { viewportTop, pageOffsetTop };
}
