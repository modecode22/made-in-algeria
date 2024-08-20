"use client";
import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const toastVariants = cva("min-w-80", {
  variants: {
    variant: {
      default:
        " rounded-xl bg-gradient-to-br from-primary-400  sm:max-w-80 w-full via-primary-500 to-primary-600 p-3 text-neutral-50 shadow-md",
      error:
        "rounded-xl bg-gradient-to-br from-red-400 sm:max-w-80 w-full via-red-500 to-red-600 p-3 text-neutral-50 shadow-md",
      success:
        "rounded-xl bg-gradient-to-br from-emerald-400 sm:max-w-80 w-full via-emerald-500 to-emerald-600 p-3 text-neutral-50 shadow-md",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export type CustomToastProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof toastVariants> & {
    value: string;
    t: string | number;
  };

const CustomToast = ({ value, t, variant, className, ...props }: CustomToastProps) => {
  return (
    <div className={cn(toastVariants({ variant }), className)} {...props}>
      <section className="flex w-full items-center justify-end">
        {variant === "success" || variant === "error" ? (
          <Button variant={"light-solid"} size={"small-icon"} onClick={() => toast.dismiss(t)}>
            <RiCloseLine className="h-4 w-4" />
          </Button>
        ) : (
          <Button variant={"primary-solid"} size={"small-icon"} onClick={() => toast.dismiss(t)}>
            <RiCloseLine className="h-4 w-4" />
          </Button>
        )}
      </section>
      <p>{value}</p>
    </div>
  );
};

export default CustomToast;