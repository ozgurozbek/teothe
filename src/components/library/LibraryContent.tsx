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
          text: ["SEO friendly text describing the massive list of libraries. This existing violates the design document but nothing to do there, we need it."]
        }} />
        <Divider />
        <Title level={2}>General</Title>
        <Row>
          <GetBook
            bookProps={{
              url: "library/what-are-these-clovers",
              author: "John",
              name: "What are these clovers?",
            }}
          />
          <GetBook
            bookProps={{
              url: "teothe.com",
              image: "https://picsum.photos/300/400",
              author: "Jane",
              name: "We are Pathetic, the Helpless in the eyes of the Divine",
            }}
          />
          <GetBook
            bookProps={{
              url: "teothe.com",
              image: "https://picsum.photos/300/400",
              author: "Margaret",
              name: "Literature review: Legend of W. Steram",
            }}
          />
          <GetBook
            bookProps={{
              url: "teothe.com",
              image: "https://picsum.photos/300/400",
              author: "Chris",
              name: "Divine Tales 1",
            }}
          />
          <GetBook
            bookProps={{
              url: "teothe.com",
              image: "https://picsum.photos/300/400",
              author: "CJ",
              name: "Summary On Ancients",
            }}
          />
          <GetBook
            bookProps={{
              url: "teothe.com",
              image: "https://picsum.photos/300/400",
              author:
                "Really long author name & someone else co-authoring it lol",
              name: "General Jet's Reform",
            }}
          />
          <GetBook
            bookProps={{
              url: "teothe.com",
              image: "https://picsum.photos/300/400",
              author: "Random",
              name: "Adventurer's Guide to Underdark Collection",
            }}
          />
          <GetBook
            bookProps={{
              url: "teothe.com",
              image: "https://picsum.photos/300/400",
              author: "Random",
              name: "Last Ancient Magic",
            }}
          />
          <GetBook
            bookProps={{
              url: "teothe.com",
              image: "https://picsum.photos/300/400",
              author: "Random",
              name: "Known Half-Ancients",
            }}
          />
          <GetBook
            bookProps={{
              url: "teothe.com",
              image: "https://picsum.photos/300/400",
              author: "Random",
              name: "Complex Cosmology",
            }}
          />
          <GetBook
            bookProps={{
              url: "teothe.com",
              image: "https://picsum.photos/300/400",
              author: "Random",
              name: "The Johken",
            }}
          />
          <GetBook
            bookProps={{
              url: "teothe.com",
              image: "https://picsum.photos/300/400",
              author: "Next one is blank author!",
              name: "Understanding Of Divine 1",
            }}
          />
          <GetBook
            bookProps={{
              url: "teothe.com",
              image: "https://picsum.photos/300/400",
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
              url: "teothe.com",
              image: "https://picsum.photos/300/400",
              name: "Fishermen Uprising",
            }}
          />
          <GetBook
            bookProps={{
              url: "teothe.com",
              image: "https://picsum.photos/300/400",
              name: "Mujina Army and the Serpents",
            }}
          />
          <GetBook
            bookProps={{
              url: "teothe.com",
              image: "https://picsum.photos/300/400",
              name: "Fuck, Marry, Kill",
            }}
          />
          <GetBook
            bookProps={{
              url: "teothe.com",
              image: "https://picsum.photos/300/400",
              name: "Clockwork Dreams",
            }}
          />
          <GetBook
            bookProps={{
              url: "teothe.com",
              image: "https://picsum.photos/300/400",
              name: "Assassination of Narra",
            }}
          />
          <GetBook
            bookProps={{
              url: "teothe.com",
              image: "https://picsum.photos/300/400",
              name: "Warrior's Guild & The Red Army",
            }}
          />
          <GetBook
            bookProps={{
              url: "teothe.com",
              image: "https://picsum.photos/300/400",
              name: "What is Shock? Collection",
            }}
          />
          <GetBook
            bookProps={{
              url: "teothe.com",
              image: "https://picsum.photos/300/400",
              name: "Poem on Akash",
            }}
          />
        </Row>
        <Divider />
        <Title level={2}>Fiction</Title>
        <Row>
          <GetBook
            bookProps={{
              url: "teothe.com",
              image: "https://picsum.photos/300/400",
              name: "HTTFBAPWDKTABBTATTKEBIRTDANAATIEWYANTLTMVCRN",
            }}
          />
          <GetBook
            bookProps={{
              url: "teothe.com",
              image: "https://picsum.photos/300/400",
              name: "Rise of Magnus",
            }}
          />
          <GetBook
            bookProps={{
              url: "teothe.com",
              image: "https://picsum.photos/300/400",
              name: "Akin and the Golden Statue",
            }}
          />
          <GetBook
            bookProps={{
              url: "teothe.com",
              image: "https://picsum.photos/300/400",
              name: "Legend of Rerartif",
            }}
          />
          <GetBook
            bookProps={{
              url: "teothe.com",
              image: "https://picsum.photos/300/400",
              name: "Song Of Catastrophe",
            }}
          />
        </Row>
        <Divider />
        <Title level={2}>Epipremnum</Title>
        <Row>
          <GetBook
            bookProps={{
              url: "teothe.com",
              image: "https://picsum.photos/300/400",
              name: "Epipremnum",
            }}
          />
          <GetBook
            bookProps={{
              url: "teothe.com",
              image: "https://picsum.photos/300/400",
              name: "Mirror of Erised",
            }}
          />
        </Row>
        <Divider />
        <Title level={2}>Thaum</Title>
        <Row>
          <GetBook
            bookProps={{
              url: "teothe.com",
              image: "https://picsum.photos/300/400",
              name: "Dufrene's Notebook",
            }}
          />
          <GetBook
            bookProps={{
              url: "teothe.com",
              image: "https://picsum.photos/300/400",
              name: "Jeremiah's Cookbook",
            }}
          />
        </Row>
        <Divider />
        <Title level={2}>Choll</Title>
        <Row>
          <GetBook
            bookProps={{
              url: "teothe.com",
              image: "https://picsum.photos/300/400",
              name: "My Study of Choll",
            }}
          />
        </Row>
      </Card>
    </section>
  );
}
