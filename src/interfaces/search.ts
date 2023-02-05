import React, { EventHandler } from "react";

/**
 * モーダルを発火させるファンクションが渡される
 * イベント種類の一覧
 */
export type SearchModalOpenEvents = {
  onTouchStart: EventHandler<any>
  onClick: EventHandler<any>
}

/**
 * 検索に使われる入力欄は２箇所ある。
 * ヘッダーに埋め込まれている検索モーダルを開くのを
 * 発火させるための入力欄と
 * モーダルの中の実際に検索するための入力欄がある。
 * 発火用の入力欄には発火イベントを渡し、
 * モーダル内の入力欄にはシームレスに検索できるよう、
 * フォーカスを任意の位置に当てるための Ref を渡す。
 * なので、この二つを同時に両方渡すことはない。
 */
export type SearchModalHook =
  React.MutableRefObject<null | HTMLInputElement> |
  EventHandler<any>
