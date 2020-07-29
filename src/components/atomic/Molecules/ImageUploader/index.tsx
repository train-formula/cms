import * as React from 'react';
import styled from 'styled-components';
import Typography from '@material-ui/core/Typography';
import { AiOutlineCloudUpload } from 'react-icons/ai';

const ImageUploadContainer = styled.div`
  width: 100%;
  height: 12rem;
  display: grid;
  margin-left: 0.2rem;
  margin-top: 0.5rem;
  align-items: center;
  text-align: center
  background: #f0f2f2;
  color: #909090;
  cursor: pointer;
  svg {
    height: 2rem;
    width: 2rem;
  }
`;

{
  /* TODO photo upload functionality */
}
export const ImageUploader: React.FunctionComponent = () => {
  return (
    <ImageUploadContainer>
      <Typography variant="caption">
        <div>
          <AiOutlineCloudUpload />
        </div>
        Cover Image
      </Typography>
    </ImageUploadContainer>
  );
};
