import React, { useEffect, useRef, useState } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./App.css";
import ReactAudioPlayer from "react-audio-player";

function App() {
  const [count, setCount] = useState(0);
  let aduioBegining: number,
    audioDuration: number = 2000;
  const player = useRef();
  let audio: HTMLAudioElement;
  useEffect(() => {
    audio = document.getElementById("audio") as HTMLAudioElement;
  }, []);

  return (
    <ReactAudioPlayer
      src="https://sds.hugesound.ru/sounds/hugesoundru__kids-4.mp3#t=00:03:26"
      listenInterval={1000}
      controls
      onPlay={(e) => {
        aduioBegining = e.timeStamp;
        console.log(`begining =${aduioBegining}`);
      }}
      onListen={(e) => {
        console.log(
          `begining + duration = ${aduioBegining + audioDuration} e = ${e}`
        );
        if (aduioBegining + audioDuration < e) {
          setCount(count + 1);
          console.log(`count = ${count}`);
        }
      }}
      // ref={(element) => {
      //   this.rap = element;
      // }}
      onPause={(e) => {
        console.log("kek");
      }}
    />
    // <AudioPlayer
    //   src="https://sds.hugesound.ru/sounds/hugesoundru__kids-4.mp3#t=00:03:26"
    //   onPlay={(e) => {
    //     aduioBegining = e.timeStamp;
    //   }}
    //   onListen={(e) => {
    //     if (aduioBegining + audioDuration < e.timeStamp) {
    //       player.current.audio.current.pause();
    //     }
    //   }}
    //   onPause={() => {
    //     console.log("kek");
    //   }}
    //   ref={player.current}
    // />
    //   <figure>
    //     <figcaption>Listen to blade itself mothefaka</figcaption>
    //     <audio
    //       id="audio"
    //       controls
    //       // src="https://sds.hugesound.ru/sounds/hugesoundru__kids-4.mp3#t=00:03:26" //включается на 3й минуте 26 секунде
    //       src="https://sds.hugesound.ru/sounds/hugesoundru__kids-4.mp3#t=00:03:26" //включается на 3й минуте 26 секунде
    //       onPlay={(e) => {
    //         aduioBegining = e.timeStamp;
    //       }}
    //       onTimeUpdate={(e) => {
    //         if (aduioBegining + audioDuration < e.timeStamp) {
    //           audio.pause();
    //         }
    //       }}
    //       onPause={() => {
    //         console.log("kek");
    //       }}
    //     >
    //       <a href="/media/cc0-audio/t-rex-roar.mp3"> Download audio </a>
    //     </audio>
    //   </figure>
  );
}

export default App;
