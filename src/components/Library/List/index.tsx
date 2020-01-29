import React from 'react'
import styled from 'styled-components'
import Divider from '@material-ui/core/Divider'
import { Link } from 'react-router-dom'

import { Program } from './Program'
import { Exercise } from './Exercise'
import { Category } from './Category'
import { Prescription } from './Prescription'

const Container = styled.div`
  display: grid;
  .link {
    text-decoration: none;
  }
`

export type ListProps = {
  type: string
  items: { [key: string]: any }[]
}

export const List: React.FC<ListProps> = ({ type, items }) => {
  function getComponent(
    type: string,
    item: { [key: string]: any }
  ): React.ReactNode {
    switch (type) {
      case 'program':
        return (
          <Link to={`/program/${item.id}`} className="link">
            <Program item={item} />
          </Link>
        )
      case 'exercise':
        return <Exercise item={item} />
      case 'category':
        return <Category item={item} />
      case 'prescription':
        return <Prescription item={item} />
      default:
        return null
    }
  }

  return (
    <Container>
      {items.map(item => (
        <div key={item.id}>
          {getComponent(type, item)}
          <Divider />
        </div>
      ))}
    </Container>
  )
}
