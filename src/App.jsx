import { BrowserRouter as Router } from "react-router-dom";
import './App.css'
import RoutesAnimated from './components/RoutesAnimated'

function App() {
  return (
    <div className='overflow-y-hidden'>
      <Router>
      <RoutesAnimated/>
      </Router>
    </div>
  )
}

export default App
