import React from "react";
import { Paper, Typography, Divider, Box } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        section_container: {
            border: "1px solid #DDD",
            padding: theme.spacing(1),
            margin: theme.spacing(2, "auto"),
        },
        section_title: {
            padding: theme.spacing(1),
        },
        section_body: {
            padding: theme.spacing(2),
        },
    })
);
interface SectionProps {
    title: string;
    fullWidth?: boolean;
}
export default function Section({ title, fullWidth, children }: React.PropsWithChildren<SectionProps>) {
    const styles = useStyles();
    return (
        <Paper className={styles.section_container} elevation={0} style={fullWidth ? { width: "100%" } : { width: "auto" }}>
            <Typography className={styles.section_title} component="h6">
                {title}
            </Typography>
            <Divider />
            <Box className={styles.section_body}>{children}</Box>
        </Paper>
    );
}
