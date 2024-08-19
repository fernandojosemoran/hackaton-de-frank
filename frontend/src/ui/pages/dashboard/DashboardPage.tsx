import { Theme } from "@emotion/react";
import { colors, Grid, SxProps, Typography } from "@mui/material";

import Layout from "@layout/Layout";
import { custom_redirect } from "@/infrastructure/helpers";
import { ConstantsPublicRoutes } from "@/infrastructure/constants";

const boxesCategories = (bg?: string, color: string = colors.grey[900]): SxProps<Theme> => {
    return {
        bgcolor: bg,
        display: "flex",
        justifyContent: "center",
        width: 100,
        height: 100,
        color: color,
        cursor: "pointer",
        borderRadius: "10px",
        alignContent: "center"
    }
}

function DashboardPage(): React.ReactNode {
    const colorFont = 400;
    const xs0: number = 12;
    const sm600: number = 5;
    const md900: number = 2;
    const lg1200: number = 2;
    const xl1536: number = 2;

    // <Navigate to="client-dashboard" /> no worked the redirect and navigate
    return (
        <Layout>
            <Typography variant="h2" sx={{ fontSize: 20 }}>Dashboard</Typography>
            <Grid container spacing={2} gap={2}>
                <Grid
                    item
                    xs={xs0}
                    sm={sm600}
                    md={md900}
                    lg={lg1200}
                    xl={xl1536}
                    sx={boxesCategories(colors.amber[colorFont])}
                >
                    <div onClick={() => custom_redirect(ConstantsPublicRoutes.dashboard.clients)}>Clients</div>
                </Grid>
                <Grid
                    item
                    xs={xs0}
                    sm={sm600}
                    md={md900}
                    lg={lg1200}
                    xl={xl1536}
                    sx={boxesCategories(colors.lightBlue[colorFont])}
                >
                    <div onClick={() => custom_redirect(ConstantsPublicRoutes.dashboard.suppliers)}>Suppliers</div>
                </Grid>
                <Grid
                    item
                    xs={xs0}
                    sm={sm600}
                    md={md900}
                    lg={lg1200}
                    xl={xl1536}
                    sx={boxesCategories(colors.yellow[colorFont])}
                >
                    <div onClick={() => custom_redirect(ConstantsPublicRoutes.dashboard.products)}>Products</div>
                </Grid>
                <Grid
                    item
                    xs={xs0}
                    sm={sm600}
                    md={md900}
                    lg={lg1200}
                    xl={xl1536}
                    sx={boxesCategories(colors.purple[colorFont])}
                >
                    <div onClick={() => custom_redirect(ConstantsPublicRoutes.dashboard.invoices)}>Invoices</div>
                </Grid>
                <Grid
                    item
                    xs={xs0}
                    sm={sm600}
                    md={md900}
                    lg={lg1200}
                    xl={xl1536}
                    sx={boxesCategories(colors.teal[colorFont])}
                >
                    <div onClick={() => custom_redirect(ConstantsPublicRoutes.dashboard.totalStock)}>Total stock</div>
                </Grid>
                <Grid
                    item
                    xs={xs0}
                    sm={sm600}
                    md={md900}
                    lg={lg1200}
                    xl={xl1536}
                    sx={boxesCategories(colors.brown[colorFont])}
                >
                    <div onClick={() => custom_redirect(ConstantsPublicRoutes.dashboard.soldStock)}>Sold stock</div>
                </Grid>
                <Grid
                    item
                    xs={xs0}
                    sm={sm600}
                    md={md900}
                    lg={lg1200}
                    xl={xl1536}
                    sx={boxesCategories(colors.orange[colorFont])}
                >
                    <div onClick={() => custom_redirect(ConstantsPublicRoutes.dashboard.currentStock)}>Current stock</div>
                </Grid>
                <Grid
                    item
                    xs={xs0}
                    sm={sm600}
                    md={md900}
                    lg={lg1200}
                    xl={xl1536}
                    sx={boxesCategories(colors.pink[colorFont])}
                >
                    <div onClick={() => custom_redirect(ConstantsPublicRoutes.dashboard.amountSold)}>Amount sold</div>
                </Grid>
                <Grid
                    item
                    xs={xs0}
                    sm={sm600}
                    md={md900}
                    lg={lg1200}
                    xl={xl1536}
                    sx={boxesCategories(colors.indigo[colorFont])}
                >
                    <div onClick={() => custom_redirect(ConstantsPublicRoutes.dashboard.amountPaid)}>Amount paid</div>
                </Grid>
                <Grid
                    item
                    xs={xs0}
                    sm={sm600}
                    md={md900}
                    lg={lg1200}
                    xl={xl1536}
                    sx={boxesCategories(colors.cyan[colorFont])}
                >
                    <div onClick={() => custom_redirect(ConstantsPublicRoutes.dashboard.remainingAmount)}>Remaining amount</div>
                </Grid>
                <Grid
                    item
                    xs={xs0}
                    sm={sm600}
                    md={md900}
                    lg={lg1200}
                    xl={xl1536}
                    sx={boxesCategories(colors.lime[colorFont])}
                >
                    <div onClick={() => custom_redirect(ConstantsPublicRoutes.dashboard.grossProfit)}>Gross profit</div>
                </Grid>
                <Grid
                    item
                    xs={xs0}
                    sm={sm600}
                    md={md900}
                    lg={lg1200}
                    xl={xl1536}
                    sx={boxesCategories(colors.lightGreen[colorFont])}
                >
                    <div onClick={() => custom_redirect(ConstantsPublicRoutes.dashboard.netProfit)}>Net profit</div>
                </Grid>
            </Grid>
        </Layout>
    );
}

export default DashboardPage;