import React, { CSSProperties, ReactNode } from "react";

type Props={
    children:ReactNode
    style:CSSProperties
}
export const Header = (props:Props) => {
    const {children,style} = props
  return <header style={style}>{children}</header>;
};
