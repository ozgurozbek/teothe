import { useState } from "react";
import { Button, Card, Space } from "antd";
import GetCrumbs from "Comp/NavigationCrumb";
import SimpleContent from "Comp/SimpleCon";

export default function StateTestPage() {
  // nonsense
  const colors = [
    "text-red-600",
    "text-blue-600",
    "text-green-600",
    "text-yellow-600",
  ];
  // state variables
  const [itemIndex, setItemIndex] = useState(0);
  const [color, setColor] = useState("text-red-600");
  const [visibi, setVisibi] = useState(true);
  // set actual state
  function handleClick() {
    setItemIndex(itemIndex + 1);
    console.log(colors[itemIndex % 4]);
    setColor(colors[itemIndex % 4]);
  }
  function handleVis() {
    setVisibi(!visibi);
  }
  // get state
  // set state in comp
  return (
    <section>
      <GetCrumbs path={"Test,State"} />
      <Card bordered={false} className="w-full">
        <Space>
          <Button onClick={handleVis}>Show/Hide</Button>
          <Button onClick={handleClick}>Increment</Button>
        </Space>
        {visibi && (
          <div className={color}>
            <p>{itemIndex}</p>
            <SimpleContent
              contentProps={{
                title: "Greater Divines",
                text: [
                  "Worshipped by about a million of people. They know what is going to happen a week ahead, regardless. They can create artifacts. So strong, you cant really challenge them. In most cases, worshippers don't even get to see them. Avatars of these gods are carrying a fraction of their power. Up to ten avatars can be created. Destroying one doesn't even damage since they can summon another one. An avatar is as strong as a lesser deity. For these reasons, lower ranked gods join to greater ones.",
                  "Burası bir de for loop olacak aman aman. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio praesentium atque explicabo eligendi hic vero dolorem qui nisi quod corrupti dignissimos, sint, totam commodi alias minima culpa odio. Amet, nam!",
                ],
              }}
            />
          </div>
        )}
      </Card>
    </section>
  );
}
