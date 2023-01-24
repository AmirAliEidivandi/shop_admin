import React from "react";
import { Chip } from "@material-ui/core";
import ShipmentStatus from "./ShipmentStatus";

interface statusProps {
    status: ShipmentStatus;
}

const Status = ({ status }: statusProps) => {
    return (
        <>
            {status === ShipmentStatus.DELIVERED && <Chip style={{ backgroundColor: "#4caf50" }} label="تحویل داده شده" />}
            {status === ShipmentStatus.ABSENT && <Chip style={{ backgroundColor: "#f44336" }} label="عدم حضور مشتری" />}
            {status === ShipmentStatus.PENDING && <Chip style={{ backgroundColor: "#ff9800" }} label="در صف ارسال" />}
            {status === ShipmentStatus.PICKED_UP && <Chip style={{ backgroundColor: "#ff9800" }} label="ارسال شده" />}
        </>
    );
}

export default React.memo(Status);
