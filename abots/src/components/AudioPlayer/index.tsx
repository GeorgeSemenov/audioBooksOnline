import AudioPlayer from "react-h5-audio-player";
import H5AudioPlayer from "react-h5-audio-player";
import setAudioBegining from "../../utils/setAudioBegining";
import getAudioBegining from "../../utils/getAudioBegining";
import { useRef } from "react";
import { IAudioTime } from "../../utils/interfaces";
const book = require("../../audio/book.mp3");

export default function AudioPlayerComponent({
  audioTime,
}: {
  audioTime: IAudioTime;
}) {
  let listeningTimeBegining: number,
    listeningTimeDuration: number = 10; //time in seconds
  const audioPlayer = useRef<H5AudioPlayer>(null);
  const yearInSeconds = 60 * 60 * 24 * 30 * 12;
  return (
    <AudioPlayer
      style={{ marginBottom: "15px" }}
      src={setAudioBegining(book, getAudioBegining())}
      onPlay={() => {
        listeningTimeBegining = audioPlayer.current?.audio.current
          ? Math.trunc(audioPlayer.current?.audio.current.currentTime)
          : 0;
      }}
      onListen={() => {
        if (audioPlayer.current?.audio.current) {
          if (
            listeningTimeBegining + listeningTimeDuration <
            audioPlayer.current?.audio.current.currentTime
          ) {
            audioPlayer.current?.audio.current.pause();
          }
        }
      }}
      onPause={() => {
        if (audioPlayer.current?.audio.current)
          document.cookie = `listenedTime = ${Math.trunc(
            audioPlayer.current?.audio.current.currentTime
          )}; max-age=${yearInSeconds}`;
      }}
      ref={audioPlayer}
    />
  );
}
