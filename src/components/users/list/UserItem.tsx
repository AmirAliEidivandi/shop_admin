import { TableCell, TableRow } from "@material-ui/core";
import { toPersianNumber } from "src/services/Lang";
import IUser from "../IUser";

const UserItem = (props: IUser) => {
    return (
        <TableRow>
            <TableCell align="center">{`${props.firstName} ${props.lastName}`}</TableCell>
            <TableCell align="center">{props.email}</TableCell>
            <TableCell align="center">{toPersianNumber(props.mobile)}</TableCell>
            <TableCell align="center">{toPersianNumber(props.createdAt)}</TableCell>
            <TableCell align="center"></TableCell>
        </TableRow>
    );
};

export default UserItem;
