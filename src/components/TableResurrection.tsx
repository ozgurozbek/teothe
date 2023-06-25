import { Table } from "antd";
import SimpleContent from "Comp/SimpleCon";

export default function ResurrectionTable() {
  const dataSource = [
    {
      key: "1",
      name: "Expenditure",
      material: "10 HP Vouch (Max 20, DC-10 each)",
      class: "Bard, Cleric, Paladin",
      timelimit: "3 Hours",
      bodyrestoration: "❌",
    },
    {
      key: "2",
      name: "Revivify",
      material: "Diamond worth 300 gp",
      class: "Cleric, Paladin, Artificer",
      timelimit: "1 Minute",
      bodyrestoration: "❌",
    },
    {
      key: "3",
      name: "Raise Dead",
      material: "Diamond worth 500 gp",
      class: "Bard, Cleric, Paladin",
      timelimit: "10 days",
      bodyrestoration: "❌",
    },
    {
      key: "4",
      name: "Reincarnate",
      material: "Rare oils worth 1000 gp",
      class: "Druid",
      timelimit: "10 days",
      bodyrestoration: "✔️, Roll new race",
    },
    {
      key: "5",
      name: "Resurrection",
      material: "Diamond worth 1000 gp",
      class: "Bard, Cleric",
      timelimit: "100 years",
      bodyrestoration: "✔️, Except magical",
    },
    {
      key: "6",
      name: "True Resurrection",
      material: "Holy water & Diamond worth 25000 gp",
      class: "Cleric, Druid",
      timelimit: "200 years",
      bodyrestoration: "✔️",
    },
    {
      key: "7",
      name: "Existance",
      material: "Diamond worth 25000 gp",
      class: "Bard",
      timelimit: "200 years",
      bodyrestoration: "✔️, Roll new race",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Material",
      dataIndex: "material",
      key: "material",
    },
    {
      title: "Class",
      dataIndex: "class",
      key: "class",
    },
    {
      title: "Time Limit",
      dataIndex: "timelimit",
      key: "timelimit",
    },
    {
      title: "Body Restoration",
      dataIndex: "bodyrestoration",
      key: "bodyrestoration",
    },
  ];

  return (
    <section id="resurrection" className="py-4">
      <SimpleContent
        contentProps={{
          title: "Resurrection",
          text: [
            "RAW resurrection spells such as 'Revivify' are not allowed besides this table. There are penalties for consecutive resurrections, ask DM. Materials are consumed by the spell. Keep in mind you'll need a body, or a part of it in most cases.",
          ],
        }}
      />
      <Table dataSource={dataSource} columns={columns} pagination={false} />
    </section>
  );
}
