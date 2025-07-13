import clsx from "clsx";
import React, { HTMLAttributes, useCallback, useMemo } from "react";

type LabelVariant = "large" | "base" | "small" | "xsmall";

interface LabelProps {
  variant?: LabelVariant;
  component?: React.ElementType<HTMLAttributes<HTMLElement>>;
  children: React.ReactNode;
  className?: string;
}

const Label: React.FC<LabelProps> = ({
  component,
  variant = "base",
  children,
  className,
}) => {
  const Component = useMemo<React.ElementType<HTMLAttributes<HTMLElement>>>(
    () => component || "p",
    [component],
  );

  const makeStylesByVariant = useCallback((variant: LabelVariant) => {
    switch (variant) {
      case "base":
        return "text-body-base";

      case "small":
        return "text-body-small";

      case "xsmall":
        return "text-body-xsmall";

      default:
        return "";
    }
  }, []);

  return (
    <Component className={clsx(className, makeStylesByVariant(variant))}>
      {children}
    </Component>
  );
};

export default Label;
