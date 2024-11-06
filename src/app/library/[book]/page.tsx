import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { ComponentType } from 'react';

// Define a mapping of book names to their corresponding components
const booksComponents: Record<string, ComponentType<{}>> = {
  "what-are-these-clovers": dynamic(() => import('@/components/library/books/what-are-these-clovers')),
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
    // Add metadata for other books as needed
  };

  // Return the metadata for the current book or fallback if not found
  return metadata[params.book] || { title: "Book Not Found", description: "Stumbled upon a dusty corner of the library to find nothing..." };
};

// This function generates static paths at build time
export const generateStaticParams = async () => {
  const booksList = ['what-are-these-clovers']; // Add all dynamic book names here

  return booksList.map(book => ({
    book,
  }));
};

export default BooksPage;