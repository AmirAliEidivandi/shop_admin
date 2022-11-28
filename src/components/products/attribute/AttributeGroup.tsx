import React from "react";
import { Box, Typography, Divider } from "@material-ui/core";

interface AttributeGroupProps {
    title: string;
}

const AttributeGroup: React.FC<AttributeGroupProps> = ({ title }: AttributeGroupProps) => {
    return (
        <Box>
            <Typography variant="h6">{title}</Typography>
            <Divider />
        </Box>
    );
};

export default AttributeGroup;
