"use client"

import * as React from "react"

import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  SidebarGroup,
  SidebarGroupContent,
} from "@/components/ui/sidebar"

type CaptionLayout = React.ComponentProps<typeof Calendar>["captionLayout"]

export function DatePicker() {
  const [dropdown, setDropdown] = React.useState<CaptionLayout>("dropdown")
  const [date, setDate] = React.useState<Date | undefined>(
    new Date(2025, 5, 12)
  )

  return (
    <SidebarGroup className="px-0">
      <SidebarGroupContent>
        <div className="flex flex-col gap-4 p-3">
          <Calendar
            mode="single"
            defaultMonth={date}
            selected={date}
            onSelect={setDate}
            captionLayout={dropdown}
            className="rounded-lg border shadow-sm [&_[role=gridcell].bg-accent]:bg-sidebar-primary [&_[role=gridcell].bg-accent]:text-sidebar-primary-foreground [&_[role=gridcell]]:w-[33px]"
          />
          <div className="flex flex-col gap-3">
            <Label htmlFor="dropdown" className="px-1">
              Dropdown
            </Label>
            <Select
              value={dropdown}
              onValueChange={(value) => setDropdown(value as CaptionLayout)}
            >
              <SelectTrigger
                id="dropdown"
                size="sm"
                className="bg-background w-full"
              >
                <SelectValue placeholder="Dropdown" />
              </SelectTrigger>
              <SelectContent align="center">
                <SelectItem value="dropdown">Month and Year</SelectItem>
                <SelectItem value="dropdown-months">Month Only</SelectItem>
                <SelectItem value="dropdown-years">Year Only</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
