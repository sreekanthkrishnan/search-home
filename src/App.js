import { lazy, Suspense } from "react";
import "./assets/css/style.css";

const MainRouter = lazy(() => import("./components/routers/MainRouter"));

function App() {
	return (
		<div className="App">
			<Suspense>
				<MainRouter />
			</Suspense>
		</div>
	);
}

export default App;
