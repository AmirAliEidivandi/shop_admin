import React, { useState, useEffect } from "react";
import Content from "../partials/Content";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography, Divider, Button } from "@material-ui/core";
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

interface AttributeItem {
    title: string;
    slug: string;
    filterable: boolean;
    hasPrice: boolean;
}

interface ProductAttributes {
    title: string;
    attributes: AttributeItem[];
}

const EditProductContent = () => {
    const styles = useStyles();
    const api = new HttpClient();
    const [categories, setCategories] = useState<CategoryItem[]>([]);
    const [productAttributes, setProductAttributes] = useState<ProductAttributes[]>([]);
    const [thumbnail, setThumbnail] = useState<File | null>(null);
    const [gallery, setGallery] = useState<File[]>([]);

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

    const updateCategory = (e: React.ChangeEvent<{ value: unknown }>) => {
        api.get<ProductAttributes[]>(`api/v1/categories/${e.target.value}/attributes`)
            .then((response) => {
                setProductAttributes(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    const updateThumbnail = (file: File) => {
        setThumbnail(file);
    };

    const updateGallery = (file: File) => {
        setGallery((prev: File[]) => {
            return [...prev, file];
        });
    };

    const saveProduct = (e: React.MouseEvent) => {
        e.preventDefault();

        const form = new FormData();
        form.append("thumbnail", thumbnail as Blob);

        gallery.forEach((file: File) => {
            form.append("gallery[]", file as Blob);
        });
    };

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
                    <Select labelId="category_label" id="category_label" onChange={updateCategory}>
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
                <ImageInput onChange={updateThumbnail} />
            </Section>
            <Section title="گالری تصاویر">
                <Grid container>
                    <Grid item xs={12} md={4}>
                        <ImageInput onChange={updateGallery} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <ImageInput onChange={updateGallery} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <ImageInput onChange={updateGallery} />
                    </Grid>
                </Grid>
            </Section>
            <Section title="مشخصات محصول">
                {productAttributes?.map((group: ProductAttributes) => {
                    return (
                        <>
                            <Typography variant="h6">{group.title}</Typography>
                            <Divider />
                            {group?.attributes?.map((attribute: AttributeItem) => {
                                return (
                                    <>
                                        <FormControl fullWidth className={styles.formRow}>
                                            <TextField variant="outlined" label={attribute.title} />
                                        </FormControl>
                                    </>
                                );
                            })}
                        </>
                    );
                })}
            </Section>
            <FormControl fullWidth className={styles.formRow}>
                <Button onClick={saveProduct} variant="contained" color="primary">
                    ذخیره محصول
                </Button>
            </FormControl>
        </Content>
    );
};

export default EditProductContent;
