import { useCallback, useEffect } from 'react'
import { useDisclosureContext } from 'contexts/disclouserContext'
import { devLog } from "../lib/helpers";

/**
 * 検索モーダルをキーボードイベントで開閉するためのフック
 */
export function useSearchModalDisclosure() {
  const { isOpen, onOpen, onClose, id } = useDisclosureContext()
  devLog([ 'disclosure rendering isOpen', id, isOpen ])
  // const modalRef = React.useRef(null)


  const handleToggleByKeyboard = useCallback(
    (e: KeyboardEvent): void => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        isOpen ? onClose() : onOpen()
      }
    },
    []
  )

  useEffect(
    () => {
      // if (modalRef.current === null) {
      //   modalRef.current = useId();
      // }
      window.addEventListener('keydown', handleToggleByKeyboard)
      return () => {
        window.removeEventListener('keydown', handleToggleByKeyboard)
      }
    }, [ isOpen, handleToggleByKeyboard ]
  )


  return { isOpen, onOpen, onClose, handleToggleByKeyboard }
}
