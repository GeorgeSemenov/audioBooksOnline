import getCookie from "./getCookie";

export default function getListeningTimeDuration(): number {
  return getCookie("listeningDuration") ? getCookie("listeningDuration") : 10;
}
