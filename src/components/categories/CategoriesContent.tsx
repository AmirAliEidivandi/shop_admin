import React, { useState } from "react";
import { FormControl, TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle, Grid, Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { AddBox, Save } from "@material-ui/icons";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { v4 as uuid } from "uuid";
import Http from "src/services/Http";
import Content from "../partials/Content";
import { useCategoriesState } from "./context";
import AttributeGroup from "./attribute/AttributeGroup";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formRow: {
            margin: theme.spacing(2, "auto"),
        },
    })
);

const CategoriesContent = () => {
    const { state, dispatch } = useCategoriesState();
    const [title, setTitle] = useState<string>("");
    const [open, setOpen] = useState<boolean>(false);
    const [showNotify, setShowNotify] = useState<boolean>(false);
    const styles = useStyles();

    const handleClose = (e: React.MouseEvent) => {
        e.preventDefault();

        setOpen(false);
    };

    const handleCloseAlert = () => {
        setShowNotify(false);
    };

    const openDialog = (e: React.MouseEvent) => {
        e.preventDefault();
        setOpen(true);
    };

    const handleConfirm = (e: React.MouseEvent) => {
        e.preventDefault();

        if (title !== "") {
            dispatch({
                type: "ADD_ATTRIBUTE_CATEGORI",
                payload: { hash: uuid(), title },
            });
            setOpen(false);
        }
    };

    const updateTitle = (title: string) => {
        dispatch({
            type: "UPDATE_TITLE",
            payload: {
                title,
            },
        });
    };

    const updateSlug = (slug: string) => {
        dispatch({
            type: "UPDATE_SLUG",
            payload: {
                slug,
            },
        });
    };

    const saveCategory = () => {
        const httpClient = new Http();
        httpClient
            .post("api/v1/categories", {
                ...state,
            })
            .then((res) => {
                setShowNotify(true);
            })
            .catch((err) => console.log(err.message));
    };

    return (
        <Content title="???????????? / ?????????? ???????? ???????? ????????">
            <Snackbar open={showNotify} autoHideDuration={3000} onClose={handleCloseAlert}>
                <Alert variant="filled" elevation={6} severity="success">
                    ???????? ???????? ???? ???????????? ?????????? ????
                </Alert>
            </Snackbar>
            <Dialog open={open} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">?????????? ???????? ???????? ?????????? ????</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="attribute_group_title"
                        label="?????????? ???????? ???????? ??????????"
                        type="email"
                        fullWidth
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setTitle(event.currentTarget.value);
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        ????????
                    </Button>
                    <Button onClick={handleConfirm} color="primary">
                        ??????????
                    </Button>
                </DialogActions>
            </Dialog>

            <FormControl fullWidth className={styles.formRow}>
                <TextField
                    variant="outlined"
                    id="title"
                    name="title"
                    label="?????????? - ??????????"
                    defaultValue={state.title}
                    onBlur={(event: React.FocusEvent<HTMLInputElement>) => updateTitle(event.currentTarget.value)}
                />
            </FormControl>
            <FormControl fullWidth className={styles.formRow}>
                <TextField
                    variant="outlined"
                    id="slug"
                    name="slug"
                    label="?????????? - ??????????????"
                    defaultValue={state.slug}
                    onBlur={(event: React.FocusEvent<HTMLInputElement>) => updateSlug(event.currentTarget.value)}
                />
            </FormControl>
            {state.groups?.map((group) => (
                <AttributeGroup key={group.hash} {...group} />
            ))}
            <FormControl className={styles.formRow}>
                <Button onClick={openDialog} color="primary" variant="contained" startIcon={<AddBox />}>
                    ?????????? ???????? ???????? ???????? ?????????? ????
                </Button>
            </FormControl>
            <Grid container justify="flex-end">
                <Button onClick={saveCategory} color="default" variant="contained" startIcon={<Save />}>
                    ?????????? ????????
                </Button>
            </Grid>
        </Content>
    );
};

export default CategoriesContent;
