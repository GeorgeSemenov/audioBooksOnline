import React, { useEffect, useState } from "react";
import "react-h5-audio-player/lib/styles.css";
import "./App.css";
import AudioPlayerComponent from "./components/AudioPlayer";
import SetTimeComponent from "./components/SetTimeComponent";
import getAudioTimeBegining from "./utils/getAudioTimeBegining";
import InputTime from "./components/InputTime";
import getListeningTimeDuration from "./utils/getListeningTimeDuration";
import setListeningTimeDurationInCookies from "./utils/setListeningTimeDurationInCookies";

export default function App() {
  useEffect(() => {
    document.title = "(eng)Audio books онлине";
  });
  const [audioTime, setAudioTime] = useState(getAudioTimeBegining());
  const [listeningTimeDuration, setListeningTimeDuration] = useState(
    getListeningTimeDuration
  );
  return (
    <>
      <AudioPlayerComponent
        audioTime={audioTime}
        listeningTimeDuration={listeningTimeDuration}
        style={{ marginBottom: "25px" }}
      />
      <SetTimeComponent
        setAudioTime={setAudioTime}
        audioTime={audioTime}
        style={{ marginBottom: "25px" }}
      />
      <InputTime
        label="Время продолжительности проигрывания"
        inputId="durationInput"
        parentStateChange={(val) => {
          setListeningTimeDuration(val);
          setListeningTimeDurationInCookies(+val);
        }}
        value={listeningTimeDuration}
      />
    </>
  );
}
