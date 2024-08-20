import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";

export const CommonButtonClasses =
  "inline-flex items-center justify-center whitespace-nowrap rounded text-sm font-medium ring-offset-neutral-500 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-900 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

export const SizesButtonClasses = {
  default: "h-12 px-8 py-2",
  sm: "h-10 rounded px-3",
  lg: "h-14 rounded px-10",
  icon: "h-8 w-8",
  "small-icon": "h-6 w-6",
};

export const PrimaryButtonsClasses = {
  "primary-solid": cn(
    "border-[1px] rounded-lg shadow tracking-wide",
    "bg-[linear-gradient(110deg,var(--primary-400),45%,var(--primary-100),85%,var(--primary-400))] text-neutral-200 border-primary-50",
  ),
  "primary-outline": cn(
    "border-[1px] rounded-lg shadow tracking-wide",
    "text-primary-300 border-primary-300",
  ),
  "primary-ghost": cn("rounded-lg  tracking-wide", "text-primary-300"),
};

export const CTAButtonsClasses = {
  "cta-solid": cn(
    "animate-bg-shine border-[1px] rounded-lg shadow bg-[length:200%_100%] tracking-wide",
    "bg-[linear-gradient(110deg,var(--primary-400),45%,var(--primary-500),55%,var(--primary-300))] text-neutral-100 border-neutral-300",
  ),
  "cta-outline": cn(
    " border-[1px] rounded-lg  bg-[length:200%_100%] tracking-wide",
    "bg-[linear-gradient(110deg,var(--neutral-50),25%,var(--neutral-200),55%,var(--neutral-50))] text-neutral-500 border-neutral-200",
  ),
};

export const DarkButtonsClasses = {
  "dark-solid": cn(
    "border-[1px] rounded-lg shadow tracking-wide",
    "bg-[linear-gradient(110deg,var(--neutral-700),45%,var(--neutral-900),85%,var(--neutral-700))] text-neutral-200 border-neutral-500",
  ),
  "dark-outline": cn(
    "border-[1px] rounded-lg shadow tracking-wide",
    "text-neutral-500 border-neutral-500 ",
  ),
  "dark-ghost": cn("rounded-lg tracking-wide", "text-neutral-500"),
};

export const LightButtonsClasses = {
  "light-solid": cn(
    "border-[1px] rounded-lg shadow tracking-wide",
    "bg-[linear-gradient(110deg,var(--neutral-50),45%,var(--neutral-200),85%,var(--neutral-50))] text-neutral-800 border-neutral-200",
  ),
  "light-outline": cn(
    "border-[1px] rounded-lg shadow tracking-wide",
    "text-neutral-600 border-neutral-200 ",
  ),
  "light-ghost": cn("rounded-lg tracking-wide", "text-neutral-600"),
};

export const inputButtonsClasses = {
  "input-solid": cn(
    "text-neutral-800 before:shadow after:shadow-[shadow:inset_0_1px_theme(colors.white/15%)] after:active:bg-neutral-50 after:hover:bg-white/40 before:bg-neutral-100 focus:outline-neutral-200",
    " bg-neutral-100 ring-offset-neutral-500 placeholder:text-neutral-600",
  ),
};

export const buttonVariants = cva(CommonButtonClasses, {
  variants: {
    variant: {
      ...PrimaryButtonsClasses,
      ...CTAButtonsClasses,
      ...DarkButtonsClasses,
      ...LightButtonsClasses,
      ...inputButtonsClasses,
    },
    size: SizesButtonClasses,
  },
  defaultVariants: {
    variant: "primary-solid",
    size: "default",
  },
});