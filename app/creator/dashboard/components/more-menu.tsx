import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/app/context/auth-context";
import Link from "next/link";

type Props = {};

const DashboardMoreMenu = ({}: Props) => {
  const { currentUserPage } = useAuth();

  if (!currentUserPage) return null;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button>
          <Icons.moreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <Link href={`/creator/page/edit/${currentUserPage.id}`}>
          <DropdownMenuItem className="h-8">Edit Page</DropdownMenuItem>
          <DropdownMenuItem className="h-8">My Posts</DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DashboardMoreMenu;
