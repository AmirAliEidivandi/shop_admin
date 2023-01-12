import { TableContainer, Table, TableHead, TableRow, TableBody, TableCell } from "@material-ui/core";
import IShipment from "../IShipment";
import ShipmentItem from "./ShipmentItem";

interface ShipmentsListProps {
    items: IShipment[];
}

const ShipmentsList = ({ items }: ShipmentsListProps) => {
    return (
        <TableContainer>
            <Table size="medium">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">مامور تحویل</TableCell>
                        <TableCell align="center">شناسه سفارش</TableCell>
                        <TableCell align="center">تاریخ انتخابی</TableCell>
                        <TableCell align="center">ناریخ تحویل</TableCell>
                        <TableCell align="center">وضعیت</TableCell>
                        <TableCell align="center">عملیات</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items?.map((item: IShipment) => (
                        <ShipmentItem key={item.id} {...item} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ShipmentsList;
