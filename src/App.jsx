import { Routes,Route, useNavigate } from 'react-router-dom'
import './App.css'
import { useState } from 'react'
import Planet from './components/Planet'
import People from './components/People'

function App() {

  const [category, setCategory] = useState("planet")
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
      <h1>Star Wars API</h1>
      {/*Good way to check if your variables are updating */}
      <div>
        Search for: 
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="planet">Planet</option>
          <option value="people">People</option>
        </select>
      </div>
      <div>
        Id: <input onChange={(e) => setId(e.target.value)} value={id} type="number"/>
      </div>
      <button onClick={search}>Search!</button>
        <Routes>
          <Route path={"/people/:id"} element={<People/>}></Route>
          <Route path={"/planet/:id"} element={<Planet/>}></Route>
        </Routes>
    </>
  )
}

export default App
