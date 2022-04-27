import { createTheme, ThemeProvider } from '@mui/material/styles'
import React from 'react'
import ReactDOM from 'react-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import 'scss/index.scss'
import App from './App'
import store from './app/store'

const queryClient = new QueryClient()

const customTheme = createTheme({
  typography: {
    fontFamily: 'Montserrat',
    fontWeight: 400,
  },
  palette: {
    primary: {
      main: '#F4A634',
      light: '#FFBF33',
      dark: '#EB9D34',
    },
    secondary: {
      main: '#9e9e9e',
      light: '#eee',
      dark: '#757575',
    },
    warning: {
      main: '#FFBF33',
      light: '#FDF2E9',
      dark: '#F4A634',
    },
    error: {
      main: '#FA6060',
      dark: '#C70200',
    },
    info: {
      main: '#2ABBF4',
    },
    default: {
      light: '#ddd',
      main: '#fff',
      dark: '#eee',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ThemeProvider theme={customTheme}>
            <App />
          </ThemeProvider>
        </BrowserRouter>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
