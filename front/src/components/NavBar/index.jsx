import React from "react";

export default function NavBar() {
	return (
		<nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-blue-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-lg">
			<div className="container-fluid w-full flex flex-wrap items-center justify-center px-6">
				<div className="container-fluid">
					<a className="text-xl text-black font-bold cursor-pointer">
						Hotily
					</a>
				</div>
			</div>
		</nav>
	);
}
