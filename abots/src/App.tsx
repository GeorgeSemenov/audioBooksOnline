import React, { useEffect, useState } from "react";
import "react-h5-audio-player/lib/styles.css";
import "./App.css";
import AudioPlayerComponent from "./components/AudioPlayer";
import SetTimeComponent from "./components/SetTimeComponent";
import getAudioTimeBegining from "./utils/getAudioTimeBegining";
import InputTime from "./components/InputTime";
import getListeningTimeDuration from "./utils/getListeningTimeDuration";
import setListeningTimeDurationInCookies from "./utils/setListeningTimeDurationInCookies";
import { hpbBack, hpbForward } from "./utils/constants";
import convertStringToSecondsForAudio from "./utils/convertStringTowSecondsForAudio";
import convertSecondsToStringForAudio from "./utils/convertSecondsToStringForAudio";
export { hpbBack } from "./utils/constants";

export default function App() {
  const [audioTime, setAudioTime] = useState(getAudioTimeBegining());
  const [listeningTimeDuration, setListeningTimeDuration] = useState(
    getListeningTimeDuration
  );
  useEffect(() => {
    document.title = "(eng)Audio books онлине";

    const handleButtonClick = (event: KeyboardEvent) => {
      if (event.key === hpbBack.key) {
        setAudioTime({ ...audioTime });
        console.log("Нажата навзад" + audioTime.stringForSrc);
      } else if (event.key === hpbForward.key) {
        console.log("Нажата вперде");
      }

      console.log(event);
    };

    //TODO - нужно переписать плеер, чтобы он не перехватываль события, иначе приходится
    //выставлять в addEventListener третий параметр (capture) в true, чтобы
    //событие обрабатывалось при погружении, а не при всплытии, это означачет
    //Что handleButtonClick будет отрабатываться 2 раза - при всплытии и при погружении
    //поэтому в эту функцию установлен флаг, который запрещает обработку два раза за одно событие
    document.addEventListener("keydown", handleButtonClick, true);

    function reduceIncreaseAudioTime(secondsForChange: number): void {
      //Чтобы значение увеличивалось - передавай положительные значения секунд
      //Чтобы уменьшалось - передавай отрицательные значения
      let seconds: number = convertStringToSecondsForAudio(
        audioTime.stringForSrc
      );
      seconds += secondsForChange;
      seconds = seconds < 0 ? 0 : seconds;
      setAudioTime({
        ...audioTime,
        stringForSrc: convertSecondsToStringForAudio(seconds),
      });
    }
    return () => {
      document.removeEventListener("keydown", handleButtonClick);
    };
  }, []);

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
