import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const tabbarVariant = cva("", {
  variants: {
    justify: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
    },
  },
  defaultVariants: {
    justify: "start",
  },
});

export interface Props
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof tabbarVariant> {
  items: {
    triggers: string[];
    contents: React.ReactNode[];
  };
}

const TabBar = React.forwardRef<HTMLDivElement, Props>(
  ({ items, justify, className, ...props }, ref) => (
    <Tabs
      ref={ref}
      defaultValue={items.triggers[0].toLowerCase().replace(/\s/g, "_")}
      className={cn(
        "flex w-full flex-col",
        tabbarVariant({ className, justify })
      )}
    >
      <TabsList className={cn("w-fit")}>
        {items.triggers.map((trigger, index) => {
          return (
            <TabsTrigger
              key={index}
              value={trigger.toLowerCase().replace(/\s/g, "_")}
            >
              {trigger}
            </TabsTrigger>
          );
        })}
      </TabsList>
      {items.contents.map((content, index) => {
        return (
          <TabsContent
            className="w-full"
            key={index}
            value={items.triggers[index].toLowerCase().replace(/\s/g, "_")}
          >
            {content}
          </TabsContent>
        );
      })}
    </Tabs>
  )
);

TabBar.displayName = "TabBar";

export default TabBar;
