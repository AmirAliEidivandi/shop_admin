import React, { useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { List, ListItem, ListItemText, ListItemIcon, Collapse } from "@material-ui/core";
import { ExpandLess, ExpandMore, List as ListIcon, People } from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        nested: {
            paddingLeft: theme.spacing(5),
        },
        nestedText: {
            fontSize: ".99em !important",
        },
        linkItem: {
            textDecoration: "none",
            color: "inherit",
        },
    })
);

const Customers = () => {
    const [open, setOpen] = useState(false);
    const classes = useStyles();
    return (
        <React.Fragment>
            <ListItem
                button
                onClick={(e) => {
                    setOpen(!open);
                }}
            >
                <ListItemIcon>
                    <People />
                </ListItemIcon>
                <ListItemText primary="مشتریان" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List disablePadding component="div">
                    <Link className={classes.linkItem} to="/users">
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <ListIcon />
                            </ListItemIcon>
                            <ListItemText classes={{ primary: classes.nestedText }} primary="لیست مشتریان" />
                        </ListItem>
                    </Link>
                </List>
            </Collapse>
        </React.Fragment>
    );
};

export default Customers;
