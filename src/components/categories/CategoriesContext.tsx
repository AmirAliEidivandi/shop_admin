import React, { useState } from "react";
import { FormControl, TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { AddBox } from "@material-ui/icons";
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
    const [open, setOpen] = useState<boolean>(false);
    const [title, setTitle] = useState<string>("");
    const styles = useStyles();

    const handleClose = (e: React.MouseEvent) => {
        e.preventDefault();

        setOpen(false);
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
                payload: { title },
            });
            setOpen(false);
        }
    };

    return (
        <Content title="ویرایش / اضافه کردن دسته بندی">
            <Dialog open={open} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">عنوان دسته بندی ویژگی ها</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="attribute_group_title"
                        label="عنوان دسته بندی ویژگی"
                        type="email"
                        fullWidth
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            setTitle(event.currentTarget.value);
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        بستن
                    </Button>
                    <Button onClick={handleConfirm} color="primary">
                        تایید
                    </Button>
                </DialogActions>
            </Dialog>

            <FormControl fullWidth className={styles.formRow}>
                <TextField variant="outlined" id="category_title_fa" label="عنوان دسته بندی - فارسی" />
            </FormControl>
            <FormControl fullWidth className={styles.formRow}>
                <TextField variant="outlined" id="category_title_en" label="عنوان دسته بندی - انگلیسی" />
            </FormControl>
            {state.groups?.map((group, index) => (
                <AttributeGroup key={index} title={group.title} />
            ))}
            <FormControl className={styles.formRow}>
                <Button onClick={openDialog} color="primary" variant="contained" startIcon={<AddBox />}>
                    اضافه کردن دسته بندی ویژگی ها
                </Button>
            </FormControl>
        </Content>
    );
};

export default CategoriesContent;
