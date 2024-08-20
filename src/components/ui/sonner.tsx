"use client";

import { Toaster as Sonner } from "sonner";

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      theme={"dark"}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-neutral-800 group-[.toaster]:text-neutral-500 group-[.toaster]:border-neutral-700 group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-neutral-600",
          actionButton: "group-[.toast]:bg-neutral-500 group-[.toast]:text-primary-500",
          cancelButton: "group-[.toast]:bg-neutral-900 group-[.toast]:text-neutral-600",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
