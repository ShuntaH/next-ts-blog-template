import { CardProps, LinkProps, TagProps } from "@chakra-ui/react";

export type TagLinkProps = Omit<TagProps & LinkProps, 'colorScheme'>
export type CardLinkProps = CardProps & LinkProps
