import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

type Props = {};

const DashboardMoreMenu = (props: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button>
          <Icons.moreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className="h-8">Edit Page</DropdownMenuItem>
        <DropdownMenuItem className="h-8">My Posts</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DashboardMoreMenu;
