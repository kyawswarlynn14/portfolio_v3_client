"use client";

import { Dialog } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import toast from "react-hot-toast";
import { FiPlus } from "react-icons/fi";
import {
	useCreateServiceMutation,
	useUpdateServiceMutation,
} from "@/store/service/serviceApi";
import InputWithLabel from "@/components/layouts/InputWithLabel";
import TextareaWithLabel from "@/components/layouts/TextareaWithLabel";
import UploadImage from "@/components/admin/UploadImage";

const initialValues = {
	title: "",
	content: "",
	image: "",
};

const ServiceForm = ({
	isUpdate = false,
	itemToUpdate = null,
	refetchFunc,
}) => {
	const [values, setValues] = useState(initialValues);
	const [open, setOpen] = useState(false);
	const [createService, { isSuccess, isLoading, error }] =
		useCreateServiceMutation();
	const [
		updateService,
		{ isSuccess: updateSuccess, error: updateError, isLoading: updateLoading },
	] = useUpdateServiceMutation();

	useEffect(() => {
		if (isUpdate && itemToUpdate) {
			setValues({
				title: itemToUpdate?.title,
				content: itemToUpdate?.content,
				image: itemToUpdate?.image,
			});
		}
	}, [isUpdate, itemToUpdate]);

	useEffect(() => {
		if (isSuccess) {
			toast.success("Created successfully!");
			refetchFunc();
			setValues(initialValues);
			handleClose();
		}
		if (error) {
			let errorMessage = error?.data?.message ?? error?.error;
			toast.error(errorMessage ?? "Something went wrong!");
			console.log("create service err -->", error);
		}
	}, [isSuccess, error]);

	useEffect(() => {
		if (updateSuccess) {
			toast.success("Updated successfully!");
			refetchFunc();
			setValues(initialValues);
			handleClose();
		}
		if (updateError) {
			let errorMessage = updateError?.data?.message ?? updateError?.error;
			toast.error(errorMessage ?? "Something went wrong!");
			console.log("update service err -->", updateError);
		}
	}, [updateSuccess, updateError]);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleInput = (e) => {
		const { name, value } = e.target;
		setValues((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
        if(isUpdate) {
            await updateService({
                id: itemToUpdate?._id,
                data: values,
            })
        } else {
            await createService(values);
        }
	};

	return (
		<React.Fragment>
			{isUpdate ? (
				<button
					type="button"
					onClick={handleClickOpen}
					className="p-2 rounded-full hover:bg-blue-300"
				>
					<FaEdit size={20} />
				</button>
			) : (
				<button
					type="button"
					onClick={handleClickOpen}
					className="py-2 px-8 rounded border border-blue-500 text-blue-500 hover:underline underline-offset-2 hover:bg-cyan-300 transition-all duration-300 font-medium text-sm flex items-center gap-2"
				>
					<FiPlus size={20} />
					Create new
				</button>
			)}

			<Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
				<div className="py-3 bg-blue-800 text-white text-[18px] font-semibold flex items-center justify-center">
					<p>{isUpdate ? "Update" : "Create"} Service</p>
				</div>

				<form
					id="service"
					onSubmit={handleSubmit}
					className="w-full h-fit bg-white p-2 sm:px-4 flex flex-col gap-1"
				>
					<InputWithLabel
						type="text"
						id="title"
						name="title"
						label="Title"
						required
						onChange={handleInput}
						value={values.title}
					/>

					<TextareaWithLabel
						type="text"
						id="content"
						name="content"
						label="Content"
						required
						onChange={handleInput}
						value={values.content}
					/>

					<UploadImage image={values.image} setValues={setValues} />

					<div className="w-full flex items-center justify-center my-2">
						<button
							type="submit"
							disabled={isLoading || updateLoading}
							className="bg-cyan-300 py-2 px-4 font-semibold text-sm rounded-lg hover:scale-105"
						>
							{isUpdate ? `${updateLoading ? "Updating.." : "Update"}` : `${isLoading ? "Creating..." : "Create"}`}
						</button>
					</div>
				</form>
			</Dialog>
		</React.Fragment>
	);
};

export default ServiceForm;
