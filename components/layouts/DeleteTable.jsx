"use client";

import { Button, Dialog, DialogActions, DialogTitle, Slide } from "@mui/material";
import React from "react";
import {AiOutlineDelete} from 'react-icons/ai'


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function DeleteTable({ deleteHandler, message, isLoading }) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleDelete = async () => {
        await deleteHandler();
        setOpen(false);
    };

    return (
        <React.Fragment>
            <button onClick={handleClickOpen} className="p-2 rounded-full hover:bg-cyan-300 cursor-pointer">
                <AiOutlineDelete size={20} />
            </button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>
                    {message}
                </DialogTitle>

                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button
                        onClick={handleDelete}
                        variant="contained"
                        color="error"
                    >
                        {isLoading ? "Deleting..." : "Delete"}
                    </Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}

export default DeleteTable;