import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import IUser from "../IUser";
import UserItem from "./UserItem";

interface UsersProps {
    items: IUser[];
}

const UsersList = ({ items }: UsersProps) => {
    return (
        <TableContainer>
            <Table size="medium">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">نام و نام خانوادگی</TableCell>
                        <TableCell align="center">ایمیل</TableCell>
                        <TableCell align="center">موبایل</TableCell>
                        <TableCell align="center">ثبت نام</TableCell>
                        <TableCell align="center">عملیات</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items?.map((item: IUser) => (
                        <UserItem key={item.id} {...item} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default UsersList;
