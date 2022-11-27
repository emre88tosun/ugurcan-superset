import { embedDashboard } from "@superset-ui/embedded-sdk";
import { useEffect } from "react";
import "./index.css";
import { Buffer } from "buffer";
window.Buffer = window.Buffer || Buffer;

const App = () => {
	const promise = new Promise((resolve) => {
		setTimeout(() => {
			resolve(
				"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7ImZpcnN0X25hbWUiOiJNeUFwcCBVc2VyIiwibGFzdF9uYW1lIjoiTXlBcHAgVXNlciIsInVzZXJuYW1lIjoibXlBcHBVc2VyIn0sInJlc291cmNlcyI6W3sidHlwZSI6ImRhc2hib2FyZCIsImlkIjoiZDQxZTJjNDItNTVjZS00YTgwLWEwYWQtMjdkY2FmNzU1NWM3In1dLCJybHNfcnVsZXMiOlt7ImNsYXVzZSI6IndlYnNpdGVfaWQ9MTUifV0sImlhdCI6MTY2NjYyMjA5OS4zOTYzMDA2LCJleHAiOjE2NjY2MjIzOTkuMzk2MzAwNiwiYXVkIjoiaHR0cDovL3N1cGVyc2V0OjgwODgvIiwidHlwZSI6Imd1ZXN0In0.1OCaFERmaKQNf-5vJDeGHBIJqBqn9BC8V6Y5gkS9Ukg"
			);
		}, 2000);
	});

	useEffect(() => {
		embedDashboard({
			id: "d41e2c42-55ce-4a80-a0ad-27dcaf7555c7",
			supersetDomain: "https://superset.dcafood.com",
			mountPoint: document.getElementById("myContainer"), // html element in which iframe render
			fetchGuestToken: () => promise,
			dashboardUiConfig: { hideTitle: true },
		});
	}, [promise]);

	return <div className="h-screen w-screen bg-red-500" id="myContainer"></div>;
};

export default App;
