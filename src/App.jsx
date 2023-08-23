import { useState, useEffect } from 'react'
import './App.css'
import Markup from './components/Markup'

function App() {

  const [inputs, setInputs] = useState('');
  const [word, setWord] = useState('');

  console.log(word);

    const getMeaning = async (inputs) => {
      let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputs}`
      try {
        const response = await fetch(url);
    
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
    
        const data = await response.json();
        setWord(data[0])
      } 
      catch (error) {
          //conditionally render an error message  based on the type of error
          word.length > 0 ? renderErrorOne()  : renderErrorTwo();
      }
  }

  const handleChange = (event) => {
    event.preventDefault()
    setInputs(event.target.value);
  }

  // const clearView = () => {
  //   result.textContent = ""
  // }

  const playSound = () => {
    sound.play();
  }

  const searchFunction = (e) => {
    e.preventDefault();
    // clearView();
    // renderSpinner();
    setWord(inputs)
    // setTimeout(() => {
    //   setWord(inputs)
    //     // clearView();
    //     getMeaning(inputs);
    //     // setInputs('')
    // }, 500);
  }

  return (
    <>
      <div className="container bg-gray-100 h-screen w-screen flex items-center justify-center min-w-full">
        <section className="bg-white p-8 rounded shadow-lg w-width">
            <div className="form">
                <form className="flex justify-between mb-10">
                    <input 
                      name='search' 
                      value={inputs} 
                      onChange={handleChange}
                      type="text" 
                      className="outline-none border-b-2 border-b-red-200 w-44" 
                    />
                    <button onClick={searchFunction} className="search bg-red-200 rounded px-10 py-2 text-black font-bold">Search</button>
                </form>
            </div>
            <div className="results">
                <audio id="sound"></audio>
                {word.length > 0 
                ? <Markup datas={word} playSound={playSound} />
                : <div className="text-center">
                    <p className="text-gray-400">Enter a word to begin search.</p>
                  </div>  
                }
            </div>
        </section>
      </div>
    </>
  )
}

export default App
