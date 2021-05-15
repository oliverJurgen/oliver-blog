import React from "react";
import { HeadPost } from "./HeadPost";
import { Meta } from "globalTypes";

type Props = {
  children: React.ReactNode;
  meta: Meta;
};

export default function BlogPost({ children, meta }: Props) {
  return (
    <>
      <HeadPost meta={meta} isBlogPost />
      <article>{children}</article>
    </>
  );
}
