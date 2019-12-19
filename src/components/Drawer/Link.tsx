import React from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import { NavLink } from 'react-router-dom'

import { Route } from '../../routes/routes'

const Container = styled(NavLink)`
  display: grid;
  justify-items: center;
  justify-content: center;
  padding: 1.3rem;
  font-size: 1rem;
  color: ${p => p.theme.iconInActive};
  cursor: pointer;
  text-decoration: none;
  .icon {
    height: 3rem;
    width: 3rem;
  }
  &.active,
  &:hover {
    color: ${p => p.theme.iconActive};
    background: ${p => p.theme.backgroundActive};
  }
`

Container.defaultProps = {
  theme: {
    backgroundActive: 'rgba(255, 255, 255, 0.1)',
    iconActive: '#fff',
    iconInActive: '#909090',
  },
}

type Props = {
  route: Route
}

export const Link: React.FC<Props> = ({ route }) => {
  const Icon: any = route.icon
  // TODO figure this
  // const Icon: React.ReactNode = route.icon

  return (
    <Container key={route.path} to={route.path} activeClassName="active" exact>
      <Icon className="icon" />
      <Typography variant="caption">{route.name}</Typography>
    </Container>
  )
}
