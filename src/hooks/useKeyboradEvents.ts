import { useCallback, useEffect } from 'react'
import { useDisclosureContext } from 'contexts/disclouserContext'

/**
 * 検索モーダルをキーボードイベントで開閉するためのフック
 */
export function useToggleSearchModal () {
  const { isOpen, onOpen, onClose } = useDisclosureContext()
  const handleToggleSearchModal = useCallback(
    (e: KeyboardEvent): void => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        isOpen ? onClose() : onOpen()
        e.preventDefault()
      }
      // 他のキーイベントは止めない。
    },
    [isOpen]
  )

  /**
   * addEventListerをmountedの時だけすれば、
   * handleToggle は keydown のたびに呼ばれるが、
   * コンポーネントはスナップショットのようなものなので、
   * isOpen が更新されていない。
   * isOpen が更新された EventHandler を毎回 window に追加する。
   */
  useEffect(
    () => {
      window.addEventListener('keydown', handleToggleSearchModal)
      return () => window.removeEventListener('keydown', handleToggleSearchModal)
    },
    [isOpen]
  )
}
