import { BrowserRouter } from 'react-router-dom'

import MainRoutes from '@infrastructure/routes/MainRoutes';

function App() {

  return (
    <BrowserRouter >
      <MainRoutes />
    </BrowserRouter>
  )
}

export default App
