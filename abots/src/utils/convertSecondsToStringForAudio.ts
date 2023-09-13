export default function convertSecondsToStringForAudio(seconds: number) {
  const pad = (x: number) => {
    return x < 10 ? `0${x}` : `${x}`;
  };
  return `${pad(Math.trunc(seconds / (60 * 60)))}:${pad(
    Math.trunc((seconds / 60) % 60)
  )}:${pad(seconds % 60)}`;
}
