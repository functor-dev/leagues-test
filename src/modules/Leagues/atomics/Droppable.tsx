import Body from "@/components/Typographies/Body";
import { useDroppable } from "@dnd-kit/core";
import clsx from "clsx";
import React from "react";

const Droppable = () => {
  const { isOver, setNodeRef } = useDroppable({
    id: "leagues-archived",
  });

  return (
    <div
      ref={setNodeRef}
      className={clsx("border-[0.5px]  py-12 px-8 text-center rounded-md mb-5", {
        "border-dashed border-bg-alpha-normal": !isOver,
        "border-dashed border-brand-bg": isOver,
      })}
    >
      <Body>Drop league here to archive</Body>
    </div>
  );
};

export default Droppable;
