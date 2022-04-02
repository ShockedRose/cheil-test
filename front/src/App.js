import HotelList from "./components/HotelList";
import NavBar from "./components/NavBar";
import "tw-elements";

export default function App() {
	return (
		<>
			<NavBar />

			<main className="w-full px-4 sm:px-0 sm:w-9/12 mx-auto mt-3">
				<HotelList />
			</main>
		</>
	);
}
