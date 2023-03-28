import { useCallback, useEffect } from 'react'
import { useDisclosureContext } from 'contexts/disclouserContext'
import { useKeyboard } from "./useKeyboard";
import { useRouter } from "next/router";

/**
 * react の strict mode のせいか、２回レンダーが走って、モーダルが２つ
 * 存在してしていている。windowに addEventLister をすると2つのモーダルの開閉が行われる。
 * モーダルの 1つ目のモーダルid を記憶して、そのモーダルidと比較して違うモーダルだったら処理しない。
 * ref に id を保管しても、処理を止めたい２回目のレンダーの時で ref が 初期値の null
 * なので2つ目のモーダルの処理が止まらないため、グローバル変数にした。
 */
let modalId: string | null = null

/**
 * 検索モーダルをキーボードイベントで開閉するためのフック
 */
export function useSearchModalDisclosure() {
  const { isOpen, onToggle, onOpen, onClose, id } = useDisclosureContext()
  const { hotKey } = useKeyboard()
  const router = useRouter()

  const resetModalId = () => {
    modalId = null
  }

  /**
   * キーボードイベントでモーダルを開閉する
   */
  const handleToggleByKeyboard = useCallback(
    (e: KeyboardEvent): void => {
      if (modalId && modalId !== id) return;
      if (e.key.toLowerCase() === 'k' && e[hotKey]) onToggle();
    },
    [ isOpen, id, hotKey, onToggle ]
  )

  useEffect(
    () => {
      if (modalId && modalId !== id) return;
      modalId = id
      window.addEventListener('keydown', handleToggleByKeyboard, false)
      return () => {
        window.removeEventListener('keydown', handleToggleByKeyboard)
      }
    }, [ isOpen, handleToggleByKeyboard ]
  )

  useEffect(
    // ページ遷移したときに、新しいモーダルIDが発行されるので、
    // 遷移前に使用しているモーダルIDをリセットする。
    () => {
      router.events.on('routeChangeStart', resetModalId)
      return () => {
        router.events.off('routeChangeStart', resetModalId)
      }
    }, [ router ])

  return { isOpen, onOpen, onClose, handleToggleByKeyboard, id, onToggle }
}
