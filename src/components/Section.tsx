import React from "react";
import cls from "classnames";

export default function Section({
  padding = false,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  containerClass?: string;
  padding?: boolean;
}) {
  const pClass = padding ? "py-20" : "py-10 py-0";
  return (
    <div className={cls(props.containerClass)}>
      <div
        className={cls(
          "px-4 md:px-16 max-w-screen-xl mx-auto",
          pClass,
          props.className
        )}
      >
        {props.children}
      </div>
    </div>
  );
}
