import React from "react";
import { Skeleton } from "@material-ui/lab";
import { Paper, Divider, Grid } from "@material-ui/core";

interface SkeletonTableProps {
    columns?: number;
    rows?: number;
}

const SkeletonTable: React.FC<SkeletonTableProps> = ({ columns, rows }: SkeletonTableProps) => {
    return (
        <Paper elevation={0} style={{ margin: "20px" }}>
            <Grid container spacing={5}>
                {[1, 2, 3, 4, 5, 6].map((item, i) => {
                    return (
                        <Grid key={i} item md={2} justify="center">
                            <Skeleton component="div" style={{ margin: "0 auto" }} width={40} height={40} variant="circle" animation="wave" />
                        </Grid>
                    );
                })}
            </Grid>
            {[1, 2, 3, 4, 5, 6].map((item, i) => {
                return (
                    <>
                        <Grid container key={i} spacing={10}>
                            {[1, 2, 3, 4, 5, 6].map((item, i) => {
                                return (
                                    <Grid key={i} item xs={2}>
                                        <Skeleton animation="wave" />
                                    </Grid>
                                );
                            })}
                        </Grid>
                        <Divider style={{ margin: "20px auto" }} />
                    </>
                );
            })}
        </Paper>
    );
};

export default SkeletonTable;
