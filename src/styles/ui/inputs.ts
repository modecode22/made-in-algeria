import { cn } from "@/lib/utils";

export const inputClasses = {
  default: cn(
    "flex h-12 w-full rounded px-3 py-2 shadow-inner placeholder:font-light font-normal file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-900 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
    "text-neutral-900 bg-neutral-100 ring-offset-neutral-500 placeholder:text-neutral-600",
  ),
};

export const textareaClasses = {
  default: cn(
    "flex min-h-[80px] w-full rounded px-3 py-2 shadow-inner placeholder:font-light font-normal file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-900 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
    "text-neutral-900 bg-neutral-100 ring-offset-neutral-500 placeholder:text-neutral-600",
  ),
};

export const selectTriggerInputClasses = {
  default: cn(
    // Base classes
    "relative min-h-12 truncate font-medium isolate flex justify-between px-3 py-2 items-center gap-x-2 rounded focus:outline-none focus:outline focus:outline-2 focus:outline-offset-2 disabled:opacity-50 border-transparent before:absolute before:inset-0 before:-z-12 before:rounded after:absolute after:inset-0 after:-z-12 after:rounded w-full",

    // Light mode classes
    "before:data-[disabled]:shadow-none after:data-[disabled]:shadow-none !text-neutral-800 placeholder:text-neutral-800",

    "text-neutral-800 border before:shadow after:shadow-[shadow:inset_0_1px_theme(colors.white/15%)] after:active:bg-neutral-50/40 after:hover:bg-white/40 before:bg-neutral-100/40 focus:outline-neutral-200",
    "bg-neutral-100 text-neutral-800 ring-offset-neutral-500 placeholder:text-neutral-700",
  ),
};