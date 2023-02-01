import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface Icon {
  icon: IconDefinition
}

export interface NavigationIcon extends Icon {
  href: string
  title: string
}

