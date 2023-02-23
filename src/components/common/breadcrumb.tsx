import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import {
  Breadcrumb as ChakraBreadcrumb,
  BreadcrumbItem as ChakraBreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbProps
} from "@chakra-ui/react";
import { STYLES } from "lib/constants";
import { BreadcrumbItem } from "interfaces/breadcrumb";
import React, { useMemo } from "react";
import ChakraFontAwesomeIcon from "components/chakra-font-awesome-icon";


type Props = {
  breadcrumbItems: BreadcrumbItem[],
  breadcrumbProps?: BreadcrumbProps
}


function Breadcrumb({ breadcrumbProps, breadcrumbItems }: Props) {
  const length = useMemo(() => breadcrumbItems.length, [breadcrumbItems])

  return (
    <ChakraBreadcrumb
      spacing='6px'
      {...breadcrumbProps}
      separator={
        <ChakraFontAwesomeIcon
          icon={faChevronRight}
          color={STYLES.color}
          size={"xs"}
        />}
    >
      {
        breadcrumbItems.map((item, index) => {
          const isLastItem = (index + 1) === length

          return (
            <ChakraBreadcrumbItem
              isCurrentPage={isLastItem}
              isLastChild={isLastItem}
              key={index}
              overflowX={isLastItem ? "hidden" : 'inherit'}
            >
              <BreadcrumbLink
                isCurrentPage={isLastItem}
                href={item.href}
                width={"full"}
                overflowX={isLastItem ? "hidden" : 'inherit'}
                textOverflow={"ellipsis"}
                whiteSpace={"nowrap"}
                textDecoration={"none"}
                _hover={STYLES.hoverLightStyle}
                color={STYLES.textColorDark}
              >
                {item.title}
              </BreadcrumbLink>
            </ChakraBreadcrumbItem>
          )
        })}
    </ChakraBreadcrumb>
  )
}


export default Breadcrumb
