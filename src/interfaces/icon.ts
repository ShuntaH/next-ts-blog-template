import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface Icon {
  icon: IconDefinition
}

export interface NavigationIcon extends Icon {
  external: boolean
  href: string
  title: string
}

