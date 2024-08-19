import { Theme } from "@emotion/react";
import Layout from "@layout/Layout";
import { colors, Grid, GridOwnProps, SxProps, Typography } from "@mui/material";
import { useRef } from "react";
import { redirect } from "react-router-dom";

const boxesCategories = (bg?: string, color: string = colors.grey[900]): SxProps<Theme> => {
    return {
        bgcolor: bg,
        display: "flex",
        justifyContent: "center",
        width: 100,
        height: 100,
        color: color,
        cursor: "pointer",
        borderRadius: "10px"
    }
}

function DashboardPage(): React.ReactNode {
    const colorFont = 400;

    useRef();

    return (
        <Layout>
            <Typography variant="h2" sx={{ fontSize: 20 }}>Dashboard</Typography>
            <Grid container spacing={2} gap={2} padding={15}>
                <Grid item xs={2} sm={6} md={4} xl={2} sx={boxesCategories(colors.amber[colorFont])}>Clients</Grid>
                <Grid item xs={2} sm={6} md={4} xl={2} sx={boxesCategories(colors.lightBlue[colorFont])}>Suppliers</Grid>
                <Grid item xs={2} sm={6} md={4} xl={2} sx={boxesCategories(colors.yellow[colorFont])}>Products</Grid>
                <Grid item xs={2} sm={6} md={4} xl={2} sx={boxesCategories(colors.purple[colorFont])}>Invoices</Grid>
                <Grid item xs={2} sm={6} md={4} xl={2} sx={boxesCategories(colors.teal[colorFont])}>Total stock</Grid>
                <Grid item xs={2} sm={6} md={4} xl={2} sx={boxesCategories(colors.brown[colorFont])}>Sold stock</Grid>
                <Grid item xs={2} sm={6} md={4} xl={2} sx={boxesCategories(colors.orange[colorFont])}>Current stock</Grid>
                <Grid item xs={2} sm={6} md={4} xl={2} sx={boxesCategories(colors.pink[colorFont])}>Amount sold</Grid>
                <Grid item xs={2} sm={6} md={4} xl={2} sx={boxesCategories(colors.indigo[colorFont])}>Amount paid</Grid>
                <Grid item xs={2} sm={6} md={4} xl={2} sx={boxesCategories(colors.cyan[colorFont])}>Remaining amount</Grid>
                <Grid item xs={2} sm={6} md={4} xl={2} sx={boxesCategories(colors.lime[colorFont])}>Gross profit</Grid>
                <Grid item xs={2} sm={6} md={4} xl={2} sx={boxesCategories(colors.lightGreen[colorFont])}>Net profit</Grid>
            </Grid>
        </Layout>
    );
}

export default DashboardPage;