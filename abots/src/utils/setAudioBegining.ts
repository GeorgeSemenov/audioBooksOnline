export default function setAudioBegining(audioUrl: string, beginFrom: string) {
  const resultetdUrl = `${audioUrl}#t=${beginFrom}`;
  return resultetdUrl;
}
