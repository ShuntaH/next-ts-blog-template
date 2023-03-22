import { useCallback, useEffect } from 'react'
import { useDisclosureContext } from 'contexts/disclouserContext'
import { devLog } from "../lib/helpers";

/**
 * 検索モーダルをキーボードイベントで開閉するためのフック
 */
export function useSearchModalDisclosure() {
  const { isOpen, onOpen, onClose, id, hidden } = useDisclosureContext()

  const handleToggleByKeyboard = useCallback(
    (e: KeyboardEvent): void => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        devLog([ 'handleToggleByKeyboard', id, isOpen ])
        isOpen ? onClose() : onOpen()
      }
      e.preventDefault()
      // 他のキーイベントは止めない。
    },
    [ isOpen ]
  )

  /**
   * addEventListerをmountedの時に呼べば、
   * handleToggle は keydown のたびに呼ばれるが、
   * コンポーネントはスナップショットのようなものなので、
   * isOpen が更新されていない。
   * isOpen が更新された EventHand
   */
  useEffect(
    () => {
      window.addEventListener('keydown', handleToggleByKeyboard)
      return () => {
        window.removeEventListener('keydown', handleToggleByKeyboard)
      }
    },
    [ isOpen ]
  )

  return { isOpen, onOpen, onClose, id, hidden }
}
