import React from 'react'
import styled from 'styled-components'
import { TextField } from '@material-ui/core'

const CategoryNotes = styled(TextField)`
  .MuiInputBase-root {
    border-radius: 4px;
    background-color: #f0f2f2;
  }
  .Mui-focused {
    color: #0000008a;
  }
`

type Props = {}

export const ExerciseNotes: React.FC<Props> = () => {
  return (
    <CategoryNotes
      id="filled-multiline-flexible"
      label="Exercise Notes"
      placeholder="ex. Stay tight! Attack each rep!"
      multiline
      fullWidth
      rows="5"
      margin="none"
      variant="filled"
      // borderRadius="borderRadius"
      InputProps={{ disableUnderline: true }}
      InputLabelProps={{ shrink: true }}
    />
  )
}
