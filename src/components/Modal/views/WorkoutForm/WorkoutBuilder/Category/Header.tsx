import React from 'react'
import styled from 'styled-components'
import CreatableSelect from 'react-select/creatable'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import { MdSave, MdDelete } from 'react-icons/md'
import { IoMdEyeOff } from 'react-icons/io'

const options = [
  { value: 'warm-up', label: 'Warm-up' },
  { value: 'speed-agility', label: 'Speed/Agility' },
  { value: 'skill-tech', label: 'Skill/Tech' },
  { value: 'strength-power', label: 'Strength/Power' },
  { value: 'conditioning', label: 'Conditioning' },
  { value: 'recovery', label: 'Recovery' },
]

const selectStyles = {
  control: (styles: any, { _, __, isFocused }: any) => {
    return {
      ...styles,
      // maxWidth: '55rem',
      fontWeight: '300',
      border: !isFocused && '1px solid transparent',
      boxShadow: !isFocused && 0,
      borderColor: 'hsl(0,0%,80%)',
      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
      fontSize: '2.4rem',
      '.react-select__single-value': {
        lineHeight: '1.2',
      },
      '&:hover': {
        border: '1px solid hsl(0, 0%, 80%)',
        '.react-select__indicator-separator': { visibility: 'visible' },
        '.react-select__indicator': { visibility: 'visible' },
      },
    }
  },
  dropdownIndicator: (styles: any, { _, __, isFocused }: any) => ({
    ...styles,
    visibility: isFocused ? 'visible' : 'hidden',
  }),
  indicatorSeparator: (styles: any, { _, __, isFocused }: any) => ({
    ...styles,
    visibility: isFocused ? 'visible' : 'hidden',
  }),
  clearIndicator: (styles: any, { _, __, isFocused }: any) => ({
    ...styles,
    visibility: isFocused ? 'visible' : 'hidden',
  }),
}

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  .actions {
    display: flex;
    justify-self: flex-end;
  }
`

type Props = {}

export const Header: React.FC<Props> = () => {
  function handleChange(newValue: any, actionMeta: any) {
    // save category here
    // snack
    console.log('Value Changed', newValue)
  }

  return (
    <Container>
      <CreatableSelect
        onChange={handleChange}
        options={options}
        classNamePrefix="react-select"
        placeholder="Select a Category or type a new one"
        styles={selectStyles}
      />
      <div className="actions">
        <Tooltip title="save category to library">
          <IconButton>
            <MdSave />
          </IconButton>
        </Tooltip>
        <Tooltip title="delete from workout">
          <IconButton>
            <MdDelete />
          </IconButton>
        </Tooltip>
        <Tooltip title="hide exercise details">
          <IconButton>
            <IoMdEyeOff />
          </IconButton>
        </Tooltip>
      </div>
    </Container>
  )
}
