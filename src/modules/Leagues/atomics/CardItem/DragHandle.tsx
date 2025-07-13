import DotGrid2X3 from "@/components/Icons/DotGrid2x3";
import { DraggableAttributes } from "@dnd-kit/core";
import clsx from "clsx";
import React from "react";

interface DragHandleProps extends DraggableAttributes {
  asDragOverlay?: boolean;
}

const DragHandle: React.FC<DragHandleProps> = ({ asDragOverlay, ...props }) => {
  return (
    <div
      {...props}
      style={{
        boxShadow: "0px 4px 8px 0px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(3px)",
      }}
      className={clsx(
        "z-20 border-[0.5px] border-white/10 absolute right-0.5 top-0.5 bottom-0.5 rounded-l-xs rounded-r-sm bg-bg-alpha-subtle hover:bg-bg-alpha-normal w-6 items-center justify-center cursor-grab",
        {
          "!flex": asDragOverlay,
          "hidden group-hover:flex": !asDragOverlay,
        },
      )}
    >
      <DotGrid2X3 className="text-content-subdued" />
    </div>
  );
};

export default DragHandle;
