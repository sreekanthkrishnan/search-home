import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../screens/main-screens/LandingPage";

function AppRouter() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<LandingPage />} />
			</Routes>
		</div>
	);
}

export default AppRouter;
