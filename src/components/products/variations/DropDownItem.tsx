import { ListItem, ListItemText } from "@material-ui/core";
import { VariationItem } from "./Variation";

const DropDownItem = ({ title, value }: VariationItem) => {
    return (
        <ListItem>
            <ListItemText primary={title} secondary={value} />
        </ListItem>
    );
};

export default DropDownItem;
