import React from 'react'

function Markup(props) {
    const word = props.datas.word;
    // const partOfSpeech = props.datas.meanings[0].partOfSpeech;
    // const phonetic = props.datas.phonetic? data.phonetic: ""
    // const meaning = props.datas.meanings[0].definitions[0].definition;
    // const example = props.datas.meanings[0].definitions[0].example || ""
    // sound.setAttribute("src", `${data.phonetics[0].audio}`)
    // console.log(sound);  

  return (
    <>
        <div className="results--header flex justify-between">
            <h3 className="text-md font-bold text-gray-700">{word}</h3>
            <button className="sound--btn" onClick={props.playSound}>
                <i className="fa fa-microphone" aria-hidden="true"></i>
            </button>
        </div>
        <div className="part--of--speech text-sm text-gray-400 flex mb-8">
            <p className="mr-2">partOfSpeech</p>
            <span>phonetic</span>
        </div>
        <div className="results--definition text-gray-600 mb-4">
            <p>meaning</p>
        </div>
        <div className="results--sentence border-l-4 pl-2 pr-12">
            <p>example </p>
        </div>
    </>
  )
}

export default Markup