import clsx from "clsx";
import React, { HTMLAttributes, useCallback, useMemo } from "react";

type BodyVariant = "large" | "base" | "small" | "xsmall";

interface BodyProps {
  variant?: BodyVariant;
  component?: React.ElementType<HTMLAttributes<HTMLElement>>;
  children: React.ReactNode;
  className?: string;
}

const Body: React.FC<BodyProps> = ({
  component,
  variant = "base",
  children,
  className,
}) => {
  const Component = useMemo<React.ElementType<HTMLAttributes<HTMLElement>>>(
    () => component || "p",
    [component],
  );

  const makeStylesByVariant = useCallback((variant: BodyVariant) => {
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

export default Body;
