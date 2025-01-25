import React from "react"
import { Box } from "@chakra-ui/react"
import NavBar from "./components/NavBar.jsx"
import { Router ,Routes,Route} from "react-router-dom"
import CreatePage from "./Pages/CreatePage.jsx"
import HomePage from "./Pages/HomePage.jsx"
const App = () => {
  return (
   <Box minH={"100vh"}>
    <NavBar />
    
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/create" element={<CreatePage />} />
      </Routes>
   </Box>
  )
}
export default App