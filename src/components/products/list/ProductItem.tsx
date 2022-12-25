import { TableRow, TableCell } from "@material-ui/core";
import { toPersianCurrency } from "src/services/Currency";
import { toPersianNumber } from "src/services/Lang";
import Status from "../Status";
import IProduct from "../IProduct";
import ProductStatus from "../ProductStatus";

const ProductItem = ({ title, thumbnail, price, stock, status, createdAt, updatedAt }: Partial<IProduct>) => {
    return (
        <TableRow>
            <TableCell align="center">
                <img src={thumbnail} alt="product thumbnail" width={80} height={80} />
            </TableCell>
            <TableCell align="center">{title}</TableCell>
            <TableCell align="center">{toPersianCurrency(price as unknown as number)}</TableCell>
            <TableCell align="center">{toPersianNumber(stock as unknown as number)}</TableCell>
            <TableCell align="center">{<Status status={status as ProductStatus} />}</TableCell>
            <TableCell align="center">{toPersianNumber(createdAt as unknown as string)}</TableCell>
            <TableCell align="center">{toPersianNumber(updatedAt as unknown as string)}</TableCell>
        </TableRow>
    );
};

export default ProductItem;
