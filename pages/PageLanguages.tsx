import GetCrumbs from "@/components/NavigationCrumb";
import Language from "@/components/language/languages";
import { Button, Card, Dropdown, Skeleton, MenuProps } from "antd";
import useSWR from "swr";
import { useState } from "react";

function GetLanguageData() {
  const [curLang, setCurLang] = useState("Abyssal");
  let query = curLang;

  const handleLangClick: MenuProps["onClick"] = (e) => {
    setCurLang(e.key);
  };

  const langItems: MenuProps["items"] = [
    {
      label: "Abyssal",
      key: "Abyssal",
    },
    {
      label: "Draconic",
      key: "Draconic",
    },
    {
      label: "Drow",
      key: "Drow",
    },
    {
      label: "Dwarvish",
      key: "Dwarvish",
    },
  ];

  const langProps = {
    items: langItems,
    onClick: handleLangClick,
  };

  function LanguagesDropdown() {
    return (
      <>
        Language:{" "}
        <Dropdown menu={langProps}>
          <Button>{curLang}</Button>
        </Dropdown>
      </>
    );
  }

  const fetcher = (args: RequestInfo) => fetch(args).then((res) => res.json());
  const { data, error } = useSWR(
    "http://localhost:5000/getLanguages?lang=" + query, //http://localhost:5000/getLanguages?head=True
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
  return (
    <>
      <LanguagesDropdown />
      {renderedLanguages}
    </>
  );
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
