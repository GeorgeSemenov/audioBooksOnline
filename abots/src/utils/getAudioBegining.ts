import getCookie from "./getCookie";
import convertSecondsToStringForAudio from "./convertSecondsToStringForAudio";
import { IAudioTime } from "./interfaces";

export default function getAudioBegining() {
  const defaultValue: IAudioTime = {
    stringForSrc: "00-00-00",
  };
  return getCookie("listenedTime")
    ? convertSecondsToStringForAudio(getCookie("listenedTime"))
    : defaultValue;
}
