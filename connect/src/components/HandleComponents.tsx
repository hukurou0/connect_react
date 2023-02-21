import React from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import App from './App'

const HandoleComponents = () => {
  return (
    <Router>
      <Routes>
        <Route path = "/" element={<App></App>}></Route>
      </Routes>
    </Router>
  )
}

export default HandoleComponents