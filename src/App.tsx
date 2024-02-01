import { ThemeProvider } from '@mui/material'
import './App.css'
import RouterComponent from './router'
import defaultTheme from './components/defaultTheme'

function App() {

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <RouterComponent />
      </ThemeProvider>
    </>
  )
}

export default App
