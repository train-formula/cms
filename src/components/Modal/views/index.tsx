import React, { useEffect } from 'react'
import styled from 'styled-components'
import { MdClose } from 'react-icons/md'
import IconButton from '@material-ui/core/IconButton'

import { useModal } from '../context'
import { ExerciseForm } from './ExerciseForm'

type Props = {
  isOpen: boolean
}
const Container = styled.div<Props>`
  position: absolute;
  z-index: 99999;
  top: 0;
  height: 100vh;
  width: 100vw;
  display: ${p => (p.isOpen ? 'block' : 'none')};
  // justify-content: center;
  // align-items: center;
  background: #ffffff;
`
const CloseButton = styled(IconButton)`
  position: fixed;
  top: 2rem;
  right: 2rem;
`
const CloseIcon = styled(MdClose)`
  height: 3rem;
  width: 3rem;
`
const ContentContainer = styled.div`
  height: 100%;
  padding: 8rem 12rem;
`

export const Modal: React.FC = () => {
  const { state: modal, closeModal } = useModal()

  function handleKeydown(e: React.KeyboardEvent): void {
    if (e.keyCode === 27) {
      closeModal()
    }
  }

  // useEffect(() => {
  //   document.addEventListener('keydown', handleKeydown, true)

  //   return () => {
  //     document.removeEventListener('keydown', handleKeydown, true)
  //   }
  // }, [])

  function getComponent(type: string | undefined, data: any) {
    switch (type) {
      case 'exerciseForm':
        return <ExerciseForm {...data} />
      default:
        return null
    }
  }

  return (
    <Container isOpen={modal.isOpen}>
      <div>
        <CloseButton onClick={closeModal}>
          <CloseIcon />
        </CloseButton>
        <ContentContainer>
          {getComponent(modal.data.type, modal.data)}
        </ContentContainer>
      </div>
    </Container>
  )
}
