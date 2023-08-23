export default function Language({
  languageProps,
}: {
  languageProps: {
    originalWord: string;
    translatedWord: string;
    homebrew: string;
  };
}) {
  return (
    <li
      className={
        languageProps.homebrew === "True"
          ? "text-pink-600 hover:bg-[#630436] py-4 border-t border-[#e5e7eb]"
          : "text-white hover:bg-[#630436] py-4 border-t border-[#e5e7eb]"
      }
    >
      {languageProps.originalWord} : {languageProps.translatedWord}
    </li>
  );
}
