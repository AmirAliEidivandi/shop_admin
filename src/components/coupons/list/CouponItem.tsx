import { TableCell, TableRow } from "@material-ui/core";
import { toPersianNumber } from "@/services/Lang";
import ICoupon from "../ICoupon";
import Status from "../Status";

const CouponItem = (props: ICoupon) => {
    return (
        <TableRow>
            <TableCell align="center">{props.code}</TableCell>
            <TableCell align="center">{toPersianNumber(props.percent)}%</TableCell>
            <TableCell align="center">{toPersianNumber(props.limit)}</TableCell>
            <TableCell align="center">{toPersianNumber(props.expiresAt)}</TableCell>
            <TableCell align="center">{<Status status={props.status} />}</TableCell>
            <TableCell align="center"></TableCell>
        </TableRow>
    );
};

export default CouponItem;
