import { EventHandler } from "react";

export type SearchModalOpenEvents = {
  onTouchStart: EventHandler<any>
  onClick: EventHandler<any>
  onInput: EventHandler<any>
  onChange: EventHandler<any>
}
