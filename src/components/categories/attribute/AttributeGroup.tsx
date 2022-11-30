import React, { useState } from "react";
import { Box, Typography, Divider, FormControl, Button } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { AddBox } from "@material-ui/icons";
import AttributeItem from "./AttributeItem";
import Attribute from "./Attribute";
import { v4 as uuid } from "uuid";

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

interface AttributeGroupProps {
    title: string;
}

const AttributeGroup: React.FC<AttributeGroupProps> = ({ title }: AttributeGroupProps) => {
    const [attributes, setAttributes] = useState<AttributeItem[]>([]);
    const styles = useStyles();

    const addNewAttribute = (e: React.MouseEvent) => {
        e.preventDefault();

        setAttributes((prev) => {
            return [
                ...prev,
                {
                    hash: uuid(),
                    title: "",
                    slug: "",
                    filterable: true,
                    hasPrice: false,
                },
            ];
        });
    };

    return (
        <Box>
            <Typography variant="h6" className={styles.title}>
                {title}
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
