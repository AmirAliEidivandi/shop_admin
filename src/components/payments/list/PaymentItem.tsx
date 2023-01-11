import { TableCell, TableRow } from "@material-ui/core";
import { toPersianCurrency } from "src/services/Currency";
import { toPersianNumber } from "src/services/Lang";
import IPayment from "../IPayment";
import PaymentStatus from "../PaymentStatus";
import Status from "../Status";

const PaymentItem = (props: IPayment) => {
    return (
        <TableRow>
            <TableCell align="center">{`${props.user.firstName} ${props.user.lastName}`}</TableCell>
            <TableCell align="center">{props.order.id}</TableCell>
            <TableCell align="center">{toPersianCurrency(props.amount)}</TableCell>
            <TableCell align="center">{props.method}</TableCell>
            <TableCell align="center">{toPersianNumber(props.createdAt as unknown as string)}</TableCell>
            <TableCell align="center">{toPersianNumber(props.updatedAt as unknown as string)}</TableCell>
            <TableCell align="center">{<Status status={props.status as PaymentStatus} />}</TableCell>
        </TableRow>
    );
};

export default PaymentItem;
