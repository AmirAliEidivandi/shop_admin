import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import IProduct from "../IProduct";
import ProductItem from "./ProductItem";

interface ProductsListProps {
    items: IProduct[];
}

const ProductsList = ({ items }: ProductsListProps) => {
    return (
        <TableContainer>
            <Table size="medium">
                <TableHead>
                    <TableRow>
                        <TableCell>تصویر</TableCell>
                        <TableCell>عنوان</TableCell>
                        <TableCell>قیمت</TableCell>
                        <TableCell>موجودی</TableCell>
                        <TableCell>وضعیت</TableCell>
                        <TableCell>ایجاد</TableCell>
                        <TableCell>به روزرسانی</TableCell>
                        <TableCell>عملیات</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items?.map((item: IProduct) => {
                        return <ProductItem key={item._id} {...item} />;
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ProductsList;
