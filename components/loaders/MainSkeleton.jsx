import React from "react";

function MainSkeleton() {
	return (
		<div id="home" className="text-center w-full my-4">
			<div className="flex flex-col animate-pulse">
				<div className="mx-auto rounded-full w-60 h-60 md:w-40 md:h-40 bg-gray-500 my-2"></div>
				<div className="mx-auto h-6 w-48 md:h-12 md:w-64 bg-gray-500 rounded my-2"></div>
				<div className="mx-auto h-6 w-40 md:h-8 md:w-56 bg-gray-500 rounded my-2"></div>
				<div className="mx-auto h-16 w-80 md:w-[80%] bg-gray-500 rounded my-2"></div>
				<div className="w-64 md:w-80 mx-auto flex justify-between mt-4">
					<div className="h-12 w-12 bg-gray-500 rounded-full"></div>
					<div className="h-12 w-12 bg-gray-500 rounded-full"></div>
					<div className="h-12 w-12 bg-gray-500 rounded-full"></div>
					<div className="h-12 w-12 bg-gray-500 rounded-full"></div>
				</div>
			</div>
		</div>
	);
}

export default MainSkeleton;
