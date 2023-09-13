import getCookie from "./getCookie";
import convertSecondsToStringForAudio from "./convertSecondsToStringForAudio";
import { IAudioTime } from "./interfaces";

export default function getAudioTimeBegining(): IAudioTime {
  const defaultValue: IAudioTime = {
    stringForSrc: "00:00:00",
  };
  return getCookie("listenedTime")
    ? {
        stringForSrc: convertSecondsToStringForAudio(getCookie("listenedTime")),
      }
    : defaultValue;
}
