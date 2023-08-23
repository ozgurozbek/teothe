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
        languageProps.homebrew === "True" ? "text-pink-600" : "text-white"
      }
    >
      {languageProps.originalWord} : {languageProps.translatedWord}
    </li>
  );
}
