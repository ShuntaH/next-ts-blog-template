import { useState } from "react";


export function useDebounce<F extends ((...args: any) => any)>(func: F, timeout = 200) {
  const [ currentTimer, setCurrentTimer ] = useState<NodeJS.Timeout | undefined>(undefined)

}
