import { TableRow, TableCell, Button } from "@material-ui/core";
import { toPersianNumber } from "@/services/Lang";
import { toPersianCurrency } from "@/services/Currency";
import { Link } from "react-router-dom";
import Status from "../Status";
import IOrder from "../IOrder";
import OrderStatus from "../OrderStatus";

const OrderItem = ({ id, user, totalPrice, orderLines, createdAt, updatedAt, status }: Partial<IOrder>) => {
    return (
        <TableRow>
            <TableCell align="center">{user ? `${user?.firstName} ${user?.lastName}` : ""}</TableCell>
            <TableCell align="center">{toPersianCurrency(totalPrice as unknown as number)}</TableCell>
            <TableCell align="center">{toPersianNumber(orderLines ? orderLines.length : 0)}</TableCell>
            <TableCell align="center">{toPersianNumber(createdAt as unknown as string)}</TableCell>
            <TableCell align="center">{toPersianNumber(updatedAt as unknown as string)}</TableCell>
            <TableCell align="center">{<Status status={status as OrderStatus} />}</TableCell>
            <TableCell align="center">
                <Link to={`/orders/${id}`}>
                    <Button variant="contained" color="secondary">
                        جزئیات
                    </Button>
                </Link>
            </TableCell>
        </TableRow>
    );
};

export default OrderItem;
