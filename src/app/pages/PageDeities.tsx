import Deity from "../components/Deities";

export default function DeitiesPage() {
    return (
        <section>
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

        </section>
    )
}