"use client";
import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

export const Accordion = AccordionPrimitive.Root;
export const AccordionItem = AccordionPrimitive.Item;
export const AccordionTrigger = React.forwardRef(({ children, ...props }, ref) => (
  <AccordionPrimitive.Trigger ref={ref} {...props} className="w-full text-left py-2 px-4 font-semibold text-lg bg-transparent border-b border-[#222] focus:outline-none focus:ring-2 focus:ring-[#072559] transition-colors">
    {children}
  </AccordionPrimitive.Trigger>
));
export const AccordionContent = React.forwardRef(({ children, ...props }, ref) => (
  <AccordionPrimitive.Content ref={ref} {...props} className="py-2 px-4 text-[#e0e0e0]">
    {children}
  </AccordionPrimitive.Content>
));
