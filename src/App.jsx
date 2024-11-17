import { Routes,Route, useNavigate, Link } from 'react-router-dom'
import './App.css'
import { useState } from 'react'
import Planet from './components/Planet'
import People from './components/People'
import Nav from './components/Nav'

function App() {

  const [category, setCategory] = useState("")
  const [id, setId] = useState(0)

  {/*instance of use navigate */}
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();

    const cat = category;
    const dataId = id;
    navigate(`/${cat}/${dataId}`);
  }



  return (
    <>
      <Nav/>
      {/*Good way to check if your variables are updating */}
      <div>
        <h3>Choose a category</h3>
      </div>
      <div>
        <Link to={<People/>}>
          <button onClick={search}>People</button>
        </Link>
        <button onClick={search}>Planets</button>
        <button onClick={search}>Starships</button>
      </div>
        <Routes>
          <Route path={"/people/:id"} element={<People/>}></Route>
          <Route path={"/planet/:id"} element={<Planet/>}></Route>
        </Routes>
    </>
  )
}

export default App
