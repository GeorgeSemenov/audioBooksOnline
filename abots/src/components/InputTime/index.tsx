import { Dispatch, SetStateAction } from "react";

export default function InputTime({
  label,
  inputId,
  style,
  value,
  parentStateChange,
}: {
  label: string;
  inputId: string;
  style?: {};
  value?: number;
  parentStateChange: Dispatch<SetStateAction<number>>;
}) {
  return (
    <div style={style}>
      <label htmlFor={inputId} style={{ marginRight: "5px" }}>
        {label}
      </label>
      <input
        value={value}
        type="number"
        onChange={(e) => parentStateChange(+e.target.value)}
      />
    </div>
  );
}
