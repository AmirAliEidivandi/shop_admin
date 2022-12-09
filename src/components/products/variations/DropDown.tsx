import React, { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, FormControl, List, Paper, TextField, Typography } from "@material-ui/core";
import { VariationItem } from "./Variation";
import DropDownItem from "./DropDownItem";

interface DropDownProps {
    hash: string;
    title: string;
    items: VariationItem[];
    onItemAdded: (hash: string, title: string, value: string) => void;
}

const DropDown = ({ hash, title, items, onItemAdded }: DropDownProps) => {
    const [showDropDownDialog, setShowDropDownDialog] = useState<boolean>(false);
    const [dropDownTitle, setDropDownTitle] = useState<string>("");
    const [dropDownValue, setDropDownValue] = useState<string>("");

    const addColorItem = (e: React.MouseEvent) => {
        onItemAdded(hash, dropDownTitle, dropDownValue);
        setShowDropDownDialog(false);
    };

    return (
        <Paper elevation={1} style={{ marginBottom: "20px" }}>
            <Dialog open={showDropDownDialog}>
                <DialogTitle>اضافه کردن مقدار جدید</DialogTitle>
                <DialogContent>
                    <FormControl fullWidth style={{ marginBottom: "20px" }}>
                        <TextField onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDropDownTitle(e.target.value)} variant="outlined" id="dropDown_title" name="dropDown_title" label="عنوان آیتم" />
                    </FormControl>
                    <FormControl fullWidth style={{ marginBottom: "20px" }}>
                        <TextField
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDropDownValue(e.target.value)}
                            variant="outlined"
                            id="dropDown_value"
                            name="dropDown_value"
                            label="مقدار آیتم"
                        />
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button color="primary" onClick={() => setShowDropDownDialog(false)}>
                        لغو
                    </Button>
                    <Button color="primary" onClick={addColorItem}>
                        ایجاد
                    </Button>
                </DialogActions>
            </Dialog>
            <Typography variant="h6">{title}</Typography>
            <Divider />
            <List>
                {items?.map((item: VariationItem, index) => (
                    <DropDownItem key={index} {...item} />
                ))}
            </List>
            <FormControl style={{ margin: "20px" }}>
                <Button variant="outlined" onClick={() => setShowDropDownDialog(true)}>
                    اضافه کردن آیتم جدید
                </Button>
            </FormControl>
        </Paper>
    );
};

export default DropDown;
