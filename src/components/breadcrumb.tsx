import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import {
  Breadcrumb as ChakraBreadcrumb,
  BreadcrumbItem as ChakraBreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbProps
} from "@chakra-ui/react";
import { STYLES } from "../lib/constants";
import ChakraFontAwesomeIcon from "./chakra-font-awesome-icon";
import { BreadcrumbItem } from "../interfaces/breadcrumb";


type Props = {
  breadcrumbItems: BreadcrumbItem[],
  breadcrumbProps?: BreadcrumbProps
}

const Breadcrumb = ({ breadcrumbProps, breadcrumbItems }: Props) => {

  const length = breadcrumbItems.length

  return (
    <ChakraBreadcrumb
      spacing='6px'
      {...breadcrumbProps}
      separator={
        <ChakraFontAwesomeIcon
          icon={faChevronRight}
          color={STYLES.accentColor}
          size={"xs"}/>}
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
                _hover={STYLES.hoverStyle}
                color={"gray.300"}
              >
                {item.title}
              </BreadcrumbLink>
            </ChakraBreadcrumbItem>
          )

        })
      }
    </ChakraBreadcrumb>
  )
}


export default Breadcrumb
