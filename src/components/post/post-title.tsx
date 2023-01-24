import { Heading, HeadingProps } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
  children?: ReactNode
  headingProps?: HeadingProps
}

const PostTitle = ({ headingProps, children }: Props) => (
  <Heading
    as={"h1"}
    {...headingProps}
  >
    {children}
  </Heading>
)


export default PostTitle
