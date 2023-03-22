import { ACTION_KEY_APPLE, ACTION_KEY_DEFAULT } from "../lib/constants";
import { useEffect, useState } from "react";


export function useActionKey() {
  const [ actionKey, setActionKey ] = useState<string[]>(ACTION_KEY_APPLE)
  useEffect(
    () => {
      if (typeof navigator === 'undefined') return
      const isMac = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)
      if (!isMac) {
        setActionKey(ACTION_KEY_DEFAULT)
      }
    }, [])
  return actionKey
}
