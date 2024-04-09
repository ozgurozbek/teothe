import Head from "next/head";

interface MetadataProps {
  title: string;
  description: string;
}

const Metadata: React.FC<MetadataProps> = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* Add other metadata tags as needed */}
    </Head>
  );
};

export default Metadata;
