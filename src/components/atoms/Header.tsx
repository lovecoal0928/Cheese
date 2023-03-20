import React, { CSSProperties, ReactNode } from "react";

type Props = {
  children: ReactNode
}
export const Header = (props: Props) => {
  const { children } = props
  return <header style={{}}>{children}</header>;
};
