import Title from "antd/es/typography/Title";
import Link from "next/link";

export default function CodexEntry(
    {slug, title, date, description, category, contentWarning, staffPick, duration, level=2}: {slug:string, title:string, date:string, description:string, category:string, contentWarning:string, staffPick:string, duration:number, level?:2 | 1 | 5 | 3 | 4 | undefined}) {
  return (
    <li key={slug} className="mb-8">
      <Link
        href={`/codex/${slug}`}
        className="hover:underline hover:text-white"
      >
        <Title level={level}>{title}</Title>
      </Link>
      <p>{description}</p>
      <div className="mt-2">
        {contentWarning && (
          <span className="bg-[#30011a] text-sm px-2 py-1 rounded mr-2">
            ⚠️ {contentWarning}
          </span>
        )}
        {staffPick == "True" && (
          <span className="bg-[#013011] text-sm px-2 py-1 rounded mr-2">
            ❤️ Staff Favourite
          </span>
        )}
        <i className="text-sm italic text-gray-400">{date + ", "}</i>
        {category && (
          <i className="text-sm italic text-gray-400">{category + " category, "}</i>
        )}
        {duration && (
          <i className="text-sm italic text-gray-400">
            {duration} {duration > 1 ? "minutes" : "minute"} to read
          </i>
        )}
      </div>
    </li>
  );
}
