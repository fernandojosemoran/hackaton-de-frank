import { Footer, Header, Menu } from "@component/index";

interface LayoutProps {
    children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header />
            <div id="skeleton" className="container-body-skeleton">
                <Menu />
                <div>
                    {children}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Layout;