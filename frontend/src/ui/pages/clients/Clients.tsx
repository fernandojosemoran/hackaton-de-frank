import { ClientsTable } from "@component/index";
import { Theme } from "@emotion/react";
import { Container, SxProps, Typography } from "@mui/material";

import Layout from "@/ui/layouts/Layout";
import ClientDatasourceImpl from "@/infrastructure/datasources/client_datasource_impl";

const cssContainerProperties: SxProps<Theme> = {
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
    padding: 0,
    gap: 3
}

function ClientPage() {

    const datasource = new ClientDatasourceImpl();

    datasource.getClients(1);

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