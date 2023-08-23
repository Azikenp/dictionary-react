import { useState, useEffect } from 'react'
import './App.css'
import Markup from './components/Markup'

function App() {

  const [input, setInput] = useState('');
  const [word, setWord] = useState('home');


  useEffect(() => {
    const getMeaning = async function(word) {
      let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      try {
        const response = await fetch(url);
    
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
    
        const data = await response.json();
        setInput(data)
      } 
      catch (error) {
          //conditionally render an error message  based on the type of error
          word.length > 0 ? renderErrorOne()  : renderErrorTwo();
      }
  }
  }, [])

  const clearView = () => {
    result.textContent = ""
  }

  const playSound = () => {
    sound.play();
}

  const searchFunction = (e) => {
    e.preventDefault();
    clearView();
    renderSpinner();
    setTimeout(() => {
        let searchInput = document.querySelector('input');
        clearView();
        getMeaning(searchInput.value);
        searchInput.value = ""
    }, 500);
  }

  return (
    <>
      <div class="container bg-gray-100 h-screen w-screen flex items-center justify-center min-w-full">
        <section class="bg-white p-8 rounded shadow-lg w-width">
            <div class="form">
                <form class="flex justify-between mb-10">
                    <input type="text" class="outline-none border-b-2 border-b-red-200 w-44" />
                    <button onClick={searchFunction} class="search bg-red-200 rounded px-10 py-2 text-black font-bold">Search</button>
                </form>
            </div>
            <div class="results">
                <audio id="sound"></audio>
                <div class="text-center">
                    <p class="text-gray-400">Enter a word to begin search.</p>
                </div>
            </div>
        </section>
      </div>
    </>
  )
}

export default App
