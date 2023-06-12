import { DataTable } from "@/components/data-table";
import { data } from "@/assets/data/supporters";
import { columns } from "./supporters-columns";
import { statuses } from "../data/supporters/data";

type Props = {};

const Supporters = (props: Props) => {
  return (
    <DataTable
      facetFilters={[
        {
          title: "Status",
          column: "status",
          options: statuses,
        },
      ]}
      columns={columns}
      data={data}
      filterColumnName="email"
      title="Supporters"
      caption="This is supporters list."
    />
  );
};

export default Supporters;