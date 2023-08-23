import GetCrumbs from "@/components/NavigationCrumb";
import Language from "@/components/language/languages";
import { Card, Skeleton } from "antd";
import useSWR from "swr";
import { useState } from "react";

function GetLanguageData() {
  const [curLang, setCurLang] = useState("Abyssal");
  let query = curLang;

  const fetcher = (args: RequestInfo) => fetch(args).then((res) => res.json());
  const { data, error } = useSWR(
    "http://localhost:5000/getLanguages?lang=" + query,
    fetcher
  );
  if (error) {
    console.log(error);
    return <div>Failed to access API</div>;
  }
  if (!data) return <Skeleton active />;

  let renderedLanguages = [];
  for (let item of data) {
    {
      renderedLanguages.push(
        <Language
          languageProps={{
            originalWord: item[0],
            translatedWord: item[1],
            homebrew: item[2],
          }}
        />
      );
    }
  }
  return renderedLanguages;
}

export default function LanguagesPage() {
  return (
    <>
      <GetCrumbs path={"Teothe3K,Languages"} />
      <Card bordered={false} className=" w-full">
        {GetLanguageData()}
      </Card>
    </>
  );
}
