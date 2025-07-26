"use client";
import { useState, useEffect } from "react";
import { Input, Card, Divider, Space, Row, Col } from "antd";
import GetCrumbs from "Comp/NavigationCrumb";
import Title from "antd/es/typography/Title";

const { TextArea } = Input;

const CONSONANTS = "BCDFGHJKLMNPQRSTVWXYZ";
const VOWELS = "AEIOU";

function transformWord(
  word: string,
  languageNumber: number,
  operation: 0 | 1
): string {
  const chars = word.split("");
  const result: string[] = [];

  chars.forEach((char, i) => {
    const upper = char.toUpperCase();
    let list: string[] = [];
    if (CONSONANTS.includes(upper)) {
      list = CONSONANTS.split("");
    } else if (VOWELS.includes(upper)) {
      list = VOWELS.split("");
    } else {
      result.push(char);
      return;
    }

    const idx = list.indexOf(upper);
    const shift =
      operation === 0
        ? (i + languageNumber + idx) % list.length
        : (idx - i - languageNumber + list.length * 10) % list.length;
    const transformed = list[shift];
    // preserve original case
    result.push(char === upper ? transformed : transformed.toLowerCase());
  });

  return result.join("");
}

function processWordList(
  words: string[],
  languageNumber: number,
  operation: 0 | 1
): string[] {
  return words.map((w) => transformWord(w, languageNumber, operation));
}

export default function TranslatorContent() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [languageNumber, setLanguageNumber] = useState(8);

  // Re-encode when language number changes
  useEffect(() => {
    if (inputText) {
      const words = inputText.toUpperCase().split(/\s+/);
      const encoded = processWordList(words, languageNumber, 0).join(" ");
      setOutputText(encoded);
    }
  }, [inputText, languageNumber]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setInputText(text);
    const words = text.toUpperCase().split(/\s+/);
    const encoded = processWordList(words, languageNumber, 0).join(" ");
    setOutputText(encoded);
  };

  const handleOutputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setOutputText(text);
    const words = text.toUpperCase().split(/\s+/);
    const decoded = processWordList(words, languageNumber, 1).join(" ");
    setInputText(decoded);
  };

  return (
    <section>
      <GetCrumbs path={"Teothe,Generators,Teothe Translator"} />
      <Card bordered={false} className="w-full">
        <Title level={2}>Teothe Translator</Title>
        <p>
          This specific translator lets you encode and decode the ancient language of Teothe, used long before Common became the standard. Ideal for DMs, writers, and worldbuilders, it converts text using phonetic shifts based on consonants, vowels, and a customizable language number.
          Create immersive scripts, hidden messages, or regional dialects with ease. The translator works both ways and delivers instant results, ready for use in any RPG, story, or campaign. Bring depth to your world with a language rooted in lore and logic.
        </p>
        <Divider />

        <Space align="center">
          <Input
            addonBefore="Language Number"
            type="number"
            min={0}
            value={languageNumber}
            onChange={(e) => setLanguageNumber(Number(e.target.value))}
          />
        </Space>
        <Divider />
        <Row gutter={16}>
          <Col xs={24} md={12} className="my-2">
            <TextArea
              rows={10}
              value={inputText}
              onChange={handleInputChange}
              placeholder="Type here to encode..."
            />
          </Col>
          <Col xs={24} md={12} className="my-2">
            <TextArea
              rows={10}
              value={outputText}
              onChange={handleOutputChange}
              placeholder="Type here to decode..."
            />
          </Col>
        </Row>
        <Divider/>
        <p>The Teothe Translator operates using an adapted form of the Caesar cipher, where each letter is shifted based on a combination of factors rather than a fixed value. Every character is first identified as either a vowel or a consonant. Then, a shift is calculated using the letter&apos;s position in the word, its index within its group, and a chosen language number that acts as a custom key. This creates a moving, position-aware cipher where each letter is transformed differently depending on context. Encoding shifts forward through the letter set, while decoding shifts in reverse, using modular arithmetic to ensure accuracy. The result is a reversible, evolving cipher that mimics the irregularities and complexity of a real-world language system.</p>
      </Card>
    </section>
  );
}
