import React from 'react'
import styled from 'styled-components'
import Checkbox from '@material-ui/core/Checkbox'
import Select from 'react-select'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Tooltip from '@material-ui/core/Tooltip'
import { MdContentCopy, MdDelete } from 'react-icons/md'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const options = [
  {
    value: 'all',
    label: 'All',
  },
  {
    value: 'custom',
    label: 'Custom',
  },
  {
    value: 'subscribed',
    label: 'Subscribed',
  },
  {
    value: 'archived',
    label: 'Archived',
  },
]
const selectStyles = {
  control: (styles: {}, state: { options: [] }) => {
    const longestOptionLength = state.options.reduce(
      (acc: number, { label }: { label: string }) => {
        return label.length > acc ? label.length : acc
      },
      0
    )

    return {
      ...styles,
      border: 'none',
      width: `${8 * longestOptionLength + 50}px`,
      fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    }
  },
  indicatorSeparator: (styles: {}) => ({
    ...styles,
    display: 'none',
  }),
  dropdownIndicator: (defaultStyles: {}) => ({
    ...defaultStyles,
    color: '#909090',
    '&:hover': '#282828',
  }),
}
const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  padding: 0.5rem 1rem;
`
const BatchActions = styled.div`
  display: flex;
  align-items: center;
`
const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  color: #5f6368;
  font-size: 1.2rem;
  letter-spacing: 0.1rem;
  .text {
    text-transform: lowercase;
  }
`

export const Actions: React.FC = () => {
  return (
    <Container>
      <BatchActions>
        <Checkbox />
        <Select
          options={options}
          styles={selectStyles}
          defaultValue={options[0]}
        />
        <Tooltip title="copy">
          <IconButton>
            <MdContentCopy />
          </IconButton>
        </Tooltip>
        <Tooltip title="delete">
          <IconButton>
            <MdDelete />
          </IconButton>
        </Tooltip>
      </BatchActions>
      <Pagination>
        <Typography variant="overline" className="text">
          1-50 of 9,969
        </Typography>
        <IconButton size="small">
          <FiChevronLeft className="control"></FiChevronLeft>
        </IconButton>
        <IconButton size="small">
          <FiChevronRight className="control"></FiChevronRight>
        </IconButton>
      </Pagination>
    </Container>
  )
}
