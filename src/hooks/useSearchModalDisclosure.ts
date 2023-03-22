import { useCallback, useEffect } from 'react'
import { useDisclosureContext } from 'contexts/disclouserContext'
import { devLog } from "../lib/helpers";

/**
 * 検索モーダルをキーボードイベントで開閉するためのフック
 */
export function useSearchModalDisclosure() {
  const { isOpen, onOpen, onClose, id } = useDisclosureContext()
  devLog([ 'disclosure rendering isOpen', id, isOpen ])
  const handleToggleByKeyboard = useCallback(
    (e: KeyboardEvent): void => {
      devLog([ 'key', e.key, 'code', e.code, 'metaKey', e.metaKey, 'ctrlKey', e.ctrlKey ])
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        devLog([ 'in handler isOpen', id, isOpen ])
        isOpen ? onClose() : onOpen()
        // devLog([ 'in handler isOpen', id, isOpen ])
        // isOpen ? onClose() : onOpen()
      }
    },
    [ isOpen, onOpen, onClose ]
  )

  useEffect(
    () => {
      devLog([ 'disclosure mounted isOpen', id, isOpen ])
      window.addEventListener('keyup', handleToggleByKeyboard)
      return () => {
        devLog([ 'disclosure unmounted isOpen', id, isOpen ])
        window.removeEventListener('keyup', handleToggleByKeyboard)
      }
    },
    [ isOpen ]
  )

  return { isOpen, onOpen, onClose }
}
