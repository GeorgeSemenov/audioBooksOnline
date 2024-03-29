import React, { useEffect, useRef } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./App.css";
const book = require("./audio/book.mp3");

export default function App() {
  useEffect(() => {
    document.title = "(eng)Audio books онлине";
  });
  let listeningTimeBegining,
    listeningTimeDuration = 10; //time in seconds
  const audioPlayer = useRef(null);
  const aud = audioPlayer?.current?.audio.current;
  const yearInSeconds = 60 * 60 * 24 * 30 * 12;
  return (
    <AudioPlayer
      src={setAudioBegining(book, getAudioBegining())}
      // src={`https://sds.hugesound.ru/sounds/hugesoundru__kids-4.mp3#t=${getAudioBegining()}`}
      onPlay={() => {
        console.log(`onPlay`);
        listeningTimeBegining = aud ? Math.trunc(aud.currentTime) : 0;
      }}
      onListen={() => {
        console.log(`aud`, aud);
        console.log(`onListen`);
        if (aud) {
          if (listeningTimeBegining + listeningTimeDuration < aud.currentTime) {
            aud.pause();
          }
        }
      }}
      onPause={() => {
        console.log(`onPause`);
        if (aud)
          document.cookie = `listenedTime = ${Math.trunc(
            aud.currentTime
          )}; max-age=${yearInSeconds}`;
      }}
      ref={audioPlayer}
    />
  );
}

function setAudioBegining(audioUrl, beginFrom) {
  console.log(`setAudioBegining`);
  const resultetdUrl = `${audioUrl}#t=${beginFrom}`;
  return resultetdUrl;
}

function convertSecondsToStringForAudio(seconds) {
  console.log(`convertSecondsToStringForAudio`);
  const pad = (x) => {
    return x < 10 ? `0${x}` : `${x}`;
  };
  return `${pad(Math.trunc(seconds / (60 * 60)))}:${pad(
    Math.trunc((seconds / 60) % 60)
  )}:${pad(seconds % 60)}`;
}

function getAudioBegining() {
  console.log(`getAudioBegining`);
  return getCookie("listenedTime")
    ? convertSecondsToStringForAudio(getCookie("listenedTime"))
    : "00:00:00";
}

function getCookie(cookieName) {
  console.log(`getCookie`);
  const cookieObj = document.cookie.split("; ").reduce((prev, current) => {
    const [name, ...value] = current.split("=");
    prev[name] = value.join("=");
    return prev;
  }, {});
  return cookieObj[cookieName];
}
