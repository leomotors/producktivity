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
          "rounded-lg p-2 text-xl font-bold transition-colors",
          variant === "primary" && "bg-blue-500 text-white hover:bg-blue-400",
          variant === "secondary" &&
            "border border-blue-500 bg-white text-blue-500 hover:bg-blue-200"
        )}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
