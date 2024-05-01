import './App.css'
import Content from './components/Content/Content'
import ModeSelector from './components/ModeSelector/ModeSelector'
import { AppContextProvider } from './state/context'

function App() {
  return (
    <AppContextProvider>
      <main>
        <ModeSelector />
        <Content />
      </main>
    </AppContextProvider>
  )
}

export default App
