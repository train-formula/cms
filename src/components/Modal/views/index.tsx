import React, { useEffect } from 'react'
import styled from 'styled-components'
import { MdClose } from 'react-icons/md'
import IconButton from '@material-ui/core/IconButton'

import { useModal } from '../context'
import { ExerciseForm } from './ExerciseForm'

// display: ${p => (p.isOpen ? 'block' : 'none')};
const Container = styled.div`
  position: absolute;
  z-index: 99999;
  top: 0;
  height: 100vh;
  width: 100vw;
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
  // const { modal, closeModal } = useModal()

  // function handleKeydown(e) {
  //   if (e.keyCode === 27) {
  //     closeModal()
  //   }
  // }

  // useEffect(() => {
  //   document.addEventListener('keydown', handleKeydown, true)

  //   return () => {
  //     document.removeEventListener('keydown', handleKeydown, true)
  //   }
  // }, [])

  // function getComponent(type, data) {
  //   switch (type) {
  //     case 'exerciseForm':
  //       return <ExerciseForm {...data} />
  //     default:
  //       return null
  //   }
  // }

  return (
    <Container>
      <h1>hello</h1>
    </Container>
    // <Container isOpen={modal.isOpen}>
    //   <>
    //     <CloseButton onClick={closeModal}>
    //       <CloseIcon />
    //     </CloseButton>
    //     <ContentContainer>
    //       {getComponent(modal.modalType, modal.data)}
    //     </ContentContainer>
    //   </>
    // </Container>
  )
}
