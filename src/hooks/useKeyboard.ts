import { ACTION_KEY_APPLE, ACTION_KEY_DEFAULT, HOT_KEY_APPLE, HOT_KEY_DEFAULT } from "../lib/constants";
import { useEffect, useState } from "react";


type HotKey = 'metaKey' | 'ctrlKey'

export function useKeyboard() {
  const [ actionKey, setActionKey ] = useState<string[]>(ACTION_KEY_APPLE)
  const [ hotKey, setHotKey ] = useState<HotKey>(HOT_KEY_APPLE)
  const [ isMac, setIsMac ] = useState<undefined | boolean>(undefined)

  useEffect(
    () => {
      // 初回読み込み時だけ実行する
      if (isMac !== undefined) return

      if (typeof navigator === 'undefined') return

      if (!/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)) {
        setActionKey(ACTION_KEY_DEFAULT)
        setHotKey(HOT_KEY_DEFAULT)
        setIsMac(false)
      } else {
        setIsMac(true)
      }
    }, [ isMac ])

  return { actionKey, hotKey, isMac }
}
