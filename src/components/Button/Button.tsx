import clsx from "clsx";
import React, { useCallback } from "react";

type ButtonType = "primary" | "secondary" | "ghost";

type ButtonSize = "large" | "base" | "small" | "xsmall";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  type?: ButtonType;
  size?: ButtonSize;
  leftSection?: React.ReactNode;
  htmlType?: "submit" | "button";
}

const Button: React.FC<ButtonProps> = ({
  type = "secondary",
  size = "base",
  leftSection,
  children,
  ...props
}) => {
  const makeStylesBySize = useCallback((size: ButtonSize) => {
    switch (size) {
      case "small":
        return "min-h-8 text-body-small";
      default:
        return "";
    }
  }, []);

  const makeStylesByType = useCallback((type: ButtonType) => {
    switch (type) {
      case "secondary":
        return "text-white bg-bg-alpha-subtle hover:bg-bg-alpha-normal border-white/10";
      default:
        return "";
    }
  }, []);

  return (
    <button
      className={clsx(
        "px-2.5 inline-flex items-center gap-1 border-[0.5px] cursor-pointer rounded-sm font-volk-sans-test",
        makeStylesByType(type),
        makeStylesBySize(size),
      )}
      {...props}
    >
      {leftSection && <span>{leftSection}</span>}

      <span>{children}</span>
    </button>
  );
};

export default Button;
