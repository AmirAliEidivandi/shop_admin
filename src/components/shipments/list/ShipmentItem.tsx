import { TableRow, TableCell } from "@material-ui/core";
import { toPersianNumber } from "src/services/Lang";
import IShipment from "../IShipment";
import ShipmentStatus from "../ShipmentStatus";
import Status from "../Status";

const ShipmentItem = (props: IShipment) => {
    return (
        <TableRow>
            <TableCell align="center">{`${props.employee.firstName} ${props.employee.lastName}`}</TableCell>
            <TableCell align="center">{props.order.id}</TableCell>
            <TableCell align="center">{toPersianNumber(props.selectedDateTime)}</TableCell>
            <TableCell align="center">{toPersianNumber(props.deliveredAt)}</TableCell>
            <TableCell align="center">{<Status status={props.status as ShipmentStatus} />}</TableCell>
        </TableRow>
    );
};

export default ShipmentItem;
