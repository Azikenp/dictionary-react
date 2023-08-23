import React from 'react'

function Markup() {
  return (
    <>
        <div class="results--header flex justify-between">
            <h3 class="text-md font-bold text-gray-700">{word}</h3>
            <button class="sound--btn" onClick="playSound()">
                <i class="fa fa-microphone" aria-hidden="true"></i>
            </button>
        </div>
        <div class="part--of--speech text-sm text-gray-400 flex mb-8">
            <p class="mr-2">{partOfSpeech}</p>
            <span>{phonetic}</span>
        </div>
        <div class="results--definition text-gray-600 mb-4">
            <p>{meaning}</p>
        </div>
        <div class="results--sentence border-l-4 pl-2 pr-12">
            <p>{example} </p>
        </div>
    </>
  )
}

export default Markup