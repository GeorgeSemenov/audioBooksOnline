import React, { useRef } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./App.css";

function App() {
  let aduioBegining: number,
    audioDuration: number = 3000;
  const audio = useRef<AudioPlayer>(null);
  return (
    <AudioPlayer
      src="https://sds.hugesound.ru/sounds/hugesoundru__kids-4.mp3#t=00:03:26"
      onPlay={(e) => {
        aduioBegining = e.timeStamp;
      }}
      onListen={(e) => {
        if (aduioBegining + audioDuration < e.timeStamp) {
          if (audio.current) audio.current.audio.current?.pause();
        }
      }}
      onPause={() => {
        console.log("kek");
      }}
      ref={audio}
    />
  );
}

export default App;
