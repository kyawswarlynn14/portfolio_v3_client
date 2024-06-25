"use client";

import { Dialog } from "@mui/material";
import React, { useState } from "react";
import { BiDetail } from "react-icons/bi";

const MessageDetail = ({ message }) => {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

    const Item = ({ label, value }) => {
        return (
            <div className="flex items-center gap-2">
                <p>{label} : </p>
                <p className="font-medium">{value}</p>
            </div>
        )
    }

	return (
		<React.Fragment>
            <button
                type="button"
                onClick={handleClickOpen}
                className="p-2 rounded-full hover:bg-blue-300"
            >
                <BiDetail size={20} />
            </button>

			<Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
				<div className="py-3 bg-blue-800 text-white text-[18px] font-semibold flex items-center justify-center">
					Message Details
				</div>

				<div className="w-full h-fit bg-white p-2 sm:px-4 flex flex-col gap-1">
                    <div className="flex justify-between">
                        <Item label={"Name"} value={message?.name} />
                        <Item label={"Company Name"} value={message?.company_name} />
                    </div>

                    <div className="flex justify-between">
                        <Item label={"Email"} value={message?.email} />
                        <Item label={"Phone"} value={message?.phone} />
                    </div>

                    <p className="font-medium">
                        {message?.message}
                    </p>
                </div>
			</Dialog>
		</React.Fragment>
	);
};

export default MessageDetail;
