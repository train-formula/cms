import styled from 'styled-components';
import Button, { ButtonProps } from '@material-ui/core/Button';
import * as React from 'react';

const Unwrapped: React.FunctionComponent<ButtonProps> = (props) => {
  return <Button {...props} variant="contained" color="primary" />;
};

export const ModalSaveButton = styled(Unwrapped)`
  width: 80%;
  margin: 2rem auto;
`;
