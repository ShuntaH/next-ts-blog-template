import React, { EventHandler } from "react";

export type SearchModalOpenEvents = {
  onTouchStart: EventHandler<any>
  onClick: EventHandler<any>
  onInput: EventHandler<any>
  onChange: EventHandler<any>
}

/**
 * ヘッダーに埋め込まれている検索モーダルを開くのを発火させるための入力欄と
 * 実際に検索するためのモーダルの中の入力欄がある。
 * 発火用の入力欄には発火させるイベントを渡し、
 * モーダル内の入力欄にはシームレスに検索できるようフォーカスを任意の位置に当てるための Ref を渡す。
 * なので、この二つを同時に両方渡すことはない。
 */
export type SearchModalHook =
  React.MutableRefObject<null | HTMLElement> |
  EventHandler<any>
