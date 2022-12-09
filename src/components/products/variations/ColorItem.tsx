import { ListItem, ListItemText } from "@material-ui/core";
import { VariationItem } from "./Variation";

const ColorItem = ({ title, value }: VariationItem) => {
    return (
        <ListItem>
            <ListItemText primary={title} />
            <div style={{ width: "50px", height: "50px", backgroundColor: value }}></div>
        </ListItem>
    );
};

export default ColorItem;
