"use client";

import { Dialog } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import toast from "react-hot-toast";
import { FiPlus } from "react-icons/fi";
import InputWithLabel from "@/components/layouts/InputWithLabel";
import {
	deleteObject,
	getDownloadURL,
	ref,
	uploadBytes,
} from "firebase/storage";
import { storage } from "@/utils/firebase";
import { useCreateCertificateMutation, useUpdateCertificateMutation } from "@/store/certificate/certificateApi";
import TextareaWithLabel from "@/components/layouts/TextareaWithLabel";

const initialValues = {
	title: "",
	content: "",
	image: "",
	demo_link: "",
};

const CertificateForm = ({
	isUpdate = false,
	itemToUpdate = null,
	refetchFunc,
}) => {
	const [values, setValues] = useState(initialValues);
	const [open, setOpen] = useState(false);
	const [createCertificate, { isSuccess, isLoading, error }] =
		useCreateCertificateMutation();
	const [
		updateCertificate,
		{ isSuccess: updateSuccess, error: updateError, isLoading: updateLoading },
	] = useUpdateCertificateMutation();

	useEffect(() => {
		if (isUpdate && itemToUpdate) {
			setValues({
				title: itemToUpdate?.title,
				content: itemToUpdate?.content,
				image: itemToUpdate?.image,
				demo_link: itemToUpdate?.demo_link,
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

	const handleUploadImage = async (e) => {
		const file = e.target.files?.[0];
		if (values?.image && values.image.startsWith("https")) {
			const imageRef = ref(storage, values?.image);
			try {
				await deleteObject(imageRef);
			} catch (err) {
				console.log("delete blog image err", err);
			}
		}
		try {
			if (file) {
				const imageRef = ref(storage, `portfolio/${file.name + Date.now()}`);

				uploadBytes(imageRef, file).then((snapshot) => {
					getDownloadURL(snapshot.ref).then((url) => {
						setValues((prev) => ({ ...prev, image: url }));
					});
				});
			}
		} catch (error) {
			console.error("Error upload blog image: ", error);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
        if(isUpdate) {
            await updateCertificate({
                id: itemToUpdate?._id,
                data: values,
            })
        } else {
            await createCertificate(values);
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
					<p>{isUpdate ? "Update" : "Create"} Certificate</p>
				</div>

				<form
					id="certificate"
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

                    <InputWithLabel
						type="text"
						id="demo_link"
						name="demo_link"
						label="Demo Link"
						onChange={handleInput}
						value={values.demo_link}
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

					<div className="w-full cursor-pointer p-2 border-2 border-black border-dotted mt-2 rounded-lg">
						<input
							type="file"
							id="image"
							className="hidden"
							onChange={handleUploadImage}
							accept="image/*"
						/>

						<label htmlFor="image" className="cursor-pointer">
							{values.image !== "" ? (
								<img
									src={values.image}
									alt="uploaded"
									className="w-auto h-40 rounded object-cover"
								/>
							) : (
								<div className="w-52 h-40 rounded-lg flex items-center justify-center bg-slate-800 text-white text-center">
									<p>Click to add image</p>
								</div>
							)}
						</label>
					</div>

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

export default CertificateForm;
