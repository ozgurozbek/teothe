import GetCrumbs from "@/components/NavigationCrumb";
import Language from "@/components/language/languages";
import { Button, Card, Dropdown, Skeleton, MenuProps, Space } from "antd";
import { useState, useEffect } from "react";
import { DownOutlined } from "@ant-design/icons";
import SimpleContent from "@/components/SimpleCon";

function LanguagesDropdown({ curLang, langList, handleLangClick }:{curLang:string,langList:MenuProps["items"],handleLangClick:MenuProps["onClick"]}) {
  const langProps = {
    items: langList,
    onClick: handleLangClick,
  };

  return (
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
      {!langProps.items && <Button onClick={()=>window.location.reload()}>Refresh Page</Button>}
    </Space>
  );
}

export default function LanguagesPage() {
  const [curLang, setCurLang] = useState("Abyssal");
  const [langList, setLangList] = useState<MenuProps["items"]>([]);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const handleLangClick = (e:any) => {
    setCurLang(e.key);
  };

  useEffect(() => {
    (args: RequestInfo) => fetch(args).then((res) => res.json());

    fetch("https://teothe.pythonanywhere.com/getLanguages?head=True")
      .then((res) => res.json())
      .then((langItemsData) => {
        const langListTemp = langItemsData.map((item:string) => ({
          label: item[0],
          key: item[0],
        }));
        setLangList(langListTemp);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  }, []);

  useEffect(() => {
    (args: RequestInfo) => fetch(args).then((res) => res.json());

    fetch("https://teothe.pythonanywhere.com/getLanguages?lang=" + curLang)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  }, [curLang]);

  if (error) {
    return (
      <Card bordered={false} className="w-full">
        <SimpleContent
          contentProps={{
            title: "Languages",
            text: [
              "These are the language entries. Entries in white are from original Forgotten Realms content. Pinks are homebrew entries made specifically for Teothe. Pink and italic entries are adapted from original content to Teothe.",
              "Select a language from the dropdown menu below to display the respective dictionary.",
            ],
          }}
        />
        Failed to fetch dropdown list data
      </Card>
    );
  }

  if (data.length === 0) {
    return <Skeleton active />;
  }

  const renderedLanguages = data.map((item, index) => (
    <Language
      key={index}
      languageProps={{
        originalWord: item[0],
        translatedWord: item[1],
        homebrew: item[2],
      }}
      borderProp={index === 0 ? undefined : "border-t border-[#e5e7eb]"}
    />
  ));

  return (
    <>
      <GetCrumbs path={"Teothe3K,Languages"} />
      <Card bordered={false} className="w-full">
        <SimpleContent
          contentProps={{
            title: "Languages",
            text: [
              "These are the language entries. Entries in white are from original Forgotten Realms content. Pinks are homebrew entries made specifically for Teothe. Pink and italic entries are adapted from original content to Teothe.",
              "Select a language from the dropdown menu below to display the respective dictionary.",
            ],
          }}
        />
        <LanguagesDropdown
          curLang={curLang}
          langList={langList}
          handleLangClick={handleLangClick}
        />
        {renderedLanguages}
      </Card>
    </>
  );
}
