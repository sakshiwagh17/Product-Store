import React from "react"
import { Button } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import { Router ,Route} from "react-router-dom"
import CreatePage from "./Pages/CreatePage"
import HomePage from "./Pages/HomePage"
const App = () => {
  return (
    <div>
      <NavBar />
      <Router>
        <Route><CreatePage />HOme</Route>
        <Route><HomePage />Create</Route>
      </Router>
    </div>
  )
}
export default App