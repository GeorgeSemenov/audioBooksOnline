import setCookie from "./setCookie";

export default function setListeningTimeDurationInCookies(
  duration: number
): void {
  const yearInSeconds = 60 * 60 * 24 * 30 * 12;
  setCookie("listeningDuration", `${duration}`, `max-age=${yearInSeconds}`);
}
