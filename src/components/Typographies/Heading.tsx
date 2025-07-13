import clsx from "clsx";
import React, { HTMLAttributes, useCallback, useMemo } from "react";

type HeadingLevels = 1 | 2 | 3 | 4;

interface HeadingProps {
  component?: React.ElementType<HTMLAttributes<HTMLElement>>;
  level: HeadingLevels;
  children: React.ReactNode;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({
  component,
  level,
  children,
  className,
}) => {
  const Component = useMemo<React.ElementType<HTMLAttributes<HTMLElement>>>(
    () => component || `h${level}`,
    [component, level],
  );

  const makeStylesByLevel = useCallback((level: HeadingLevels) => {
    switch (level) {
      case 3:
        return "text-heading-3";

      default:
        return "";
    }
  }, []);

  return (
    <Component className={clsx(className, makeStylesByLevel(level))}>
      {children}
    </Component>
  );
};

export default Heading;
