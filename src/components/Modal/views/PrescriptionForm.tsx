import React from 'react'
import styled from 'styled-components'
import CreatableSelect from 'react-select/creatable'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { FiTag } from 'react-icons/fi'
import { FaPrescription } from 'react-icons/fa'

import { PrescriptionTable } from '../../PrescriptionTable'

const tagOptions = [
  { value: 'warm-up', label: 'Warm-up' },
  { value: 'speed-agility', label: 'Speed/Agility' },
  { value: 'skill-tech', label: 'Skill/Tech' },
  { value: 'strength-power', label: 'Strength/Power' },
  { value: 'conditioning', label: 'Conditioning' },
  { value: 'recovery', label: 'Recovery' },
]

const selectStyles = {
  control: (styles: {}) => {
    return {
      ...styles,
      borderColor: 'hsl(0,0%,80%)',
      fontWeight: 700,
      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
      backgroundColor: '#F0F2F2',
      '.react-select__single-value': {
        lineHeight: '1.2',
      },
    }
  },
}

const Container = styled.div`
  display: grid;
  grid-auto-columns: max-content;
  justify-content: center;
  grid-gap: 2rem;
`
const NameField = styled(TextField)`
  .MuiInputBase-root {
    font-size: 4rem;
  }
`
type FieldProps = {
  multi?: boolean
}
const Field = styled.div<FieldProps>`
  position: relative;
  .field-icon {
    position: absolute;
    transform: ${p =>
      p.multi ? 'translate(-3.5rem, 1rem)' : 'translate(-3.5rem, 0.5rem)'};
    height: 2.5rem;
    width: 2.5rem;
    color: #5f6368;
  }
`
const Save = styled(Button)`
  width: 80%;
  margin: 2rem auto;
`

export const PrescriptionForm: React.FC = () => {
  return (
    <Container>
      <NameField placeholder="Prescription name" />
      <Field>
        <FiTag className="field-icon" />
        <CreatableSelect
          isMulti
          options={tagOptions}
          classNamePrefix="react-select"
          placeholder="Select category option(s)"
          styles={selectStyles}
        />
      </Field>

      <Field>
        <FaPrescription className="field-icon" />
        <PrescriptionTable />
      </Field>

      <Save variant="contained" color="primary">
        create prescription
      </Save>
    </Container>
  )
}
