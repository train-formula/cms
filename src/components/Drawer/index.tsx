import React from 'react'
import styled from 'styled-components'

import { Route, routes } from '../../routes/routes'
import { Link } from './Link'

const Container = styled.div`
  padding-top: 5rem;
  background: ${p => p.theme.background};
`

Container.defaultProps = {
  theme: {
    background: '#282828',
  },
}

export const Drawer: React.FC = () => {
  return (
    <Container>
      {routes.map((route: Route) => (
        <Link key={route.path} route={route} />
      ))}
    </Container>
  )
}
