import { DataTable } from "@/components/data-table";
import { data } from "@/assets/data/supporters";
import { columns } from "./supporters-columns";

type Props = {};

const Supporters = (props: Props) => {
  return (
    <DataTable
      columns={columns}
      data={data}
      filterColumnName="email"
      title="Supporters"
      caption="This is supporters list."
    />
  );
};

export default Supporters;
