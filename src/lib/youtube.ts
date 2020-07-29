
export function getYouTubeVideoId(videoURL: string): string | undefined {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|v=)([^#]*).*/;
  const match = videoURL.match(regExp);

  if (match && match[2].length === 11) {
    return match[2];
  } else {
    return undefined;
  }
}
