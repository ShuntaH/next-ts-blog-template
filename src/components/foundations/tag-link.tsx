import { Tag, TagLabel, TagLabelProps } from "@chakra-ui/react";
import React, { FC } from "react";
import { STYLES } from "lib/constants";
import { TagLinkProps } from "interfaces/foundation";


type Props = {
  tagLinkProps?: TagLinkProps
  tagLabelProps?: TagLabelProps,
  children?: React.ReactNode
}
/**
 * colorScheme は props によって変更できない
 * @param props
 */
const TagLink: FC<Props> = ({
  tagLinkProps,
  tagLabelProps,
  children
}) => {
  return (
    <Tag
      size={"sm"}
      fontSize={{base: 'x-small', md: 'sm'}}
      colorScheme={STYLES.baseColorScheme}
      {...tagLinkProps}
    >
      <TagLabel {...tagLabelProps}>
        {children}
      </TagLabel>
    </Tag>
  )}


export default TagLink
