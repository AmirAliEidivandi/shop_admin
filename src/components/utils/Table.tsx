import { withStyles } from "@material-ui/core/styles";
import { TableContainer, TableHead, TableRow, TableCell, Table as MuiTable, TableBody } from "@material-ui/core";

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.text.secondary,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

interface TableProps {
    columns: string[];
    attributes: string[];
    data: object[];
}

const getKeyValue =
    <T extends object, U extends keyof T>(key: U) =>
    (obj: T) =>
        obj[key];

const Table = ({ columns, attributes, data }: TableProps) => {
    return (
        <TableContainer>
            <MuiTable>
                <TableHead>
                    <TableRow>
                        {columns.map((col, i) => (
                            <StyledTableCell key={i} align="center">
                                {col}
                            </StyledTableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((item, i) => (
                        <StyledTableRow key={i}>
                            {attributes?.map((attr: string, i) => (
                                <StyledTableCell align="center" key={i}>
                                    {getKeyValue(attr as never)(item)}
                                </StyledTableCell>
                            ))}
                        </StyledTableRow>
                    ))}
                </TableBody>
            </MuiTable>
        </TableContainer>
    );
}

export default Table;