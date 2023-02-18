import { LinkProps, Tag, TagLabel, TagProps } from "@chakra-ui/react";
import React, { FC } from "react";

type Props = Omit<TagProps & LinkProps, 'variant'|'colorScheme'>

/**
 * variant と colorSchema は props によって変更できない
 * @param props
 * @constructor
 */
const TagLink: FC<Props> = (props: Props) => {
  return (
    <Tag
      variant='outline'
      colorScheme='teal'
      {...props}
    >
      <TagLabel>{props.children}</TagLabel>
    </Tag>
  )}


export default TagLink
