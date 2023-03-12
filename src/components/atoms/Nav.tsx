import React, { ReactNode } from "react";

type Nav = {
    children:ReactNode
}
export const Nav = ({children}:Nav) => {
  return <nav>{children}</nav>
};
