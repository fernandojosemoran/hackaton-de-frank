import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PublicRouterConstants from './infrastructure/constants/routes';

import {
  ClientPage,
  ConfigaPage,
  DashboardPage,
  Error404Page,
  ProductManagementPage,
  ReportsPage,
  UserManagementPage,
  StockManagement
} from '@page/index';

function App() {

  return (
    <BrowserRouter >
      <Routes>
        <Route path={PublicRouterConstants.dashboard} index element={<DashboardPage />} />
        <Route path={PublicRouterConstants.erorr404} element={<Error404Page />} />
        <Route path={PublicRouterConstants.clients} element={<ClientPage />} />
        <Route path={PublicRouterConstants.productManagement} element={<ProductManagementPage />} />
        <Route path={PublicRouterConstants.userManagement} element={<UserManagementPage />} />
        <Route path={PublicRouterConstants.reports} element={<ReportsPage />} />
        <Route path={PublicRouterConstants.config} element={<ConfigaPage />} />
        <Route path={PublicRouterConstants.stockManagement} element={<StockManagement />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
