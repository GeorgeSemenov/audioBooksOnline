import { IAudioTime } from "./interfaces";

export default function getStringForAudioTime(
  audioUrl: string,
  audioTime: IAudioTime
): string {
  const resultetdUrl = `${audioUrl}#t=${audioTime.stringForSrc}`;
  return resultetdUrl;
}
