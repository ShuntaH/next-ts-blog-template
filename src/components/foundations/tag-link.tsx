import { LinkProps, Tag, TagLabel, TagProps } from "@chakra-ui/react";
import React, { FC } from "react";
import { STYLES } from "lib/constants";

type Props = Omit<TagProps & LinkProps, 'colorScheme'>

/**
 * colorScheme は props によって変更できない
 * @param props
 */
const TagLink: FC<Props> = (props: Props) => {
  return (
    <Tag
      variant={props.variant}
      colorScheme={STYLES.baseColorScheme}
      {...props}
    >
      <TagLabel>{props.children}</TagLabel>
    </Tag>
  )}


export default TagLink
