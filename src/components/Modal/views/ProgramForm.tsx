import React from 'react'
import styled from 'styled-components'
import Select from 'react-select'
import CreatableSelect from 'react-select/creatable'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { IoMdList } from 'react-icons/io'
import { MdPeople } from 'react-icons/md'
import { FiTag, FiTarget } from 'react-icons/fi'
import { FaRegCalendarAlt, FaImage } from 'react-icons/fa'
import { AiOutlineCloudUpload } from 'react-icons/ai'

const tagOptions = [
  { value: 'warm-up', label: 'Build Muscle' },
  { value: 'speed-agility', label: 'Shred Fat' },
  { value: 'skill-tech', label: 'Tone and Tighten' },
  { value: 'strength-power', label: 'Booty Gains' },
  { value: 'conditioning', label: 'Increase Power' },
  { value: 'recovery', label: 'Improve Mobility' },
]
const audienceOptions = [
  { value: 'beginner', label: 'beginner' },
  { value: 'intermediate', label: 'intermediate' },
  { value: 'advanced', label: 'advanced' },
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
  padding: 5rem;
`
const NameField = styled(TextField)`
  .MuiInputBase-root {
    font-size: 4rem;
  }
`
const DescriptionField = styled(TextField)`
  width: 100%;
  margin: 0;
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
`
const Save = styled(Button)`
  width: 80%;
  margin: 2rem auto;
`

export const ProgramForm: React.FC = () => {
  return (
    <Container>
      <NameField placeholder="Add program name" />
      <Field multi>
        <IoMdList className="field-icon" />
        <DescriptionField
          id="filled-multiline-flexible"
          label="Program Notes"
          placeholder="ex. The Ultimate Strength program is designed to be an intense full body..........."
          multiline
          rowsMax="8"
          rows="4"
          margin="normal"
          variant="filled"
          InputProps={{ disableUnderline: true }}
          InputLabelProps={{ shrink: true }}
        />
      </Field>
      <Field multi>
        <FaRegCalendarAlt className="field-icon" />
        <DescriptionField
          id="filled-number"
          label="Program Length (weeks)"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        />
      </Field>
      <Field>
        <FiTag className="field-icon" />
        <CreatableSelect
          isMulti
          options={tagOptions}
          classNamePrefix="react-select"
          placeholder="Add tag(s)"
          styles={selectStyles}
        />
      </Field>
      <Field>
        <MdPeople className="field-icon" />
        <Select
          options={audienceOptions}
          classNamePrefix="react-select"
          placeholder="Target Audience"
          styles={selectStyles}
        />
      </Field>
      <Field>
        <FiTarget className="field-icon" />
        <CreatableSelect
          isMulti
          options={tagOptions}
          classNamePrefix="react-select"
          placeholder="Add training goal(s)"
          styles={selectStyles}
        />
      </Field>
      <Field multi>
        {/* TODO photo upload functionality */}
        <FaImage className="field-icon" />
        <ImageUploadContainer>
          <Typography variant="caption">
            <div>
              <AiOutlineCloudUpload />
            </div>
            Cover Image
          </Typography>
        </ImageUploadContainer>
      </Field>
      <Save variant="contained" color="primary">
        create program
      </Save>
    </Container>
  )
}
