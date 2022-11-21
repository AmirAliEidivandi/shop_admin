import { Paper, List, Divider } from "@material-ui/core";
import Products from "../menu/products/Products";
import Orders from "../menu/orders/Orders";
import Finance from "../menu/finance/Finance";
import Shipment from "../menu/shipment/Shipment";
import Customers from "../menu/customers/Customers";
import FeedBack from "../menu/feedbacks/FeedBack";
import Settings from "../menu/settings/Settings";

const SideBar = () => {
    return (
        <Paper elevation={0}>
            <List component={"nav"}>
                <Products />
                <Divider />
                <Orders />
                <Divider />
                <Finance />
                <Divider />
                <Shipment />
                <Divider />
                <Customers />
                <Divider />
                <FeedBack />
                <Divider />
                <Settings />
            </List>
        </Paper>
    );
};

export default SideBar;
