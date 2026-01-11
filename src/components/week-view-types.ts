/**
 * Represents a single day in the week view
 */
export interface WeekDay {
  /** The full Date object for this day */
  date: Date;
  /** Short day name (e.g., "Sun", "Mon") */
  dayName: string;
  /** Day of month (1-31) */
  dayNumber: number;
  /** Whether this day is today */
  isToday: boolean;
}

/**
 * Represents a single hour slot in the time axis
 */
export interface HourSlot {
  /** Hour in 24-hour format (0-23) */
  hour: number;
  /** Formatted label (e.g., "12 AM", "1 PM") */
  label: string;
}

/**
 * Props for the main WeekView component
 */
export interface WeekViewProps {
  /** Reference date to show the week for. Defaults to today */
  currentDate?: Date;
  /** Day the week starts on. Defaults to 0 (Sunday) */
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  /** Optional className for the root element */
  className?: string;
}

/**
 * Props for the WeekViewDayColumns component
 */
export interface WeekViewDayColumnsProps {
  /** Array of days to display */
  days: WeekDay[];
  /** Optional className */
  className?: string;
}

/**
 * Props for the WeekViewTimeAxis component
 */
export interface WeekViewTimeAxisProps {
  /** Array of hour slots to display */
  hours: HourSlot[];
  /** Height of each hour row in pixels */
  hourHeight: number;
  /** Optional className */
  className?: string;
}

/**
 * Props for the WeekViewGrid component
 */
export interface WeekViewGridProps {
  /** Array of days for columns */
  days: WeekDay[];
  /** Array of hour slots for rows */
  hours: HourSlot[];
  /** Height of each hour row in pixels */
  hourHeight: number;
  /** Optional className */
  className?: string;
}

/**
 * Props for the WeekViewTimeIndicator component
 */
export interface WeekViewTimeIndicatorProps {
  /** Array of days in the current week view */
  days: WeekDay[];
  /** Height of each hour row in pixels */
  hourHeight: number;
  /** Optional className */
  className?: string;
}

/**
 * Props for the WeekViewAllDayRow component
 */
export interface WeekViewAllDayRowProps {
  /** Array of days to display */
  days: WeekDay[];
  /** Optional className */
  className?: string;
}
