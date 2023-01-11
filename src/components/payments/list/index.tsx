import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import IPayment from "../IPayment";
import PaymentItem from "./PaymentItem";

interface PaymentsListProps {
    items: IPayment[];
}

const PaymentsList = ({ items }: PaymentsListProps) => {
    return (
        <TableContainer>
            <Table size="medium">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">مشتری</TableCell>
                        <TableCell align="center">سفارش</TableCell>
                        <TableCell align="center">مبلغ</TableCell>
                        <TableCell align="center">پرداخت</TableCell>
                        <TableCell align="center">ایجاد</TableCell>
                        <TableCell align="center">به روزرسانی</TableCell>
                        <TableCell align="center">وضعیت</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items?.map((item: IPayment) => (
                        <PaymentItem key={item.id} {...item} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default PaymentsList;
