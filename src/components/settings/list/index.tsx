import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core";
import ISetting from "../ISetting";
import SettingItem from "./SettingItem";

interface SettingsListProps {
    list: ISetting[];
}
const SettingList = ({ list }: SettingsListProps) => {
    return (
        <TableContainer>
            <Table size="medium">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">عنوان</TableCell>
                        <TableCell align="center">کلید</TableCell>
                        <TableCell align="center">مقدار</TableCell>
                        <TableCell align="center">نوع</TableCell>
                        <TableCell align="center">نسخه</TableCell>
                        <TableCell align="center">ورژن</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {list?.map((item: ISetting) => (
                        <SettingItem key={item.id} {...item} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default SettingList;
