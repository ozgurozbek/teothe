import { Card } from "antd";
import Deity from "../components/Deities";
import GetCrumbs from "../components/NavigationCrumb";
import SimpleContent from "../components/SimpleCon";

export default function DeitiesPage() {
    return (
        <section>
            <GetCrumbs
                path={"Pages,Deities"}
            />
            <Card bordered={false} className='w-full'>
                <SimpleContent
                    contentProps={{
                        title: "Greater Divines",
                        text: [
                            "Worshipped by about a million of people. They know what is going to happen a week ahead, regardless. They can create artifacts. So strong, you cant really challenge them. In most cases, worshippers don't even get to see them. Avatars of these gods are carrying a fraction of their power. Up to ten avatars can be created. Destroying one doesn't even damage since they can summon another one. An avatar is as strong as a lesser deity. For these reasons, lower ranked gods join to greater ones.",
                            "Burası bir de for loop olacak aman aman. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio praesentium atque explicabo eligendi hic vero dolorem qui nisi quod corrupti dignissimos, sint, totam commodi alias minima culpa odio. Amet, nam!"
                        ]
                    }}
                />
                <Deity
                    imageSrc={'https://ozgurozbek.github.io/dnd/min_images/Jenelius_Londste.png'}
                    descriptionProps={{
                        title: 'Jenelius Londste',
                        body: 'Demigoddess of devotion, usually associated with fanatic determination.',
                        domain: 'Life, Tempest',
                    }}
                />

                <Deity
                    imageSrc={'https://ozgurozbek.github.io/dnd/min_images/Lcaoc.jpg'}
                    descriptionProps={{
                        title: 'Lcaoc',
                        body: 'God of wit, right side of Mceeju. Undisputed lord of the Outer Planes. Even though people does not pray to him, any being that has an order or a way of thinking and functioning give power to Lcaoc. Also mentioned as the God of civilization. He promotes united work towards a single work and sets in place laws to keep his followers undistracted from ever moving forward.',
                        domain: 'Knowledge',
                    }}
                />

                <Deity
                    imageSrc={'https://ozgurozbek.github.io/dnd/min_images/Veri.png'}
                    descriptionProps={{
                        title: 'Veri',
                        body: 'Goddess of life, sister responsible from Iz. The most widespread worshipped deity. Her light heals the sick and grows the crops. She is a beacon of hope and freedom. Her servants spread charity and goodwill while hunting the undead. Her being responsible of the plane Iz, is the reason she is an overdeity.',
                        domain: 'Life, Tempest',
                    }}
                />

                <Deity
                    imageSrc={'https://ozgurozbek.github.io/dnd/min_images/Tharizdun.png'}
                    descriptionProps={{
                        title: 'Tharizdun',
                        body: 'Crazed god of madness. Seeks to undo all there is and ever will be.',
                        domain: 'Fundamental',
                    }}
                />
            </Card>
        </section>
    )
}