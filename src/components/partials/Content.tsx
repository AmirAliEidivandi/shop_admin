import React from "react";
import { Paper, Typography, Divider, Box } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
interface ContentProps {
    title: string;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paperContent: {
            padding: theme.spacing(3),
        },
        paperTitle: {
            padding: theme.spacing(1, 2),
            fontSize: "0.99rem",
            fontWeight: "bold",
        },
    })
);

function Content({ title, children }: React.PropsWithChildren<ContentProps>) {
    const classes = useStyles();
    return (
        <Paper elevation={0}>
            <Typography className={classes.paperTitle} variant="h6">
                {title}
            </Typography>
            <Divider />
            <Box component="div" className={classes.paperContent}>
                {children}
            </Box>
        </Paper>
    );
}

export default Content;
