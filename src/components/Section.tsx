import React from "react";
import cls from "classnames";

export default function Section({
  padding = false,
  containerClass,
  className,
  children,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  containerClass?: string;
  padding?: boolean;
  id?: string;
}) {
  const pClass = padding ? "py-20" : "py-10 py-0";
  return (
    <div className={cls(containerClass)} {...props}>
      <div
        className={cls(
          "px-4 md:px-16 max-w-screen-xl mx-auto",
          pClass,
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
