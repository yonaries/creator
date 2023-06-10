import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

type Props = {
  items: {
    triggers: string[];
    contents: React.ReactNode[];
  };
};

const TabBar = (props: Props) => {
  return (
    <Tabs
      defaultValue={props.items.triggers[0].toLowerCase().replace(/\s/g, "_")}
      className="w-[400px]"
    >
      <TabsList>
        {props.items.triggers.map((trigger, index) => {
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
      {props.items.contents.map((content, index) => {
        return (
          <TabsContent
            className="w-full"
            key={index}
            value={props.items.triggers[index]
              .toLowerCase()
              .replace(/\s/g, "_")}
          >
            {content}
          </TabsContent>
        );
      })}
    </Tabs>
  );
};

export default TabBar;
