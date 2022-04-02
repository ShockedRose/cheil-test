import { useEffect, useState } from "react";
import ReactStars from "react-stars";
import { get } from "../../utils/api";

export default function HotelList() {
	const [filters, setFilters] = useState(null);
	const [hotels, setHotels] = useState(null);
	const [active, setActive] = useState(null);
	const [hotelInfo, setHotelInfo] = useState(null);

	useEffect(() => {
		getHotels(filters);

		async function getHotels(filters) {
			try {
				const response = await get("/api/hotels", filters);
				setHotels(response);
			} catch (e) {
				console.log(
					"%cerror",
					"color: white; font-size: 16px; background-color: magenta",
					e
				);
			}
		}
		return () => {};
	}, [filters]);

	useEffect(() => {
		if (!active) {
			return;
		}
		getHotel(active);

		async function getHotel(active) {
			try {
				const response = await get(`/api/hotels/${active}`);
				setHotelInfo(response);
			} catch (e) {
				console.log(
					"%cerror",
					"color: white; font-size: 16px; background-color: magenta",
					e
				);
			}
		}
		return () => {};
	}, [active]);

	if (!hotels) {
		return <div>Loading...</div>;
	}
	console.log(
		"%chotelFino",
		"color: white; font-size: 16px; background-color: magenta",
		hotelInfo
	);

	return (
		<div className="flex justify-center">
			<ul className="bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
				{hotels.map((hotel, i) => (
					<li
						className={`px-6 py-2 border-b border-gray-200 w-full font-bold  ${
							active === hotel.uuid
								? "bg-blue-600 text-white"
								: "text-black"
						}`}
						key={i}
						onClick={() => {
							setActive(hotel.uuid);
						}}
					>
						<div className="flex justify-between">
							<p>{hotel.name}</p>
							<p>${hotel.price}</p>
						</div>

						{hotelInfo && hotelInfo.uuid === hotel.uuid && (
							<div className="flex justify-between mt-4">
								<div className="max-w-[50%]">
									<img
										src={hotelInfo.Photos[0]?.url}
										alt=""
										className="w-full max-w-full"
									/>
								</div>
								<div>
									<ReactStars
										count={5}
										value={hotelInfo.category}
										size={24}
										color2={"#fff700"}
									/>
								</div>
							</div>
						)}
					</li>
				))}
			</ul>
		</div>
	);
}
