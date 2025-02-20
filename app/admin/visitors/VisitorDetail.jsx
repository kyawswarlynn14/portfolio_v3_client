"use client";

import { formatYangonTime } from "@/utils/services";
import { Dialog } from "@mui/material";
import React, { useState } from "react";
import { BiDetail } from "react-icons/bi";

const VisitorDetail = ({ visitor }) => {
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
					Visitor Details
				</div>

				<div className="w-full h-fit bg-white p-2 sm:px-4 flex flex-col gap-1">
                    <div className="flex justify-between">
                        <Item label={"Device"} value={visitor?.device} />
                        <Item label={"Country"} value={visitor?.country} />
                    </div>

                    <div className="flex justify-between">
                        <Item label={"OS"} value={visitor?.os} />
                        <Item label={"Browser"} value={visitor?.browser} />
                    </div>

                    <div className="flex justify-between">
                        <Item label={"IP Address"} value={visitor?.ip} />
                        <Item label={"Date"} value={formatYangonTime(visitor?.timestamp)} />
                    </div>
                </div>
			</Dialog>
		</React.Fragment>
	);
};

export default VisitorDetail;
