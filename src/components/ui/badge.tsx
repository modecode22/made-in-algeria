import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center  rounded  px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none  w-fit",
  {
    variants: {
      variant: {
        default: " bg-neutral-50 text-primary-500 shadow-sm",
        primary: "bg-primary-500 text-neutral-50 shadow-sm",
        outline:
          " dark:border-primary-700 border-neutral-900  dark:text-primary-500 text-neutral-900 dark:hover:bg-primary-950/20 hover:text-neutral-50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
