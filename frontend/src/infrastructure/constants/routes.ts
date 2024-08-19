class Menu {
    public static dashboard: string = "/";
    public static clients: string = "clients";
    public static productManagement: string = "product-management";
    public static stockManagement: string = "stock-management";
    public static userManagement: string = "user-management";
    public static reports: string = "reports";
    public static config: string = "config";
    public static erorr404: string = "*";
}

class Dashboard {
    public static clients: string = "client-dashboard";
    public static suppliers: string = "suppliers-dashboard";
    public static products: string = "products-dashboard";
    public static invoices: string = "invoices-dashboard";
    public static totalStock: string = "total-stock-dashboard";
    public static soldStock: string = "sold-stock-dashboard";
    public static currentStock: string = "current-stock-dashboard";
    public static amountSold: string = "amount-sold-dashboard";
    public static amountPaid: string = "amount-paid-dashboard";
    public static remainingAmount: string = "remaining-amount-dashboard";
    public static grossProfit: string = "gross-profit-dashboard";
    public static netProfit: string = "net-profit-dashboard";
}

class ConstantsPublicRoutes {
    public static menu = Menu;
    public static dashboard = Dashboard;
}

export default ConstantsPublicRoutes;