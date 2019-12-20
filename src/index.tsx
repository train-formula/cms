import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles'

import { App } from './App'
import { StyledComponentsGlobalStyles, MuiTheme } from './globalStyles'
import { ModalProvider } from './components/Modal/context'

ReactDOM.render(
  <StylesProvider injectFirst>
    <ThemeProvider theme={MuiTheme}>
      <StyledComponentsGlobalStyles />
      <Router>
        <ModalProvider>
          <App />
        </ModalProvider>
      </Router>
    </ThemeProvider>
  </StylesProvider>,
  document.querySelector('#root')
)
