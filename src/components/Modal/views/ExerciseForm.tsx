import React, { useState } from 'react'
import styled from 'styled-components'
import Select from 'react-select'
import CreatableSelect from 'react-select/creatable'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { IoMdList, IoMdGrid } from 'react-icons/io'
import { FiTag, FiVideo } from 'react-icons/fi'

const options = [
  { value: 'reps', label: 'reps' },
  { value: 'seconds', label: 'seconds' },
  { value: 'miles', label: 'distance (miles)' },
  { value: 'meters', label: 'distance (meters)' },
]
const tagOptions = [
  { value: 'warm-up', label: 'Warm-up' },
  { value: 'speed-agility', label: 'Speed/Agility' },
  { value: 'skill-tech', label: 'Skill/Tech' },
  { value: 'strength-power', label: 'Strength/Power' },
  { value: 'conditioning', label: 'Conditioning' },
  { value: 'recovery', label: 'Recovery' },
]

const selectStyles = {
  control: styles => {
    return {
      ...styles,
      borderColor: 'hsl(0,0%,80%)',
      fontWeight: '700',
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
  multi: boolean
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
const VideoURLField = styled(TextField)`
  width: 100%;
  padding-left: 0.2rem;
  padding-top: 0.2rem;
  font-weight: 700;
  .MuiInputBase-root {
    padding-left: 0.5rem;
  }
`
const VideoContainer = styled.div`
  width: 95%;
  display: flex;
  justify-content: center;
  iframe {
    top: 1rem;
    margin: 1rem 0;
    width: 90%;
    height: 100%;
    width: 100%;
  }
`
const Save = styled(Button)`
  width: 80%;
  margin: 0 auto;
`

export const ExerciseForm: React.FC = () => {
  const [videoEmbedId, setVideo] = useState<string | null>(null)

  function getYTVideoId(e) {
    const url = e.target.value
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/
    const match = url.match(regExp)

    if (match && match[2].length === 11) {
      setVideo(match[2])
    } else {
      console.log('error')
    }
  }

  return (
    <Container>
      <NameField placeholder="Add exercise name" />
      <Field multi>
        <IoMdList className="field-icon" />
        <DescriptionField
          id="filled-multiline-flexible"
          label="Exercise Notes"
          placeholder="ex. Stay tight! Attack each rep!"
          multiline
          rowsMax="8"
          rows="4"
          margin="normal"
          variant="filled"
          // borderRadius="borderRadius"
          InputProps={{ disableUnderline: true }}
          InputLabelProps={{ shrink: true }}
        />
      </Field>
      <Field>
        <IoMdGrid className="field-icon" />
        <Select
          options={options}
          classNamePrefix="react-select"
          placeholder="Select a default prescription parameter"
          styles={selectStyles}
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
        <FiVideo className="field-icon" />
        <VideoURLField
          id="standard-textarea"
          placeholder="Enter a YouTube URL"
          onChange={getYTVideoId}
        />
        <VideoContainer>
          {videoEmbedId && (
            <iframe
              title={`https://www.youtube.com/embed/${videoEmbedId}`}
              src={`https://www.youtube.com/embed/${videoEmbedId}`}
              frameBorder="0"
            />
          )}
        </VideoContainer>
      </Field>
      <Save variant="contained" color="primary">
        create exercise
      </Save>
    </Container>
  )
}
