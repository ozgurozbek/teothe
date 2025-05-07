import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

// Define a mapping of book names to their corresponding components
const booksComponents: Record<string, ComponentType<{}>> = {
  "what-are-these-clovers": dynamic(() => import('@/components/library/books/what-are-these-clovers')),
  "we-are-pathetic-the-helpless-in-the-eyes-of-the-divine": dynamic(() => import('@/components/library/books/we-are-pathetic-the-helpless-in-the-eyes-of-the-divine')),
  "legend-of-w-steram": dynamic(() => import('@/components/library/books/legend-of-w-steram')),
  "divine-tales-1": dynamic(() => import('@/components/library/books/divine-tales-1')),
  "dufrene-s-notes": dynamic(() => import('@/components/library/books/dufrene-s-notes')),
  "adventurers-guide-to-underdark-collection": dynamic(() => import('@/components/library/books/adventurers-guide-to-underdark-collection')),
  "akin-and-the-gold-statue": dynamic(() => import('@/components/library/books/akin-and-the-gold-statue')),
  "assassination-of-narra": dynamic(() => import('@/components/library/books/assassination-of-narra')),
  "clockwork-dreams": dynamic(() => import('@/components/library/books/clockwork-dreams')),
  "complex-cosmology": dynamic(() => import('@/components/library/books/complex-cosmology')),
  "dated-myth-of-creation": dynamic(() => import('@/components/library/books/dated-myth-of-creation')),
  "fisherman-uprising": dynamic(() => import('@/components/library/books/fisherman-uprising')),
  "fuck-marry-kill": dynamic(() => import('@/components/library/books/fuck-marry-kill')),
  "general-jets-reform": dynamic(() => import('@/components/library/books/general-jets-reform')),
  "HTTFBAPWDKTABBTATTKEBIRTDANAATIEWYANTLTMVCRN": dynamic(() => import('@/components/library/books/HTTFBAPWDKTABBTATTKEBIRTDANAATIEWYANTLTMVCRN')),
  "jeremiahs-cookbook": dynamic(() => import('@/components/library/books/jeremiahs-cookbook')),
  "johken": dynamic(() => import('@/components/library/books/johken')),
  "known-half-ancients": dynamic(() => import('@/components/library/books/known-half-ancients')),
  "last-ancient-magic": dynamic(() => import('@/components/library/books/last-ancient-magic')),
  "legend-of-rerartif": dynamic(() => import('@/components/library/books/legend-of-rerartif')),
  "mirror-of-erised": dynamic(() => import('@/components/library/books/mirror-of-erised')),
  "mujina-army-and-the-serpents": dynamic(() => import('@/components/library/books/mujina-army-and-the-serpents')),
  "my-study-of-choll": dynamic(() => import('@/components/library/books/my-study-of-choll')),
  "poem-on-akash": dynamic(() => import('@/components/library/books/poem-on-akash')),
  "rise-of-magnus": dynamic(() => import('@/components/library/books/rise-of-magnus')),
  "song-of-catastrophe": dynamic(() => import('@/components/library/books/song-of-catastrophe')),
  "summary-on-ancients": dynamic(() => import('@/components/library/books/summary-on-ancients')),
  "understanding-of-divine": dynamic(() => import('@/components/library/books/understanding-of-divine')),
  "warriors-guild-and-the-red-army": dynamic(() => import('@/components/library/books/warriors-guild-and-the-red-army')),
  "what-is-shock-collection": dynamic(() => import('@/components/library/books/what-is-shock-collection')),
  "epipremnum": dynamic(() => import('@/components/library/books/epipremnum')),
  // Add additional book components here
};

// The main books page component
const BooksPage = ({ params }: { params: { book: string } }) => {
  const { book } = params; // Extract name from params
  const BooksContent = booksComponents[book] || (() => <div>Book not found.</div>); // Fallback if the books doesn't exist

  return <BooksContent />;
};

// Function to dynamically set the metadata based on book name
export const generateMetadata = async ({ params }: { params: { book: string } }): Promise<Metadata> => {
  const metadata: Record<string, Metadata> = {
    "what-are-these-clovers": {
      title: "What Are These Clovers",
      description: "A book detailing the odd clovers making or ruining the day of adventurers.",
    },
    "we-are-pathetic-the-helpless-in-the-eyes-of-the-divine": {
      title: "We Are Pathetic, The Helpless in the Eyes of The Divine",
      description: "This book explores the human condition, our relationship with divinity and authority, and advocates for communal sharing, mutual aid, and equality as a path to fulfillment and societal harmony.",
    },
    "legend-of-w-steram": {
      title: "Legend of W. Steram",
      description: "This book critiques the legend of Steram, analyzing his heroic journey to seal ancient magical gates while exploring Teothe, themes of flawed heroism, destiny, and the cultural significance of myth in shaping mortal and immortal narratives.",
    },
    "divine-tales-1": {
      title: "Divine Tales 1",
      description: "A collection of tomes detailing the stories of certain divinity.",
    },
    "dufrene-s-notes": {
      title: "Dufrene's Notes",
      description: "An adventure journal of Sonny Dufrene and his company.",
    },
    "adventurers-guide-to-underdark-collection": {
      title: "Adventurer's Guide to the Underdark Collection",
      description: "A comprehensive guide exploring the mysteries and dangers of the Underdark."
    },
    "akin-and-the-gold-statue": {
      title: "Akin and the Gold Statue",
      description: "The sad tale of a hero's quest that goes wrong."
    },
    "assassination-of-narra": {
      title: "The Assassination of Narra",
      description: "A gripping mystery surrounding the untimely death of Narra, leading cause of the Mage's Crisis."
    },
    "clockwork-dreams": {
      title: "Clockwork Dreams",
      description: "In a world where machines are a myth, Isaac dares to dream of innovation."
    },
    "complex-cosmology": {
      title: "Complex Cosmology",
      description: "An exploration of the vast and intricate theories that govern the universe's existence."
    },
    "dated-myth-of-creation": {
      title: "The Dated Myth of Creation",
      description: "A collection of ancient myths that offer different perspectives on the origins of the universe."
    },
    "fisherman-uprising": {
      title: "Fisherman Uprising",
      description: "A rebellion at sea that challenges the world's greatest empire."
    },
    "fuck-marry-kill": {
      title: "Fuck, Marry, Kill",
      description: "Bann's take on this satirical question."
    },
    "general-jets-reform": {
      title: "General Jet's Reform",
      description: "A military leader's reform that brought an end to an era."
    },
    "HTTFBAPWDKTABBTATTKEBIRTDANAATIEWYANTLTMVCRN": {
      title: "HTTFBAPWDKTABBTATTKEBIRTDANAATIEWYANTLTMVCRN",
      description: "Just don't teleport, I guess?"
    },
    "jeremiahs-cookbook": {
      title: "Jeremiah's Cookbook",
      description: "A cult collection of recipes and the flavors of Thaum."
    },
    "johken": {
      title: "Johken",
      description: "Tales of the ones that came before."
    },
    "known-half-ancients": {
      title: "Known Half-Ancients",
      description: "A detailed study of the descendants of the Ancients, their history, and their struggles to find their place in a world that no longer remembers their power."
    },
    "last-ancient-magic": {
      title: "The Last Ancient Magic",
      description: "The story of a young half-Ancient’s quest to uncover the forgotten secrets of immortality and the magic of her ancestors."
    },
    "legend-of-rerartif": {
      title: "Legend of Rerartif",
      description: "An epic about a sculptor, a forgotten evil from the past."
    },
    "mirror-of-erised": {
      title: "Mirror of Erised",
      description: "An adventure of Epipremnum's students that lead to discovery, but at what cost?"
    },
    "mujina-army-and-the-serpents": {
      title: "Mujina Army and Serpents",
      description: "History of Mujina Army, and the horror that is in Dyatlov Pass."
    },
    "my-study-of-choll": {
      title: "My Study of Choll",
      description: "A deep dive into Choll."
    },
    "poem-on-akash": {
      title: "Poem on Akash",
      description: "Akash, long lost, faces of the brave men of Daon tell a tale."
    },
    "rise-of-magnus": {
      title: "Rise of Magnus",
      description: "The tale of Leo and Epipremnum."
    },
    "song-of-catastrophe": {
      title: "Song of Catastrophe",
      description: "A haunting melody that foretells a coming disaster."
    },
    "summary-on-ancients": {
      title: "Summary on Ancients",
      description: "An in-depth summary of the ancient civilization, its downfall, and its legacy."
    },
    "understanding-of-divine": {
      title: "Understanding of the Divine",
      description: "A philosophical exploration of the divine forces that shape the world."
    },
    "warriors-guild-and-the-red-army": {
      title: "Warriors' Guild and the Red Army",
      description: "A conflict between a group of skilled warriors and a fierce military force, each with its own agenda."
    },
    "what-is-shock-collection": {
      title: "What Is Shock? Collection",
      description: "A collection of short stories examining the strange effects of Shock."
    },
    "epipremnum": {
      title: "Epipremnum",
      description: "Dive into the great magic school: Academica Epipremnum!"
    }
    // Add metadata for other books as needed
  };

  // Return the metadata for the current book or fallback if not found
  return metadata[params.book] || { title: "Book Not Found", description: "Stumbled upon a dusty corner of the library to find nothing..." };
};

// This function generates static paths at build time
export const generateStaticParams = async () => {
  const booksList = ['what-are-these-clovers','we-are-pathetic-the-helpless-in-the-eyes-of-the-divine','legend-of-w-steram','divine-tales-1','dufrene-s-notes',
    'adventurers-guide-to-underdark-collection','akin-and-the-gold-statue','assassination-of-narra','clockwork-dreams','complex-cosmology',
    'dated-myth-of-creation','fisherman-uprising','fuck-marry-kill','general-jets-reform','HTTFBAPWDKTABBTATTKEBIRTDANAATIEWYANTLTMVCRN','jeremiahs-cookbook',
    'johken','known-half-ancients','last-ancient-magic','legend-of-rerartif','mirror-of-erised','mujina-army-and-the-serpents','my-study-of-choll','poem-on-akash','rise-of-magnus',
    'song-of-catastrophe','summary-on-ancients','understanding-of-divine','warriors-guild-and-the-red-army','what-is-shock-collection','epipremnum'
  ]; // Add all dynamic book names here

  return booksList.map(book => ({
    book,
  }));
};

export default BooksPage;