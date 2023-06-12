import React, { useState } from "react";
import CardGrid from "./components/CardGrid";
import SearchBar from "./components/Forms/SearchBar";
import SavePhrase from "./components/Forms/SavePhrase"

const App: React.FC = () => {
  const [phrase, setPhrase] = useState<string>("");
  const [phrasesSaved, setPhrasesSaved] = useState<string[]>([]);
  const [filteredPhrases, setFilteredPhrases] = useState<string[]>([]);


  const handleSearch = (text: string) => {
    const filtered = phrasesSaved.filter((phrase) =>
      phrase.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredPhrases(filtered);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhrase(e.target.value);
  };

  const onSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPhrasesSaved([...phrasesSaved, phrase]);
    setFilteredPhrases([...filteredPhrases, phrase]);
    setPhrase("");
  };

  return (
    <main className="w-screen h-screen mx-auto">
      <header className="h-2/5  px-8 w-full bg-primary flex shadow-lg">
        <SavePhrase onSave={onSave} onChange={handleChange} phrase={phrase} />
      </header>
      <section className="text-zinc-800 h-3/5 p-8">
        <div className="h-full w-full border-[1px] border-gray-300 shadow-lg rounded-xl px-8 py-2 overflow-y-auto">
          {phrasesSaved.length > 0 && <SearchBar onSearch={handleSearch} />}
          <CardGrid phrases={filteredPhrases ?? phrasesSaved} />
        </div>
      </section>
    </main>
  );
};

export default App;
