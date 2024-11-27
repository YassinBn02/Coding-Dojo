import './App.css'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Navigation from './components/Navigation'
import Subcontent from "./components/Subcontent"
function App() {

  return (
      <div className="app">
          <Header />
          <div className='row'>
          <Navigation />
          <MainContent />
          </div>
      </div>
  )
}

export default App
