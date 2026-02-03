import * as React from "react";
import type { ContainerType } from "@/types";

function Container<C extends React.ElementType>({
  as,
  children,
  ...delegatedProps
}: ContainerType<C>) {
  const Component = as || "div";
  return <Component {...delegatedProps}>{children}</Component>;
}

export default Container;
