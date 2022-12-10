import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import React from "react";
import { VariationItem } from "./Variation";

interface VariantSelectProps {
    title: string;
    type: string;
    name: string;
    items: VariationItem[];
    onItemsChanged: (type: string, value: string) => void;
}

const VariantSelect = ({ type, title, name, items, onItemsChanged }: VariantSelectProps) => {
    const handleChange = (e: React.ChangeEvent<{value: unknown}>) => {
        onItemsChanged(name, e.target.value as string);
    };
    return (
        <FormControl style={{ minWidth: "170px" }}>
            <InputLabel id="variant_select">{`انتخاب از ${title}`}</InputLabel>
            <Select labelId="variant_select" id="variant_select" onChange={handleChange}>
                {items?.map((variationItem: VariationItem) => {
                    return <MenuItem value={variationItem.value}>{variationItem.title}</MenuItem>;
                })}
            </Select>
        </FormControl>
    );
};

export default VariantSelect;
