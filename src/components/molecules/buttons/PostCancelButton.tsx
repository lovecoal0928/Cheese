import { Button } from "@/components/atoms/Button";
import { Image } from "@/components/atoms/Image";
import React from "react";
import { Styles } from "types";

type Props = {
  src: string
  onClick: (pathname: string) => void
  PAGE_NAME: string
}
export const PostCancelButton = (props: Props) => {
  const { src, onClick, PAGE_NAME } = props
  return <Button style={style.cancel} onClick={() => onClick(PAGE_NAME)}><Image width={20} height={20} alt="cancel" src={src} /></Button>;
};

const style: Styles = {
  cancel: {
    background: "none",
    border: "none",
    position: "absolute",
    left: 10
  }
}