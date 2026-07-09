import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ViewStudent from '../Component/ViewStudent'
import AddStudent from '../Component/AddStudent'
import DeleteStudent from '../Component/DeleteStudent'
import SearchStudent from '../Component/SearchStudent'
import NavigationBar from '../Component/NavigationBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <NavigationBar/>
    <Routes>
       <Route path="/"  element={<ViewStudent/>}/>
       <Route path="AddStudent"  element={<AddStudent/>}/>
       <Route path="DeleteStudent"  element={<DeleteStudent/>}/>
       <Route path="SearchStudent"  element={<SearchStudent/>}/>
       <Route path="ViewStudent"  element={<ViewStudent/>}/>


    </Routes>
    
    </BrowserRouter>
  )
}

export default App
