import React from 'react'
import styled from 'styled-components'
import Checkbox from '@material-ui/core/Checkbox'
import Typography from '@material-ui/core/Typography'
import { MdFilterList } from 'react-icons/md'

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr 1fr 1fr 2fr 1fr;
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

type Props = {
  className?: string
}

export const Filters: React.FC<Props> = () => {
  return (
    <Container>
      <CheckboxPlaceholder />
      <div>
        <Filter>
          <Typography className="title" variant="caption">
            title
          </Typography>
          <FilterIcon />
        </Filter>
      </div>
      <div>
        <Filter>
          <Typography className="title" variant="caption">
            difficulty
          </Typography>
          <FilterIcon />
        </Filter>
      </div>
      <div>
        <Filter>
          <Typography className="title" variant="caption">
            commitment
          </Typography>
          <FilterIcon />
        </Filter>
      </div>
      <div>
        <Filter>
          <Typography className="title" variant="caption">
            goals
          </Typography>
          <FilterIcon />
        </Filter>
      </div>
      <div>
        <Filter>
          <Typography className="title" variant="caption">
            created by
          </Typography>
          <FilterIcon />
        </Filter>
      </div>
    </Container>
  )
}
