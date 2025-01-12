import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

// Define a mapping of book names to their corresponding components
const booksComponents: Record<string, ComponentType<{}>> = {
  "what-are-these-clovers": dynamic(() => import('@/components/library/books/what-are-these-clovers')),
  "we-are-pathetic-the-helpless-in-the-eyes-of-the-divine": dynamic(() => import('@/components/library/books/we-are-pathetic-the-helpless-in-the-eyes-of-the-divine')),
  "legend-of-w-steram": dynamic(() => import('@/components/library/books/legend-of-w-steram')),
  "divine-tales-1": dynamic(() => import('@/components/library/books/divine-tales-1')),
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
    // Add metadata for other books as needed
  };

  // Return the metadata for the current book or fallback if not found
  return metadata[params.book] || { title: "Book Not Found", description: "Stumbled upon a dusty corner of the library to find nothing..." };
};

// This function generates static paths at build time
export const generateStaticParams = async () => {
  const booksList = ['what-are-these-clovers','we-are-pathetic-the-helpless-in-the-eyes-of-the-divine','legend-of-w-steram','divine-tales-1']; // Add all dynamic book names here

  return booksList.map(book => ({
    book,
  }));
};

export default BooksPage;