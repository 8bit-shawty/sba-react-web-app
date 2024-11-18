import { Routes,Route, useNavigate, Link } from 'react-router-dom'
import './App.css'
import { useState } from 'react'
import Planet from './components/Planet'
import People from './components/People'
import Nav from './components/Nav'

function App() {

  const [category, setCategory] = useState("people")
  const [id, setId] = useState(0)

  {/*instance of use navigate */}
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();

    if(id){
      navigate(`/${category}/${id}`)
    } else{
      alert("Please enter a valid id")
    }
  }



  return (
    <>
      <Nav/>
      {/*Good way to check if your variables are updating */}
      <div>
      <h3>Select a category and search with an ID</h3>
        <form onSubmit={search}>
          <label htmlFor="category">Category:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="people">People</option>
            <option value="planet">Planets</option>
          </select>

          <label htmlFor="id">ID:</label>
          <input
            type="number"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />

          <button type="submit">Search</button>
        </form>
      </div>
        <Routes>
          <Route path={"/people/:id"} element={<People/>}></Route>
          <Route path={"/planet/:id"} element={<Planet/>}></Route>
        </Routes>
    </>
  )
}

export default App
