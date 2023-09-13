import setListeningTimeDurationInCookies from "../../utils/setListeningTimeDurationInCookies";
import InputTime from "../InputTime";

export default function SetListeningTimeDuration({
  setListeningTimeDuration,
  style,
  listeningTimeDuration,
}: {
  setListeningTimeDuration: React.Dispatch<React.SetStateAction<number>>;
  style?: {};
  listeningTimeDuration: number;
}) {
  return (
    <div style={{ ...style, textAlign: "center" }}>
      <InputTime
        label="Время продолжительности проигрывания"
        inputId="durationInput"
        parentStateChange={setListeningTimeDuration}
        style={{ marginBottom: "10px" }}
        value={listeningTimeDuration}
      />
      <button
        onClick={() => setListeningTimeDurationInCookies(listeningTimeDuration)}
      >
        Установить длительность проигрывания и не быть геем
      </button>
    </div>
  );
}
