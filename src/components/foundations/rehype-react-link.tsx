import React from "react";
import { ComponentWithAs, Link, LinkProps } from "@chakra-ui/react";
import NextLink from "next/link";

const RehypeReactLink: ComponentWithAs<"a", LinkProps> = ({ href, children }) => {
  return href?.startsWith("/") ? (
    <Link href={href} as={NextLink}>{children}</Link>
  ) : (
    <Link isExternal href={href} rel="noreferrer" target="_blank">
      {children}
    </Link>
  );
};

export default RehypeReactLink;
