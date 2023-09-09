import React, { useRef } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./App.css";

export default function App() {
  let listeningTimeBegining: number,
    listeningTimeDuration: number = 10; //time in seconds
  const audioPlayer = useRef<AudioPlayer>(null);
  const aud = audioPlayer?.current?.audio.current;
  const yearInSeconds = 60 * 60 * 24 * 30 * 12;
  return (
    <AudioPlayer
      src={`https://sds.hugesound.ru/sounds/hugesoundru__kids-4.mp3#t=${getAudioBegining()}`}
      onPlay={() => {
        listeningTimeBegining = aud ? Math.trunc(aud.currentTime) : 0;
      }}
      onListen={() => {
        console.log(`aud =`, aud);
        if (aud) {
          console.log(
            `begining = ${listeningTimeBegining} --- duration = ${listeningTimeDuration} --- curTime = ${aud.currentTime}`
          );
          if (listeningTimeBegining + listeningTimeDuration < aud.currentTime) {
            aud.pause();
          }
        }
      }}
      onPause={() => {
        if (aud)
          document.cookie = `listenedTime = ${Math.trunc(
            aud.currentTime
          )}; max-age=${yearInSeconds}`;
      }}
      ref={audioPlayer}
    />
  );
}

function getStringForAudio(seconds: number) {
  const pad = (x: number) => {
    return x < 10 ? `0${x}` : `${x}`;
  };
  return `${pad(Math.trunc(seconds / (60 * 60)))}:${pad(
    Math.trunc((seconds / 60) % 60)
  )}:${pad(seconds % 60)}`;
}

function getAudioBegining() {
  return getCookie("listenedTime")
    ? getStringForAudio(getCookie("listenedTime"))
    : "00:00:00";
}

function getCookie(cookieName: string) {
  const cookieObj = document.cookie.split("; ").reduce((prev: any, current) => {
    const [name, ...value] = current.split("=");
    prev[name] = value.join("=");
    return prev;
  }, {});
  return cookieObj[cookieName];
}
