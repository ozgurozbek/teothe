import ExampleSheet from "@/components/example/ExampleSheet";
import { Metadata } from "next";
import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";

// 1. Update the Props type to wrap params in a Promise
type Props = {
  params: Promise<{
    name: string;
  }>;
};

// REQUIRED for static export - generateStaticParams stays the same!
export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "src/jsons/examples");
  const files = fs.readdirSync(dir);

  return files.map((file) => ({
    name: file.replace(".json", ""),
  }));
}

// 2. Await params in generateMetadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { name } = await params; 
  const data = await getExampleData(name);

  if (!data) {
    return {
      title: "Not Found",
    };
  }

  return {
    title: data.name,
    description: `Character sheet for ${data.name}`,
  };
}

// Dynamic JSON loader
async function getExampleData(name: string) {
  try {
    const data = await import(`@/jsons/examples/${name}.json`);
    return data.default;
  } catch {
    return null;
  }
}

// 3. Await params in the Page component
export default async function ExampleDetailPage({ params }: Props) {
  const { name } = await params;
  const data = await getExampleData(name);

  if (!data) return notFound();

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <ExampleSheet data={data} />
    </div>
  );
}