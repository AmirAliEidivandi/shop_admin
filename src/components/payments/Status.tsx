import React from "react";
import { Chip } from "@material-ui/core";
import PaymentStatus from "./PaymentStatus";

interface statusProps {
    status: PaymentStatus;
}

function Status({ status }: statusProps) {
    return (
        <>
            {status === PaymentStatus.PENDING && <Chip style={{ backgroundColor: "#ff9800" }} label="در حال پرداخت" />}
            {status === PaymentStatus.FAILED && <Chip style={{ backgroundColor: "#f44336" }} label="ناموفق" />}
            {status === PaymentStatus.SUCCESS && <Chip style={{ backgroundColor: "#4caf50" }} label="موفق" />}
        </>
    );
}
export default React.memo(Status);
