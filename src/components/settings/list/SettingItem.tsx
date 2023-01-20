import { Button, TableCell, TableRow } from "@material-ui/core";
import { Link } from "react-router-dom";
import ISetting from "../ISetting";
import Scope from "../Scope";

const SettingItem = (props: ISetting) => {
    return (
        <TableRow>
            <TableCell align="center">{props.title}</TableCell>
            <TableCell align="center">{props.settingKey}</TableCell>
            <TableCell align="center">{props.settingValue}</TableCell>
            <TableCell align="center">
                <Scope value={props.scope} />
            </TableCell>
            <TableCell align="center">{props.version}</TableCell>
            <TableCell align="center">
                <Link to={`/settings/${props.id}`}>
                    <Button variant="contained" color="primary">جزئیات</Button>
                </Link>
            </TableCell>
        </TableRow>
    );
};

export default SettingItem;
