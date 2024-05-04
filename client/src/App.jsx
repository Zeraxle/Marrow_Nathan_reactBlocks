
import './App.css'
import MainContent from './components/MainContent'
import Navigation from './components/Navigation'
import Header from './components/Header'

function App () {
  return ( 
    <div className = "app">
        <Header/>
        <div className = "app-flex">
          <Navigation/>
          <MainContent/>
        </div>
      </div>
  )
}

export default App
