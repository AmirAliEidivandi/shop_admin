import React, { useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { List, ListItem, ListItemText, ListItemIcon, Collapse, Badge } from "@material-ui/core";
import { ShoppingBasket, ExpandLess, ExpandMore, List as ListIcon } from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        nested: {
            paddingLeft: theme.spacing(5),
        },
        nestedText: {
            fontSize: ".99em !important",
        },
        counter: {
            marginLeft: theme.spacing(-2),
        },
        linkItem: {
            textDecoration: "none",
            color: "inherit",
        },
    })
);

const Orders = () => {
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
                    <ShoppingBasket />
                </ListItemIcon>
                <ListItemText primary="مدیریت سفارش ها" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List disablePadding component="div">
                    <Link className={classes.linkItem} to="/orders">
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <ListIcon />
                            </ListItemIcon>
                            <ListItemText classes={{ primary: classes.nestedText }} primary="لیست سفارش ها" />
                            <Badge classes={{ badge: classes.counter }} badgeContent={120} max={89} color="secondary" anchorOrigin={{ vertical: "top", horizontal: "left" }}></Badge>
                        </ListItem>
                    </Link>
                </List>
            </Collapse>
        </React.Fragment>
    );
};

export default Orders;
