import React, { ReactNode } from "react";

type Props ={
    children:ReactNode
}

export const Label = (props:Props) => {
    const {children} = props
  return <div>{children}</div>;
};
