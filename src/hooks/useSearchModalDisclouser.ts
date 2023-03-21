import { useCallback, useEffect } from 'react'
import { useDisclosureContext } from 'contexts/disclouserContext'
import { devLog } from "../lib/helpers";

/**
 * 検索モーダルをキーボードイベントで開閉するためのフック
 */
export function useSearchModalDisclouser() {
  const { isOpen, onOpen, onClose, id, hidden } = useDisclosureContext()

  const handleToggleByKeyboard = useCallback(
    (e: KeyboardEvent): void => {
      // todo 開発中に2回レンダーされてdisclouserが2つあるので、idでみて1つのモーダルの切り替えをするようにする。
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
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
      devLog([ 'id', id, 'hidden', hidden, 'isOpen', isOpen ])
      window.addEventListener('keydown', handleToggleByKeyboard)
      return () => {
        window.removeEventListener('keydown', handleToggleByKeyboard)
      }
    },
    [ isOpen ]
  )

  return { onOpen }
}
