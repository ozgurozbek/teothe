"use client";

import GetCrumbs from "@/components/NavigationCrumb";
import Language from "./languages";
import {
  Button,
  Card,
  Dropdown,
  Skeleton,
  MenuProps,
  Space,
  Divider,
} from "antd";
import { useState, useEffect } from "react";
import { DownOutlined } from "@ant-design/icons";
import SimpleContent from "@/components/SimpleCon";
/**
 * Functional component for the LanguagesDropdown.
 * @param curLang - The current language.
 * @param langList - List of languages.
 * @param handleLangClick - Click event handler for language selection.
 * @returns JSX elements representing the LanguagesDropdown.
 */
function LanguagesDropdown({
  curLang,
  langList,
  handleLangClick,
}: {
  curLang: string;
  langList: MenuProps["items"];
  handleLangClick: MenuProps["onClick"];
}) {
  const langProps = {
    items: langList,
    onClick: handleLangClick,
  };

  return (
    <Space className="mb-4">
      Language:{" "}
      <Dropdown
        menu={langProps}
        autoFocus={true}
        dropdownRender={(menu) => (
          <div className="max-h-64 overflow-y-scroll no-scrollbar">{menu}</div>
        )}
        overlayStyle={{
          scrollbarWidth: "thin",
          scrollBehavior: "smooth",
        }}
      >
        <Button>
          <Space>
            {curLang}
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
      {!langProps.items && (
        <Button onClick={() => window.location.reload()}>Refresh Page</Button>
      )}
    </Space>
  );
}

/**
 * Functional component for the LanguagesPage.
 * @generator
 * @see Language
 * @returns JSX elements representing the LanguagesPage.
 */
export default function LanguagesContent() {
  const [curLang, setCurLang] = useState("Abyssal");
  const [langList, setLangList] = useState<MenuProps["items"]>([]);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const handleLangClick = (e: any) => {
    setCurLang(e.key);
  };

  useEffect(() => {
    (args: RequestInfo) => fetch(args).then((res) => res.json());

    fetch(
      "https://gi5vwiheg0.execute-api.eu-central-1.amazonaws.com/Stage/getLanguages?head=True"
    )
      .then((res) => res.json())
      .then((langItemsData) => {
        const langListTemp = langItemsData.map((item: string[]) => ({
          label: item,
          key: item,
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

    fetch(
      "https://gi5vwiheg0.execute-api.eu-central-1.amazonaws.com/Stage/getLanguages?lang=" +
        curLang
    )
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
              "The Languages tab of Teothe serves as a comprehensive resource for Dungeons & Dragons (D&D), focusing on the exploration of fantasy languages. This feature offers a diverse array of languages, complete with both official and homebrew words, tailored specifically for enhancing the D&D 5e experience.",
              "These are the language entries. Entries in white are from original Forgotten Realms content. Pinks are homebrew entries made specifically for Teothe. Pink and italic entries are adapted from original content to Teothe. Upon selecting a language from the dropdown menu below, the respective dictionary is displayed, showcasing a detailed collection of terms.",
              "In the world of D&D, language plays a crucial role in storytelling and character development, providing insight into the unique cultures and histories of various fantasy realms. Teothe showcases an extensive collection of official words recognized within the D&D lexicon alongside homebrew words created by the community. This combination allows for a richer gameplay experience, enabling players and Dungeon Masters to customize their campaigns with personalized vocabulary.",
              "The dictionary entries include meanings and contextual uses, making this resource invaluable for enriching character dialogues and infusing campaigns with deeper lore. The integration of both official and homebrew terms encourages creativity, expanding storytelling possibilities and enhancing immersion in the D&D universe.",
              "Teothe transforms the language experience, offering a wealth of vocabulary to shape epic adventures within the realms of D&D. The richness of fantasy language serves to inspire and elevate gameplay, providing the tools needed to craft unforgettable narratives.",
            ],
          }}
        />
        <Divider />
        Failed to fetch dropdown list data
      </Card>
    );
  }

  if (data.length === 0) {
    return <Skeleton active />;
  }

  const renderedLanguages = data.map((item: any, index) => (
    <Language
      key={index}
      languageProps={{
        originalWord: item.word,
        translatedWord: item.translation,
        homebrew: item.homebrew,
      }}
      borderProp={index === 0 ? undefined : "border-t border-[#33373b]"}
    />
  ));

  return (
    <section>
      <GetCrumbs path={"Teothe,Languages"} />
      <Card bordered={false} className="w-full">
        <SimpleContent
          contentProps={{
            title: "Languages",
            text: [
              "The Languages tab of Teothe serves as a comprehensive resource for Dungeons & Dragons (D&D), focusing on the exploration of fantasy languages. This feature offers a diverse array of languages, complete with both official and homebrew words, tailored specifically for enhancing the D&D 5e experience.",
              "These are the language entries. Entries in white are from original Forgotten Realms content. Pinks are homebrew entries made specifically for Teothe. Pink and italic entries are adapted from original content to Teothe. Upon selecting a language from the dropdown menu below, the respective dictionary is displayed, showcasing a detailed collection of terms.",
              "In the world of D&D, language plays a crucial role in storytelling and character development, providing insight into the unique cultures and histories of various fantasy realms. Teothe showcases an extensive collection of official words recognized within the D&D lexicon alongside homebrew words created by the community. This combination allows for a richer gameplay experience, enabling players and Dungeon Masters to customize their campaigns with personalized vocabulary.",
              "The dictionary entries include meanings and contextual uses, making this resource invaluable for enriching character dialogues and infusing campaigns with deeper lore. The integration of both official and homebrew terms encourages creativity, expanding storytelling possibilities and enhancing immersion in the D&D universe.",
              "Teothe transforms the language experience, offering a wealth of vocabulary to shape epic adventures within the realms of D&D. The richness of fantasy language serves to inspire and elevate gameplay, providing the tools needed to craft unforgettable narratives.",
            ],
          }}
        />
        <Divider />
        <LanguagesDropdown
          curLang={curLang}
          langList={langList}
          handleLangClick={handleLangClick}
        />
        {renderedLanguages}
      </Card>
    </section>
  );
}
