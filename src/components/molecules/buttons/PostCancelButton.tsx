import { Button } from "@/components/atoms/Button";
import { Image } from "@/components/atoms/Image";
import React from "react";
import { Styles } from "types";

type Props={
  src:string
}
export const PostCancelButton = (props:Props) => {
  const {src} = props
  return <Button style={style.cancel}><Image alt="cancel" src={src}/></Button>;
};

const style:Styles={
  cancel:{
    background:"none"
  }
}