"use client";

import React, { useEffect, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Props = {};

const colors = [
  "133, 100%, 38%",
  "270, 100%, 50%",
  "307, 100%, 50%",
  "339, 100%, 50%",
  "33, 100%, 50%",
  "196, 100%, 50%",
  "239, 100%, 50%",
  "177, 100%, 40%",
];

const hexColors: string[] = [
  "bg-switcher-1",
  "bg-switcher-2",
  "bg-switcher-3",
  "bg-switcher-4",
  "bg-switcher-5",
  "bg-switcher-6",
  "bg-switcher-7",
  "bg-switcher-8",
];

const ColorPicker = (props: Props) => {
  const [selectedColor, setSelectedColor] = useState<number>(0);

  useEffect(() => {
    function changeColor(index: number) {
      const root = document.querySelector(":root") as HTMLElement | null;
      const dark = document.querySelector(".root") as HTMLElement | null;
      root?.style.setProperty("--primary", colors[selectedColor]);
      dark?.style.setProperty("--primary", colors[selectedColor]);
      window.localStorage.setItem("color", colors[selectedColor]);
    }
    changeColor(selectedColor);
    return () => {};
  }, [selectedColor]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button>
          <Icons.palette className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Choose the color for your page</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <div className="grid grid-cols-4 gap-2">
          {hexColors.map((color, index) => (
            <DropdownMenuItem
              key={index}
              className={cn(
                "h-fit w-fit p-2",
                selectedColor === index && "bg-muted"
              )}
              onClick={() => setSelectedColor(index)}
            >
              <div className={cn("h-8 w-8 rounded-md", color)}></div>
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ColorPicker;
