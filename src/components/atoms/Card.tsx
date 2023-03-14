import React, { CSSProperties, ReactNode } from "react";


type Props={
    style:CSSProperties
    children:ReactNode
}

export const Card = (props:Props) => {
    const {children,style} = props
  return <div style={style}>{children}</div>;
};
