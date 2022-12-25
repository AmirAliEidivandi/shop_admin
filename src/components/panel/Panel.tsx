import React from "react";
import { Container, Grid } from "@material-ui/core";
import RTL from "src/theme/rtl";
import RenderRoutes from "src/routes/routes";
import SideBar from "../partials/SideBar";

const Panel: React.FC = (): JSX.Element => {
    return (
        <RTL>
            <div className="app">
                <Container maxWidth={"xl"}>
                    <Grid container spacing={3}>
                        <Grid item lg={3} xl={2}>
                            <SideBar />
                        </Grid>
                        <Grid item lg={9} xl={10}>
                            <RenderRoutes />
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </RTL>
    );
};

export default Panel;
