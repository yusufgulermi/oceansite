import React from 'react'
import {BrowserRouter as Router,Routes,Route,} from 'react-router-dom'
import Main from './Main/Main'
import Discover from './Discover/Discover'
import SignUp from './SignUp/SignUp'

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path="/oceansite" element={<Main />}></Route>
          <Route path="/discover" element={<Discover/>}></Route>
          <Route path="/signUp"element={<SignUp/>}></Route>
        </Routes>
      </Router>
  )
}

export default App