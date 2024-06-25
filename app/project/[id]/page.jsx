"use client";

import { MOTION_DATA } from "@/constants";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { motion } from "framer-motion";
import ItemLayout from "@/components/layouts/ItemLayout";
import Heading from "@/utils/Heading";
import { useGetOneProjectQuery } from "@/store/project/projectApi";
import Loader from "@/components/loaders/Loader";

const ProjectDetail = ({ params }) => {
	const projectId = params?.id;
	const {data, isLoading, isError} = useGetOneProjectQuery(projectId)
	const [projectDetail, setProjectDetail] = useState(null);

	const router = useRouter();

	useEffect(() => {
		if (!isLoading && data) {
			setProjectDetail(data?.project);
		} 
		if(isError) {
			router.push("/404");
		}

		window.scrollTo({
			top: 0,
			behavior: "smooth",
		})
	}, [isError, isLoading, data]);

	return (
		<>
			<Heading title={"Kyaw Swar Lynn | Project"} />

			{isLoading ? (
				<div className="mt-20">
					<Loader fullScreen={false} />
				</div>
			) : (
				<div className="w-full h-full flex flex-col md:flex-row gap-4 pt-14 relative">
					<button
						onClick={() => router.back()}
						className="absolute top-2 left-0 actionButton px-6"
					>
						<FaArrowLeft size={20} />
					</button>
	
					<ItemLayout className={"w-full md:w-1/2 h-auto"}>
						<Image
							height={500}
							width={500}
							className="w-full h-auto border-2 border-cyan-400 rounded-lg"
							src={projectDetail?.image}
							alt={projectDetail?.title || "image"}
						/>
	
						<div>
							<h3 className=" font-bold text-[18px]">{projectDetail?.title}</h3>
							<p className=" dark:text-[#00FF00] font-semibold text-[14px]">
								# {projectDetail?.tag}
							</p>
						</div>
	
						<div className="w-full flex items-center justify-between mt-2">
							<button
								onClick={() => window.open(projectDetail?.demo_link, "_blank")}
								className="actionButton px-6"
							>
								Demo
							</button>
	
							<button
								onClick={() => window.open(projectDetail?.code_link, "_blank")}
								className="actionButton px-6"
							>
								Code
							</button>
						</div>
					</ItemLayout>
	
					<motion.div
						variants={MOTION_DATA.container}
						initial="hidden"
						animate="show"
						className="w-full md:w-1/2 space-y-2"
					>
						<motion.div variants={MOTION_DATA.item}>
							<p className="text-center font-bold text-[18px] underline underline-offset-4">
								Description
							</p>
							<p className="font-medium text-justify dark:text-[#fdeed4]">
								{projectDetail?.description}
							</p>
						</motion.div>
						<motion.div variants={MOTION_DATA.item}>
							<p className="text-center font-bold text-[18px] underline underline-offset-4">
								Role
							</p>
							<p className="font-medium text-justify dark:text-[#fdeed4]">
								{projectDetail?.role}
							</p>
						</motion.div>
					</motion.div>
				</div>
			)}

		</>
	);
};

export default ProjectDetail;
