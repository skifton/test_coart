import React from "react";
import clsx from "clsx";

interface IProps {
  className?: string;
  children: React.ReactNode;
}

const LayoutWrapper: React.FC<IProps> = ({ className, children }) => {
  return <div className={clsx("max-w-2xl mx-8 md:mx-auto", className)}>{children}</div>;
};

export default LayoutWrapper;
