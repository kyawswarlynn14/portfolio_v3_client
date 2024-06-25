"use client";

import { useUpdateLayoutMutation } from "@/store/layout/layoutApi";
import { setBlogInfo } from "@/store/layout/layoutSlice";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import InputWithLabel from "../layouts/InputWithLabel";
import TextareaWithLabel from "../layouts/TextareaWithLabel";
import UploadImage from "./UploadImage";

function BlogInfo({ blogInfo }) {
	const dispatch = useDispatch();
	const [values, setValues] = useState({
		title: blogInfo?.title,
		sub_title: blogInfo?.sub_title,
		description: blogInfo?.description,
		image: blogInfo?.image,
		link: blogInfo?.link,
	});
	const [updateLayout, { isLoading, isSuccess, error }] =
		useUpdateLayoutMutation();

	useEffect(() => {
		if (isSuccess) {
			toast.success("Updated successfully!");
			dispatch(setBlogInfo(values));
		}
		if (error) {
			toast.success(error.data?.message || "Update failed!");
			console.log("update service info err-->", error);
		}
	}, [isSuccess, error]);

	const handleInput = (e) => {
		const { name, value } = e.target;
		setValues((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		await updateLayout({
			type: "blog_info",
			data: values,
		});
	};

	return (
		<form
			id="blog"
			onSubmit={handleSubmit}
			className="w-full px-8 py-4 border border-cyan-300 rounded-xl shadow-xl"
		>
			<h3 className="text-center text-lg font-medium">Blog Info</h3>

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
				id="sub_title"
				name="sub_title"
				label="Sub Title"
				required
				onChange={handleInput}
				value={values.sub_title}
			/>

			<TextareaWithLabel
				type="text"
				id="description"
				name="description"
				label="Description"
				required
				onChange={handleInput}
				value={values.description}
			/>

			<InputWithLabel
				type="text"
				id="link"
				name="link"
				label="Blog Link"
				required
				onChange={handleInput}
				value={values.link}
			/>

			<UploadImage 
				image={values.image}
				setValues={setValues}
			/>

			<div className="w-full flex items-center justify-center my-2">
				<button
					type="submit"
					disabled={isLoading}
					className="bg-cyan-300 py-2 px-4 font-semibold text-sm rounded-lg hover:scale-105"
				>
					{isLoading ? "Updating..." : "Update"}
				</button>
			</div>
		</form>
	);
}

export default BlogInfo;
