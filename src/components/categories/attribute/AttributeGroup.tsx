import React from "react";
import { Box, Typography, Divider, FormControl, Button, IconButton } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { AddBox, Delete } from "@material-ui/icons";
import { v4 as uuid } from "uuid";
import Attribute from "./Attribute";
import AttributeItem from "./AttributeItem";
import AttributeGroupInterface from "./AttributeGroupInterface";
import { useCategoriesState } from "../context";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            padding: theme.spacing(1),
            fontSize: ".9em",
        },
        formControl: {
            marginTop: theme.spacing(3),
        },
    })
);

const AttributeGroup: React.FC<AttributeGroupInterface> = ({ title, hash, attributes }: AttributeGroupInterface) => {
    const { state, dispatch } = useCategoriesState();
    const styles = useStyles();

    const addNewAttribute = (e: React.MouseEvent) => {
        e.preventDefault();
        dispatch({
            type: "ADD_ATTRIBUTE",
            payload: {
                groupID: hash,
                attribute: {
                    hash: uuid(),
                    title: "",
                    slug: "",
                    filterable: false,
                    hasPrice: true,
                },
            },
        });
    };

    const deleteAttributeGroup = (e: React.MouseEvent) => {
        dispatch({
            type: "DELETE_ATTRIBUTE_GROUP",
            payload: {
                hash,
            },
        });
    };

    return (
        <Box>
            <Typography variant="h6" className={styles.title}>
                {title}
                <IconButton aria-label="حذف کردن" onClick={deleteAttributeGroup}>
                    <Delete />
                </IconButton>
            </Typography>
            <Divider />
            {attributes?.map((attribute: AttributeItem) => (
                <Attribute key={attribute.hash} {...attribute} />
            ))}
            <FormControl className={styles.formControl}>
                <Button onClick={addNewAttribute} variant="contained" color="primary" startIcon={<AddBox />}>
                    اضافه کردن ویژگی جدید
                </Button>
            </FormControl>
        </Box>
    );
};

export default AttributeGroup;
