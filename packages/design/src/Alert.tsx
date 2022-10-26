import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";
import { FC, PropsWithChildren, memo } from "react";

interface AlertProps extends PropsWithChildren {
  variant: "success" | "warning" | "error" | "info";
}

export const Alert: FC<AlertProps> = memo(({ children, variant }) => {
  return (
    <div
      className={clsx(
        "border rounded-lg py-4 pl-4 pr-6 text-black flex items-center gap-2",
        variant === "success" && "bg-green-300 border-green-500",
        variant === "warning" && "bg-yellow-300 border-yellow-500",
        variant === "error" && "bg-red-300 border-red-500",
        variant === "info" && "bg-blue-300 border-blue-500"
      )}
    >
      {variant === "success" && (
        <CheckCircleIcon className="w-8 h-8 text-green-500" />
      )}
      {variant === "warning" && (
        <ExclamationCircleIcon className="w-8 h-8 text-yellow-500" />
      )}
      {variant === "error" && (
        <ExclamationCircleIcon className="w-8 h-8 text-red-500" />
      )}
      {variant === "info" && (
        <InformationCircleIcon className="w-8 h-8 text-blue-500" />
      )}
      {children}
    </div>
  );
});

Alert.displayName = "Alert";
