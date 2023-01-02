import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import IOrder from "../IOrder";
import OrderItem from "./OrderItem";

interface OrdersListProps {
    items: IOrder[];
}

const ProductsList = ({ items }: OrdersListProps) => {
    return (
        <TableContainer>
            <Table size="medium">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">مشتری</TableCell>
                        <TableCell align="center">قیمت</TableCell>
                        <TableCell align="center">تعداد آیتم ها</TableCell>
                        <TableCell align="center">ایجاد</TableCell>
                        <TableCell align="center">به روزرسانی</TableCell>
                        <TableCell align="center">وضعیت</TableCell>
                        <TableCell align="center">عملیات</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items?.map((item: IOrder) => {
                        return <OrderItem key={item.id} {...item} />;
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ProductsList;
