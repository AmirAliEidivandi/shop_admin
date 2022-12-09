import React, { useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Divider, FormControl, List, Paper, TextField, Typography } from "@material-ui/core";
import { VariationItem } from "./Variation";
import ColorItem from "./ColorItem";

interface ColorProps {
    hash: string;
    title: string;
    items: VariationItem[];
    onAddColor: (hash: string, colorTitle: string, colorValue: string) => void;
}

const Color = ({ hash, title, items, onAddColor }: ColorProps) => {
    const [showColorDialog, setShowColorDialog] = useState<boolean>(false);
    const [colorTitle, setColorTitle] = useState<string>("");
    const [colorValue, setColorValue] = useState<string>("");

    const addColorItem = (e: React.MouseEvent) => {
        onAddColor(hash, colorTitle, colorValue);
        setShowColorDialog(false);
    };

    return (
        <Paper elevation={1} style={{ marginBottom: "20px" }}>
            <Dialog open={showColorDialog}>
                <DialogTitle>اضافه کردن رنگ جدید</DialogTitle>
                <DialogContent>
                    <FormControl fullWidth style={{ marginBottom: "20px" }}>
                        <TextField onChange={(e: React.ChangeEvent<HTMLInputElement>) => setColorTitle(e.target.value)} variant="outlined" id="color_title" name="color_title" label="عنوان رنگ" />
                    </FormControl>
                    <FormControl fullWidth style={{ marginBottom: "20px" }}>
                        <TextField
                            type={"color"}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setColorValue(e.target.value)}
                            variant="outlined"
                            id="color_value"
                            name="color_value"
                            label="کد رنگ"
                        />
                    </FormControl>
                </DialogContent>
                <DialogActions>
                    <Button color="primary" onClick={() => setShowColorDialog(false)}>
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
                    <ColorItem key={index} {...item} />
                ))}
            </List>
            <FormControl style={{margin: '20px'}}>
                <Button variant="outlined" onClick={() => setShowColorDialog(true)}>
                    اضافه کردن رنگ جدید
                </Button>
            </FormControl>
        </Paper>
    );
};

export default Color;
