import React, { useEffect, useCallback } from "react";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import IconButton from "@material-ui/core/IconButton";

import { useModal } from "../context";
import { ExerciseForm } from "./ExerciseForm";
import { ProgramForm } from "./ProgramForm";
import { PrescriptionForm } from "./PrescriptionForm";
import { WorkoutForm } from "./WorkoutForm";
import { AvailableModals, ModalPayload } from "../reducer";

type Props = {
  isOpen: boolean;
};
const Container = styled.div<Props>`
  position: absolute;
  z-index: ${p => (p.isOpen ? 1 : -1)};
  top: 0;
  height: 100vh;
  width: 100vw;
  transition: opacity 0.15s;
  opacity: ${p => (p.isOpen ? 1 : 0)};
  background: #ffffff;
`;
const CloseButton = styled(IconButton)`
  position: fixed;
  top: 2rem;
  right: 2rem;
`;
const CloseIcon = styled(MdClose)`
  height: 3rem;
  width: 3rem;
`;
const ContentContainer = styled.div`
  // height: 100%;
  // padding: 8rem 12rem;
`;

export const Modal: React.FC = () => {
  const { state: modal, closeModal } = useModal();

  const handleKeydown = useCallback(
    (e: KeyboardEvent): void => {
      if (e.keyCode === 27) {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  }, [handleKeydown]);

  function getComponent(payload: ModalPayload): React.ReactNode {
    switch (payload.type) {
      case AvailableModals.CREATE_EXERCISE:
        return <ExerciseForm {...payload.values} />;
      case AvailableModals.CREATE_PROGRAM:
        return <ProgramForm {...payload.values} />;
      case AvailableModals.CREATE_PRESCRIPTION:
        return <PrescriptionForm {...payload.values} />;
      case AvailableModals.CREATE_WORKOUT:
        return <WorkoutForm {...payload.values} />;
      default:
        return null;
    }
  }

  return (
    <Container isOpen={modal.isOpen}>
      <div>
        <CloseButton onClick={closeModal}>
          <CloseIcon />
        </CloseButton>
        <ContentContainer>{getComponent(modal.data)}</ContentContainer>
      </div>
    </Container>
  );
};
