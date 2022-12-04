import React, { useState, useEffect } from "react";
import Content from "../partials/Content";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@material-ui/core";
import HttpClient from "../../services/Http";
import { v4 as uuid } from "uuid";
import Section from "../partials/Section";
import ImageInput from "../partials/ImageInput";
import CategoryItem from "../contracts/CategoryItem";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        formRow: {
            margin: theme.spacing(2, "auto"),
        },
        product_details: {
            border: "1px solid #DDD",
            padding: theme.spacing(2),
        },
        category: {
            maxWidth: 200,
        },
    })
);

const EditProductContent = () => {
    const styles = useStyles();
    const [categories, setCategories] = useState<CategoryItem[]>([]);
    const api = new HttpClient();

    useEffect(() => {
        api.get<CategoryItem[]>("api/v1/categories")
            .then((res) => {
                setCategories(res.data);
            })
            .catch((err) => {
                // TODO: replace this error with another handler
                console.log(err.message);
            });
    }, []);

    const updateCategory = (e: React.ChangeEvent) => {};

    return (
        <Content title="ویرایش / اضافه کردن محصول">
            <FormControl fullWidth className={styles.formRow}>
                <TextField variant="outlined" id="title" name="title" label="عنوان محصول" />
            </FormControl>
            <FormControl fullWidth className={styles.formRow}>
                <TextField variant="outlined" id="price" name="price" label="قیمت به ریال" />
            </FormControl>
            <FormControl fullWidth className={styles.formRow}>
                <TextField variant="outlined" id="discounted_price" name="discounted_price" defaultValue={0} label="قیمت ویژه به ریال" />
            </FormControl>
            <FormControl fullWidth className={styles.formRow}>
                <TextField variant="outlined" id="stock" name="stock" defaultValue={0} label="موجودی" />
            </FormControl>
            <Grid xs={6}>
                <FormControl fullWidth className={styles.formRow}>
                    <InputLabel id="category_label">دسته بندی</InputLabel>
                    <Select labelId="category_label" id="category_label">
                        <MenuItem value={0}>دسته بندی را انتخاب کنید</MenuItem>
                        {categories?.map((category: CategoryItem) => (
                            <MenuItem key={category.id} value={category.id}>
                                {category.title}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Section title="تصویر شاخص">
                <ImageInput
                    onChange={(file: File) => {
                        console.log(file);
                    }}
                />
            </Section>
            <Section title="گالری تصاویر">
                <Grid container>
                    <Grid item xs={12} md={4}>
                        <ImageInput
                            onChange={(file: File) => {
                                console.log(file);
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <ImageInput
                            onChange={(file: File) => {
                                console.log(file);
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <ImageInput
                            onChange={(file: File) => {
                                console.log(file);
                            }}
                        />
                    </Grid>
                </Grid>
            </Section>
            <Section title="مشخصات محصول"></Section>
        </Content>
    );
};

export default EditProductContent;
