import AudioPlayer from "react-h5-audio-player";
import H5AudioPlayer from "react-h5-audio-player";
import getStringForAudioTime from "../../utils/getStringForAudioTime";
import { useRef } from "react";
import { IAudioTime } from "../../utils/interfaces";
import setAudioTimeBeginingInCookies from "../../utils/setAudioTimeBeginingInCookies";
const book = require("../../audio/book.mp3");

export default function AudioPlayerComponent({
  audioTime,
  listeningTimeDuration, //time in seconds
  style,
}: {
  audioTime: IAudioTime;
  listeningTimeDuration: number;
  style?: {};
}) {
  let listeningTimeBegining: number;
  const audioPlayer = useRef<H5AudioPlayer>(null);

  return (
    <AudioPlayer
      style={{ ...style }}
      src={getStringForAudioTime(book, audioTime)}
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
          setAudioTimeBeginingInCookies(
            Math.trunc(audioPlayer.current?.audio.current.currentTime)
          );
      }}
      ref={audioPlayer}
    />
  );
}
