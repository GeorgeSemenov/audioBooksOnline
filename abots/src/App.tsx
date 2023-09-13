import React, { useEffect, useState } from "react";
import "react-h5-audio-player/lib/styles.css";
import "./App.css";
import AudioPlayerComponent from "./components/AudioPlayer";
import SetTimeComponent from "./components/SetTimeComponent";
import getAudioBegining from "./utils/getAudioBegining";

export default function App() {
  useEffect(() => {
    document.title = "(eng)Audio books онлине";
  });
  const [audioTime, setAudioTime] = useState(getAudioBegining());

  return (
    <>
      <AudioPlayerComponent audioTime={audioTime} />
      <SetTimeComponent />
    </>
  );
}
