import { ClientsTable } from "@component/index";
import { Theme } from "@emotion/react";
import { Container, SxProps, Typography } from "@mui/material";

import Layout from "@/ui/layouts/Layout";

const cssContainerProperties: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    gap: 3
}

function ClientPage() {
    return (
        <Layout>
            <Typography variant="h2" sx={{ fontSize: 20 }}>
                Client
            </Typography>
            <Container className="table-container" sx={cssContainerProperties}>
                <div id="client-options-bar">
                    bar
                </div>
                <ClientsTable />
            </Container>
        </Layout>
    );
}

export default ClientPage;