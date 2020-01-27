import React from 'react'
import styled from 'styled-components'
import { TextField } from '@material-ui/core'

import { Category } from './Category'

const Container = styled.div`
  padding: 4rem 10rem 0;
  height: fit-content;
  width: 80%;
  display: grid;
  grid-gap: 4rem;
  height: 100vh;
  overflow: scroll;
`
const WorkoutTitleField = styled(TextField)`
  .MuiInput-input {
    font-size: 3rem;
    color: #a2a2a2;
    color: black;
    font-weight: 300;
  }
`
const WorkoutNotesField = styled(TextField)`
  .MuiInputBase-root {
    border-radius: 4px;
  }
  .MuiInputLabel-filled {
    z-index: 0;
  }
  .Mui-focused {
    color: #0000008a;
  }
`

type Props = {}

export const WorkoutBuilder: React.FC<Props> = () => {
  return (
    <Container>
      <WorkoutTitleField
        value="Step Up Strength: Week 1 Day 4"
        variant="standard"
      ></WorkoutTitleField>
      <WorkoutNotesField
        id="filled-multiline-flexible"
        label="Workout Notes"
        placeholder="Use this area to help the client understand goals for today’s workout."
        fullWidth
        multiline
        rows="4"
        variant="outlined"
        InputLabelProps={{ shrink: true }}
      />
      <Category />
    </Container>
  )
}
