"use client";

import TabBar from "@/components/tabbar";
import { Separator } from "@/components/ui/separator";
import Benefits from "./components/benefits";
import BlockedUsers from "./components/blocked-users";
import Donations from "./components/donations";
import ExitSurvey from "./components/exit-survey";
import Supporters from "./components/supporters";
import { DataTable } from "@/components/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/components/data-table-column-header";

type Props = {};

const data = [
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728asded52f",
    amount: 101,
    status: "paid",
    email: "am@example.com",
  },
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728asded52f",
    amount: 101,
    status: "paid",
    email: "am@example.com",
  },
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728asded52f",
    amount: 101,
    status: "paid",
    email: "am@example.com",
  },
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728asded52f",
    amount: 101,
    status: "paid",
    email: "am@example.com",
  },
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728asded52f",
    amount: 101,
    status: "paid",
    email: "am@example.com",
  },
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
];

const columns: ColumnDef<{
  id: string;
  status: string;
  email: string;
  amount: number;
}>[] = [
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
  },
  {
    accessorKey: "amount",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Amount" />
    ),
  },
];

const statusOptions = [
  {
    value: "paid",
    label: "paid",
  },
  {
    value: "pending",
    label: "pending",
  },
];

const Supports = (props: Props) => {
  const tabBarItems = {
    triggers: [
      "Supporters",
      "Donations",
      "Benefits",
      "Exit Survey",
      "Blocked Users",
    ],
    contents: [
      <Supporters key={Date.now()} />,
      <Donations key={Date.now()} />,
      <Benefits key={Date.now()} />,
      <ExitSurvey key={Date.now()} />,
      <BlockedUsers key={Date.now()} />,
    ],
  };
  return (
    <div>
      <Separator className="my-3" />
      <TabBar items={tabBarItems} />

      <DataTable
        facetFilters={[
          {
            title: "Status",
            column: "status",
            options: statusOptions,
          },
        ]}
        columns={columns}
        data={data}
        filterColumnName="email"
        title="Supporters"
        caption="This is supporters list."
      />
    </div>
  );
};

export default Supports;
