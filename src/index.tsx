import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles'

import { App } from './App'
import { StyledComponentsGlobalStyles, MuiTheme } from './globalStyles'
import { ModalProvider } from './components/Modal/context'
import { ApolloHOC } from './lib/apollo'

ReactDOM.render(
  <ApolloHOC>
    <StylesProvider injectFirst>
      <ThemeProvider theme={MuiTheme}>
        <StyledComponentsGlobalStyles />
        <Router>
          <ModalProvider>
            <App />
          </ModalProvider>
        </Router>
      </ThemeProvider>
    </StylesProvider>
  </ApolloHOC>,
  document.querySelector('#root')
)
