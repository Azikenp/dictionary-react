import React from 'react'

function Markup({datas, playSound}) {
    const word = datas.word;
    const partOfSpeech = datas.meanings[0].partOfSpeech;
    const phonetic = datas.phonetic? datas.phonetic: ""
    const meaning = datas.meanings[0].definitions[0].definition;
    const example = datas.meanings[0].definitions[0].example || ""
    // sound.setAttribute("src", `${data.phonetics[0].audio}`)
    // // console.log(sound);  
    // console.log(datas, playSound);
  return (
    <>
        <div className="results--header flex justify-between">
            <h3 className="text-md font-bold text-gray-700">{word}</h3>
            <button className="sound--btn" onClick={() => playSound()}>
                <i className="fa fa-microphone" aria-hidden="true"></i>
            </button>
        </div>
        <div className="part--of--speech text-sm text-gray-400 flex mb-8">
            <p className="mr-2">{partOfSpeech}</p>
            <span>{phonetic}</span>
        </div>
        <div className="results--definition text-gray-600 mb-4 text-left">
            <p>{meaning}</p>
        </div>
        <div className="results--sentence border-l-4 pl-2 pr-12 text-left">
            <p>{example} </p>
        </div>
    </>
  )
}

export default Markup