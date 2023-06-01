import clsx from "clsx";
import React from "react";

interface IProps
  extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  wrapperClassName?: string;
  className?: string;
  error?: boolean;
  helperText?: string;
  textarea?: boolean;
}

const Input: React.FC<IProps> = ({
  wrapperClassName,
  className,
  error,
  helperText,
  textarea,
  ...props
}) => {
  return (
    <div className={wrapperClassName}>
      {!textarea ? (
        <input
          className={clsx(
            "w-full rounded-xl border px-4 outline-none text-xl py-2",
            {
              "border-red-500": error,
            },
            className
          )}
          {...props}
        />
      ) : (
        <textarea
          className={clsx(
            "w-full max-h-64 min-h-20 border outline-none text-xl py-2 px-4 rounded-xl",
            {
              "border-red-500": error,
            },
            className
          )}
          {...props}
        />
      )}
      {error && <p className="flex text-sm text-red-500">{helperText}</p>}
    </div>
  );
};

export default Input;
