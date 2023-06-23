import { Table } from "antd";
import SimpleContent from "./SimpleCon";

export default function MaterialsTable() {
  const dataSource = [
    {
      key: '1',
      name: 'Mithral',
      description: "No STR requirement. No stealth disadv. No light armor.",
    },
    {
      key: '2',
      name: 'Adamantine',
      description: "Any critical hit to you becomes a normal hit.",
    },
    {
      key: '3',
      name: 'Lesser',
      description: "-1 AC on armors. Prone to breaking.",
    },
    {
      key: '4',
      name: 'Frostforge',
      description: "+1 AC on armors, vulnerable to warmth. Weapons deal cold damage.",
    },
    {
      key: '5',
      name: 'Skyforge',
      description: "Removes any stealth disadvantage from armors, Grants +3 to hit on weapons.",
    },
    {
      key: '6',
      name: 'Demonic',
      description: "Armor and Weapons glow with a dark hue and are hungry for blood. Armor might damage the wearer, weapons might heal the owner as the damage die on attack.",
    },
    {
      key: '7',
      name: 'Hexed',
      description: "Armor cannot be damaged by normal attacks. Magic damage only. Weapons are always sharp.",
    },
    {
      key: '8',
      name: 'Phosite',
      description: "Armor cannot be damaged by normal and magical attacks. Weapons cut through armor ignoring enemy AC.",
    },
    {
      key: '9',
      name: 'Cursed',
      description: "The item belongs to a Warlock Patron. Consult with your DM.",
    },
    {
      key: '10',
      name: 'Blessed',
      description: "The item is an artifact. Consult with your DM.",
    },
  ];

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
  ];

  return (<section className="py-4">
  <SimpleContent
    contentProps={{
      title: "Material Variants",
      text: ["Your gear can only be infused once. Mithral & Adamantine can be used as is."]
    }}
  />
  <Table dataSource={dataSource} columns={columns} pagination={false}/>
</section>)
}