import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import AppRouter from "./AppRouter";

function MainRouter() {
	return (
		<div>
			<Suspense>
				<Routes>
					<Route path="/*" element={<AppRouter />} />
				</Routes>
			</Suspense>
		</div>
	);
}

export default MainRouter;
