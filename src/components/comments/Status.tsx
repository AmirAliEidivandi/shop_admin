import React from "react";
import { Chip } from "@material-ui/core";
import CommentStatus from "./CommentStatus";

interface statusProps {
    status: CommentStatus;
}

const Status = ({ status }: statusProps) => {
    return (
        <>
            {status === CommentStatus.PENDING && <Chip style={{ backgroundColor: "#ff9800" }} label="در انتظار بررسی" />}
            {status === CommentStatus.APPROVED && <Chip style={{ backgroundColor: "#4caf50" }} label="تایید شده" />}
            {status === CommentStatus.REJECTED && <Chip style={{ backgroundColor: "#f44336" }} label="رد شده" />}
        </>
    );
}

export default React.memo(Status);
