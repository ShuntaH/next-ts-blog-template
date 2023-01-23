import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import {
  Box,
  Breadcrumb as ChakraBreadcrumb,
  BreadcrumbItem as ChakraBreadcrumbItem,
  BreadcrumbLink
} from "@chakra-ui/react";
import { BreadcrumbItem } from "../@types/component";
import { STYLES } from "../lib/constants";


type Props = {
  breadCrumbItems: BreadcrumbItem[],
}

const Breadcrumb = ({ breadCrumbItems }: Props) => {
  const length = breadCrumbItems.length

  return (
    <Box fontSize={"md"}>
      <ChakraBreadcrumb
        spacing='8px'
        separator={<FontAwesomeIcon icon={faChevronRight} color='gray.500'/>}
      >
        {
          breadCrumbItems.map((item, index) => {
            const isLastItem = (index + 1) === length

            return (
              <ChakraBreadcrumbItem
                isCurrentPage={isLastItem}
                isLastChild={isLastItem}
              >
                <BreadcrumbLink
                  isCurrentPage={isLastItem}
                  href={item.href}
                  overflow={"hidden"}
                  textOverflow={"ellipsis"}
                  whiteSpace={"nowrap"}
                  textDecoration={"none"}
                  _hover={STYLES.hoverStyle}
                >
                  {item.title}
                </BreadcrumbLink>
              </ChakraBreadcrumbItem>
            )

          })
        }
      </ChakraBreadcrumb>
    </Box>
  )
}

export default Breadcrumb
