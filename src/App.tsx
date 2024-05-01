import './App.css'
import ModeSelector from './components/ModeSelector/ModeSelector'
import { AppContextProvider } from './state/context'

function App() {
  return (
    <AppContextProvider>
      <main>
        <ModeSelector />
      </main>
    </AppContextProvider>
  )
}

export default App
