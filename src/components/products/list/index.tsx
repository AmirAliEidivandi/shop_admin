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
                        <TableCell align="center">تصویر</TableCell>
                        <TableCell align="center">عنوان</TableCell>
                        <TableCell align="center">قیمت</TableCell>
                        <TableCell align="center">موجودی</TableCell>
                        <TableCell align="center">وضعیت</TableCell>
                        <TableCell align="center">ایجاد</TableCell>
                        <TableCell align="center">به روزرسانی</TableCell>
                        <TableCell align="center">عملیات</TableCell>
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
