"use client";
import GetCrumbs from "@/components/NavigationCrumb";
import GetBook from "@/components/library/GetBook";
import { Typography, Card, Divider, Row } from "antd";
import SimpleContent from "../SimpleCon";
const { Title } = Typography;

/**
 * Uses github.io legacy D&D website to fetch books as pdfs, and pushes them to GetBook. Provides Title(antd) and text to categorize them.
 * Also imports booksjs and pdfjs
 * @see GetBook
 * @generator - Fetches from the legacy website, github.io
 * @returns JSX elements for the Library page.
 */
export default function LibraryContent() {
  return (
    <section>
      <GetCrumbs path={"Teothe,Library"} />
      <Card bordered={false} className="w-full h-full">
        <SimpleContent contentProps={{
          title: "Library",
          text: ["Discover the vast library of Teothe, the central material plane in a rich and ancient cosmology. Filled with books, stories, and sacred texts, this archive preserves the entire spectrum of Teothe Lore, spanning realms, planes, and divine histories. From the origins of creation to forgotten legends, the knowledge of the cosmos begins here."]
        }} />
        <Divider />
        <Title level={2}>General</Title>
        <Row>
          <GetBook
            bookProps={{
              url: "library/what-are-these-clovers",
              image: "/Books/what-are-these-clovers.webp",
              author: "Idea by Sera Krautek",
              name: "What are these clovers?",
            }}
          />
          <GetBook
            bookProps={{
              url: "library/we-are-pathetic-the-helpless-in-the-eyes-of-the-divine",
              image: "/Books/we-are-pathetic.png",
              author: "Sera Krautek Adapted from Dwarvish",
              name: "We are Pathetic, the Helpless in the eyes of the Divine",
            }}
          />
          <GetBook
            bookProps={{
              url: "library/legend-of-w-steram",
              image: "/Books/legend-of-w-steram.jpeg",
              author: "From Jig Sunny's Dictation",
              name: "Literature review: Legend of W. Steram",
            }}
          />
          <GetBook
            bookProps={{
              url: "library/divine-tales-1",
              image: "/Books/divine-tales-1.webp",
              author: "Unknown; Altered and Adapted",
              name: "Divine Tales 1",
            }}
          />
          <GetBook
            bookProps={{
              url: "library/summary-on-ancients",
              image: "/Books/summary-on-ancients.webp",
              author: "",
              name: "Summary On Ancients",
            }}
          />
          <GetBook
            bookProps={{
              url: "library/general-jets-reform",
              image: "/Books/general-jets-reform.png",
              author: "Arcanum Alliance Archives",
              name: "General Jet's Reform",
            }}
          />
          <GetBook
            bookProps={{
              url: "library/adventurers-guide-to-underdark-collection",
              image: "/Books/adventurers-guide-to-underdark-collection.webp",
              author: "Unknown; A Collection of 4 Iterations",
              name: "Adventurer's Guide to Underdark Collection",
            }}
          />
          <GetBook
            bookProps={{
              url: "library/last-ancient-magic",
              image: "/Books/last-ancient-magic.webp",
              author: "Unknown; Fiction",
              name: "Last Ancient Magic",
            }}
          />
          <GetBook
            bookProps={{
              url: "library/known-half-ancients",
              image: "",
              author: "A Collection of Tomes, Co-Authored by Yenn",
              name: "Known Half-Ancients",
            }}
          />
          <GetBook
            bookProps={{
              url: "library/complex-cosmology",
              image: "",
              author: "",
              name: "Complex Cosmology",
            }}
          />
          <GetBook
            bookProps={{
              url: "library/johken",
              image: "/Books/johken.jpg",
              author: "",
              name: "The Johken",
            }}
          />
          <GetBook
            bookProps={{
              url: "library/understanding-of-divine",
              image: "",
              author: "",
              name: "Understanding Of Divine 1",
            }}
          />
          <GetBook
            bookProps={{
              url: "library/dated-myth-of-creation",
              image: "",
              author: "",
              name: "Dated; Myth of Creation",
            }}
          />
        </Row>
        <Divider />
        <Title level={2}>Teothe</Title>
        <Row>
          <GetBook
            bookProps={{
              url: "library/fisherman-uprising",
              image: "",
              author: "Co-Authored by Koffe",
              name: "Fishermen Uprising",
            }}
          />
          <GetBook
            bookProps={{
              url: "library/mujina-army-and-the-serpents",
              image: "",
              author: "Co-Authored by Koffe",
              name: "Mujina Army & The Serpents",
            }}
          />
          <GetBook
            bookProps={{
              url: "library/fuck-marry-kill",
              image: "",
              author: "Co-Authored by Quebec",
              name: "Fuck; Marry; Kill",
            }}
          />
          <GetBook
            bookProps={{
              url: "library/clockwork-dreams",
              image: "",
              author: "Fiction based on Sera Krautek's Manifesto",
              name: "Clockwork Dreams",
            }}
          />
          <GetBook
            bookProps={{
              url: "library/assassination-of-narra",
              image: "",
              author: "Co-Authored by Mermaid",
              name: "Assassination of Narra",
            }}
          />
          <GetBook
            bookProps={{
              url: "library/warriors-guild-and-the-red-army",
              image: "",
              author: "Co-Authored by Gregor",
              name: "Warrior's Guild & The Red Army",
            }}
          />
          <GetBook
            bookProps={{
              url: "library/what-is-shock-collection",
              image: "",
              author: "By Patrick Goldgrain; An Unfortunate Propaganda Co-Authored by Sera & Isaac",
              name: "What is Shock? Collection",
            }}
          />
          <GetBook
            bookProps={{
              url: "library/poem-on-akash",
              image: "",
              author: "",
              name: "Poem on Akash",
            }}
          />
        </Row>
        <Divider />
        <Title level={2}>Fiction</Title>
        <Row>
          <GetBook
            bookProps={{
              url: "library/HTTFBAPWDKTABBTATTKEBIRTDANAATIEWYANTLTMVCRN",
              image: "",
              author: "Authored by Batu",
              name: "HTTFBAPWDKTABBTATTKEBIRTDANAATIEWYANTLTMVCRN",
            }}
          />
          <GetBook
            bookProps={{
              url: "library/rise-of-magnus",
              image: "",
              author: "Unknown, Fiction",
              name: "Rise of Magnus",
            }}
          />
          <GetBook
            bookProps={{
              url: "library/akin-and-the-gold-statue",
              image: "",
              author: "Unknown; In Malphas' Memory",
              name: "Akin and the Golden Statue",
            }}
          />
          <GetBook
            bookProps={{
              url: "library/legend-of-rerartif",
              image: "",
              author: "Co-Authored by Sera the Pope",
              name: "Legend of Rerartif",
            }}
          />
          <GetBook
            bookProps={{
              url: "library/song-of-catastrophe",
              image: "",
              author: "",
              name: "Song Of Catastrophe",
            }}
          />
        </Row>
        <Divider />
        <Title level={2}>Epipremnum</Title>
        <Row>
          <GetBook
            bookProps={{
              url: "library/epipremnum",
              image: "/Books/epipremnum.jpg",
              author: "Academica Epipremnum Authoring Club",
              name: "Epipremnum",
            }}
          />
          <GetBook
            bookProps={{
              url: "library/mirror-of-erised",
              image: "/Books/mirror-of-erised.jpg",
              author: "Academica Epipremnum Authoring Club; Fiction",
              name: "Mirror of Erised",
            }}
          />
        </Row>
        <Divider />
        <Title level={2}>Thaum</Title>
        <Row>
          <GetBook
            bookProps={{
              url: "library/dufrene-s-notes",
              image: "/Books/dufrene-s-notes.jpg",
              author: "Sonny Dufrene",
              name: "Dufrene's Notebook",
            }}
          />
          <GetBook
            bookProps={{
              url: "library/jeremiahs-cookbook",
              image: "/Books/jeremiahs-cookbook.png",
              author: "Jeremiah Wuxia",
              name: "Jeremiah's Cookbook",
            }}
          />
        </Row>
        <Divider />
        <Title level={2}>Choll</Title>
        <Row>
          <GetBook
            bookProps={{
              url: "library/my-study-of-choll",
              image: "/Books/my-study-of-choll.png",
              author: "From Anelin Elimare's Dictation",
              name: "My Study of Choll",
            }}
          />
        </Row>
      </Card>
    </section>
  );
}
