import { TableCell, TableRow } from "@material-ui/core";
import { toPersianNumber } from "src/services/Lang";
import IComment from "../IComment";
import Status from "../Status";

const CommentItem = (props: IComment) => {
    return (
        <TableRow>
            <TableCell align="center">{`${props.user.firstName} ${props.user.lastName}`}</TableCell>
            <TableCell align="center">{props.title}</TableCell>
            <TableCell align="center">{toPersianNumber(props.createdAt)}</TableCell>
            <TableCell align="center">{props.isBuyer}</TableCell>
            <TableCell align="center">{props.adviceToBuy}</TableCell>
            <TableCell align="center">{<Status status={props.status} />}</TableCell>
            <TableCell align="center"></TableCell>
        </TableRow>
    );
};

export default CommentItem;
