import clsx from "clsx";
import { FC, memo, PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
  variant: "primary" | "secondary";
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = memo(
  ({ children, onClick, variant }) => {
    return (
      <button
        className={clsx(
          "rounded-lg border p-2 text-xl font-bold transition-colors",
          variant === "primary" &&
            "border-gray-500 bg-blue-500 text-white hover:bg-blue-400",
          variant === "secondary" &&
            "border-blue-300 bg-blue-100 text-black hover:bg-blue-200"
        )}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
