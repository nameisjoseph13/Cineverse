import {AllRoutes} from './routes/AllRoutes.jsx'
import './App.css'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'

function App() {


  return (
    <>
      <div>
        <Header/>
         <AllRoutes />
       <Footer/>
      </div>
    </>
  )
}

export default App
