import { Footer, Header, Menu } from "@component/index";
import { Theme } from "@emotion/react";
import { Container, SxProps } from "@mui/material";

interface LayoutProps {
    children: React.ReactNode;
}

const cssTemplate: SxProps<Theme> = {
    padding: 10,
    height: "100vh"
}

function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header />
            <div id="skeleton">
                <Menu />
                <Container sx={cssTemplate}>
                    {children}
                </Container>
            </div>
            <Footer />
        </>
    );
}

export default Layout;