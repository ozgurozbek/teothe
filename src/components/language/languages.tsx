export default function Language({
  languageProps,
  borderProp,
}: {
  languageProps: {
    originalWord: string;
    translatedWord: string;
    homebrew: string;
  };
  borderProp?: string;
}) {
  return (
    <li
      className={
        languageProps.homebrew === "True"
          ? "text-pink-600 hover:bg-[#630436] py-4 " + borderProp
          : "text-white hover:bg-[#630436] py-4 " + borderProp
      }
    >
      {languageProps.originalWord} : {languageProps.translatedWord}
    </li>
  );
}
