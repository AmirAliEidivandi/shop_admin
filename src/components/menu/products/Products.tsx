import React, { useState } from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { List, ListItem, ListItemText, ListItemIcon, Collapse } from "@material-ui/core";
import { Store, ExpandLess, ExpandMore, List as ListIcon, AddBox, RedeemRounded, Category } from "@material-ui/icons";
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

const Products = () => {
    const [open, setOpen] = useState(true);
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
                    <Store />
                </ListItemIcon>
                <ListItemText primary="مدیریت محصولات" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List disablePadding component="div">
                    <Link className={classes.linkItem} to="/products/edit">
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <AddBox />
                            </ListItemIcon>
                            <ListItemText classes={{ primary: classes.nestedText }} primary="محصول جدید" />
                        </ListItem>
                    </Link>
                    <Link className={classes.linkItem} to="/products">
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <ListIcon />
                            </ListItemIcon>
                            <ListItemText classes={{ primary: classes.nestedText }} primary="لیست محصولات" />
                        </ListItem>
                    </Link>
                    <Link to="/categories/edit" className={classes.linkItem}>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <AddBox />
                            </ListItemIcon>
                            <ListItemText classes={{ primary: classes.nestedText }} primary="دسته بندی جدید" />
                        </ListItem>
                    </Link>
                    <Link to="/categories" className={classes.linkItem}>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <Category />
                            </ListItemIcon>
                            <ListItemText classes={{ primary: classes.nestedText }} primary="دسته بندی ها" />
                        </ListItem>
                    </Link>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon>
                            <RedeemRounded />
                        </ListItemIcon>
                        <ListItemText classes={{ primary: classes.nestedText }} primary="پیشنهاد های ویژه" />
                    </ListItem>
                </List>
            </Collapse>
        </React.Fragment>
    );
};

export default Products;
