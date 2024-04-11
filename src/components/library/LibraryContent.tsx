"use client";
import GetCrumbs from "@/components/NavigationCrumb";
import GetBook from "@/components/library/GetBook";
import { Typography, Card, Divider } from "antd";
import "App/books.css";
const { Title } = Typography;

/**
 * Uses github.io legacy D&D website to fetch books as pdfs, and pushes them to GetBook. Provides Title(antd) and text to categorize them.
 * @see GetBook
 * @generator - Fetches from the legacy website, github.io
 * @returns JSX elements for the Library page.
 */
export default function LibraryContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Library"} />
      <Card bordered={false} className="w-full h-full">
        <Title>Library</Title>
        <Title level={2}>General</Title>
        <GetBook
          bookProps={{
            url: "https://ozgurozbek.github.io/dnd/books/TheseClovers.pdf",
            name: "What are these clovers?",
          }}
        />
        <GetBook
          bookProps={{
            url: "https://ozgurozbek.github.io/dnd/books/SeraBook.pdf",
            name: "We are Pathetic, the Helpless in the eyes of the Divine",
          }}
        />
        <GetBook
          bookProps={{
            url: "https://ozgurozbek.github.io/dnd/books/SteramBook.pdf",
            name: "Literature review: Legend of W. Steram",
          }}
        />
        <GetBook
          bookProps={{
            url: "https://ozgurozbek.github.io/dnd/books/DivineTales1.pdf",
            name: "Divine Tales 1",
          }}
        />
        <GetBook
          bookProps={{
            url: "https://ozgurozbek.github.io/dnd/books/AncientSummary.pdf",
            name: "Summary On Ancients",
          }}
        />
        <GetBook
          bookProps={{
            url: "https://ozgurozbek.github.io/dnd/books/Reform.pdf",
            name: "General Jet's Reform",
          }}
        />
        <GetBook
          bookProps={{
            url: "https://ozgurozbek.github.io/dnd/books/UnderdarkGuide.pdf",
            name: "Adventurer's Guide to Underdark Collection",
          }}
        />
        <GetBook
          bookProps={{
            url: "https://ozgurozbek.github.io/dnd/books/LastAncientMagic.pdf",
            name: "Last Ancient Magic",
          }}
        />
        <GetBook
          bookProps={{
            url: "https://ozgurozbek.github.io/dnd/books/KnownHalfAncients.pdf",
            name: "Known Half-Ancients",
          }}
        />
        <GetBook
          bookProps={{
            url: "https://ozgurozbek.github.io/dnd/books/ComplexCosmology.pdf",
            name: "Complex Cosmology",
          }}
        />
        <GetBook
          bookProps={{
            url: "https://ozgurozbek.github.io/dnd/books/Johken.pdf",
            name: "The Johken",
          }}
        />
        <GetBook
          bookProps={{
            url: "https://ozgurozbek.github.io/dnd/books/UnderstandingOfDivine1.pdf",
            name: "Understanding Of Divine 1",
          }}
        />
        <GetBook
          bookProps={{
            url: "https://ozgurozbek.github.io/dnd/books/DatedMythOfCreation.pdf",
            name: "Dated; Myth of Creation",
          }}
        />
        <Divider />
        <Title level={2}>Teothe</Title>
        <GetBook
          bookProps={{
            url: "https://ozgurozbek.github.io/dnd/books/FishermenUprising.pdf",
            name: "Fishermen Uprising",
          }}
        />
        <GetBook
          bookProps={{
            url: "https://ozgurozbek.github.io/dnd/books/MujinaArmy.pdf",
            name: "Mujina Army and the Serpents",
          }}
        />
        <GetBook
          bookProps={{
            url: "https://ozgurozbek.github.io/dnd/books/FMK.pdf",
            name: "Fuck, Marry, Kill",
          }}
        />
        <GetBook
          bookProps={{
            url: "https://ozgurozbek.github.io/dnd/books/ClockworkDreams.pdf",
            name: "Clockwork Dreams",
          }}
        />
        <GetBook
          bookProps={{
            url: "https://ozgurozbek.github.io/dnd/books/AssassinationNarra.pdf",
            name: "Assassination of Narra",
          }}
        />
        <GetBook
          bookProps={{
            url: "https://ozgurozbek.github.io/dnd/books/WarriorsGuildRedArmy.pdf",
            name: "Warrior's Guild & The Red Army",
          }}
        />
        <GetBook
          bookProps={{
            url: "https://ozgurozbek.github.io/dnd/books/ShockCollection.pdf",
            name: "What is Shock? Collection",
          }}
        />
        <GetBook
          bookProps={{
            url: "https://ozgurozbek.github.io/dnd/books/AkashPoem.pdf",
            name: "Poem on Akash",
          }}
        />
        <Divider />
        <Title level={2}>Fiction</Title>
        <GetBook
          bookProps={{
            url: "https://ozgurozbek.github.io/dnd/books/HTTFBAPWDKTABBTATTKEBIRTDANAATIEWYANTLTMVCRN.pdf",
            name: "HTTFBAPWDKTABBTATTKEBIRTDANAATIEWYANTLTMVCRN",
          }}
        />
        <GetBook
          bookProps={{
            url: "https://ozgurozbek.github.io/dnd/books/Magnus.pdf",
            name: "Rise of Magnus",
          }}
        />
        <GetBook
          bookProps={{
            url: "https://ozgurozbek.github.io/dnd/books/AkinGoldStatue.pdf",
            name: "Akin and the Golden Statue",
          }}
        />
        <GetBook
          bookProps={{
            url: "https://ozgurozbek.github.io/dnd/books/LegendOfRerartif.pdf",
            name: "Legend of Rerartif",
          }}
        />
        <GetBook
          bookProps={{
            url: "https://ozgurozbek.github.io/dnd/books/SongOfCatastrophe.pdf",
            name: "Song Of Catastrophe",
          }}
        />
        <Divider />
        <Title level={2}>Epipremnum</Title>
        <GetBook
          bookProps={{
            url: "https://ozgurozbek.github.io/dnd/books/Epipremnum.pdf",
            name: "Epipremnum",
          }}
        />
        <GetBook
          bookProps={{
            url: "https://ozgurozbek.github.io/dnd/books/MirrorOfErised.pdf",
            name: "Mirror of Erised",
          }}
        />
        <Divider />
        <Title level={2}>Thaum</Title>
        <GetBook
          bookProps={{
            url: "https://ozgurozbek.github.io/dnd/books/DufreneNotes.pdf",
            name: "Dufrene's Notebook",
          }}
        />
        <GetBook
          bookProps={{
            url: "https://ozgurozbek.github.io/dnd/books/JeremiahRecipes.pdf",
            name: "Jeremiah's Cookbook",
          }}
        />
        <Divider />
        <Title level={2}>Choll</Title>
        <GetBook
          bookProps={{
            url: "https://ozgurozbek.github.io/dnd/books/Choll.pdf",
            name: "My Study of Choll",
          }}
        />
      </Card>
    </section>
  );
}
