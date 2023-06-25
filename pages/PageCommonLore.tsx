import { Card } from "antd";
import GetCrumbs from "@/components/NavigationCrumb";
import SimpleContent from "@/components/SimpleCon";

export default function CommonLorePage() {
    return (
        <section>
            <GetCrumbs
                path={"Pages,Common Lore"}
            />
            <Card bordered={false} className='w-full'>
                <SimpleContent
                    contentProps={{
                        image: {
                            src: 'https://ozgurozbek.github.io/dnd/Wheel3K.jpg',
                            alt: 'Planes Information Image'
                        },
                        text: [
                            "Beastlands: Rangers dream of it on a good night. This is pure wilderness of any environment with no rules past nature.",
                            "Arboria: Governed by pure emotion, rage and joy are everpresent.",
                            "Limbo: Most dangerous plane birthing the essence of chaos. Only strong minds can last more than a minute, and elements are randomly shuffled.",
                            "Pandemonium: Plane of madness, screaming winds tearing through tunnels exist to torment poor souls.",
                            "Abyss: Houses every nightmare imaginable and consists of endless layers with unique horrors. Some say the demon kings of the abyss occasionally venture to underdark to rampage.]",
                        ],
                        title: 'Overseer Planes These are located in the Astral Sea.'
                    }}
                />
                <SimpleContent
                    contentProps={{
                        text: ["Carseri: Perfect prison. Six layers and uniquely cruel to its inhabitants."],
                        title: "Carseri"
                    }}
                />
            </Card>
        </section>
    )
}