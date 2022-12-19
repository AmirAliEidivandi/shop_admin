import React, { useState, useEffect } from "react";
import Alert from "./Alert";
import { Snackbar } from "@material-ui/core";
import { Color } from "@material-ui/lab/Alert";

interface notifyProps {
    open: boolean;
    message: string;
    type: Color;
}

const Notify = ({ open, message, type }: notifyProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(open);
    useEffect(() => {
        setIsOpen(open);
    }, [open]);

    const handleClose = (e: React.SyntheticEvent, reason?: string) => {
        setIsOpen(false);
    };
    return (
        <Snackbar open={isOpen} autoHideDuration={3000} onClose={handleClose}>
            <Alert severity={type}>{message}</Alert>
        </Snackbar>
    );
};

export default Notify;
