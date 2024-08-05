"use client";
import { storage } from "@/utils/firebase";
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React from "react";

function UploadImage({ id = "image", image, setValues }) {
    const handleUploadImage = async (e) => {
		const file = e.target.files?.[0];
        if (image && image.startsWith('https')) {
            const imageRef = ref(storage, image);
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

	return (
		<div className="w-full cursor-pointer p-2 border-2 border-black border-dotted mt-2 rounded-lg">
			<input
				type="file"
				id={id}
				className="hidden"
				onChange={handleUploadImage}
				accept="image/*"
			/>

			<label htmlFor={id} className="cursor-pointer">
				{image !== "" ? (
					<img
						src={image}
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
	);
}

export default UploadImage;
