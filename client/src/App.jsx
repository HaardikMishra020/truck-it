
import './App.css'
import { Routes,Route, BrowserRouter } from 'react-router-dom'
import Main from './Pages/Main'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import AddLoad from './Pages/AddLoad'
import NotFound from './Pages/NotFound'
import AdminDash from './Pages/AdminDash'
import AdminLoad from './Pages/AdminLoad'
import AddTruck from './Pages/AddTruck'
import AllTrucks from './Pages/AllTrucks'
import AdminTrucks from './Pages/AdminTruck'
// import Catalogue from './components/Catalogue'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/truck/">
          <Route path="" element={<AllTrucks/>}/>
          <Route path="add" element={<AddTruck/>}/>
        </Route>
        <Route path="/load/">
          <Route path="add" element={<AddLoad/>}/>
        </Route>
        <Route path="/admin/" >
          <Route path="" element={<AdminDash/>}/>
          <Route path ="loads" element={<AdminLoad/>}/>
          <Route path ="trucks" element={<AdminTrucks/>}/>
        </Route>
        <Route path="*" element={<NotFound/>}/>

        
      </Routes>
    </BrowserRouter>
    {/* <Catalogue/>
    <AddLoad/> */}
    </>
  )
}

export default App
