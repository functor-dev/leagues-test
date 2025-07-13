import espnImage from "@/../public/assets/images/espn.svg";
import Badge from "@/components/Badge";
import useMediaMatch from "@/components/Hooks/useMediaMatch";
import Calendar3 from "@/components/Icons/Calendar3";
import Body from "@/components/Typographies/Body";
import { League } from "@/types/league";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import clsx from "clsx";
import dynamic from "next/dynamic";
import Image from "next/image";
import React, { useMemo } from "react";

// NOTE: Using `dynamic` to avoid hydration mismatch
const DragHandle = dynamic(() => import("./DragHandle"), {
  ssr: false,
});

interface CardItemProps {
  league: League;
  asDragOverlay?: boolean;
  isArchived?: boolean;
}

const DotsOverlay: React.FC<{
  color: "brand" | "orange" | "grey";
}> = ({ color }) => {
  const dotsColor = useMemo(() => {
    switch (color) {
      case "brand":
        return "var(--color-brand-bg)";

      case "orange":
        return "var(--color-alert-content)";

      case "grey":
        return "var(--color-content-normal)";
    }
  }, [color]);

  return (
    <div
      className="max-sm:hidden absolute right-0 top-1/2 -translate-y-1/2 w-[20%] h-full z-10 opacity-40 pointer-events-none"
      style={{
        backgroundImage: `radial-gradient(${dotsColor} 1.5px, transparent 0)`,
        backgroundSize: "10px 10px",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: "#030303",
          background:
            "linear-gradient(90deg, rgba(3, 3, 3, 1) 0%, rgba(3, 3, 3, 1) 10%, rgba(3, 3, 3, 0.5) 100%)",
        }}
      />
    </div>
  );
};

const CardItem: React.FC<CardItemProps> = ({
  league,
  asDragOverlay,
  isArchived,
}) => {
  const isMobile = useMediaMatch("(max-width: 40rem)");

  const {
    setNodeRef,
    listeners,
    attributes,
    transition,
    transform,
    isDragging,
  } = useSortable({
    id: league.id,
    data: {
      isArchived,
      league,
    },
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const color = useMemo(() => {
    switch (league.status) {
      case "Draft Live":
        return "brand";
      case "Pre-Draft":
        return "orange";
      default:
        return "grey";
    }
  }, [league.status]);

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={clsx("p-4 sm:p-8 rounded-md bg-bg-main relative group", {
        "opacity-30": isDragging,
        "shadow-xl border border-bg-alpha-normal": asDragOverlay,
      })}
      {...(isMobile
        ? {
            ...listeners,
            ...attributes,
          }
        : {})}
    >
      <DotsOverlay color={color} />

      <DragHandle
        {...listeners}
        {...attributes}
        asDragOverlay={asDragOverlay}
      />

      <div className="flex items-center gap-4 sm:gap-6">
        <Image
          src={league.image}
          alt="Thumbnail"
          width={40}
          height={40}
          className="rounded-sm shrink-0"
        />

        <div>
          <div className="flex items-center gap-2 mb-2">
            <Body className="text-white">{league.name}</Body>
            <Badge color={color} className="max-sm:hidden">
              {league.status}
            </Badge>
          </div>

          <div className="flex items-center gap-4 text-content-subdued">
            <div className="flex items-center gap-1.5">
              <Badge color={color} className="sm:hidden">
                {league.status}
              </Badge>
              <Image src={espnImage} alt="Image" height={6} />
              <Body variant="xsmall">ESPN</Body>
            </div>

            <div className="flex items-center gap-1.5">
              <Calendar3 />
              <Body variant="xsmall">2023</Body>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
