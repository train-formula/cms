import * as React from 'react';
import { FiVideoOff } from 'react-icons/fi';
import { VideoContainer, VideoURLField } from './Components';
import { getYouTubeVideoId } from '../../../../lib/youtube';

export type VideoProvider = 'YOUTUBE';

export interface VideoInputProps {
  provider?: VideoProvider;
  videoId?: string;

  onChange: (videoId: string | undefined, provider: VideoProvider | undefined) => void;
}

export const VideoInput: React.FunctionComponent<VideoInputProps> = ({ videoId, onChange }) => {
  return (
    <>
      <VideoURLField
        id="standard-textarea"
        placeholder="Enter a YouTube URL"
        onChange={(e) => {
          const extracted = getYouTubeVideoId(e.target.value);

          onChange(extracted, extracted ? 'YOUTUBE' : undefined);
        }}
      />
      <VideoContainer>
        {videoId ? (
          <iframe
            title={`https://www.youtube.com/embed/${videoId}`}
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
          />
        ) : (
          <FiVideoOff />
        )}
      </VideoContainer>
    </>
  );
};
