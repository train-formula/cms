import React from 'react'
import styled from 'styled-components'
import Avatar from '@material-ui/core/Avatar'

type ContainerProps = {
  size?: string
}
const Container = styled(Avatar)<ContainerProps>`
  background: white;
  color: #808080;
  border: 1px solid #808080;
`

type Props = {}

export const OrderIcon: React.FC<Props> = () => {
  function handleClick() {}
  return (
    <Container size="large" onClick={handleClick}>
      A
    </Container>
  )
}
