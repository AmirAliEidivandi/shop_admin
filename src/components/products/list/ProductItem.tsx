import { TableRow, TableCell } from "@material-ui/core";
import IProduct from "../IProduct";

const ProductItem = ({ title, thumbnail, price, stock, status, createdAt, updatedAt }: Partial<IProduct>) => {
    return (
        <TableRow>
            <TableCell align="center">{thumbnail}</TableCell>
            <TableCell align="center">{title}</TableCell>
            <TableCell align="center">{price}</TableCell>
            <TableCell align="center">{stock}</TableCell>
            <TableCell align="center">{status}</TableCell>
            <TableCell align="center">{createdAt?.toString()}</TableCell>
            <TableCell align="center">{updatedAt?.toString()}</TableCell>
        </TableRow>
    );
};

export default ProductItem;
