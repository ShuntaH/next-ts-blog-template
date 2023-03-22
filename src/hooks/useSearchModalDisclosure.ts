import { useCallback, useEffect } from 'react'
import { useDisclosureContext } from 'contexts/disclouserContext'
import { devLog } from "../lib/helpers";

/**
 * 検索モーダルをキーボードイベントで開閉するためのフック
 */
export function useSearchModalDisclosure() {
  const { isOpen, onOpen, onClose, id } = useDisclosureContext()
  devLog([ 'disclosure rendering isOpen', isOpen ])
  const handleToggleByKeyboard = useCallback(
    (e: KeyboardEvent): void => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        devLog([ 'in handler isOpen', isOpen ])
        isOpen ? onClose() : onOpen()
      }
    },
    [ isOpen, id ]
  )

  useEffect(
    () => {
      devLog([ 'disclosure mounted isOpen', isOpen ])
      window.addEventListener('keydown', handleToggleByKeyboard)
      return () => {
        devLog([ 'disclosure unmounted isOpen', isOpen ])
        window.removeEventListener('keydown', handleToggleByKeyboard)
      }
    },
    [ handleToggleByKeyboard ]
  )

  return { isOpen, onOpen, onClose }
}
