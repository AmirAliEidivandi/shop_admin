import { Chip } from "@material-ui/core";
import React from "react";
import CouponStatus from "./CouponStatus";
interface statusProps {
    status: CouponStatus;
}
function Status({ status }: statusProps) {
    return (
        <>
            {status === CouponStatus.ACTIVE && <Chip style={{ backgroundColor: "#4caf50" }} label="فعال" />}
            {status === CouponStatus.INACTIVE && <Chip style={{ backgroundColor: "#f44336" }} label="غیر فعال" />}
        </>
    );
}
export default React.memo(Status);
