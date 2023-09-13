import { useState } from "react";
import { IAudioTime } from "../../utils/interfaces";
import InputTime from "../InputTime";

export default function SetTimeComponent({
  setAudioTime,
  audioTime,
  style,
}: {
  setAudioTime: React.Dispatch<React.SetStateAction<IAudioTime>>;
  audioTime: IAudioTime;
  style?: {};
}) {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  function setAudioTimeFromInputs(): void {
    const stringForSrc = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    setAudioTime({ ...audioTime, stringForSrc: stringForSrc });
  }
  return (
    <div
      style={{
        ...style,
      }}
    >
      <div
        style={{
          textAlign: "center",
        }}
      >
        <InputTime
          label="часы"
          inputId="inputHours"
          style={{ marginBottom: "10px" }}
          parentStateChange={setHours}
        />
        <InputTime
          label="минуты"
          inputId="inputMinutes"
          style={{ marginBottom: "10px" }}
          parentStateChange={setMinutes}
        />
        <InputTime
          label="seconds"
          inputId="inputSeconds"
          style={{ marginBottom: "10px" }}
          parentStateChange={setSeconds}
        />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={setAudioTimeFromInputs}>
          Установить время проигрывания
        </button>
      </div>
    </div>
  );
}

function pad(n: number): string {
  return (n < 10 ? "0" : "") + n;
}
