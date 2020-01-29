import React from 'react'
import styled from 'styled-components'
import Checkbox from '@material-ui/core/Checkbox'
import Typography from '@material-ui/core/Typography'
import { MdFilterList } from 'react-icons/md'

const handleLayoutType = (type: string) => {
  switch (type) {
    case 'program':
      return 'auto 1fr 1fr 1fr 2fr 1fr'
    case 'exercise':
      return 'auto 1fr 2fr 1fr'
    case 'category':
      return 'auto 1fr 2fr 1fr'
    case 'prescription':
      return 'auto 1fr 1fr 1fr 1fr 2fr'
    default:
      return 'auto 1fr 1fr 1fr 2fr 1fr'
  }
}
type ContainerProps = {
  type: string
}
const Container = styled.div<ContainerProps>`
  display: grid;
  grid-template-columns: ${p => handleLayoutType(p.type)};
  align-items: center;
  padding: 0 1rem;
  color: #5f6368;
`
const CheckboxPlaceholder = styled(Checkbox)`
  visibility: hidden;
`
const Filter = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: start;
  grid-gap: 1rem;
  width: fit-content;
  cursor: pointer;
`
const FilterIcon = styled(MdFilterList)`
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.15s linear;
  ${Filter}:hover & {
    opacity: 1;
  }
`

export type FiltersProps = {
  className?: string
  filters: string[]
  type: string
}

export const Filters: React.FC<FiltersProps> = ({ type, filters }) => {
  return (
    <Container type={type}>
      <CheckboxPlaceholder />
      {filters.map(filter => (
        <Filter key={filter}>
          <Typography className="title" variant="caption">
            {filter}
          </Typography>
          <FilterIcon />
        </Filter>
      ))}
    </Container>
  )
}
