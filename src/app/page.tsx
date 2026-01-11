"use client";

import * as React from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PanelLeftIcon,
  PanelRightIcon,
} from "lucide-react";

import { SidebarLeft } from "@/components/sidebar-left";
import { SidebarRight } from "@/components/sidebar-right";
import { ThemeToggle } from "@/components/theme-toggle";
import { WeekView, getCalendarHeaderInfo } from "@/components/week-view";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function Page() {
  const [leftSidebarOpen, setLeftSidebarOpen] = React.useState(true);
  const [currentDate] = React.useState(() => new Date());

  const { monthName, year, weekNumber } = getCalendarHeaderInfo(currentDate, 0);

  return (
    <SidebarProvider className="h-screen">
      <SidebarRight open={leftSidebarOpen} />
      <SidebarInset className="flex flex-col overflow-hidden">
        <header className="bg-background sticky top-0 z-30 flex h-14 shrink-0 items-center gap-2">
          <div className="flex flex-1 items-center gap-2 px-3">
            <Button
              variant="ghost"
              size="icon"
              className="size-7"
              onClick={() => setLeftSidebarOpen((prev) => !prev)}
            >
              <PanelLeftIcon />
              <span className="sr-only">Toggle Calendar Sidebar</span>
            </Button>
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <h1 className="text-xl">
              <span className="font-extrabold">{monthName}</span>{" "}
              <span className="font-extrabold">{year}</span>{" "}
              <span className="text-muted-foreground text-xs">
                Week {weekNumber}
              </span>
            </h1>
          </div>
          <div className="flex items-center gap-2 px-3">
            <ThemeToggle />
            <Avatar className="size-8">
              <AvatarImage src="/avatars/shadcn.jpg" alt="User" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <Button variant="secondary" size="sm">
              Today
            </Button>
            <div className="flex items-center">
              <Button variant="ghost" size="icon" className="size-8">
                <ChevronLeftIcon className="size-4" />
                <span className="sr-only">Previous week</span>
              </Button>
              <Button variant="ghost" size="icon" className="size-8">
                <ChevronRightIcon className="size-4" />
                <span className="sr-only">Next week</span>
              </Button>
            </div>
            <SidebarTrigger>
              <PanelRightIcon />
              <span className="sr-only">Toggle Navigation Sidebar</span>
            </SidebarTrigger>
          </div>
        </header>
        <div className="flex flex-1 flex-col overflow-hidden">
          <WeekView currentDate={currentDate} />
        </div>
      </SidebarInset>
      <SidebarLeft />
    </SidebarProvider>
  );
}
