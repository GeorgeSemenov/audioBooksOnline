import InputTime from "../InputTime";

export default function SetTimeComponent() {
  return (
    <>
      <div
        style={{
          textAlign: "center",
          marginBottom: "15px",
        }}
      >
        <InputTime
          label="часы"
          inputId="inputHours"
          style={{ marginBottom: "10px" }}
        />
        <InputTime
          label="минуты"
          inputId="inputMinutes"
          style={{ marginBottom: "10px" }}
        />
        <InputTime label="seconds" inputId="inputSeconds" />
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button>Установить время проигрывания</button>
      </div>
    </>
  );
}
