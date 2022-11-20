import React, { useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { List, ListItem, ListItemText, ListItemIcon, Collapse } from "@material-ui/core";
import { ExpandLess, ExpandMore, MoneyOff, Money, Payment } from "@material-ui/icons";
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

const Finance = () => {
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
                    <Money />
                </ListItemIcon>
                <ListItemText primary="مدیریت مالی" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List disablePadding component="div">
                    <Link className={classes.linkItem} to="/payments">
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <Payment />
                            </ListItemIcon>
                            <ListItemText classes={{ primary: classes.nestedText }} primary="پرداخت ها" />
                        </ListItem>
                    </Link>
                    <Link className={classes.linkItem} to="/coupons">
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <MoneyOff />
                            </ListItemIcon>
                            <ListItemText classes={{ primary: classes.nestedText }} primary="کدهای تخفیف" />
                        </ListItem>
                    </Link>
                </List>
            </Collapse>
        </React.Fragment>
    );
};

export default Finance;
