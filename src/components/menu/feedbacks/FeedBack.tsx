import React, { useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { List, ListItem, ListItemText, ListItemIcon, Collapse } from "@material-ui/core";
import { ExpandLess, ExpandMore, List as ListIcon, Feedback as IconFeedBack } from "@material-ui/icons";

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

const FeedBack = () => {
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
                    <IconFeedBack />
                </ListItemIcon>
                <ListItemText primary="بازخوردها" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List disablePadding component="div">
                    <Link className={classes.linkItem} to="/comments">
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <ListIcon />
                            </ListItemIcon>
                            <ListItemText classes={{ primary: classes.nestedText }} primary="لیست دیدگاه ها" />
                        </ListItem>
                    </Link>
                </List>
            </Collapse>
        </React.Fragment>
    );
};

export default FeedBack;
