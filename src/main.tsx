import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter as Router,Routes,Route} from 'react-router'
import App from './App.tsx'
import Employee from './Components/Employee/Employee.tsx';
import Hr from './Components/Hr/Hr.tsx'
import Manager from './Components/Manager/Manager.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/employee' element={<Employee/>}/>
        <Route path='/manager' element={<Manager/>}/>
        <Route path='/hr' element={<Hr/>}/>
      </Routes>
    </Router>
  </StrictMode>,
)
