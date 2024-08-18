export type PathType = {
    name: string
    path: string
}

export const mainMenu: Array<PathType> = [
    {
        name: "Dashboard",
        path: "/"
    },
    {
        name: "Clients",
        path: "/clients"
    },
    {
        name: "Product management",
        path: "/product-management"
    },
    {
        name: "Stock management",
        path: "/stock-management"
    },
    {
        name: "User management",
        path: "/user-management"
    },
    {
        name: "Reports",
        path: "/reports"
    },
    {
        name: "Config",
        path: "/config"
    },
]; 