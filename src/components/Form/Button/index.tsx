import React from "react";
import clsx from "clsx";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<IProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={clsx(
        "text-center text-md p-2 px-10 border border-white bg-white rounded-full md:text-xl transform hover:scale-105 transition duration-300 ease-in-out hover:shadow-md disabled:bg-gray-400",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;