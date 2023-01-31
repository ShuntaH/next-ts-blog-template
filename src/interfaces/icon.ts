import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface Icon {
  icon: IconDefinition
}

export interface SocialIcon extends Icon {
  href: string
  title: string
}

