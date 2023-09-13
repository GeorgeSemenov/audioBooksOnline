import setCookie from "./setCookie";

export default function setAudioTimeBeginingInCookies(
  timeInSeconds: number
): void {
  const yearInSeconds = 60 * 60 * 24 * 30 * 12;
  setCookie("listenedTime", `${timeInSeconds}`, `max-age=${yearInSeconds}`);
}
