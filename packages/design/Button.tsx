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
          "rounded-lg p-4 text-xl font-bold transition-colors",
          variant === "primary" && "bg-blue-600 text-white hover:bg-blue-500",
          variant === "secondary" &&
            "border border-blue-600 bg-white text-blue-600 hover:bg-blue-100"
        )}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
