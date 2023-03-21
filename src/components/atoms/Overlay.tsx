import React, { ReactNode } from "react";
import { Styles } from "types";

type Props={
    children:ReactNode
}

export const OverLay = (props:Props) => {
    const {children} = props
  return <div style={styles.overlay} id={"overlay"}>{children}</div>;
};

const styles:Styles={
    overlay:{
        background:"#000",
        width:"100%",
        height:"100%",
        position:"absolute",
        zIndex:"2",
    }
}
