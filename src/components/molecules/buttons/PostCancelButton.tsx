import { Button } from "@/components/atoms/Button";
import { Image } from "@/components/atoms/Image";
import Link from "next/link";
import React from "react";
import { Styles } from "types";

type Props = {
  src: string
  PAGE_NAME: string
}
export const PostCancelButton = (props: Props) => {
  const { src, PAGE_NAME } = props
  return <Link style={style.cancel} href={PAGE_NAME}><Image width={20} height={20} alt="cancel" src={src} /></Link>;
};

const style: Styles = {
  cancel: {
    background: "none",
    border: "none",
    position: "absolute",
    left: 10
  }
}