import React, { CSSProperties, ReactNode } from "react";

type Props = {
  children: ReactNode
}
export const Header = (props: Props) => {
  const { children } = props
  return <header style={style}>{children}</header>;
};

const style: CSSProperties = {
  height: 50,
  borderBottom: "1px #999 solid",
  textAlign: "center"
}