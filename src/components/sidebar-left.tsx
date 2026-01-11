"use client"

import * as React from "react"
import { Search, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Kbd } from "@/components/ui/kbd"
import { Separator } from "@/components/ui/separator"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

export function SidebarLeft({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar side="right" className="border-l" {...props}>
      <SidebarHeader className="p-3">
        <div className="relative">
          <Search className="text-muted-foreground absolute left-2.5 top-1/2 size-4 -translate-y-1/2" />
          <Input
            type="search"
            placeholder="Search"
            className="bg-transparent pl-8"
          />
        </div>
      </SidebarHeader>
      <SidebarContent>
        {/* No upcoming meeting */}
        <SidebarGroup>
          <SidebarGroupContent className="px-3 py-4">
            <p className="text-sm font-medium">No upcoming meeting</p>
          </SidebarGroupContent>
        </SidebarGroup>

        <Separator />

        {/* Scheduling snippet */}
        <SidebarGroup>
          <SidebarGroupLabel>Scheduling snippet</SidebarGroupLabel>
          <SidebarGroupContent className="px-3">
            <Button
              variant="outline"
              className="w-full justify-between"
            >
              <span>Share availability</span>
              <Kbd>S</Kbd>
            </Button>
          </SidebarGroupContent>
        </SidebarGroup>

        <Separator />

        {/* Quick meeting */}
        <SidebarGroup>
          <SidebarGroupLabel>Quick meeting</SidebarGroupLabel>
          <SidebarGroupContent className="px-3">
            <button
              type="button"
              className="text-muted-foreground hover:bg-accent hover:text-accent-foreground flex w-full items-center justify-between rounded-md p-2 text-sm transition-colors"
            >
              <div className="flex items-center gap-2">
                <User className="size-4" />
                <span>Meet with...</span>
              </div>
              <Kbd>F</Kbd>
            </button>
          </SidebarGroupContent>
        </SidebarGroup>

        <Separator />

        {/* Useful shortcuts */}
        <SidebarGroup>
          <SidebarGroupLabel>Useful shortcuts</SidebarGroupLabel>
          <SidebarGroupContent className="px-3">
            <div className="flex flex-col gap-1">
              <ShortcutRow label="Command menu">
                <Kbd>⌘</Kbd>
                <Kbd>K</Kbd>
              </ShortcutRow>
              <ShortcutRow label="Menu bar calendar">
                <Kbd>option</Kbd>
                <Kbd>⌘</Kbd>
                <Kbd>K</Kbd>
              </ShortcutRow>
              <ShortcutRow label="Cron menu">
                <Kbd>`</Kbd>
              </ShortcutRow>
              <ShortcutRow label="Go to date">
                <Kbd>.</Kbd>
              </ShortcutRow>
              <ShortcutRow label="All keyboard shortcuts">
                <Kbd>?</Kbd>
              </ShortcutRow>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}

function ShortcutRow({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="text-muted-foreground flex items-center justify-between py-1.5 text-sm">
      <span>{label}</span>
      <div className="flex items-center gap-1">{children}</div>
    </div>
  )
}
