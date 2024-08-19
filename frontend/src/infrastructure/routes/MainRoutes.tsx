import { ConstantsPublicRoutes } from '@infrastructure/constants/index';

import { Route, Routes } from "react-router-dom";
import { AmountSoldDashboard, ClientDashboard, CurrentStockDashboard, GrossProfitDashboard, InvoicesDashboard, NetProfitDashboard, ProductDashboard, RemainingAmount, SoldStockDashboard, SuppliersDashboard, TotalStockDashboard } from '@views/index';

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


function MainRoutes() {
    return (
        <Routes>
            <Route path={ConstantsPublicRoutes.menu.dashboard} index element={<DashboardPage />} />
            <Route path={ConstantsPublicRoutes.menu.erorr404} element={<Error404Page />} />
            <Route path={ConstantsPublicRoutes.menu.clients} element={<ClientPage />} />
            <Route path={ConstantsPublicRoutes.menu.productManagement} element={<ProductManagementPage />} />
            <Route path={ConstantsPublicRoutes.menu.userManagement} element={<UserManagementPage />} />
            <Route path={ConstantsPublicRoutes.menu.reports} element={<ReportsPage />} />
            <Route path={ConstantsPublicRoutes.menu.config} element={<ConfigaPage />} />
            <Route path={ConstantsPublicRoutes.menu.stockManagement} element={<StockManagement />} />
            <Route path={ConstantsPublicRoutes.dashboard.clients} element={<ClientDashboard />} />
            <Route path={ConstantsPublicRoutes.dashboard.suppliers} element={<SuppliersDashboard />} />
            <Route path={ConstantsPublicRoutes.dashboard.products} element={<ProductDashboard />} />
            <Route path={ConstantsPublicRoutes.dashboard.invoices} element={<InvoicesDashboard />} />
            <Route path={ConstantsPublicRoutes.dashboard.totalStock} element={<TotalStockDashboard />} />
            <Route path={ConstantsPublicRoutes.dashboard.soldStock} element={<SoldStockDashboard />} />
            <Route path={ConstantsPublicRoutes.dashboard.currentStock} element={<CurrentStockDashboard />} />
            <Route path={ConstantsPublicRoutes.dashboard.amountPaid} element={<AmountSoldDashboard />} />
            <Route path={ConstantsPublicRoutes.dashboard.remainingAmount} element={<RemainingAmount />} />
            <Route path={ConstantsPublicRoutes.dashboard.grossProfit} element={<GrossProfitDashboard />} />
            <Route path={ConstantsPublicRoutes.dashboard.netProfit} element={<NetProfitDashboard />} />
        </Routes>
    );
}

export default MainRoutes;