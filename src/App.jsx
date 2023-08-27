import { useState, useEffect } from "react";
import "./App.css";
import Markup from "./components/Markup";

function App() {
  const [search, setSearch] = useState('');
  const [word, setWord] = useState('');

  const searchResults = (inputValue) => {
    return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`)
      .then((response) => response.json())
      .then((data) => {
        return setWord(data[0])
      })
      .catch((err) => console.error(`haaaa ${err}`));
  };


  const searchFunction = (e) => {
    e.preventDefault();
    searchResults(search)
  };

  console.log(word);

  return (
    <>
      <div className="container bg-gray-100 h-screen w-screen flex items-center justify-center min-w-full">
        <section className="bg-white p-8 rounded shadow-lg w-width">
          <div className="form">
            <form className="flex justify-between mb-10">
              <input
                name="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                className="outline-none border-b-2 border-b-red-200 w-44"
              />
              <button
                onClick={searchFunction}
                className="search bg-red-200 rounded px-10 py-2 text-black font-bold"
              >
                Search
              </button>
            </form>
          </div>
          <div className="results">
            <audio id="sound"></audio>
            {word ? 
              <Markup data={word}/>
             : 
              <div className="text-center">
                <p className="text-gray-400">Enter a word to begin search.</p>
              </div>
            }
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
