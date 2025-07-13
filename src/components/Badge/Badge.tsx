import clsx from "clsx";
import React, { useCallback } from "react";

type BadgeColor = "brand" | "orange" | "grey";

interface BadgeProps {
  color: BadgeColor;
  children: React.ReactNode;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ color, children, className }) => {
  const makeStylesByColor = useCallback((color: BadgeColor) => {
    switch (color) {
      case "brand":
        return "text-brand-content shadow-[0px_0px_0px_0.5px_rgba(181,255,77,0.2),0px_0px_8px_0px_rgba(181,255,77,0.1),0px_-0.5px_4px_0px_rgba(255,255,255,0.05)_inset,0px_0.5px_4px_0px_rgba(0,0,0,0.15)_inset]";

      case "orange":
        return "text-alert-content shadow-[0px_-0.5px_4px_0px_rgba(255,255,255,0.05)_inset,0px_0.5px_4px_0px_rgba(0,0,0,0.15)_inset,0px_0px_0px_0.5px_rgba(255,173,51,0.2),0px_0px_8px_0px_rgba(255,173,51,0.1)]";

      case "grey":
        return "text-content-normal shadow-[0px_-0.5px_4px_0px_rgba(255,255,255,0.05)_inset,0px_0.5px_4px_0px_rgba(0,0,0,0.15)_inset,0px_0px_0px_0.5px_rgba(255,255,255,0.2),0px_0px_8px_0px_rgba(0,0,0,0.1)]";

      default:
        return "";
    }
  }, []);

  return (
    <span
      className={clsx(
        "inline-flex items-center cursor-default gap-1 px-3 rounded-sm text-body-xsmall h-5",
        makeStylesByColor(color),
        className,
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
