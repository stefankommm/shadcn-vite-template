import { Route, Routes } from 'react-router'
import IndexPage from './pages/IndexPage'
import NotFound from './pages/NotFound'

function App() {
  

  return (
    <Routes>
      <Route index element={<IndexPage/>}/>
      <Route path="/index" element={<IndexPage/>}/>
      <Route path="*" element={<NotFound/>}/>

      <Route path="dashboard" > 

      </Route>

    </Routes>
  )
}

export default App
