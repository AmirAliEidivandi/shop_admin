import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";
import ICoupon from "../ICoupon";
import CouponItem from "./CouponItem";

interface CouponsListProps {
    items: ICoupon[];
}

const CouponsList = ({ items }: CouponsListProps) => {
    return (
        <TableContainer>
            <Table size="medium">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">کد</TableCell>
                        <TableCell align="center">درصد</TableCell>
                        <TableCell align="center">محدودیت</TableCell>
                        <TableCell align="center">انقضاء</TableCell>
                        <TableCell align="center">وضعیت</TableCell>
                        <TableCell align="center">عملیات</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items?.map((item: ICoupon) => (
                        <CouponItem key={item.id} {...item} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default CouponsList;
