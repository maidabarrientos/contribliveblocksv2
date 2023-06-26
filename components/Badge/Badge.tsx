import clsx from "clsx";
import { ComponentProps } from "react";
import styles from "./Badge.module.css";

export function Badge({
  className,
  ...props
}: Omit<ComponentProps<"a">, "href">) {
  return (
    <a
      className={clsx(className, styles.badge)}
      href="https://liveblocks.io"
      rel="noreferrer"
      target="_blank"
      {...props}
    >
      <picture>
        <source
          srcSet="https://vnoclogos.s3-us-west-1.amazonaws.com/contribliveblocks%20badge.svg"
          media="(prefers-color-scheme: dark)"
        />
        <img
          src="https://vnoclogos.s3-us-west-1.amazonaws.com/contribliveblocks%20badge.svg"
          alt="Made with Liveblocks + Contrib"
          className={styles.image}
        />
      </picture>
    </a>
  );
}
