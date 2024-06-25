"use client";

import { useUpdateLayoutMutation } from "@/store/layout/layoutApi";
import { setBlogInfo } from "@/store/layout/layoutSlice";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import InputWithLabel from "../layouts/InputWithLabel";
import {
	deleteObject,
	getDownloadURL,
	ref,
	uploadBytes,
} from "firebase/storage";
import { storage } from "@/utils/firebase";
import TextareaWithLabel from "../layouts/TextareaWithLabel";

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

	const handleUploadImage = async (e) => {
		const file = e.target.files?.[0];
        if (blogInfo?.image && blogInfo.image.startsWith('https')) {
            const imageRef = ref(storage, blogInfo?.image);
            try {
                await deleteObject(imageRef);
            } catch (err) {
                console.log('delete blog image err', err)
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
