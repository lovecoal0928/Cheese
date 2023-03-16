import React, { CSSProperties, ReactNode } from "react";


type Props={
    style:CSSProperties
    children:ReactNode
    onClick?:()=>void
}

export const Card = (props:Props) => {
    const {children,style,onClick} = props
  return <div style={style}onClick={onClick}>{children}</div>;
};
