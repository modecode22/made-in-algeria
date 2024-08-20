"use client";

import * as React from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/styles/ui/button";

export type CalendarProps = React.ComponentProps<typeof DayPicker> & {
  direction?: "rtl" | "ltr";
};

function Calendar({ className, classNames, showOutsideDays = true, direction = "ltr", ...props }: CalendarProps) {
  return (
    <DayPicker
      dir={direction}
      showOutsideDays={showOutsideDays}
      className={cn("rounded bg-white p-3 dark:bg-neutral-700", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-sm font-medium",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          buttonVariants({ variant: "dark-outline" }),
          "h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100 absolute",
        ),
        nav_button_previous: " left-1",
        nav_button_next: " right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell: "dark:text-neutral-200 text-neutral-500  w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: "h-9 w-9 text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-full [&:has([aria-selected].day-range-start)]:rounded-l-full [&:has([aria-selected].day-outside)]:bg-neutral-100 dark:[&:has([aria-selected].day-outside)]:bg-neutral-600 dark:[&:has([aria-selected])]:bg-neutral-600 [&:has([aria-selected])]:bg-neutral-100 first:[&:has([aria-selected])]:rounded-l-full last:[&:has([aria-selected])]:rounded-r-full focus-within:relative focus-within:z-20 ",
        day: cn(
          buttonVariants({ variant: "dark-ghost" }),
          "h-9 w-9 p-0 font-normal  aria-selected:opacity-100 dark:hover:bg-neutral-600 hover:bg-neutral-50",
        ),
        day_range_end: "day-range-end",
        day_range_start: "day-range-start",
        day_selected: " dark:text-neutral-50 text-neutral-800  dark:bg-neutral-600  dark:focus:text-white",
        day_today: "  text-secondary-300/80 dark:text-secondary-50",
        day_outside:
          "day-outside  opacity-50   aria-selected:text-secondary-500 dark:aria-selected:text-secondary-50  aria-selected:opacity-60",
        day_disabled: " text-neutral-400 opacity-50",
        day_range_middle: "  aria-selected:text-secondary-200 dark:aria-selected:text-secondary-50 ",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({ ...props }) => <LuChevronLeft className="h-4 w-4" />,
        IconRight: ({ ...props }) => <LuChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
