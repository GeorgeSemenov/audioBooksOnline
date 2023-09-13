export default function InputTime({
  label,
  inputId,
  style,
}: {
  label: string;
  inputId: string;
  style?: {};
}) {
  return (
    <div style={style}>
      <label htmlFor={inputId} style={{ marginRight: "5px" }}>
        {label}
      </label>
      <input type="number" />
    </div>
  );
}
