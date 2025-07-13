"use client";

import Button from "@/components/Button";
import ChevronBottom from "@/components/Icons/ChevronBottom";
import Logo from "@/components/Logo";
import Heading from "@/components/Typographies/Heading";
import Label from "@/components/Typographies/Label";
import { CardItem, Droppable } from "@/modules/Leagues/atomics";
import { League } from "@/types/league";
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import type { DragStartEvent } from "@dnd-kit/core/dist/types";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import Link from "next/link";
import React, { useCallback, useMemo, useState } from "react";

const leaguesMockData: League[] = [
  {
    id: 1,
    name: "St. Louis Pro Season Points League",
    status: "Draft Live",
    image: "https://picsum.photos/40?r=1",
  },
  {
    id: 2,
    name: "Washington Pro Season Points League",
    status: "Pre-Draft",
    image: "https://picsum.photos/40?r=2",
  },
  {
    id: 3,
    name: "New York Pro H2H Points PPR League",
    status: "Draft Live",
    image: "https://picsum.photos/40?r=3",
  },
  {
    id: 4,
    name: "Washington Pro Season Points League",
    status: "Draft Live",
    image: "https://picsum.photos/40?r=4",
  },
  {
    id: 5,
    name: "New York Pro H2H Points PPR League",
    status: "Post-Draft",
    image: "https://picsum.photos/40?r=5",
  },
];

const Leagues = () => {
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor));

  const [draggable, setDraggable] = useState<{
    isDragging: boolean;
    league: League | null;
    isArchivedLeague: boolean;
  }>({
    isDragging: false,
    league: null,
    isArchivedLeague: false,
  });

  const [listLeagues, setListLeagues] = useState<League[]>(leaguesMockData);

  const [listArchivedLeagues, setListArchivedLeagues] = useState<League[]>([]);

  const shouldShowDroppable = useMemo(() => {
    return draggable.isDragging && !draggable.isArchivedLeague;
  }, [draggable]);

  const handleDragStart = useCallback((event: DragStartEvent) => {
    if (event.active.data.current?.league) {
      setDraggable({
        isDragging: true,
        league: event.active.data.current.league as League,
        isArchivedLeague: event.active.data.current.isArchived as boolean,
      });
    }
  }, []);

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      if (event.over?.id === "leagues-archived" && event.active.data.current) {
        const draggingLeague = event.active.data.current.league as League;

        setListLeagues((list) =>
          list.filter((item) => item.id !== draggingLeague.id),
        );

        setListArchivedLeagues((list) => [draggingLeague, ...list]);
      } else if (event.over?.id !== event.active.id) {
        const move = (leagues: League[]) => {
          const oldIndex = leagues.findIndex(
            (item) => item.id === event.active.id,
          );
          const newIndex = leagues.findIndex(
            (item) => item.id === event.over?.id,
          );

          return arrayMove(leagues, oldIndex, newIndex);
        };

        if (draggable.isArchivedLeague) {
          setListArchivedLeagues((list) => move(list));
        } else {
          setListLeagues((list) => move(list));
        }
      }

      setDraggable({
        isDragging: false,
        league: null,
        isArchivedLeague: false,
      });
    },
    [draggable],
  );

  return (
    <div className="min-h-screen py-36 px-5 flex items-center justify-center">
      <div className="w-[640px]">
        <div className="flex items-center justify-between mb-10">
          <Link href="#" className="flex gap-3 items-center">
            <Logo />
            <Heading level={3} className="text-white font-tactic-sans">
              Leagues
            </Heading>
          </Link>

          <Button size="small" leftSection="+">
            Connect League
          </Button>
        </div>

        <DndContext
          sensors={sensors}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          <DragOverlay>
            {draggable.isDragging && draggable.league && (
              <CardItem league={draggable.league} asDragOverlay />
            )}
          </DragOverlay>

          <SortableContext
            items={listLeagues}
            strategy={verticalListSortingStrategy}
          >
            <div className="space-y-5 mb-10">
              {listLeagues.map((league) => (
                <CardItem key={league.id} league={league} />
              ))}
            </div>
          </SortableContext>

          <div className="text-content-subdued">
            <div className="flex items-center gap-2 mb-5">
              <ChevronBottom />
              <Label variant="small">Archived</Label>
            </div>

            {shouldShowDroppable && <Droppable />}

            <SortableContext
              items={listArchivedLeagues}
              strategy={verticalListSortingStrategy}
            >
              <div className="space-y-5 mb-10">
                {listArchivedLeagues.map((league) => (
                  <CardItem key={league.id} league={league} isArchived />
                ))}
              </div>
            </SortableContext>
          </div>
        </DndContext>
      </div>
    </div>
  );
};

export default Leagues;
