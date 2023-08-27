import React from 'react'

function Markup({data}) {
    console.log(data);
    // sound.setAttribute("src", `${data.phonetics[0].audio}`)
    // console.log(sound);  
  return (
    <>
        <div className="results--header flex justify-between">
            <h3 className="text-md font-bold text-gray-700">{data.word}</h3>
            <button className="sound--btn" onClick={() => playSound()}>
                <i className="fa fa-microphone" aria-hidden="true"></i>
            </button>
        </div>
        <div className="part--of--speech text-sm text-gray-400 flex mb-8">
            <p className="mr-2">{data.meanings.partOfSpeech}</p>
            <span>{data.phonetic? data.phonetic: ""}</span>
        </div>
        <div className="results--definition text-gray-600 mb-4 text-left">
            <p>{data.meanings[0].definitions[0].definition}</p>
        </div>
        <div className="results--sentence border-l-4 pl-2 pr-12 text-left">
            <p>{data.meanings[0].definitions[0].example || ""} </p>
        </div>
    </>
  )
}

export default Markup