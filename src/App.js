import Loading from "./page/Loading";
import Error404 from "./page/error/404";
import Template from "./component/Template";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import React, {lazy, Suspense} from "react";
import './App.css';

const Home = lazy(() => import("./page/Home"));
const Game = lazy(() => import("./page/Game"));

function App() {
	return (
		
		<Router>
			<Template
				children={
					<Routes>
						<Route path="*" element={<Suspense fallback={<Loading/>}><Error404/></Suspense>}/>
						<Route path="/" element={<Suspense fallback={<Loading/>}><Home/></Suspense>}/>
						<Route path="/game" element={<Suspense fallback={<Loading/>}><Game/></Suspense>}/>
					</Routes>
				}
			/>
		</Router>
	
	);
}

export default App;
