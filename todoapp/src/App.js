import { Routes, Route } from "react-router-dom"
import Home from "./component/Home"
import './App.css';
import Login from "./component/Login"
import Registration from "./component/Registration"
import TodoList from "./component/TodoList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Login/> } />
        <Route path="registration" element={ <Registration/> } />
        {/* <Route path="home" element={ <Home/> } /> */}
        <Route path="todolist" element={ <TodoList/> }/>
      </Routes>
    </div>
  )
}

export default App

