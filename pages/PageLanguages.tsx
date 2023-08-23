import GetCrumbs from "@/components/NavigationCrumb";
import Language from "@/components/language/languages";
import { Button, Card, Dropdown, Skeleton, MenuProps, Space } from "antd";
import useSWR from "swr";
import { useState } from "react";
import { DownOutlined } from "@ant-design/icons";

function GetLanguageData() {
  const [curLang, setCurLang] = useState("Abyssal");
  let query = curLang;

  const handleLangClick: MenuProps["onClick"] = (e) => {
    setCurLang(e.key);
  };
  const langItems: MenuProps["items"] = [];

  const langItemsFetcher = (args: RequestInfo) =>
    fetch(args).then((res) => res.json());

  const { data: langItemsData, error: langItemsError } = useSWR(
    "https://teothe.pythonanywhere.com/getLanguages?head=True",
    langItemsFetcher
  );

  if (langItemsError) {
    console.log(langItemsError);
  } else if (langItemsData) {
    langItemsData.forEach((item: string[]) => {
      langItems.push({
        label: item[0],
        key: item[0],
      });
    });
  }

  const langProps = {
    items: langItems,
    onClick: handleLangClick,
  };

  function LanguagesDropdown() {
    return (
      <>
        <Space className="mb-4">
          Language:{" "}
          <Dropdown menu={langProps}>
            <Button>
              <Space>
                {curLang}
                <DownOutlined />
              </Space>
            </Button>
          </Dropdown>
        </Space>
      </>
    );
  }

  const fetcher = (args: RequestInfo) => fetch(args).then((res) => res.json());
  const { data, error } = useSWR(
    "https://teothe.pythonanywhere.com/getLanguages?lang=" + query,
    fetcher
  );
  if (error) {
    console.log(error);
    return <div>Failed to access API</div>;
  }
  if (!data) return <Skeleton active />;

  let renderedLanguages = [];

  for (let item of data) {
    if (item === data[0]) {
      renderedLanguages.push(
        <Language
          languageProps={{
            originalWord: item[0],
            translatedWord: item[1],
            homebrew: item[2],
          }}
        />
      );
    } else {
      renderedLanguages.push(
        <Language
          languageProps={{
            originalWord: item[0],
            translatedWord: item[1],
            homebrew: item[2],
          }}
          borderProp="border-t border-[#e5e7eb]"
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
