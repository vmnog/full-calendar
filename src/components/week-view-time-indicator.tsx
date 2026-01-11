"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import type { WeekViewTimeIndicatorProps } from "./week-view-types";

/**
 * Current time indicator showing a red horizontal line
 * Updates position every minute
 */
export function WeekViewTimeIndicator({
  days,
  hourHeight,
  className,
}: WeekViewTimeIndicatorProps) {
  const [currentTime, setCurrentTime] = React.useState(() => new Date());

  // Check if today is visible in the current week
  const todayIndex = days.findIndex((day) => day.isToday);
  const isTodayVisible = todayIndex !== -1;

  // Update time every minute
  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  if (!isTodayVisible) {
    return null;
  }

  // Calculate position based on current time
  const minutesSinceMidnight =
    currentTime.getHours() * 60 + currentTime.getMinutes();
  const totalMinutesInDay = 24 * 60;
  const totalGridHeight = hourHeight * 24;
  const topPosition = (minutesSinceMidnight / totalMinutesInDay) * totalGridHeight;

  // Calculate left position based on today's column
  const leftPercent = (todayIndex / 7) * 100;
  const widthPercent = 100 / 7;

  return (
    <div
      className={cn("pointer-events-none absolute z-20", className)}
      style={{
        top: topPosition,
        left: `${leftPercent}%`,
        width: `${widthPercent}%`,
      }}
    >
      <div className="relative flex items-center">
        <div className="h-2.5 w-2.5 rounded-full bg-primary" />
        <div className="h-0.5 flex-1 bg-primary" />
      </div>
    </div>
  );
}
