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
      <div>
        {contentWarning && (
          <span className="bg-[#30011a] px-2 py-1 rounded mr-2">
            ⚠️ {contentWarning}
          </span>
        )}
        {staffPick == "True" && (
          <span className="bg-[#1a3001] p-1 rounded mr-2">
            ❤️ Staff Favourite
          </span>
        )}
      </div>
      <p>{description}</p>
      <div>
        <i className="text-sm italic">{date + ", "}</i>
        {category && (
          <i className="text-sm italic">{category + " category, "}</i>
        )}
        {duration && (
          <i className="text-sm italic">
            {duration} {duration > 1 ? "minutes" : "minute"} to read
          </i>
        )}
      </div>
    </li>
  );
}
