"use client";

import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
} from "react";

import { Content } from "@radix-ui/react-hover-card";

import { cx } from "@/utilities/classname";

export {
  Root as HoverCard,
  Trigger as HoverCardTrigger,
} from "@radix-ui/react-hover-card";

export const HoverCardContent = forwardRef<
  ElementRef<typeof Content>,
  ComponentPropsWithoutRef<typeof Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <Content
    className={cx(
      "z-foreground w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className,
    )}
    ref={ref}
    sideOffset={sideOffset}
    {...props}
  />
));

HoverCardContent.displayName = Content.displayName;
