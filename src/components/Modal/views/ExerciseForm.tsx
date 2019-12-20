import React, { useState } from 'react'
import styled from 'styled-components'
import CreatableSelect from 'react-select/creatable'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { IoMdList } from 'react-icons/io'
import { FiTag, FiVideo, FiVideoOff } from 'react-icons/fi'

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
  width: 100%;
  height: 12rem;
  display: flex;
  margin-left: 0.2rem;
  margin-top: 0.5rem;
  justify-content: center;
  align-items: center;
  background: #f0f2f2;
  color: #909090;
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
  margin: 2rem auto;
`

export const ExerciseForm: React.FC = () => {
  const [videoEmbedId, setVideo] = useState<string | null>(null)

  function getYTVideoId(e: React.ChangeEvent<HTMLInputElement>): void {
    const url = e.currentTarget.value
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|v=)([^#]*).*/
    const match = url.match(regExp)

    if (match && match[2].length === 11) {
      setVideo(match[2])
    } else {
      // TODO handle error
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
          InputProps={{ disableUnderline: true }}
          InputLabelProps={{ shrink: true }}
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
          {videoEmbedId ? (
            <iframe
              title={`https://www.youtube.com/embed/${videoEmbedId}`}
              src={`https://www.youtube.com/embed/${videoEmbedId}`}
              frameBorder="0"
            />
          ) : (
            <FiVideoOff />
          )}
        </VideoContainer>
      </Field>

      <Save variant="contained" color="primary">
        create exercise
      </Save>
    </Container>
  )
}
