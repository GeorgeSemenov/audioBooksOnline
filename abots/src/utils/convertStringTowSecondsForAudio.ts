export default function convertStringToSecondsForAudio(str: string): number {
  //str like "00:00:00"
  const tArr = str.split(":");
  const seconds: number = tArr
    .reverse()
    .reduce((prev, curr, i) => prev + +curr * Math.pow(60, i), 0);
  return seconds;
}
