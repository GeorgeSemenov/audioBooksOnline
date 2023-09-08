import React, { useRef, useState } from "react";
import "./App.css";

function App() {
  const myRef = useRef<HTMLAudioElement>(null);
  let aduioBegining: number,
    audioDuration: number = 3000;
  const audio = document.getElementById("audio") as HTMLAudioElement;
  return (
    <figure>
      <figcaption>Listen to blade itself mothefaka</figcaption>
      <audio
        id="audio"
        controls
        // src="https://sds.hugesound.ru/sounds/hugesoundru__kids-4.mp3#t=00:03:26" //включается на 3й минуте 26 секунде
        src="https://sds.hugesound.ru/sounds/hugesoundru__kids-4.mp3#t=00:03:26" //включается на 3й минуте 26 секунде
        onPlay={(e) => {
          aduioBegining = e.timeStamp;
        }}
        onTimeUpdate={(e) => {
          if (aduioBegining + audioDuration < e.timeStamp) {
            audio.pause();
          }
        }}
        onPause={() => {
          console.log("kek");
        }}
      >
        <a href="/media/cc0-audio/t-rex-roar.mp3"> Download audio </a>
      </audio>
    </figure>
  );
}

export default App;
